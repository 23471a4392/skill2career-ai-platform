import { JobReadinessBreakdown, UserProfile } from '../types';
import { CAREERS } from '../data/careers';
import { SkillGapEngineService } from './skillGapEngine';

export class ReadinessEngineService {
  /**
   * Calculates comprehensive Job Readiness breakdown across 5 core pillars.
   * Multi-Factor Formula:
   * - Skills Mastery: 35%
   * - Roadmap Progress: 25%
   * - Project Portfolio: 20%
   * - Certifications: 10%
   * - Interview Preparation: 10%
   */
  public static calculateJobReadiness(profile: UserProfile, targetCareerId?: string): JobReadinessBreakdown {
    const careerId = targetCareerId || profile.targetCareerId || 'data-analyst';
    const career = CAREERS.find(c => c.id === careerId) || CAREERS[0];

    // 1. Skills Score (0 - 100)
    const gap = SkillGapEngineService.analyzeSkillGap(profile, career.id);
    const skillsScore = gap.overallReadiness;

    // 2. Roadmap Progress Score (0 - 100)
    const totalRoadmapTasks = 6;
    const completedTasksCount = profile.completedRoadmapTaskIds?.length || 0;
    const roadmapScore = Math.min(100, Math.round((completedTasksCount / totalRoadmapTasks) * 100));

    // 3. Projects Score (0 - 100)
    const completedProjectsCount = profile.completedProjectIds?.length || 0;
    // 2 projects = 100%
    const projectsScore = Math.min(100, Math.round((completedProjectsCount / 2) * 100));

    // 4. Certifications Score (0 - 100)
    const completedCertsCount = profile.completedCertIds?.length || 0;
    // 1 certification = 75%, 2+ = 100%
    const certsScore = completedCertsCount >= 2 ? 100 : completedCertsCount === 1 ? 75 : (profile.degreeName ? 35 : 15);

    // 5. Interview Score (0 - 100)
    const completedInterviewQuestions = profile.completedInterviewQuestionIds?.length || 0;
    // 5 questions = 100%
    const interviewScore = Math.min(100, Math.round((completedInterviewQuestions / 5) * 100));

    // Composite Calculation
    const overallScore = Math.round(
      (skillsScore * 0.35) +
      (roadmapScore * 0.25) +
      (projectsScore * 0.20) +
      (certsScore * 0.10) +
      (interviewScore * 0.10)
    );

    // Determine Readiness Tier
    let readinessTier: JobReadinessBreakdown['readinessTier'] = 'Foundational';
    let nextMilestoneAdvice = '';

    if (overallScore >= 85) {
      readinessTier = 'Job Ready';
      nextMilestoneAdvice = 'You are ready to begin applying for open positions! Polish your resume and start targeted applications.';
    } else if (overallScore >= 70) {
      readinessTier = 'Near Ready';
      nextMilestoneAdvice = 'Complete your final portfolio project and practice 3 more technical mock interview questions to achieve full job readiness.';
    } else if (overallScore >= 45) {
      readinessTier = 'Developing';
      nextMilestoneAdvice = `Focus on your roadmap tasks for ${gap.missingSkills[0]?.name || 'core skills'} and finish your first hands-on project.`;
    } else {
      readinessTier = 'Foundational';
      nextMilestoneAdvice = 'Begin with the Phase 1 fundamentals in your personalized roadmap to build solid prerequisite knowledge.';
    }

    return {
      overallPercentage: Math.min(99, Math.max(12, overallScore)),
      skillsScore,
      roadmapScore,
      projectsScore,
      certificationsScore: certsScore,
      interviewScore,
      readinessTier,
      nextMilestoneAdvice
    };
  }
}
