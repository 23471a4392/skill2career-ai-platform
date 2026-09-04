import { describe, it, expect } from 'vitest';
import { ResourceService } from '../services/resourceService';
import { LEARNING_RESOURCES } from '../data/resources';

describe('ResourceService', () => {
  it('should filter resources by language', () => {
    const teluguResources = ResourceService.filterResources(LEARNING_RESOURCES, { language: 'Telugu' });
    expect(teluguResources.length).toBeGreaterThan(0);
    for (const r of teluguResources) {
      expect(r.language).toBe('Telugu');
    }

    const hindiResources = ResourceService.filterResources(LEARNING_RESOURCES, { language: 'Hindi' });
    expect(hindiResources.length).toBeGreaterThan(0);
    for (const r of hindiResources) {
      expect(r.language).toBe('Hindi');
    }
  });

  it('should search across titles, topics, and channels', () => {
    const pythonResults = ResourceService.filterResources(LEARNING_RESOURCES, { searchQuery: 'Python' });
    expect(pythonResults.length).toBeGreaterThan(0);
  });
});
