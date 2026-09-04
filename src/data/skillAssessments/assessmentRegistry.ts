// Master Diagnostic Assessment Registry
import { dsaSkillAssessment } from "./dsaSkillAssessment";
import { reactSkillAssessment } from "./reactSkillAssessment";
import { nodeSkillAssessment } from "./nodeSkillAssessment";
import { pythonDataAssessment } from "./pythonDataAssessment";
import { sqlDatabaseAssessment } from "./sqlDatabaseAssessment";
import { devopsCloudAssessment } from "./devopsCloudAssessment";
import { systemDesignAssessment } from "./systemDesignAssessment";
import { cybersecurityAssessment } from "./cybersecurityAssessment";

export const ALL_DIAGNOSTIC_ASSESSMENTS = [
  dsaSkillAssessment,
  reactSkillAssessment,
  nodeSkillAssessment,
  pythonDataAssessment,
  sqlDatabaseAssessment,
  devopsCloudAssessment,
  systemDesignAssessment,
  cybersecurityAssessment
];

export function getAssessmentBySkillKey(skillKey: string) {
  return ALL_DIAGNOSTIC_ASSESSMENTS.find(a => a.skillKey === skillKey) || ALL_DIAGNOSTIC_ASSESSMENTS[0];
}
