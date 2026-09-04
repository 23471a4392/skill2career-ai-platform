export type EducationalQualification = 
  | 'B.Tech'
  | 'M.Tech'
  | 'BCA'
  | 'MCA'
  | 'B.Sc'
  | 'M.Sc'
  | 'B.Com'
  | 'M.Com'
  | 'MBA'
  | 'BA'
  | 'MA'
  | 'Diploma'
  | 'Polytechnic'
  | 'Engineering'
  | 'Medical-Related'
  | 'Management'
  | 'Arts'
  | 'Science'
  | 'Commerce'
  | 'Any Degree'
  | 'No Technical Degree'
  | 'Other';

export type SkillProficiency = 'Never Used' | 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export type LearningLanguage = 'English' | 'Telugu' | 'Hindi' | 'Tamil' | 'Kannada' | 'All';

export type CareerGoal = 
  | 'Get a job'
  | 'Career switch'
  | 'Improve current skills'
  | 'Higher studies'
  | 'Freelancing'
  | 'Entrepreneurship'
  | 'Internship';

export type ExperienceLevel = 
  | 'Student'
  | 'Fresher'
  | 'Beginner'
  | 'Working Professional'
  | 'Experienced';

export type CareerCategory = 
  | 'Software Development'
  | 'Data'
  | 'AI/ML'
  | 'Cloud & DevOps'
  | 'Cybersecurity'
  | 'UI/UX & Design'
  | 'Product & Management'
  | 'Business & Finance'
  | 'Emerging Tech';

export interface UserSkill {
  name: string;
  category: string;
  proficiency: SkillProficiency;
}

export interface UserProfile {
  id: string;
  fullName: string;
  email: string;
  highestQualification: EducationalQualification;
  degreeName: string;
  specialization: string;
  graduationYear: number;
  currentAcademicLevel: string;
  skills: UserSkill[];
  interests: string[];
  strengths: string[];
  careerPreferences: string[];
  preferredLanguage: LearningLanguage;
  careerGoal: CareerGoal;
  experienceLevel: ExperienceLevel;
  targetCareerId?: string;
  bookmarkedCareerIds: string[];
  savedResourceIds: string[];
  completedCourseIds: string[];
  completedProjectIds: string[];
  completedCertIds: string[];
  completedInterviewQuestionIds: string[];
  completedRoadmapTaskIds: string[];
  streakDays: number;
  lastActiveDate: string;
  onboardingCompleted: boolean;
  avatarUrl?: string;
  bio?: string;
}

export interface SkillDefinition {
  id: string;
  name: string;
  category: 'Programming' | 'Data & AI' | 'Cloud & Infrastructure' | 'Design & UX' | 'Business & Soft Skills' | 'Cybersecurity' | 'Frameworks & Tools';
  description: string;
  iconName?: string;
  demandRating: number; // 1 - 5
  relatedSkills: string[];
}

export interface CareerRequirement {
  skillName: string;
  minProficiency: SkillProficiency;
  importance: 'Essential' | 'Important' | 'Nice-to-Have';
  weight: number; // 1-10
}

export interface CareerRoleProgression {
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  title: string;
  experienceRange: string;
  typicalSalaryRange: string;
  responsibilities: string[];
}

export interface Career {
  id: string;
  title: string;
  category: CareerCategory;
  shortDescription: string;
  fullOverview: string;
  difficulty: 'Entry' | 'Moderate' | 'Challenging' | 'High';
  averageSalaryIndia: string;
  averageSalaryUS: string;
  marketDemand: 'High' | 'Very High' | 'Explosive' | 'Moderate';
  compatibleDegrees: EducationalQualification[];
  primarySkills: CareerRequirement[];
  interests: string[];
  strengths: string[];
  typicalResponsibilities: string[];
  careerProgression: CareerRoleProgression[];
  recommendedProjects: string[]; // Project IDs
  recommendedCertifications: string[]; // Cert IDs
  interviewFocusAreas: string[];
  topHiringCompanies: string[];
}

export interface CareerMatchScore {
  careerId: string;
  careerTitle: string;
  category: CareerCategory;
  matchPercentage: number;
  readinessPercentage: number;
  degreeScore: number;
  skillScore: number;
  interestScore: number;
  strengthScore: number;
  goalScore: number;
  experienceScore: number;
  matchedSkillsCount: number;
  totalRequiredSkillsCount: number;
  explanation: {
    primaryReason: string;
    strengthsMatch: string[];
    interestMatch: string[];
    missingCrucialSkills: string[];
    transferableSkills: string[];
  };
}

