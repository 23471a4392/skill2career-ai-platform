import { PersonalizedRoadmap, RoadmapItem, UserProfile } from '../types';
import { CAREERS } from '../data/careers';
import { SkillGapEngineService } from './skillGapEngine';
import { LEARNING_RESOURCES } from '../data/resources';

export class RoadmapEngineService {
  /**
   * Generates or adapts a personalized roadmap for a user's target career.
   */
  public static generatePersonalizedRoadmap(profile: UserProfile, targetCareerId?: string): PersonalizedRoadmap {
    const careerId = targetCareerId || profile.targetCareerId || 'data-analyst';
    const career = CAREERS.find(c => c.id === careerId) || CAREERS[0];

    const gap = SkillGapEngineService.analyzeSkillGap(profile, career.id);
    const items: RoadmapItem[] = [];

    let weekCounter = 1;

    // Phase 1: Core Fundamentals & Prerequisite Gap
    const phase1Skills = gap.missingSkills.filter(s => s.importance === 'Essential').slice(0, 2);
    if (phase1Skills.length > 0) {
      for (const s of phase1Skills) {
        const matchingResources = this.findResourcesForSkill(s.name, profile.preferredLanguage);
        items.push({
          id: `rm-${career.id}-w${weekCounter}`,
          weekNumber: weekCounter,
          phaseTitle: 'Phase 1: Foundations & Core Tools',
          topicTitle: `Mastering ${s.name} Fundamentals`,
          description: `Learn the core syntax, mental model, and best practices of ${s.name} required for ${career.title}.`,
          skillsCovered: [s.name],
          difficulty: 'Beginner',
          estimatedHours: 12,
          prerequisites: ['Basic computer literacy'],
          suggestedResourceIds: matchingResources.map(r => r.id),
          practiceTask: `Complete hands-on coding exercises and build 2 micro-projects in ${s.name}.`,
          status: profile.completedRoadmapTaskIds?.includes(`rm-${career.id}-w${weekCounter}`) ? 'Completed' : 'Not Started'
        });
        weekCounter++;
      }
    } else {
      // User already has fundamentals, add advanced topic
      const firstDevSkill = gap.developingSkills[0]?.name || career.primarySkills[0].skillName;
      const matchingResources = this.findResourcesForSkill(firstDevSkill, profile.preferredLanguage);
      items.push({
        id: `rm-${career.id}-w${weekCounter}`,
        weekNumber: weekCounter,
        phaseTitle: 'Phase 1: Advanced Foundations',
        topicTitle: `Deep Dive: Advanced ${firstDevSkill}`,
        description: `Refine your existing ${firstDevSkill} knowledge with industry-standard paradigms and performance optimizations.`,
        skillsCovered: [firstDevSkill],
        difficulty: 'Intermediate',
        estimatedHours: 10,
        prerequisites: ['Foundational syntax'],
        suggestedResourceIds: matchingResources.map(r => r.id),
        practiceTask: `Refactor legacy code and implement complex algorithmic patterns in ${firstDevSkill}.`,
        status: profile.completedRoadmapTaskIds?.includes(`rm-${career.id}-w${weekCounter}`) ? 'Completed' : 'Not Started'
      });
      weekCounter++;
    }

    // Phase 2: Core Domain Tooling & Frameworks
    const phase2Skills = gap.missingSkills.filter(s => s.importance !== 'Essential').concat(gap.developingSkills.map(d => ({ name: d.name, importance: 'Important' as const, requiredProficiency: d.requiredProficiency }))).slice(0, 3);
    for (const s of phase2Skills) {
      const matchingResources = this.findResourcesForSkill(s.name, profile.preferredLanguage);
      items.push({
        id: `rm-${career.id}-w${weekCounter}`,
        weekNumber: weekCounter,
        phaseTitle: 'Phase 2: Specialized Tools & Architecture',
        topicTitle: `${s.name} & Data Flow Architecture`,
        description: `Implement scalable real-world workflows using ${s.name} in standard industry configurations.`,
        skillsCovered: [s.name],
        difficulty: 'Intermediate',
        estimatedHours: 14,
        prerequisites: items.length > 0 ? [items[items.length - 1].topicTitle] : [],
        suggestedResourceIds: matchingResources.map(r => r.id),
        practiceTask: `Construct a complete end-to-end integration module showcasing ${s.name}.`,
        status: profile.completedRoadmapTaskIds?.includes(`rm-${career.id}-w${weekCounter}`) ? 'Completed' : 'Not Started'
      });
      weekCounter++;
    }

    // Phase 3: Real-World Portfolio Project
    items.push({
      id: `rm-${career.id}-w${weekCounter}`,
      weekNumber: weekCounter,
      phaseTitle: 'Phase 3: Portfolio & Real-World Application',
      topicTitle: `Capstone Project Development: ${career.title}`,
      description: `Build and deploy a comprehensive real-world capstone project highlighting your integrated skillset.`,
      skillsCovered: career.primarySkills.slice(0, 4).map(p => p.skillName),
      difficulty: 'Advanced',
      estimatedHours: 20,
      prerequisites: items.map(i => i.skillsCovered[0]).filter(Boolean),
      suggestedResourceIds: [],
      practiceTask: `Deploy the capstone project live, record a 2-minute demo video walkthrough, and document clean README on GitHub.`,
      status: profile.completedRoadmapTaskIds?.includes(`rm-${career.id}-w${weekCounter}`) ? 'Completed' : 'Not Started'
    });
    weekCounter++;

    // Phase 4: Interview Preparation, Resume & Career Launch
    items.push({
      id: `rm-${career.id}-w${weekCounter}`,
      weekNumber: weekCounter,
      phaseTitle: 'Phase 4: Interview Readiness & Career Launch',
      topicTitle: `Technical Mock Interviews & Career Dossier`,
      description: `Practice top technical and behavioral interview questions for ${career.title}, refine your ATS resume, and optimize your LinkedIn/GitHub presence.`,
      skillsCovered: ['Communication Skills', 'Problem Solving & Critical Thinking'],
      difficulty: 'Intermediate',
      estimatedHours: 10,
      prerequisites: ['Completed Capstone Project'],
      suggestedResourceIds: [],
      practiceTask: `Complete 10 mock interview questions with >80% accuracy score and finalize your project portfolio links.`,
      status: profile.completedRoadmapTaskIds?.includes(`rm-${career.id}-w${weekCounter}`) ? 'Completed' : 'Not Started'
    });

    const totalHours = items.reduce((acc, item) => acc + item.estimatedHours, 0);

    return {
      id: `roadmap-${profile.id}-${career.id}`,
      userId: profile.id,
      careerId: career.id,
      careerTitle: career.title,
      totalWeeks: items.length,
      estimatedTotalHours: totalHours,
      items,
      generatedAt: new Date().toISOString()
    };
  }

  private static findResourcesForSkill(skillName: string, preferredLanguage: string) {
    let matches = LEARNING_RESOURCES.filter(
      r => r.relatedSkills.some(s => s.toLowerCase() === skillName.toLowerCase()) &&
      (r.language === preferredLanguage || preferredLanguage === 'All' || r.language === 'English')
    );

    if (matches.length === 0) {
      matches = LEARNING_RESOURCES.filter(r => r.relatedSkills.some(s => s.toLowerCase() === skillName.toLowerCase()));
    }

    return matches.slice(0, 3);
  }
}
