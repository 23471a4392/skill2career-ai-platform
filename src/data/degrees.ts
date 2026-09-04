import { DegreeOption } from '../types';

export const DEGREE_OPTIONS: DegreeOption[] = [
  {
    value: 'B.Tech',
    label: 'B.Tech / B.E. (Bachelor of Technology / Engineering)',
    category: 'Engineering & Tech',
    commonStrengths: ['Analytical Thinking', 'Problem Solving', 'Mathematics', 'Algorithmic Logic'],
    typicalStartingPoint: 'Technical foundations ready for specialization'
  },
  {
    value: 'M.Tech',
    label: 'M.Tech / M.E. (Master of Technology / Engineering)',
    category: 'Engineering & Tech',
    commonStrengths: ['Advanced Research', 'System Architecture', 'Domain Specialization', 'Technical Leadership'],
    typicalStartingPoint: 'Advanced research and specialized engineering roles'
  },
  {
    value: 'BCA',
    label: 'BCA (Bachelor of Computer Applications)',
    category: 'Engineering & Tech',
    commonStrengths: ['Programming Fundamentals', 'Database Management', 'Web Development', 'Logical Reasoning'],
    typicalStartingPoint: 'Software engineering, web, and application development'
  },
  {
    value: 'MCA',
    label: 'MCA (Master of Computer Applications)',
    category: 'Engineering & Tech',
    commonStrengths: ['Full Stack Development', 'Software Architecture', 'Data Systems', 'Enterprise Software'],
    typicalStartingPoint: 'Senior software engineering, cloud, and data engineering'
  },
  {
    value: 'B.Sc',
    label: 'B.Sc (Computer Science / IT / Mathematics / Statistics / Physics)',
    category: 'Sciences',
    commonStrengths: ['Quantitative Analysis', 'Statistical Modeling', 'Structured Problem Solving', 'Research'],
    typicalStartingPoint: 'Data analytics, scientific computing, and tech roles'
  },
  {
    value: 'M.Sc',
    label: 'M.Sc (Data Science / IT / Stats / Math / Bio-informatics)',
    category: 'Sciences',
    commonStrengths: ['Advanced Statistics', 'Machine Learning Foundations', 'Data Modeling', 'Scientific Research'],
    typicalStartingPoint: 'Data science, ML research, quantitative analysis'
  },
  {
    value: 'B.Com',
    label: 'B.Com (Bachelor of Commerce / Accounting / Computers)',
    category: 'Commerce & Finance',
    commonStrengths: ['Financial Literacy', 'Business Acumen', 'Spreadsheet Analysis', 'Process Auditing'],
    typicalStartingPoint: 'Financial analysis, business intelligence, data analysis'
  },
  {
    value: 'M.Com',
    label: 'M.Com (Master of Commerce / Financial Management)',
    category: 'Commerce & Finance',
    commonStrengths: ['Strategic Finance', 'Market Risk Modeling', 'Corporate Governance', 'Advanced Auditing'],
    typicalStartingPoint: 'FinTech product management, business analytics, risk advisory'
  },
  {
    value: 'MBA',
    label: 'MBA (Master of Business Administration)',
    category: 'Management',
    commonStrengths: ['Strategic Leadership', 'Stakeholder Communication', 'Product Strategy', 'Market Growth'],
    typicalStartingPoint: 'Product management, tech consulting, business operations'
  },
  {
    value: 'BA',
    label: 'BA (Bachelor of Arts / English / Psychology / Economics / Journalism)',
    category: 'Humanities & Arts',
    commonStrengths: ['User Empathy', 'Written & Verbal Communication', 'Behavioral Understanding', 'Creative Storytelling'],
    typicalStartingPoint: 'UI/UX design, technical writing, product marketing, tech transition'
  },
  {
    value: 'MA',
    label: 'MA (Master of Arts / Media / Communication / Sociology)',
    category: 'Humanities & Arts',
    commonStrengths: ['Deep User Research', 'Content Strategy', 'Design Thinking', 'Human Factors'],
    typicalStartingPoint: 'UX research, user experience strategy, brand communications'
  },
  {
    value: 'Diploma',
    label: 'Polytechnic / Diploma in Engineering / CS / IT / Electronics',
    category: 'Vocational & Other',
    commonStrengths: ['Hands-on Implementation', 'Hardware & System Troubleshooting', 'Practical Execution'],
    typicalStartingPoint: 'DevOps, IT support, junior web development, cloud operations'
  },
  {
    value: 'Medical-Related',
    label: 'Medical / Healthcare / Pharmacy / Biotechnology (MBBS/B.Pharm/BDS/B.Sc Nursing)',
    category: 'Sciences',
    commonStrengths: ['Clinical Domain Knowledge', 'Healthcare Workflows', 'Precision & Ethics', 'Life Science Data'],
    typicalStartingPoint: 'HealthTech, bioinformatics, clinical data analysis, AI health diagnostics'
  },
  {
    value: 'No Technical Degree',
    label: 'Self-Taught / Non-Technical Degree / Transitioning from Another Field',
    category: 'Vocational & Other',
    commonStrengths: ['High Self-Motivation', 'Diverse Cross-Disciplinary Perspective', 'Real-world Resilience'],
    typicalStartingPoint: 'Bootcamp graduate, frontend developer, data analyst, QA automation'
  },
  {
    value: 'Any Degree',
    label: 'Other Bachelor / Master Degree',
    category: 'Vocational & Other',
    commonStrengths: ['General Analytical Skills', 'Adaptability', 'Professional Communication'],
    typicalStartingPoint: 'Custom tailored learning path based on aptitude and interests'
  }
];

export const DEGREE_CATEGORY_MAP: Record<string, string[]> = {
  'Engineering & Tech': ['B.Tech', 'M.Tech', 'BCA', 'MCA', 'Engineering'],
  'Sciences': ['B.Sc', 'M.Sc', 'Medical-Related', 'Science'],
  'Commerce & Finance': ['B.Com', 'M.Com', 'Commerce'],
  'Management': ['MBA', 'Management'],
  'Humanities & Arts': ['BA', 'MA', 'Arts'],
  'Vocational & Other': ['Diploma', 'Polytechnic', 'No Technical Degree', 'Any Degree', 'Other']
};
