import { describe, it, expect } from 'vitest';
import { ReadinessEngineService } from '../services/readinessEngine';
import { DEMO_PROFILES } from '../data/demoProfiles';

describe('ReadinessEngineService', () => {
  it('should calculate 5-factor composite job readiness', () => {
    const student = DEMO_PROFILES.student;
    const readiness = ReadinessEngineService.calculateJobReadiness(student, 'data-analyst');

    expect(readiness.overallPercentage).toBeGreaterThanOrEqual(10);
    expect(readiness.overallPercentage).toBeLessThanOrEqual(99);
    expect(readiness.skillsScore).toBeGreaterThanOrEqual(0);
    expect(readiness.roadmapScore).toBeGreaterThanOrEqual(0);
    expect(readiness.projectsScore).toBeGreaterThanOrEqual(0);
    expect(readiness.certificationsScore).toBeGreaterThanOrEqual(0);
    expect(readiness.interviewScore).toBeGreaterThanOrEqual(0);
    expect(readiness.readinessTier).toBeDefined();
    expect(readiness.nextMilestoneAdvice.length).toBeGreaterThan(0);
  });
});
