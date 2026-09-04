import { Career, CareerMatchScore, SkillProficiency, UserProfile } from '../types';
import { CAREERS } from '../data/careers';

const PROFICIENCY_SCORES: Record<SkillProficiency, number> = {
  'Never Used': 0,
  'Beginner': 0.35,
  'Intermediate': 0.75,
  'Advanced': 0.95,
  'Expert': 1.0
};

export class CareerEngineService {
  /**
   * Evaluates all careers against a user profile using a transparent multi-factor weighted scoring model.
   */
  public static calculateAllMatches(profile: UserProfile, careers: Career[] = CAREERS): CareerMatchScore[] {
    const scores = careers.map(career => this.evaluateCareerMatch(profile, career));
    // Sort descending by match percentage
    return scores.sort((a, b) => b.matchPercentage - a.matchPercentage);
  }

  /**
   * Evaluates a single career compatibility against user profile.
   */
  public static evaluateCareerMatch(profile: UserProfile, career: Career): CareerMatchScore {
    // 1. Degree Match (Weight: 15%)
    const degreeMatch = this.calculateDegreeCompatibility(profile.highestQualification, career.compatibleDegrees);

    // 2. Skill Match & Proficiency (Weight: 40%)
    const { skillScore, matchedSkillsCount, missingCrucialSkills, transferableSkills } = this.calculateSkillMatch(profile, career);

    // 3. Interest Alignment (Weight: 20%)
    const { interestScore, matchedInterests } = this.calculateInterestMatch(profile.interests, career.interests);

    // 4. Strength Synergy (Weight: 15%)
    const { strengthScore, matchedStrengths } = this.calculateStrengthMatch(profile.strengths, career.strengths);

    // 5. Career Goal & Experience Match (Weight: 10%)
    const goalExperienceScore = this.calculateGoalAndExperienceMatch(profile.careerGoal, profile.experienceLevel, career.difficulty);

    // Composite Weighted Score
    const compositeScore = 
      (degreeMatch * 0.15) +
      (skillScore * 0.40) +
      (interestScore * 0.20) +
      (strengthScore * 0.15) +
      (goalExperienceScore * 0.10);

    // Normalize to 100% integer
    const matchPercentage = Math.min(99, Math.max(15, Math.round(compositeScore * 100)));

    // Readiness is purely capability based: (Skill Match * 0.7 + Degree/Experience * 0.3)
    const readinessPercentage = Math.min(98, Math.max(10, Math.round(((skillScore * 0.75) + (degreeMatch * 0.15) + (goalExperienceScore * 0.10)) * 100)));

    // Dynamic Context-Aware Explanation
    const explanation = this.generateExplanation(profile, career, matchPercentage, matchedSkillsCount, matchedInterests, matchedStrengths, missingCrucialSkills, transferableSkills);

    return {
      careerId: career.id,
      careerTitle: career.title,
      category: career.category,
      matchPercentage,
      readinessPercentage,
      degreeScore: Math.round(degreeMatch * 100),
      skillScore: Math.round(skillScore * 100),
      interestScore: Math.round(interestScore * 100),
      strengthScore: Math.round(strengthScore * 100),
      goalScore: Math.round(goalExperienceScore * 100),
      experienceScore: Math.round(goalExperienceScore * 100),
      matchedSkillsCount,
      totalRequiredSkillsCount: career.primarySkills.length,
      explanation
    };
  }

  private static calculateDegreeCompatibility(userDegree: string, compatibleDegrees: string[]): number {
    if (!userDegree || userDegree === 'Any Degree') return 0.85;
    if (compatibleDegrees.includes(userDegree)) return 1.0;
    if (compatibleDegrees.includes('Any Degree')) return 0.9;
    if (userDegree === 'No Technical Degree' || userDegree === 'Other') return 0.75;
    return 0.65;
  }

