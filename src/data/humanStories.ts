export interface StudentSuccessStory {
  id: string;
  name: string;
  avatar: string;
  location: string;
  backgroundDegree: string;
  previousRole: string;
  targetCareer: string;
  currentCompany: string;
  hikePercentage: string;
  quote: string;
  quoteTelugu?: string;
  languageLearnedIn: string;
  verifiedTime: string;
}

export interface MentorProfile {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  experienceYears: number;
  specialization: string;
  quote: string;
}

export const STUDENT_SUCCESS_STORIES: StudentSuccessStory[] = [
  {
    id: 'story-1',
    name: 'Sravani Reddy',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256',
    location: 'Hyderabad, Telangana',
    backgroundDegree: 'B.Com (Computers)',
    previousRole: 'Junior Accountant',
    targetCareer: 'Data Analyst',
    currentCompany: 'Deloitte India',
    hikePercentage: '180%',
    quote: 'Being from a non-engineering B.Com background, I thought Data Analytics was impossible. Skill2Career gave me a structured roadmap and Telugu video tutorials. Within 5 months, I cleared my technical interview!',
    quoteTelugu: 'B.Com బ్యాక్‌గ్రౌండ్ నుండి Data Analytics నేర్చుకోవచ్చా అని భయపడ్డాను. Skill2Career ఇచ్చిన రోడ్‌మ్యాప్ మరియు తెలుగు ట్యుటోరియల్స్ నా కెరీర్‌ను పూర్తిగా మార్చేశాయి!',
    languageLearnedIn: 'Telugu',
    verifiedTime: 'Placed 3 weeks ago'
  },
  {
    id: 'story-2',
    name: 'Vikas Sharma',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256',
    location: 'Bengaluru, Karnataka',
    backgroundDegree: 'B.Tech Mechanical',
    previousRole: 'Site QA Trainee',
    targetCareer: 'Cloud & DevOps Engineer',
    currentCompany: 'Infosys (Digital)',
    hikePercentage: '210%',
    quote: 'The skill gap analyzer showed me exactly what 4 AWS and Docker tools I lacked. Following the weekly milestones made the career switch seamless.',
    quoteTelugu: 'మెకానికల్ నుండి క్లౌడ్ & దేవోప్స్ కి మారడానికి కావాల్సిన స్కిల్ గ్యాప్ చాలా క్లియర్‌గా తెలిసింది. వీక్లీ ప్రాజెక్ట్స్ నన్ను ఇంటర్వ్యూకి రెడీ చేశాయి.',
    languageLearnedIn: 'English & Hindi',
    verifiedTime: 'Placed 1 month ago'
  },
  {
    id: 'story-3',
    name: 'Ananya Deshmukh',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=256',
    location: 'Pune, Maharashtra',
    backgroundDegree: 'BCA (Final Year)',
    previousRole: 'Fresher Student',
    targetCareer: 'Full Stack Web Developer',
    currentCompany: 'Thoughtworks',
    hikePercentage: 'First Job (₹8.5 LPA)',
    quote: 'The portfolio project engine is a game changer. The rubric helped me build production-grade React & Node projects that the interviewer loved discussing.',
    quoteTelugu: 'పోర్ట్‌ఫోలియో ప్రాజెక్ట్స్ నన్ను వేలమంది ఫ్రెషర్లలో ప్రత్యేకం చేశాయి. ఫస్ట్ జాబ్‌లోనే ₹8.5 LPA సాధించాను.',
    languageLearnedIn: 'Hindi & English',
    verifiedTime: 'Placed 2 weeks ago'
  },
  {
    id: 'story-4',
    name: 'Karthik Raja',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=256',
    location: 'Chennai, Tamil Nadu',
    backgroundDegree: 'B.Sc Physics',
    previousRole: 'BPO Executive',
    targetCareer: 'Cybersecurity Analyst',
    currentCompany: 'Wipro Cybersecurity Lab',
    hikePercentage: '140%',
    quote: 'Learning in Tamil cleared foundational networking concepts in 3 weeks. The mock interview simulations prepared me for high-pressure scenario questions.',
    quoteTelugu: 'నెట్‌వర్కింగ్ మరియు సెక్యూరిటీ బేసిక్స్ నేర్చుకుని BPO నుండి సైబర్ సెక్యూరిటీ అనలిస్ట్‌గా మారాను.',
    languageLearnedIn: 'Tamil & English',
    verifiedTime: 'Placed 2 months ago'
  }
];

export const MENTORS_AND_TESTERS: MentorProfile[] = [
  {
    id: 'mentor-1',
    name: 'Raghavendra Rao',
    role: 'Principal QA Architect & Career Mentor',
    company: 'Ex-Amazon / Microsoft',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=256',
    experienceYears: 14,
    specialization: 'Automated Quality Engineering & Career Matrices',
    quote: 'We personally validated the mathematical match algorithms. It eliminates guesswork and gives students clear, actionable milestones.'
  },
  {
    id: 'mentor-2',
    name: 'Dr. Padmavathi K.',
    role: 'Dean of Computing & Career Pathways',
    company: 'Tech Education Advisory Board',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=256',
    experienceYears: 18,
    specialization: 'Curriculum Standardization & Regional Languages',
    quote: 'Regional language learning combined with modern software roadmaps unlocks massive untapped potential across Tier 2 & Tier 3 colleges.'
  },
  {
    id: 'mentor-3',
    name: 'Santosh Kumar',
    role: 'Staff Software Engineer & Hiring Lead',
    company: 'Google Cloud Partner',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=256',
    experienceYears: 11,
    specialization: 'Full Stack, Cloud & System Design',
    quote: 'Candidates who build the tiered projects recommended here come to interviews with real problem-solving confidence.'
  }
];

export const HIRING_PARTNER_LOGOS = [
  { name: 'Amazon', color: '#ff9900' },
  { name: 'Microsoft', color: '#00a4ef' },
  { name: 'Google Cloud', color: '#4285f4' },
  { name: 'Infosys', color: '#007cc3' },
  { name: 'TCS', color: '#f05a28' },
  { name: 'Deloitte', color: '#86bc25' },
  { name: 'Accenture', color: '#a100ff' },
  { name: 'Wipro', color: '#6dc067' },
  { name: 'Swiggy', color: '#fc8019' },
  { name: 'Thoughtworks', color: '#f2617a' },
];