export interface SkillGapAnalysis {
  careerId: string;
  overallReadiness: number;
  strongSkills: { name: string; userProficiency: SkillProficiency; requiredProficiency: SkillProficiency }[];
  developingSkills: { name: string; userProficiency: SkillProficiency; requiredProficiency: SkillProficiency }[];
  missingSkills: { name: string; requiredProficiency: SkillProficiency; importance: 'Essential' | 'Important' | 'Nice-to-Have' }[];
  learnNextPriority: {
    skillName: string;
    reason: string;
    estimatedHours: number;
    recommendedResourcesCount: number;
  }[];
}

export type ResourceType = 
  | 'YouTube Video'
  | 'YouTube Playlist'
  | 'Course'
  | 'Article'
  | 'Documentation'
  | 'Practice Platform'
  | 'Project Tutorial';

export interface LearningResource {
  id: string;
  title: string;
  topic: string;
  language: LearningLanguage;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  channelOrProvider: string;
  url: string;
  embedId?: string; // YouTube video ID or playlist ID
  duration: string;
  resourceType: ResourceType;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  rating: number; // 1-5
  votesCount: number;
  description: string;
  tags: string[];
  relatedCareerIds: string[];
  relatedSkills: string[];
  thumbnailUrl?: string;
}

export interface ProjectMilestone {
  id: string;
  title: string;
  description: string;
  estimatedHours: number;
}

export interface RecommendedProject {
  id: string;
  title: string;
  careerId: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  requiredSkills: string[];
  description: string;
  expectedOutcome: string;
  suggestedTechStack: string[];
  estimatedHours: number;
  portfolioValue: 'High' | 'Very High' | 'Exceptional';
  milestones: ProjectMilestone[];
  starterGithubRepo?: string;
  demoUrl?: string;
  evaluationRubric: string[];
}

export interface Certification {
  id: string;
  name: string;
  provider: string; // AWS, Microsoft, Google, Meta, Cisco, CompTIA, Linux Foundation
  skillArea: string;
  careerIds: string[];
  difficulty: 'Foundational' | 'Associate' | 'Professional' | 'Expert';
  recommendedFor: 'Beginners' | 'Intermediate Learners' | 'Working Professionals';
  estimatedCost: string;
  officialUrl: string;
  examCode?: string;
  validityYears: number;
  prerequisites: string[];
  topicsCovered: string[];
}

export type InterviewQuestionCategory = 
  | 'Technical'
  | 'HR & Behavioral'
  | 'Aptitude & Logic'
  | 'System Design & Architecture'
  | 'Scenario-Based';

export interface InterviewQuestion {
  id: string;
  careerId: string;
  skillTopic: string;
  category: InterviewQuestionCategory;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  question: string;
  answerSummary: string;
  detailedExplanation: string;
  codeSnippet?: string;
  sampleAnswerHR?: string;
  tips: string[];
}

export interface RoadmapItem {
  id: string;
  weekNumber: number;
  phaseTitle: string;
  topicTitle: string;
  description: string;
  skillsCovered: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedHours: number;
  prerequisites: string[];
  suggestedResourceIds: string[];
  practiceTask: string;
  status: 'Not Started' | 'In Progress' | 'Completed';
  startDate?: string;
  targetDate?: string;
  userNotes?: string;
}

export interface PersonalizedRoadmap {
  id: string;
  userId: string;
  careerId: string;
  careerTitle: string;
  totalWeeks: number;
  estimatedTotalHours: number;
  items: RoadmapItem[];
  generatedAt: string;
}

export interface JobReadinessBreakdown {
  overallPercentage: number;
  skillsScore: number;
  roadmapScore: number;
  projectsScore: number;
  certificationsScore: number;
  interviewScore: number;
  readinessTier: 'Foundational' | 'Developing' | 'Near Ready' | 'Job Ready' | 'Industry Expert';
  nextMilestoneAdvice: string;
}

export interface AppNotification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'milestone' | 'streak' | 'course' | 'project' | 'career' | 'system';
  timestamp: string;
  isRead: boolean;
  actionUrl?: string;
}

export interface DegreeOption {
  value: EducationalQualification;
  label: string;
  category: 'Engineering & Tech' | 'Sciences' | 'Commerce & Finance' | 'Management' | 'Humanities & Arts' | 'Vocational & Other';
  commonStrengths: string[];
  typicalStartingPoint: string;
}