  private static calculateSkillMatch(profile: UserProfile, career: Career) {
    if (!career.primarySkills || career.primarySkills.length === 0) {
      return { skillScore: 0.5, matchedSkillsCount: 0, missingCrucialSkills: [], transferableSkills: [] };
    }

    let totalWeight = 0;
    let earnedWeight = 0;
    let matchedCount = 0;
    const missingCrucial: string[] = [];
    const transferable: string[] = [];

    const userSkillMap = new Map(profile.skills.map(s => [s.name.toLowerCase().trim(), s]));

    for (const req of career.primarySkills) {
      const weight = req.weight || 5;
      totalWeight += weight;

      const userSkill = userSkillMap.get(req.skillName.toLowerCase().trim());
      if (userSkill) {
        const userProfScore = PROFICIENCY_SCORES[userSkill.proficiency] || 0;
        const requiredProfScore = PROFICIENCY_SCORES[req.minProficiency] || 0.5;

        // Ratio of achievement
        const ratio = Math.min(1.2, userProfScore / Math.max(0.2, requiredProfScore));
        earnedWeight += weight * Math.min(1.0, ratio);

        if (userProfScore >= 0.35) {
          matchedCount++;
          transferable.push(req.skillName);
        }
      } else {
        if (req.importance === 'Essential') {
          missingCrucial.push(req.skillName);
        }
      }
    }

    // Check for other transferable non-primary skills the user possesses (e.g. communication, problem solving, excel)
    for (const userSkill of profile.skills) {
      if (!career.primarySkills.some(req => req.skillName.toLowerCase() === userSkill.name.toLowerCase())) {
        if (['Communication Skills', 'Problem Solving & Critical Thinking', 'Advanced Excel', 'Git & GitHub', 'Analytical & Logical Reasoning'].includes(userSkill.name)) {
          transferable.push(userSkill.name);
          earnedWeight += 1.5;
          totalWeight += 1.5;
        }
      }
    }

    const rawScore = totalWeight > 0 ? earnedWeight / totalWeight : 0;
    return {
      skillScore: Math.min(1.0, rawScore),
      matchedSkillsCount: matchedCount,
      missingCrucialSkills: missingCrucial,
      transferableSkills: Array.from(new Set(transferable))
    };
  }

  private static calculateInterestMatch(userInterests: string[] = [], careerInterests: string[] = []) {
    if (!careerInterests || careerInterests.length === 0) return { interestScore: 0.7, matchedInterests: [] };
    const matched = userInterests.filter(ui => careerInterests.some(ci => ci.toLowerCase() === ui.toLowerCase()));
    const ratio = matched.length / Math.max(1, careerInterests.length);
    const score = matched.length > 0 ? Math.min(1.0, 0.4 + (ratio * 0.6)) : 0.3;
    return { interestScore: score, matchedInterests: matched };
  }

  private static calculateStrengthMatch(userStrengths: string[] = [], careerStrengths: string[] = []) {
    if (!careerStrengths || careerStrengths.length === 0) return { strengthScore: 0.7, matchedStrengths: [] };
    const matched = userStrengths.filter(us => careerStrengths.some(cs => cs.toLowerCase() === us.toLowerCase()));
    const ratio = matched.length / Math.max(1, careerStrengths.length);
    const score = matched.length > 0 ? Math.min(1.0, 0.4 + (ratio * 0.6)) : 0.35;
    return { strengthScore: score, matchedStrengths: matched };
  }

  private static calculateGoalAndExperienceMatch(goal: string, exp: string, difficulty: Career['difficulty']): number {
    let score = 0.8;
    if (goal === 'Career switch' && difficulty === 'Entry') score += 0.15;
    if (goal === 'Career switch' && difficulty === 'High') score -= 0.1;
    if (exp === 'Student' || exp === 'Fresher') {
      if (difficulty === 'Entry' || difficulty === 'Moderate') score += 0.1;
    }
    if (exp === 'Working Professional' || exp === 'Experienced') {
      score += 0.1;
    }
    return Math.min(1.0, Math.max(0.3, score));
  }

  private static generateExplanation(
    profile: UserProfile,
    career: Career,
    matchPercentage: number,
    matchedSkillsCount: number,
    matchedInterests: string[],
    matchedStrengths: string[],
    missingCrucialSkills: string[],
    transferableSkills: string[]
  ) {
    let primaryReason = '';

    if (matchPercentage >= 80) {
      primaryReason = `Your background in ${profile.degreeName || profile.highestQualification} and existing competencies in ${transferableSkills.slice(0, 3).join(', ') || 'core areas'} strongly align with the requirements for ${career.title}.`;
    } else if (matchPercentage >= 60) {
      primaryReason = `You have high potential for ${career.title}. While you possess strong foundational skills like ${transferableSkills.slice(0, 2).join(' & ') || 'general problem solving'}, mastering ${missingCrucialSkills.slice(0, 2).join(' & ') || 'specialized tools'} will elevate you to job readiness.`;
    } else {
      primaryReason = `Transitioning into ${career.title} is feasible through our guided bridge roadmap, leveraging your transferable strengths in ${matchedStrengths[0] || 'analytical reasoning'}.`;
    }

    return {
      primaryReason,
      strengthsMatch: matchedStrengths,
      interestMatch: matchedInterests,
      missingCrucialSkills,
      transferableSkills
    };
  }
}
