import { LearningLanguage, LearningResource, ResourceType } from '../types';
import { LEARNING_RESOURCES } from '../data/resources';

export class ResourceService {
  /**
   * Filters learning resources across Language, Topic, Difficulty, Resource Type, and search query.
   */
  public static filterResources(
    resources: LearningResource[] = LEARNING_RESOURCES,
    options: {
      language?: LearningLanguage | 'All';
      resourceType?: ResourceType | 'All Types';
      difficulty?: string;
      searchQuery?: string;
      topic?: string;
      careerId?: string;
      skillName?: string;
    }
  ): LearningResource[] {
    return resources.filter(res => {
      // Language match
      if (options.language && options.language !== 'All' && res.language !== options.language) {
        return false;
      }

      // Resource type match
      if (options.resourceType && options.resourceType !== 'All Types' && res.resourceType !== options.resourceType) {
        return false;
      }

      // Difficulty match
      if (options.difficulty && options.difficulty !== 'All' && res.difficulty !== options.difficulty) {
        return false;
      }

      // Career match
      if (options.careerId && !res.relatedCareerIds.includes(options.careerId)) {
        return false;
      }

      // Skill match
      if (options.skillName && !res.relatedSkills.some(s => s.toLowerCase() === options.skillName?.toLowerCase())) {
        return false;
      }

      // Search Query match
      if (options.searchQuery && options.searchQuery.trim() !== '') {
        const q = options.searchQuery.toLowerCase().trim();
        const matchTitle = res.title.toLowerCase().includes(q);
        const matchDesc = res.description.toLowerCase().includes(q);
        const matchChannel = res.channelOrProvider.toLowerCase().includes(q);
        const matchTags = res.tags.some(t => t.toLowerCase().includes(q));
        const matchTopic = res.topic.toLowerCase().includes(q);
        if (!matchTitle && !matchDesc && !matchChannel && !matchTags && !matchTopic) {
          return false;
        }
      }

      return true;
    });
  }

  /**
   * Get specific recommendations for missing skill with preferred language fallback.
   */
  public static getRecommendationsForSkill(skillName: string, preferredLanguage: LearningLanguage): LearningResource[] {
    const directLangMatches = LEARNING_RESOURCES.filter(
      r => r.relatedSkills.some(s => s.toLowerCase() === skillName.toLowerCase()) &&
      (r.language === preferredLanguage || preferredLanguage === 'All')
    );

    if (directLangMatches.length > 0) return directLangMatches;

    // Fallback to English or all languages
    return LEARNING_RESOURCES.filter(r => r.relatedSkills.some(s => s.toLowerCase() === skillName.toLowerCase()));
  }
}
