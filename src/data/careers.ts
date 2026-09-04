import { Career, CareerCategory } from '../types';

export const CAREERS: Career[] = [
  // 1. Data Analyst
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    category: 'Data',
    shortDescription: 'Transform raw data into meaningful business insights, executive dashboards, and strategic growth opportunities.',
    fullOverview: 'A Data Analyst collects, cleans, and studies data sets to help solve business problems. Using tools like SQL, Excel, Python, and Power BI/Tableau, they discover patterns, build automated reporting dashboards, and present findings to non-technical stakeholders to drive revenue and operational efficiency.',
    difficulty: 'Entry',
    averageSalaryIndia: '₹5.5 - 14 LPA',
    averageSalaryUS: '$70,000 - $115,000',
    marketDemand: 'Very High',
    compatibleDegrees: ['B.Tech', 'BCA', 'B.Sc', 'B.Com', 'M.Com', 'MBA', 'M.Sc', 'MCA', 'Diploma', 'No Technical Degree', 'Any Degree'],
    primarySkills: [
      { skillName: 'SQL', minProficiency: 'Intermediate', importance: 'Essential', weight: 10 },
      { skillName: 'Data Analytics', minProficiency: 'Intermediate', importance: 'Essential', weight: 10 },
      { skillName: 'Advanced Excel', minProficiency: 'Intermediate', importance: 'Essential', weight: 9 },
      { skillName: 'Power BI', minProficiency: 'Intermediate', importance: 'Important', weight: 8 },
      { skillName: 'Probability & Statistics', minProficiency: 'Intermediate', importance: 'Important', weight: 8 },
      { skillName: 'Python', minProficiency: 'Beginner', importance: 'Important', weight: 7 },
      { skillName: 'Pandas & NumPy', minProficiency: 'Beginner', importance: 'Nice-to-Have', weight: 6 },
      { skillName: 'Communication Skills', minProficiency: 'Intermediate', importance: 'Essential', weight: 9 }
    ],
    interests: ['Data Analytics & Insights', 'Business & Financial Markets', 'Problem Solving & Algorithms'],
    strengths: ['Analytical & Logical Reasoning', 'Detail Orientation & Precision', 'Clear Verbal & Written Communication'],
    typicalResponsibilities: [
      'Extract data from multi-source relational databases using complex SQL queries, subqueries, and window functions.',
      'Design, publish, and maintain interactive executive dashboards in Power BI and Tableau with automated refresh schedules.',
      'Perform exploratory data analysis (EDA) in Python/Excel to diagnose operational bottlenecks and revenue trends.',
      'Collaborate with product, finance, and marketing teams to establish meaningful KPIs and conversion metrics.',
      'Translate technical statistical findings into clear executive summaries and stakeholder presentations.'
    ],
    careerProgression: [
      {
        level: 'Beginner',
        title: 'Junior Data Analyst / BI Trainee',
        experienceRange: '0 - 2 years',
        typicalSalaryRange: '₹4.5 - 8 LPA',
        responsibilities: ['Writing SQL queries', 'Updating weekly Excel/Power BI dashboards', 'Data cleansing and quality checks']
      },
      {
        level: 'Intermediate',
        title: 'Senior Data Analyst / Analytics Specialist',
        experienceRange: '2 - 5 years',
        typicalSalaryRange: '₹9 - 18 LPA',
        responsibilities: ['Architecting self-serve BI models', 'Automating Python data pipelines', 'Presenting A/B testing insights to leadership']
      },
      {
        level: 'Advanced',
        title: 'Lead Analytics Manager / Head of BI',
        experienceRange: '5+ years',
        typicalSalaryRange: '₹20 - 45 LPA',
        responsibilities: ['Setting company-wide data governance', 'Mentoring analytics teams', 'Leading strategic data initiatives']
      }
    ],
    recommendedProjects: ['sales-dashboard', 'customer-churn-analytics'],
    recommendedCertifications: ['pl-300-powerbi', 'google-data-analytics', 'aws-data-analytics'],
    interviewFocusAreas: ['SQL Joins & Window Functions', 'Excel Pivot & Power Query', 'Power BI DAX measures', 'Business Case Studies', 'Statistical Interpretation'],
    topHiringCompanies: ['Deloitte', 'Amazon', 'McKinsey', 'Swiggy', 'Accenture', 'Flipkart', 'JPMorgan Chase']
  },

  // 2. Frontend React Developer
  {
    id: 'frontend-developer',
    title: 'Frontend React Developer',
    category: 'Software Development',
    shortDescription: 'Engineer lightning-fast, accessible, and delightful modern user interfaces for web and mobile.',
    fullOverview: 'A Frontend Developer specializes in creating the interactive, client-facing visual elements of a web application. Working closely with UI/UX designers and backend engineers, they build performant, responsive, component-based interfaces using React, TypeScript, modern CSS (Tailwind), and REST/GraphQL APIs.',
    difficulty: 'Moderate',
    averageSalaryIndia: '₹6 - 18 LPA',
    averageSalaryUS: '$85,000 - $140,000',
    marketDemand: 'Very High',
    compatibleDegrees: ['B.Tech', 'BCA', 'MCA', 'B.Sc', 'Diploma', 'No Technical Degree', 'Any Degree'],
    primarySkills: [
      { skillName: 'JavaScript', minProficiency: 'Intermediate', importance: 'Essential', weight: 10 },
      { skillName: 'React', minProficiency: 'Intermediate', importance: 'Essential', weight: 10 },
      { skillName: 'HTML5', minProficiency: 'Advanced', importance: 'Essential', weight: 9 },
      { skillName: 'CSS3 / Modern Styling', minProficiency: 'Intermediate', importance: 'Essential', weight: 9 },
      { skillName: 'TypeScript', minProficiency: 'Intermediate', importance: 'Important', weight: 8 },
      { skillName: 'Tailwind CSS', minProficiency: 'Intermediate', importance: 'Important', weight: 7 },
      { skillName: 'Git & GitHub', minProficiency: 'Intermediate', importance: 'Essential', weight: 8 },
      { skillName: 'Next.js', minProficiency: 'Beginner', importance: 'Nice-to-Have', weight: 6 }
    ],
    interests: ['Coding & Web Development', 'UI/UX Design & Creative Arts', 'Problem Solving & Algorithms'],
    strengths: ['Creative Visual Design', 'Analytical & Logical Reasoning', 'Persistence in Debugging'],
    typicalResponsibilities: [
      'Develop modular, reusable React components with clean state management.',
      'Ensure cross-browser compatibility, responsive mobile-first layouts, and WCAG accessibility standards.',
      'Integrate backend RESTful and GraphQL APIs with optimistic UI updates and error boundaries.',
      'Optimize web performance, Core Web Vitals, code-splitting, and asset caching.',
      'Collaborate with designers in Figma to faithfully translate wireframes into interactive code.'
    ],
    careerProgression: [
      {
        level: 'Beginner',
        title: 'Junior Frontend Developer',
        experienceRange: '0 - 2 years',
        typicalSalaryRange: '₹4.5 - 9 LPA',
        responsibilities: ['Building UI components', 'Styling pages with Tailwind CSS', 'Fixing UI bugs and responsive issues']
      },
      {
        level: 'Intermediate',
        title: 'Frontend Engineer / React Specialist',
        experienceRange: '2 - 5 years',
        typicalSalaryRange: '₹10 - 24 LPA',
        responsibilities: ['Architecting client-side state', 'Implementing SSR with Next.js', 'Refactoring legacy codebases']
      },
      {
        level: 'Advanced',
        title: 'Staff Frontend Architect / Principal UI Engineer',
        experienceRange: '5+ years',
        typicalSalaryRange: '₹26 - 55 LPA',
        responsibilities: ['Designing corporate design systems', 'Setting frontend infrastructure and CI/CD', 'Mentoring frontend teams']
      }
    ],
    recommendedProjects: ['portfolio-saas-dashboard', 'kanban-task-app'],
    recommendedCertifications: ['meta-frontend-cert', 'aws-certified-cloud-practitioner'],
    interviewFocusAreas: ['JavaScript Closures & Event Loop', 'React Hooks Lifecycle & Re-renders', 'CSS Flexbox/Grid layouts', 'TypeScript Generics', 'Performance Optimization'],
    topHiringCompanies: ['Google', 'Microsoft', 'Razorpay', 'Uber', 'Zomato', 'Freshworks', 'Atlassian']
  },

  // 3. Full Stack Web Engineer
  {
    id: 'fullstack-developer',
    title: 'Full Stack Web Engineer',
    category: 'Software Development',
    shortDescription: 'Master the complete web lifecycle from frontend UI to scalable backend APIs and database architectures.',
    fullOverview: 'Full Stack Engineers are versatile problem solvers who build end-to-end web applications. They construct responsive user interfaces, design resilient RESTful/GraphQL microservice APIs, handle database migrations, authenticate users securely, and deploy cloud infrastructure.',
    difficulty: 'Challenging',
    averageSalaryIndia: '₹7 - 24 LPA',
    averageSalaryUS: '$95,000 - $160,000',
    marketDemand: 'Explosive',
    compatibleDegrees: ['B.Tech', 'M.Tech', 'BCA', 'MCA', 'B.Sc', 'Diploma', 'No Technical Degree'],
    primarySkills: [
      { skillName: 'JavaScript', minProficiency: 'Intermediate', importance: 'Essential', weight: 10 },
      { skillName: 'React', minProficiency: 'Intermediate', importance: 'Essential', weight: 9 },
      { skillName: 'Node.js', minProficiency: 'Intermediate', importance: 'Essential', weight: 9 },
      { skillName: 'SQL', minProficiency: 'Intermediate', importance: 'Essential', weight: 8 },
      { skillName: 'TypeScript', minProficiency: 'Intermediate', importance: 'Important', weight: 8 },
      { skillName: 'Data Structures & Algorithms', minProficiency: 'Intermediate', importance: 'Important', weight: 8 },
      { skillName: 'Git & GitHub', minProficiency: 'Intermediate', importance: 'Essential', weight: 8 },
      { skillName: 'Docker & Containerization', minProficiency: 'Beginner', importance: 'Important', weight: 7 }
    ],
    interests: ['Coding & Web Development', 'Problem Solving & Algorithms', 'Cloud Architecture & DevOps'],
    strengths: ['Systems Thinking & Architecture', 'Analytical & Logical Reasoning', 'Persistence in Debugging'],
    typicalResponsibilities: [
      'Design, implement, and deploy end-to-end full-stack web applications and microservices.',
      'Architect relational (PostgreSQL) and NoSQL (MongoDB/Redis) database schemas and query indexes.',
      'Implement robust JWT/OAuth 2.0 authentication and authorization protocols.',
      'Build automated CI/CD deployment pipelines using Docker and cloud services.'
    ],
    careerProgression: [
      { level: 'Beginner', title: 'Associate Full Stack Developer', experienceRange: '0 - 2 years', typicalSalaryRange: '₹5.5 - 10 LPA', responsibilities: ['Building CRUD endpoints', 'Implementing frontend UI', 'Writing integration tests'] },
      { level: 'Intermediate', title: 'Full Stack Engineer', experienceRange: '2 - 5 years', typicalSalaryRange: '₹12 - 28 LPA', responsibilities: ['System architecture', 'Database query optimization', 'Managing cloud deployments'] },
      { level: 'Advanced', title: 'Lead Full Stack Architect', experienceRange: '5+ years', typicalSalaryRange: '₹30 - 65 LPA', responsibilities: ['Enterprise architecture', 'Technical roadmap execution', 'Leading engineering chapters'] }
    ],
    recommendedProjects: ['collaborative-whiteboard'],
    recommendedCertifications: ['aws-certified-developer', 'meta-backend-cert'],
    interviewFocusAreas: ['Full Stack Architecture', 'System Design (Rate Limiting, Caching)', 'SQL vs NoSQL trade-offs', 'DSA Problem Solving'],
    topHiringCompanies: ['Meta', 'Amazon', 'Intuit', 'Postman', 'Paytm', 'Oracle', 'Cisco']
  },

  // 4. Machine Learning Engineer
  {
    id: 'machine-learning-engineer',
    title: 'Machine Learning Engineer',
    category: 'AI/ML',
    shortDescription: 'Design, train, and deploy intelligent predictive models and neural network architectures into production.',
    fullOverview: 'A Machine Learning Engineer bridges theoretical AI research and production software engineering. They build data preprocessing pipelines, train and fine-tune supervised/unsupervised ML models and deep neural nets (PyTorch/TensorFlow), and deploy scalable inference microservices on cloud infrastructure.',
    difficulty: 'High',
    averageSalaryIndia: '₹9 - 30 LPA',
    averageSalaryUS: '$120,000 - $195,000',
    marketDemand: 'Explosive',
    compatibleDegrees: ['B.Tech', 'M.Tech', 'M.Sc', 'MCA', 'B.Sc', 'Engineering'],
    primarySkills: [
      { skillName: 'Python', minProficiency: 'Advanced', importance: 'Essential', weight: 10 },
      { skillName: 'Machine Learning', minProficiency: 'Intermediate', importance: 'Essential', weight: 10 },
      { skillName: 'Deep Learning', minProficiency: 'Intermediate', importance: 'Essential', weight: 9 },
      { skillName: 'Linear Algebra & Calculus', minProficiency: 'Intermediate', importance: 'Essential', weight: 9 },
      { skillName: 'Probability & Statistics', minProficiency: 'Advanced', importance: 'Essential', weight: 9 },
      { skillName: 'Pandas & NumPy', minProficiency: 'Advanced', importance: 'Essential', weight: 9 },
      { skillName: 'Docker & Containerization', minProficiency: 'Intermediate', importance: 'Important', weight: 8 },
      { skillName: 'Data Structures & Algorithms', minProficiency: 'Intermediate', importance: 'Important', weight: 8 }
    ],
    interests: ['Artificial Intelligence & ML', 'Research & Scientific Discovery', 'Problem Solving & Algorithms'],
    strengths: ['Mathematical Aptitude', 'Analytical & Logical Reasoning', 'Systems Thinking & Architecture'],
    typicalResponsibilities: [
      'Design, train, validate, and optimize predictive machine learning models.',
      'Implement feature engineering pipelines and high-throughput data transformers.',
      'Deploy containerized ML inference endpoints with FastAPI, Docker, and Kubernetes.',
      'Monitor model drift, latency, and throughput in live production environments (MLOps).'
    ],
    careerProgression: [
      { level: 'Beginner', title: 'Junior ML Engineer / AI Associate', experienceRange: '0 - 2 years', typicalSalaryRange: '₹7 - 14 LPA', responsibilities: ['Data preprocessing', 'Model training & baseline evaluation', 'Feature selection'] },
      { level: 'Intermediate', title: 'Senior Machine Learning Engineer', experienceRange: '2 - 5 years', typicalSalaryRange: '₹16 - 36 LPA', responsibilities: ['MLOps pipeline architecture', 'Hyperparameter optimization', 'Model compression & latency tuning'] },
      { level: 'Advanced', title: 'Principal AI Scientist / Staff ML Architect', experienceRange: '5+ years', typicalSalaryRange: '₹40 - 90 LPA', responsibilities: ['Leading AI strategy', 'Novel algorithm research', 'Scaling multi-region inference infrastructure'] }
    ],
    recommendedProjects: ['fraud-detection-engine'],
    recommendedCertifications: ['aws-certified-machine-learning', 'tensorflow-developer-cert'],
    interviewFocusAreas: ['Gradient Descent & Backpropagation', 'Loss Functions & Regularization', 'MLOps & Model Serving', 'Python Numerical Vectorization'],
    topHiringCompanies: ['Google DeepMind', 'NVIDIA', 'Microsoft AI', 'OpenAI', 'Apple', 'Flipkart AI', 'TCS Research']
  },

  // 5. Cloud & DevOps Solutions Engineer
  {
    id: 'cloud-devops-engineer',
    title: 'Cloud & DevOps Solutions Engineer',
    category: 'Cloud & DevOps',
    shortDescription: 'Build reliable cloud infrastructure, automated CI/CD pipelines, and high-availability Kubernetes clusters.',
    fullOverview: 'Cloud & DevOps Engineers automate the entire software delivery lifecycle. They provision resilient multi-region infrastructure using Infrastructure as Code (Terraform), manage containerized workloads in Kubernetes, configure CI/CD pipelines, and guarantee 99.99% system reliability through monitoring and observability.',
    difficulty: 'Challenging',
    averageSalaryIndia: '₹8 - 25 LPA',
    averageSalaryUS: '$110,000 - $175,000',
    marketDemand: 'Very High',
    compatibleDegrees: ['B.Tech', 'M.Tech', 'BCA', 'MCA', 'B.Sc', 'Diploma', 'Engineering'],
    primarySkills: [
      { skillName: 'Linux & Shell Scripting', minProficiency: 'Advanced', importance: 'Essential', weight: 10 },
      { skillName: 'AWS (Amazon Web Services)', minProficiency: 'Intermediate', importance: 'Essential', weight: 10 },
      { skillName: 'Docker & Containerization', minProficiency: 'Advanced', importance: 'Essential', weight: 10 },
      { skillName: 'Kubernetes (K8s)', minProficiency: 'Intermediate', importance: 'Essential', weight: 9 },
      { skillName: 'DevOps & CI/CD', minProficiency: 'Intermediate', importance: 'Essential', weight: 9 },
      { skillName: 'Terraform (IaC)', minProficiency: 'Intermediate', importance: 'Important', weight: 8 },
      { skillName: 'Git & GitHub', minProficiency: 'Intermediate', importance: 'Essential', weight: 8 },
      { skillName: 'Python', minProficiency: 'Beginner', importance: 'Important', weight: 7 }
    ],
    interests: ['Cloud Architecture & DevOps', 'Problem Solving & Algorithms', 'Hardware & IoT Systems'],
    strengths: ['Systems Thinking & Architecture', 'Detail Orientation & Precision', 'Persistence in Debugging'],
    typicalResponsibilities: [
      'Provision and orchestrate cloud resources using Terraform and AWS CloudFormation.',
      'Configure automated CI/CD pipelines using GitHub Actions and ArgoCD.',
      'Deploy and scale resilient multi-tenant Kubernetes clusters.',
      'Set up observability metrics, Prometheus, Grafana, and incident alerting.'
    ],
    careerProgression: [
      { level: 'Beginner', title: 'Associate Cloud Engineer / DevOps Trainee', experienceRange: '0 - 2 years', typicalSalaryRange: '₹5.5 - 11 LPA', responsibilities: ['Maintaining CI/CD scripts', 'Containerizing applications', 'Cloud resource monitoring'] },
      { level: 'Intermediate', title: 'Senior DevOps / SRE Engineer', experienceRange: '2 - 5 years', typicalSalaryRange: '₹14 - 30 LPA', responsibilities: ['IaC automation', 'Zero-downtime deployments', 'Incident response & post-mortems'] },
      { level: 'Advanced', title: 'Staff Cloud Architect / Head of Infrastructure', experienceRange: '5+ years', typicalSalaryRange: '₹35 - 75 LPA', responsibilities: ['Global multi-cloud architecture', 'FinOps cost optimization', 'Enterprise compliance'] }
    ],
    recommendedProjects: ['k8s-microservices-deploy'],
    recommendedCertifications: ['aws-solutions-architect-associate', 'certified-kubernetes-administrator'],
    interviewFocusAreas: ['Linux Internals & Networking', 'Kubernetes Pod Lifecycle & Ingress', 'Terraform State Management', 'CI/CD Best Practices'],
    topHiringCompanies: ['Red Hat', 'AWS', 'Cisco', 'Cognizant', 'PhonePe', 'Salesforce', 'Wipro']
  },

  // 6. Cybersecurity Analyst & Threat Hunter
  {
    id: 'cybersecurity-analyst',
    title: 'Cybersecurity Analyst & Threat Hunter',
    category: 'Cybersecurity',
    shortDescription: 'Defend corporate networks, detect cyber threats, perform vulnerability assessments, and safeguard critical data.',
    fullOverview: 'A Cybersecurity Analyst protects organization computer networks, cloud infrastructure, and sensitive customer data against cyber attacks. They analyze threat feeds, configure firewalls and SIEM systems, hunt for anomalies, conduct vulnerability assessments, and ensure compliance with security standards.',
    difficulty: 'Challenging',
    averageSalaryIndia: '₹6.5 - 20 LPA',
    averageSalaryUS: '$85,000 - $145,000',
    marketDemand: 'Very High',
    compatibleDegrees: ['B.Tech', 'BCA', 'MCA', 'B.Sc', 'Diploma', 'Engineering', 'Any Degree'],
    primarySkills: [
      { skillName: 'Cybersecurity Fundamentals', minProficiency: 'Advanced', importance: 'Essential', weight: 10 },
      { skillName: 'Network Security & Firewalls', minProficiency: 'Intermediate', importance: 'Essential', weight: 10 },
      { skillName: 'Linux & Shell Scripting', minProficiency: 'Intermediate', importance: 'Essential', weight: 9 },
      { skillName: 'Ethical Hacking & Penetration Testing', minProficiency: 'Intermediate', importance: 'Important', weight: 8 },
      { skillName: 'SOC & Incident Response', minProficiency: 'Intermediate', importance: 'Important', weight: 8 },
      { skillName: 'Python', minProficiency: 'Beginner', importance: 'Important', weight: 7 },
      { skillName: 'Cryptography & PKI', minProficiency: 'Beginner', importance: 'Important', weight: 7 }
    ],
    interests: ['Cybersecurity & Defense', 'Problem Solving & Algorithms', 'Cloud Architecture & DevOps'],
    strengths: ['Detail Orientation & Precision', 'Analytical & Logical Reasoning', 'Persistence in Debugging'],
    typicalResponsibilities: [
      'Monitor and triage alerts in Security Operations Center (SOC) using SIEM tools.',
      'Perform regular vulnerability scanning and penetration tests against web apps.',
      'Investigate security incidents, malware outbreaks, and phishing campaigns.',
      'Enforce zero-trust access controls, multi-factor authentication, and encryption.'
    ],
    careerProgression: [
      { level: 'Beginner', title: 'SOC Tier 1 Analyst', experienceRange: '0 - 2 years', typicalSalaryRange: '₹5 - 9 LPA', responsibilities: ['Alert triage', 'Initial incident containment', 'Vulnerability scanning'] },
      { level: 'Intermediate', title: 'Senior Security Engineer / Penetration Tester', experienceRange: '2 - 5 years', typicalSalaryRange: '₹12 - 25 LPA', responsibilities: ['Red/Blue team exercises', 'SIEM rule tuning', 'Threat modeling'] },
      { level: 'Advanced', title: 'Lead Security Architect / CISO Advisor', experienceRange: '5+ years', typicalSalaryRange: '₹28 - 60 LPA', responsibilities: ['Enterprise security posture', 'Board level reporting', 'Regulatory compliance'] }
    ],
    recommendedProjects: ['soc-home-lab-splunk'],
    recommendedCertifications: ['comptia-security-plus', 'cissp-cert'],
    interviewFocusAreas: ['TCP/IP 3-Way Handshake & Wireshark', 'OWASP Top 10 Web Vulnerabilities', 'SOC Incident Handling Process'],
    topHiringCompanies: ['CrowdStrike', 'Palo Alto Networks', 'KPMG', 'EY', 'Tata Communications', 'Cisco Security', 'IBM']
  },

  // 7. UI/UX Product Designer
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Product Designer',
    category: 'UI/UX & Design',
    shortDescription: 'Craft intuitive, accessible, and visually stunning digital product experiences that users love.',
    fullOverview: 'A UI/UX Designer designs the end-to-end user experience for web and mobile software. They conduct user research, create information architectures, build wireframes and high-fidelity prototypes in Figma, validate concepts through usability testing, and establish scalable design systems.',
    difficulty: 'Moderate',
    averageSalaryIndia: '₹5.5 - 18 LPA',
    averageSalaryUS: '$80,000 - $135,000',
    marketDemand: 'Very High',
    compatibleDegrees: ['BA', 'MA', 'B.Sc', 'B.Tech', 'BCA', 'No Technical Degree', 'Any Degree'],
    primarySkills: [
      { skillName: 'UI/UX Design', minProficiency: 'Advanced', importance: 'Essential', weight: 10 },
      { skillName: 'Figma', minProficiency: 'Advanced', importance: 'Essential', weight: 10 },
      { skillName: 'User Research & Personas', minProficiency: 'Intermediate', importance: 'Essential', weight: 9 },
      { skillName: 'Wireframing & Prototyping', minProficiency: 'Advanced', importance: 'Essential', weight: 9 },
      { skillName: 'Design Systems & Tokens', minProficiency: 'Intermediate', importance: 'Important', weight: 8 },
      { skillName: 'Communication Skills', minProficiency: 'Intermediate', importance: 'Essential', weight: 8 },
      { skillName: 'HTML5', minProficiency: 'Beginner', importance: 'Nice-to-Have', weight: 6 }
    ],
    interests: ['UI/UX Design & Creative Arts', 'Product Strategy & Management', 'Research & Scientific Discovery'],
    strengths: ['Creative Visual Design', 'Empathetic User Understanding', 'Clear Verbal & Written Communication'],
    typicalResponsibilities: [
      'Conduct user interviews, surveys, and usability testing sessions.',
      'Design low-to-high fidelity interactive prototypes in Figma with auto-layout.',
      'Build and maintain scalable design systems with reusable components and tokens.',
      'Collaborate closely with frontend engineers during UI implementation and QA reviews.'
    ],
    careerProgression: [
      { level: 'Beginner', title: 'Junior UX/UI Designer', experienceRange: '0 - 2 years', typicalSalaryRange: '₹4.5 - 9 LPA', responsibilities: ['Wireframing user flows', 'Creating Figma UI components', 'Conducting user survey analysis'] },
      { level: 'Intermediate', title: 'Senior Product Designer', experienceRange: '2 - 5 years', typicalSalaryRange: '₹11 - 24 LPA', responsibilities: ['Owning end-to-end feature UX', 'Design system stewardship', 'Facilitating design sprints'] },
      { level: 'Advanced', title: 'Design Director / VP of Design', experienceRange: '5+ years', typicalSalaryRange: '₹28 - 60 LPA', responsibilities: ['Setting design vision', 'Strategic brand design', 'Managing multi-disciplinary design teams'] }
    ],
    recommendedProjects: ['portfolio-saas-dashboard'],
    recommendedCertifications: ['google-ux-design-cert'],
    interviewFocusAreas: ['Design Thinking Process Walkthrough', 'Figma Mastery & Auto-layout', 'Portfolio Case Study Defense'],
    topHiringCompanies: ['Adobe', 'Spotify', 'Swiggy', 'CRED', 'Airbnb', 'Microsoft', 'Canva']
  },

  // 8. Technical Product Manager
  {
    id: 'product-manager',
    title: 'Technical Product Manager',
    category: 'Product & Management',
    shortDescription: 'Lead the intersection of business strategy, technology, and user experience to build winning products.',
    fullOverview: 'Product Managers are the visionaries and orchestrators behind successful software products. They define product strategy, write detailed specifications (PRDs), prioritize feature backlogs using data metrics, coordinate cross-functional engineering and design squads, and drive measurable business impact.',
    difficulty: 'Challenging',
    averageSalaryIndia: '₹12 - 35 LPA',
    averageSalaryUS: '$115,000 - $185,000',
    marketDemand: 'Very High',
    compatibleDegrees: ['MBA', 'B.Tech', 'M.Tech', 'B.Com', 'M.Com', 'MCA', 'Management', 'Any Degree'],
    primarySkills: [
      { skillName: 'Product Management', minProficiency: 'Advanced', importance: 'Essential', weight: 10 },
      { skillName: 'Agile & Scrum Methodologies', minProficiency: 'Advanced', importance: 'Essential', weight: 9 },
      { skillName: 'Data Analytics', minProficiency: 'Intermediate', importance: 'Essential', weight: 9 },
      { skillName: 'Communication Skills', minProficiency: 'Advanced', importance: 'Essential', weight: 10 },
      { skillName: 'Problem Solving & Critical Thinking', minProficiency: 'Advanced', importance: 'Essential', weight: 9 },
      { skillName: 'UI/UX Design', minProficiency: 'Beginner', importance: 'Important', weight: 7 },
      { skillName: 'SQL', minProficiency: 'Beginner', importance: 'Important', weight: 7 }
    ],
    interests: ['Product Strategy & Management', 'Business & Financial Markets', 'Leadership & People Management', 'Entrepreneurship & Startups'],
    strengths: ['Business Strategic Acumen', 'Clear Verbal & Written Communication', 'Empathetic User Understanding'],
    typicalResponsibilities: [
      'Define long-term product vision, strategy, and quarterly OKRs.',
      'Write clear Product Requirement Documents (PRDs) and user stories.',
      'Prioritize sprint backlogs using RICE/MoSCoW frameworks.',
      'Analyze product engagement metrics (DAU/MAU, churn, conversion funnels).'
    ],
    careerProgression: [
      { level: 'Beginner', title: 'Associate Product Manager (APM)', experienceRange: '0 - 2 years', typicalSalaryRange: '₹8 - 16 LPA', responsibilities: ['Writing user stories', 'Managing sprint ceremonies', 'Analyzing product funnels'] },
      { level: 'Intermediate', title: 'Senior Product Manager', experienceRange: '2 - 5 years', typicalSalaryRange: '₹18 - 40 LPA', responsibilities: ['Leading product lines', 'Defining pricing and monetization', 'Driving GTM strategies'] },
      { level: 'Advanced', title: 'Group PM / VP of Product', experienceRange: '5+ years', typicalSalaryRange: '₹45 - 90 LPA', responsibilities: ['Company product portfolio vision', 'Hiring and coaching PMs', 'Executive board alignment'] }
    ],
    recommendedProjects: ['sales-dashboard'],
    recommendedCertifications: ['pmp-cert'],
    interviewFocusAreas: ['Product Sense & User Journey Design', 'Metrics & Root Cause Analysis', 'Technical Architecture Trade-offs'],
    topHiringCompanies: ['Google', 'Uber', 'Flipkart', 'Zomato', 'Microsoft', 'Atlassian', 'Blinkit']
  },

  // 9. Big Data & Analytics Engineer
  {
    id: 'data-engineer',
    title: 'Big Data & Analytics Engineer',
    category: 'Data',
    shortDescription: 'Architect robust data lakes, real-time streaming pipelines, and high-performance analytical warehouses.',
    fullOverview: 'Data Engineers build the foundational plumbing that powers modern data analysis and AI. They design resilient distributed batch and streaming pipelines using Spark, Kafka, Airflow, and Snowflake, ensuring high data quality, reliability, and sub-second query performance for analytics teams.',
    difficulty: 'Challenging',
    averageSalaryIndia: '₹8 - 26 LPA',
    averageSalaryUS: '$105,000 - $170,000',
    marketDemand: 'Explosive',
    compatibleDegrees: ['B.Tech', 'M.Tech', 'MCA', 'B.Sc', 'M.Sc', 'Engineering'],
    primarySkills: [
      { skillName: 'SQL', minProficiency: 'Advanced', importance: 'Essential', weight: 10 },
      { skillName: 'Python', minProficiency: 'Intermediate', importance: 'Essential', weight: 10 },
      { skillName: 'Data Engineering & ETL', minProficiency: 'Intermediate', importance: 'Essential', weight: 10 },
      { skillName: 'Apache Spark', minProficiency: 'Intermediate', importance: 'Essential', weight: 9 },
      { skillName: 'Cloud Computing', minProficiency: 'Intermediate', importance: 'Important', weight: 8 },
      { skillName: 'Docker & Containerization', minProficiency: 'Beginner', importance: 'Important', weight: 7 },
      { skillName: 'Data Structures & Algorithms', minProficiency: 'Intermediate', importance: 'Important', weight: 8 }
    ],
    interests: ['Data Analytics & Insights', 'Cloud Architecture & DevOps', 'Problem Solving & Algorithms'],
    strengths: ['Systems Thinking & Architecture', 'Analytical & Logical Reasoning', 'Detail Orientation & Precision'],
    typicalResponsibilities: [
      'Design, construct, and maintain scalable data pipelines with Apache Spark & Airflow.',
      'Model efficient star/snowflake schemas in modern cloud data warehouses.',
      'Implement real-time event streaming with Apache Kafka.',
      'Ensure data governance, SLA monitoring, and data quality validation.'
    ],
    careerProgression: [
      { level: 'Beginner', title: 'Junior Data Engineer', experienceRange: '0 - 2 years', typicalSalaryRange: '₹6 - 12 LPA', responsibilities: ['Writing ETL scripts', 'SQL query tuning', 'Data schema maintenance'] },
      { level: 'Intermediate', title: 'Senior Data Engineer', experienceRange: '2 - 5 years', typicalSalaryRange: '₹14 - 32 LPA', responsibilities: ['Architecting real-time streaming pipelines', 'Managing Spark clusters', 'Data lakehouse design'] },
      { level: 'Advanced', title: 'Principal Data Architect', experienceRange: '5+ years', typicalSalaryRange: '₹35 - 80 LPA', responsibilities: ['Enterprise data strategy', 'Unified data governance', 'Leading big data teams'] }
    ],
    recommendedProjects: ['sales-dashboard'],
    recommendedCertifications: ['aws-certified-machine-learning'],
    interviewFocusAreas: ['Distributed Computing Concepts', 'SQL Window Functions & Indexing', 'Kafka Partitioning & Consumer Groups'],
    topHiringCompanies: ['Netflix', 'Spotify', 'Amazon', 'Walmart Global Tech', 'Tiger Analytics', 'JPMorgan']
  },

  // 10. Generative AI & LLM Application Engineer
  {
    id: 'ai-prompt-engineer',
    title: 'Generative AI & LLM Application Engineer',
    category: 'AI/ML',
    shortDescription: 'Build intelligent applications leveraging Large Language Models, RAG systems, and AI agents.',
    fullOverview: 'Generative AI Engineers specialize in developing context-aware applications powered by LLMs. They master advanced prompt engineering, Retrieval Augmented Generation (RAG) with vector databases, fine-tuning open-source models, and orchestrating multi-agent workflows using LangChain and LlamaIndex.',
    difficulty: 'Moderate',
    averageSalaryIndia: '₹8 - 25 LPA',
    averageSalaryUS: '$110,000 - $180,000',
    marketDemand: 'Explosive',
    compatibleDegrees: ['B.Tech', 'M.Tech', 'BCA', 'MCA', 'B.Sc', 'M.Sc', 'Any Degree'],
    primarySkills: [
      { skillName: 'Artificial Intelligence & Generative AI', minProficiency: 'Advanced', importance: 'Essential', weight: 10 },
      { skillName: 'Python', minProficiency: 'Intermediate', importance: 'Essential', weight: 10 },
      { skillName: 'FastAPI', minProficiency: 'Intermediate', importance: 'Important', weight: 8 },
      { skillName: 'Natural Language Processing (NLP)', minProficiency: 'Intermediate', importance: 'Important', weight: 8 },
      { skillName: 'Git & GitHub', minProficiency: 'Intermediate', importance: 'Essential', weight: 7 },
      { skillName: 'React', minProficiency: 'Beginner', importance: 'Nice-to-Have', weight: 6 }
    ],
    interests: ['Artificial Intelligence & ML', 'Coding & Web Development', 'Research & Scientific Discovery'],
    strengths: ['Analytical & Logical Reasoning', 'Rapid Learning & Adaptability', 'Clear Verbal & Written Communication'],
    typicalResponsibilities: [
      'Develop RAG pipelines utilizing vector embeddings and vector databases (Pinecone, Qdrant).',
      'Engineer reliable, structured prompts with few-shot learning and evaluation benchmarks.',
      'Integrate LLM API gateways with rate limiting, caching, and cost tracking.',
      'Build interactive AI chatbots and autonomous agent workflows with LangChain.'
    ],
    careerProgression: [
      { level: 'Beginner', title: 'Junior GenAI Developer', experienceRange: '0 - 2 years', typicalSalaryRange: '₹6.5 - 13 LPA', responsibilities: ['Building basic RAG pipelines', 'Prompt testing & evaluation', 'API integration'] },
      { level: 'Intermediate', title: 'Generative AI Engineer', experienceRange: '2 - 5 years', typicalSalaryRange: '₹15 - 34 LPA', responsibilities: ['Fine-tuning open models (Llama 3/Mistral)', 'Multi-agent orchestration', 'Vector search optimization'] },
      { level: 'Advanced', title: 'Lead AI Applications Architect', experienceRange: '5+ years', typicalSalaryRange: '₹36 - 80 LPA', responsibilities: ['Enterprise GenAI strategy', 'AI safety & guardrail governance', 'Scaling production AI infrastructure'] }
    ],
    recommendedProjects: ['fraud-detection-engine'],
    recommendedCertifications: ['aws-certified-machine-learning'],
    interviewFocusAreas: ['RAG Chunking & Embedding Strategies', 'Prompt Injection Defense', 'Vector Indexing'],
    topHiringCompanies: ['Microsoft', 'OpenAI', 'Anthropic', 'Hugging Face', 'Infosys AI Labs', 'Wipro Holmes']
  },

  // 11. Enterprise Java / Spring Boot Backend Engineer
  {
    id: 'backend-java-developer',
    title: 'Enterprise Java / Spring Boot Backend Engineer',
    category: 'Software Development',
    shortDescription: 'Construct high-throughput, secure, and fault-tolerant financial and enterprise backend services.',
    fullOverview: 'Java Backend Engineers build mission-critical, enterprise-scale microservice architectures that power global banking, healthcare, and retail systems. They excel in Spring Boot, REST APIs, relational database transaction management (ACID), message brokers, and secure distributed design.',
    difficulty: 'Challenging',
    averageSalaryIndia: '₹7 - 22 LPA',
    averageSalaryUS: '$95,000 - $155,000',
    marketDemand: 'Very High',
    compatibleDegrees: ['B.Tech', 'M.Tech', 'BCA', 'MCA', 'B.Sc', 'Diploma', 'Engineering'],
    primarySkills: [
      { skillName: 'Java', minProficiency: 'Advanced', importance: 'Essential', weight: 10 },
      { skillName: 'Spring Boot', minProficiency: 'Intermediate', importance: 'Essential', weight: 10 },
      { skillName: 'SQL', minProficiency: 'Intermediate', importance: 'Essential', weight: 9 },
      { skillName: 'Data Structures & Algorithms', minProficiency: 'Intermediate', importance: 'Essential', weight: 9 },
      { skillName: 'Docker & Containerization', minProficiency: 'Beginner', importance: 'Important', weight: 7 },
      { skillName: 'Git & GitHub', minProficiency: 'Intermediate', importance: 'Essential', weight: 8 }
    ],
    interests: ['Coding & Web Development', 'Problem Solving & Algorithms', 'Cloud Architecture & DevOps'],
    strengths: ['Analytical & Logical Reasoning', 'Systems Thinking & Architecture', 'Detail Orientation & Precision'],
    typicalResponsibilities: [
      'Design, implement, and maintain high-volume microservices using Spring Boot and Spring Cloud.',
      'Optimize complex database transactions, connection pools, and Hibernate/JPA queries.',
      'Implement enterprise security using Spring Security and OAuth2.',
      'Write comprehensive unit and integration test suites using JUnit and Mockito.'
    ],
    careerProgression: [
      { level: 'Beginner', title: 'Junior Java Developer', experienceRange: '0 - 2 years', typicalSalaryRange: '₹5 - 9.5 LPA', responsibilities: ['Developing REST endpoints', 'Writing unit tests with JUnit', 'Database schema scripts'] },
      { level: 'Intermediate', title: 'Senior Java Backend Engineer', experienceRange: '2 - 5 years', typicalSalaryRange: '₹12 - 26 LPA', responsibilities: ['Microservice architecture', 'Performance tuning (JVM profiling)', 'Kafka integration'] },
      { level: 'Advanced', title: 'Principal Java Architect', experienceRange: '5+ years', typicalSalaryRange: '₹30 - 65 LPA', responsibilities: ['Enterprise system architecture', 'High availability disaster recovery', 'Technical governance'] }
    ],
    recommendedProjects: ['collaborative-whiteboard'],
    recommendedCertifications: ['aws-solutions-architect-associate'],
    interviewFocusAreas: ['Java Memory Model & Garbage Collection', 'Spring Boot Bean Lifecycle & DI', 'Concurrency & Multithreading', 'ACID Transactions'],
    topHiringCompanies: ['JPMorgan Chase', 'Morgan Stanley', 'Goldman Sachs', 'Oracle', 'SAP', 'Infosys', 'TCS']
  },

  // 12. IT & Business Systems Analyst
  {
    id: 'business-analyst',
    title: 'IT & Business Systems Analyst',
    category: 'Business & Finance',
    shortDescription: 'Bridge client business challenges with scalable technology solutions through process modeling and analytics.',
    fullOverview: 'Business Analysts act as vital translators between business stakeholders and software engineering teams. They elicit requirements, design process workflows, analyze financial and operational data, create user stories, and ensure deliverables meet strategic organizational goals.',
    difficulty: 'Moderate',
    averageSalaryIndia: '₹6 - 16 LPA',
    averageSalaryUS: '$75,000 - $125,000',
    marketDemand: 'Very High',
    compatibleDegrees: ['B.Com', 'M.Com', 'MBA', 'B.Tech', 'B.Sc', 'BA', 'MA', 'Management', 'Commerce', 'Any Degree'],
    primarySkills: [
      { skillName: 'Business Analysis', minProficiency: 'Advanced', importance: 'Essential', weight: 10 },
      { skillName: 'Advanced Excel', minProficiency: 'Intermediate', importance: 'Essential', weight: 9 },
      { skillName: 'SQL', minProficiency: 'Beginner', importance: 'Important', weight: 8 },
      { skillName: 'Agile & Scrum Methodologies', minProficiency: 'Intermediate', importance: 'Essential', weight: 9 },
      { skillName: 'Communication Skills', minProficiency: 'Advanced', importance: 'Essential', weight: 10 },
      { skillName: 'Problem Solving & Critical Thinking', minProficiency: 'Advanced', importance: 'Essential', weight: 9 }
    ],
    interests: ['Business & Financial Markets', 'Product Strategy & Management', 'Data Analytics & Insights'],
    strengths: ['Business Strategic Acumen', 'Clear Verbal & Written Communication', 'Process Organization & Planning'],
    typicalResponsibilities: [
      'Elicit and document functional and non-functional requirements from stakeholders.',
      'Create process flow diagrams (BPMN) and wireframe mockups.',
      'Facilitate backlog refinement and sprint planning sessions with development teams.',
      'Perform user acceptance testing (UAT) and support go-live rollouts.'
    ],
    careerProgression: [
      { level: 'Beginner', title: 'Junior Business Analyst', experienceRange: '0 - 2 years', typicalSalaryRange: '₹4.5 - 8.5 LPA', responsibilities: ['Documenting requirements', 'Assisting UAT testing', 'Creating process flowcharts'] },
      { level: 'Intermediate', title: 'Senior Business Systems Analyst', experienceRange: '2 - 5 years', typicalSalaryRange: '₹10 - 20 LPA', responsibilities: ['Leading client discovery workshops', 'Gap analysis & ROI calculation', 'Managing stakeholder alignment'] },
      { level: 'Advanced', title: 'Lead Business Architect / Consultant', experienceRange: '5+ years', typicalSalaryRange: '₹22 - 45 LPA', responsibilities: ['Enterprise digital transformation', 'Strategic consulting', 'Practice leadership'] }
    ],
    recommendedProjects: ['sales-dashboard'],
    recommendedCertifications: ['pmp-cert'],
    interviewFocusAreas: ['Requirement Elicitation Techniques', 'BRD vs FRD vs User Stories', 'UAT Lifecycle & Defect Management'],
    topHiringCompanies: ['Accenture', 'Deloitte', 'Cognizant', 'Capgemini', 'HDFC Bank', 'PwC', 'KPMG']
  }
];

export const CAREER_CATEGORIES: (CareerCategory | 'All')[] = [
  'All',
  'Software Development',
  'Data',
  'AI/ML',
  'Cloud & DevOps',
  'Cybersecurity',
  'UI/UX & Design',
  'Product & Management',
  'Business & Finance',
  'Emerging Tech'
];
