export interface AdminUserRecord {
  id: string;
  name: string;
  email: string;
  qualification: string;
  targetCareer: string;
  readiness: number;
  language: string;
  streak: number;
  status: 'Active' | 'Inactive';
  joinDate: string;
}

export const MOCK_ADMIN_USERS: AdminUserRecord[] = [
  { id: 'usr-101', name: 'Aarav Sharma', email: 'aarav.sharma@example.com', qualification: 'B.Tech CS', targetCareer: 'Data Analyst', readiness: 78, language: 'Telugu', streak: 6, status: 'Active', joinDate: '2026-08-14' },
  { id: 'usr-102', name: 'Priya Mehra', email: 'priya.mehra@example.com', qualification: 'B.Com', targetCareer: 'Data Analyst', readiness: 54, language: 'Hindi', streak: 3, status: 'Active', joinDate: '2026-08-20' },
  { id: 'usr-103', name: 'Karthik Rao', email: 'karthik.rao@example.com', qualification: 'B.Tech IT', targetCareer: 'Full Stack Engineer', readiness: 88, language: 'English', streak: 14, status: 'Active', joinDate: '2026-07-10' },
  { id: 'usr-104', name: 'Ananya Deshmukh', email: 'ananya.d@example.com', qualification: 'BCA', targetCareer: 'Frontend React Developer', readiness: 65, language: 'Hindi', streak: 5, status: 'Active', joinDate: '2026-08-01' },
  { id: 'usr-105', name: 'Siddharth Iyer', email: 'siddharth.i@example.com', qualification: 'B.Sc Statistics', targetCareer: 'Machine Learning Engineer', readiness: 72, language: 'Tamil', streak: 9, status: 'Active', joinDate: '2026-07-28' },
  { id: 'usr-106', name: 'Divya Reddy', email: 'divya.reddy@example.com', qualification: 'B.Tech ECE', targetCareer: 'Cloud & DevOps Engineer', readiness: 81, language: 'Telugu', streak: 12, status: 'Active', joinDate: '2026-08-11' },
  { id: 'usr-107', name: 'Rohan Joshi', email: 'rohan.j@example.com', qualification: 'MBA Tech', targetCareer: 'Technical Product Manager', readiness: 90, language: 'English', streak: 21, status: 'Active', joinDate: '2026-06-15' },
  { id: 'usr-108', name: 'Kavitha Swaminathan', email: 'kavitha.s@example.com', qualification: 'BA English', targetCareer: 'UI/UX Product Designer', readiness: 62, language: 'Tamil', streak: 4, status: 'Active', joinDate: '2026-08-25' },
  { id: 'usr-109', name: 'Mohammed Farhan', email: 'm.farhan@example.com', qualification: 'Polytechnic Diploma', targetCareer: 'Cybersecurity Analyst', readiness: 48, language: 'Hindi', streak: 2, status: 'Active', joinDate: '2026-08-30' },
  { id: 'usr-110', name: 'Naveen Kumar', email: 'naveen.k@example.com', qualification: 'MCA', targetCareer: 'Enterprise Java Developer', readiness: 84, language: 'Kannada', streak: 16, status: 'Active', joinDate: '2026-07-02' }
];

export const MOCK_ADMIN_METRICS = {
  totalLearners: 148920,
  activeThisMonth: 68450,
  totalRoadmapsGenerated: 192400,
  totalCertificationsMapped: 4200,
  averageJobReadiness: 67.4,
  completionRate: '73.8%',
  languageDistribution: [
    { language: 'English', percentage: 42, count: 62546 },
    { language: 'Telugu', percentage: 22, count: 32762 },
    { language: 'Hindi', percentage: 20, count: 29784 },
    { language: 'Tamil', percentage: 10, count: 14892 },
    { language: 'Kannada', percentage: 6, count: 8935 }
  ],
  topDemandedCareers: [
    { career: 'Data Analyst', count: 43200, growth: '+28%' },
    { career: 'Frontend React Developer', count: 38100, growth: '+21%' },
    { career: 'Full Stack Web Engineer', count: 34500, growth: '+34%' },
    { career: 'Cloud & DevOps Engineer', count: 28900, growth: '+45%' },
    { career: 'Machine Learning Engineer', count: 25400, growth: '+52%' },
    { career: 'UI/UX Product Designer', count: 18200, growth: '+19%' }
  ],
  topSkillGaps: [
    { skill: 'Power BI & DAX', gapFrequency: '74%', priority: 'High' },
    { skill: 'Docker & Containerization', gapFrequency: '68%', priority: 'High' },
    { skill: 'Advanced SQL & Window Functions', gapFrequency: '62%', priority: 'High' },
    { skill: 'Kubernetes Orchestration', gapFrequency: '58%', priority: 'Medium' },
    { skill: 'System Design & Architecture', gapFrequency: '55%', priority: 'Medium' }
  ]
};
