// Master Curriculum Registry
import { frontendCurriculum } from "./frontendCurriculum";
import { backendCurriculum } from "./backendCurriculum";
import { fullstackCurriculum } from "./fullstackCurriculum";
import { aiMlCurriculum } from "./aiMlCurriculum";
import { dataEngineeringCurriculum } from "./dataEngineeringCurriculum";
import { devopsCloudCurriculum } from "./devopsCloudCurriculum";
import { cybersecurityCurriculum } from "./cybersecurityCurriculum";
import { mobileAppCurriculum } from "./mobileAppCurriculum";
import { productManagementCurriculum } from "./productManagementCurriculum";
import { qaAutomationCurriculum } from "./qaAutomationCurriculum";
import { uiUxDesignCurriculum } from "./uiUxDesignCurriculum";
import { blockchainCurriculum } from "./blockchainCurriculum";
import { dataAnalystCurriculum } from "./dataAnalystCurriculum";
import { embeddedSystemsCurriculum } from "./embeddedSystemsCurriculum";
import { cloudArchitectCurriculum } from "./cloudArchitectCurriculum";

export const ALL_CURRICULUM_TRACKS = [
  frontendCurriculum,
  backendCurriculum,
  fullstackCurriculum,
  aiMlCurriculum,
  dataEngineeringCurriculum,
  devopsCloudCurriculum,
  cybersecurityCurriculum,
  mobileAppCurriculum,
  productManagementCurriculum,
  qaAutomationCurriculum,
  uiUxDesignCurriculum,
  blockchainCurriculum,
  dataAnalystCurriculum,
  embeddedSystemsCurriculum,
  cloudArchitectCurriculum
];

export function getCurriculumByTrackId(trackId: string) {
  return ALL_CURRICULUM_TRACKS.find(t => t.trackId === trackId) || ALL_CURRICULUM_TRACKS[0];
}

export function searchCurriculumTopics(keyword: string) {
  const query = keyword.toLowerCase();
  const results: Array<{ trackTitle: string; weekNumber: number; dayNumber: number; topic: string }> = [];

  for (const track of ALL_CURRICULUM_TRACKS) {
    for (const week of track.weeks) {
      for (const day of week.days) {
        if (day.topic.toLowerCase().includes(query) || day.concepts.some(c => c.toLowerCase().includes(query))) {
          results.push({
            trackTitle: track.title,
            weekNumber: week.weekNumber,
            dayNumber: day.dayNumber,
            topic: day.topic
          });
        }
      }
    }
  }
  return results;
}
