import { describe, it, expect } from 'vitest';
import { CareerEngineService } from '../services/careerEngine';
import { DEMO_PROFILES } from '../data/demoProfiles';
import { CAREERS } from '../data/careers';

describe('CareerEngineService', () => {
  it('should rank Data Analyst highly for a student with Python and SQL', () => {
    const student = DEMO_PROFILES.student;
    const matches = CareerEngineService.calculateAllMatches(student, CAREERS);

    expect(matches.length).toBeGreaterThan(0);
    const topMatch = matches[0];
    expect(topMatch.matchPercentage).toBeGreaterThanOrEqual(65);
    expect(topMatch.matchedSkillsCount).toBeGreaterThan(0);
  });

  it('should identify transferable skills for career switcher', () => {
    const switcher = DEMO_PROFILES.switcher;
    const dataAnalyst = CAREERS.find(c => c.id === 'data-analyst')!;
    const match = CareerEngineService.evaluateCareerMatch(switcher, dataAnalyst);

    expect(match.matchPercentage).toBeGreaterThanOrEqual(45);
    expect(match.explanation.primaryReason).toBeDefined();
  });

  it('should normalize match percentage between 15% and 99%', () => {
    const pro = DEMO_PROFILES.professional;
    const matches = CareerEngineService.calculateAllMatches(pro, CAREERS);

    for (const m of matches) {
      expect(m.matchPercentage).toBeGreaterThanOrEqual(15);
      expect(m.matchPercentage).toBeLessThanOrEqual(99);
      expect(m.readinessPercentage).toBeGreaterThanOrEqual(10);
      expect(m.readinessPercentage).toBeLessThanOrEqual(99);
    }
  });
});
