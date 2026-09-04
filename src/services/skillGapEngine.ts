import { Career, SkillGapAnalysis, SkillProficiency, UserProfile } from '../types';
import { CAREERS } from '../data/careers';
import { LEARNING_RESOURCES } from '../data/resources';

const PROFICIENCY_RANK: Record<SkillProficiency, number> = {
  'Never Used': 0,
  'Beginner': 1,
  'Intermediate': 2,
  'Advanced': 3,
  'Expert': 4
};

export class SkillGapEngineService {
  /**
   * Generates a detailed skill-gap breakdown for a target career against user profile.
   */
  public static analyzeSkillGap(profile: UserProfile, careerId: string): SkillGapAnalysis {
    const career = CAREERS.find(c => c.id === careerId) || CAREERS[0];
    const userSkillMap = new Map(profile.skills.map(s => [s.name.toLowerCase().trim(), s]));

    const strongSkills: SkillGapAnalysis['strongSkills'] = [];
    const developingSkills: SkillGapAnalysis['developingSkills'] = [];
    const missingSkills: SkillGapAnalysis['missingSkills'] = [];

    let totalWeight = 0;
    let achievedWeight = 0;

    for (const req of career.primarySkills) {
      const weight = req.weight || 5;
      totalWeight += weight;

      const userSkill = userSkillMap.get(req.skillName.toLowerCase().trim());
      const requiredRank = PROFICIENCY_RANK[req.minProficiency];

      if (!userSkill || userSkill.proficiency === 'Never Used') {
        missingSkills.push({
          name: req.skillName,
          requiredProficiency: req.minProficiency,
          importance: req.importance
        });
      } else {
        const userRank = PROFICIENCY_RANK[userSkill.proficiency];
        if (userRank >= requiredRank) {
          strongSkills.push({
            name: req.skillName,
            userProficiency: userSkill.proficiency,
            requiredProficiency: req.minProficiency
          });
          achievedWeight += weight;
        } else {
          developingSkills.push({
            name: req.skillName,
            userProficiency: userSkill.proficiency,
            requiredProficiency: req.minProficiency
          });
          achievedWeight += weight * (userRank / Math.max(1, requiredRank));
        }
      }
    }

    const overallReadiness = totalWeight > 0 ? Math.round((achievedWeight / totalWeight) * 100) : 50;

    // Generate prioritized "Learn Next" queue
    const learnNextPriority = this.calculateLearnNext(missingSkills, developingSkills, career);

    return {
      careerId: career.id,
      overallReadiness,
      strongSkills,
      developingSkills,
      missingSkills,
      learnNextPriority
    };
  }

  private static calculateLearnNext(
    missing: SkillGapAnalysis['missingSkills'],
    developing: SkillGapAnalysis['developingSkills'],
    career: Career
  ) {
    const list: SkillGapAnalysis['learnNextPriority'] = [];

    // Prioritize essential missing skills first
    for (const m of missing.filter(s => s.importance === 'Essential')) {
      const resourceCount = LEARNING_RESOURCES.filter(r => r.relatedSkills.some(rs => rs.toLowerCase() === m.name.toLowerCase())).length;
      list.push({
        skillName: m.name,
        reason: `Essential prerequisite for ${career.title} roles. Mastering this unlocks core job capability.`,
        estimatedHours: 15,
        recommendedResourcesCount: Math.max(1, resourceCount)
      });
    }

    // Then developing skills to bridge intermediate gap
    for (const d of developing) {
      const resourceCount = LEARNING_RESOURCES.filter(r => r.relatedSkills.some(rs => rs.toLowerCase() === d.name.toLowerCase())).length;
      list.push({
        skillName: d.name,
        reason: `Currently at ${d.userProficiency} level. Leveling up to ${d.requiredProficiency} will substantially elevate your interview readiness.`,
        estimatedHours: 10,
        recommendedResourcesCount: Math.max(1, resourceCount)
      });
    }

    // Then remaining missing important skills
    for (const m of missing.filter(s => s.importance !== 'Essential')) {
      const resourceCount = LEARNING_RESOURCES.filter(r => r.relatedSkills.some(rs => rs.toLowerCase() === m.name.toLowerCase())).length;
      list.push({
        skillName: m.name,
        reason: `Recommended supplementary competence for competitive edge in ${career.title} hiring.`,
        estimatedHours: 8,
        recommendedResourcesCount: Math.max(1, resourceCount)
      });
    }

    return list.slice(0, 6);
  }
}
