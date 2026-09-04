// Master Question Bank Registry
import { dsaQuestionBank, type InterviewQuestion } from "./dsaQuestionBank";
import { systemDesignQuestionBank } from "./systemDesignQuestionBank";
import { frontendQuestionBank } from "./frontendQuestionBank";
import { backendQuestionBank } from "./backendQuestionBank";
import { devopsCloudQuestionBank } from "./devopsCloudQuestionBank";
import { aiDataQuestionBank } from "./aiDataQuestionBank";
import { behavioralStarQuestionBank } from "./behavioralStarQuestionBank";
import { companyInterviewKits } from "./companyInterviewKits";

export const ALL_QUESTION_BANKS = [
  dsaQuestionBank,
  systemDesignQuestionBank,
  frontendQuestionBank,
  backendQuestionBank,
  devopsCloudQuestionBank,
  aiDataQuestionBank,
  behavioralStarQuestionBank,
  companyInterviewKits
];

export function getQuestionBankById(bankId: string) {
  return ALL_QUESTION_BANKS.find(b => b.bankId === bankId) || ALL_QUESTION_BANKS[0];
}

export function searchQuestions(query: string, difficulty?: string) {
  const normalized = query.toLowerCase();
  const matched: InterviewQuestion[] = [];

  for (const bank of ALL_QUESTION_BANKS) {
    for (const q of bank.questions) {
      if (difficulty && q.difficulty !== difficulty) continue;
      if (q.title.toLowerCase().includes(normalized) || q.tags.some(t => t.toLowerCase().includes(normalized))) {
        matched.push(q);
      }
    }
  }
  return matched;
}
