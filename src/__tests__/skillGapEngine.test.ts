import { describe, it, expect } from 'vitest';
import { SkillGapEngineService } from '../services/skillGapEngine';
import { DEMO_PROFILES } from '../data/demoProfiles';

describe('SkillGapEngineService', () => {
  it('should categorize skills into strong, developing, and missing', () => {
    const student = DEMO_PROFILES.student;
    const gap = SkillGapEngineService.analyzeSkillGap(student, 'data-analyst');

    expect(gap).toBeDefined();
    expect(gap.overallReadiness).toBeGreaterThan(0);
    expect(gap.strongSkills.length + gap.developingSkills.length + gap.missingSkills.length).toBeGreaterThan(0);
    expect(gap.learnNextPriority.length).toBeGreaterThan(0);
  });

  it('should generate prioritized learn next suggestions', () => {
    const switcher = DEMO_PROFILES.switcher;
    const gap = SkillGapEngineService.analyzeSkillGap(switcher, 'data-analyst');

    expect(gap.learnNextPriority.length).toBeGreaterThan(0);
    expect(gap.learnNextPriority[0].estimatedHours).toBeGreaterThan(0);
    expect(gap.learnNextPriority[0].reason).toBeDefined();
  });
});
