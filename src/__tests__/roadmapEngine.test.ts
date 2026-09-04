import { describe, it, expect } from 'vitest';
import { RoadmapEngineService } from '../services/roadmapEngine';
import { DEMO_PROFILES } from '../data/demoProfiles';

describe('RoadmapEngineService', () => {
  it('should generate multi-phase adaptive roadmap', () => {
    const student = DEMO_PROFILES.student;
    const roadmap = RoadmapEngineService.generatePersonalizedRoadmap(student, 'data-analyst');

    expect(roadmap.totalWeeks).toBeGreaterThanOrEqual(4);
    expect(roadmap.estimatedTotalHours).toBeGreaterThan(0);
    expect(roadmap.items.length).toBe(roadmap.totalWeeks);
    expect(roadmap.items[0].topicTitle).toBeDefined();
    expect(roadmap.items[0].practiceTask).toBeDefined();
  });
});
