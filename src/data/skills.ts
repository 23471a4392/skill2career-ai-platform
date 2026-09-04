import { SkillDefinition } from '../types';

export const SKILL_DEFINITIONS: SkillDefinition[] = [
  // Programming & Core CS
  { id: 'python', name: 'Python', category: 'Programming', description: 'General-purpose programming language widely used in AI, Data Science, Web, and Automation.', demandRating: 5, relatedSkills: ['Pandas', 'NumPy', 'Django', 'FastAPI', 'Machine Learning'] },
  { id: 'java', name: 'Java', category: 'Programming', description: 'Enterprise-grade object-oriented language for backend systems, Android, and distributed systems.', demandRating: 5, relatedSkills: ['Spring Boot', 'Hibernate', 'Data Structures', 'Microservices'] },
  { id: 'javascript', name: 'JavaScript', category: 'Programming', description: 'The fundamental scripting language of the web, powering frontend UI and Node.js backends.', demandRating: 5, relatedSkills: ['TypeScript', 'React', 'Node.js', 'HTML', 'CSS'] },
  { id: 'typescript', name: 'TypeScript', category: 'Programming', description: 'Typed superset of JavaScript providing compile-time type safety and enterprise scalability.', demandRating: 5, relatedSkills: ['JavaScript', 'React', 'Node.js', 'Next.js'] },
  { id: 'c', name: 'C', category: 'Programming', description: 'Low-level foundational systems programming language for OS kernels and embedded systems.', demandRating: 4, relatedSkills: ['C++', 'Data Structures', 'Operating Systems'] },
  { id: 'cpp', name: 'C++', category: 'Programming', description: 'High-performance systems language for game engines, quantitative finance, and system software.', demandRating: 5, relatedSkills: ['C', 'Data Structures', 'Algorithms', 'STL'] },
  { id: 'csharp', name: 'C# / .NET', category: 'Programming', description: 'Modern language by Microsoft for enterprise services, desktop applications, and Unity games.', demandRating: 4, relatedSkills: ['ASP.NET Core', 'SQL Server', 'Azure'] },
  { id: 'golang', name: 'Go (Golang)', category: 'Programming', description: 'High-concurrency compiled language engineered by Google for cloud microservices and distributed systems.', demandRating: 5, relatedSkills: ['Docker', 'Kubernetes', 'Microservices', 'gRPC'] },
  { id: 'rust', name: 'Rust', category: 'Programming', description: 'Memory-safe systems programming language without garbage collection.', demandRating: 4, relatedSkills: ['C++', 'Systems Programming', 'WebAssembly'] },
  { id: 'dsa', name: 'Data Structures & Algorithms', category: 'Programming', description: 'Core problem-solving foundation: Arrays, Trees, Graphs, Dynamic Programming, Complexity Analysis.', demandRating: 5, relatedSkills: ['Problem Solving', 'C++', 'Java', 'Python'] },
  { id: 'sql', name: 'SQL', category: 'Programming', description: 'Standard language for querying, manipulating, and managing relational databases.', demandRating: 5, relatedSkills: ['PostgreSQL', 'MySQL', 'Database Design', 'Data Analytics'] },
  { id: 'r', name: 'R', category: 'Programming', description: 'Language and environment for statistical computing, data mining, and bioinformatics.', demandRating: 4, relatedSkills: ['Statistics', 'Data Analytics', 'Data Visualization'] },
  { id: 'php', name: 'PHP', category: 'Programming', description: 'Server-side scripting language powering WordPress, Laravel, and dynamic web applications.', demandRating: 3, relatedSkills: ['Laravel', 'MySQL', 'JavaScript'] },
  { id: 'kotlin', name: 'Kotlin', category: 'Programming', description: 'Modern concise JVM language officially recommended by Google for Android app development.', demandRating: 4, relatedSkills: ['Java', 'Android Development', 'Mobile Architecture'] },
  { id: 'swift', name: 'Swift', category: 'Programming', description: 'Intuitive programming language created by Apple for building iOS, macOS, and watchOS apps.', demandRating: 4, relatedSkills: ['iOS Development', 'SwiftUI', 'Mobile Design'] },

  // Frameworks & Web Tools
  { id: 'html', name: 'HTML5', category: 'Frameworks & Tools', description: 'Standard semantic markup language for structuring documents on the World Wide Web.', demandRating: 5, relatedSkills: ['CSS', 'JavaScript', 'Web Accessibility'] },
  { id: 'css', name: 'CSS3 / Modern Styling', category: 'Frameworks & Tools', description: 'Style sheet language for responsive layouts, Flexbox, Grid, animations, and Tailwind CSS.', demandRating: 5, relatedSkills: ['HTML', 'Tailwind CSS', 'Responsive Design'] },
  { id: 'react', name: 'React', category: 'Frameworks & Tools', description: 'The industry-standard declarative component library for building modern dynamic web interfaces.', demandRating: 5, relatedSkills: ['JavaScript', 'TypeScript', 'Next.js', 'Redux', 'Tailwind CSS'] },
  { id: 'angular', name: 'Angular', category: 'Frameworks & Tools', description: 'Comprehensive Google-backed enterprise framework for single-page applications with TypeScript.', demandRating: 4, relatedSkills: ['TypeScript', 'RxJS', 'HTML', 'CSS'] },
  { id: 'vue', name: 'Vue.js', category: 'Frameworks & Tools', description: 'Progressive, approachable framework for building interactive user interfaces.', demandRating: 4, relatedSkills: ['JavaScript', 'HTML', 'Pinia'] },
  { id: 'nextjs', name: 'Next.js', category: 'Frameworks & Tools', description: 'Production React framework with SSR, SSG, server actions, and edge API capabilities.', demandRating: 5, relatedSkills: ['React', 'TypeScript', 'Node.js'] },
  { id: 'nodejs', name: 'Node.js', category: 'Frameworks & Tools', description: 'V8-powered asynchronous JavaScript runtime for high-throughput backend APIs and tooling.', demandRating: 5, relatedSkills: ['JavaScript', 'Express.js', 'REST APIs', 'MongoDB'] },
  { id: 'express', name: 'Express.js', category: 'Frameworks & Tools', description: 'Fast, unopinionated, minimalist web framework for Node.js REST API backends.', demandRating: 5, relatedSkills: ['Node.js', 'REST APIs', 'MongoDB'] },
  { id: 'django', name: 'Django', category: 'Frameworks & Tools', description: 'High-level Python web framework that enables rapid development of secure and clean websites.', demandRating: 4, relatedSkills: ['Python', 'PostgreSQL', 'REST APIs'] },
  { id: 'fastapi', name: 'FastAPI', category: 'Frameworks & Tools', description: 'Modern, ultra-fast Python web framework for building APIs with type hints and OpenAPI docs.', demandRating: 5, relatedSkills: ['Python', 'Docker', 'Machine Learning API'] },
  { id: 'springboot', name: 'Spring Boot', category: 'Frameworks & Tools', description: 'De facto standard enterprise framework for Java microservices and robust corporate architectures.', demandRating: 5, relatedSkills: ['Java', 'Microservices', 'SQL', 'Hibernate'] },
  { id: 'flutter', name: 'Flutter', category: 'Frameworks & Tools', description: 'Google UI toolkit for building natively compiled multi-platform apps from a single Dart codebase.', demandRating: 4, relatedSkills: ['Dart', 'Mobile Development', 'UI Design'] },
  { id: 'reactnative', name: 'React Native', category: 'Frameworks & Tools', description: 'Cross-platform native mobile app framework powered by React and JavaScript.', demandRating: 4, relatedSkills: ['React', 'JavaScript', 'Mobile UI'] },
  { id: 'graphql', name: 'GraphQL', category: 'Frameworks & Tools', description: 'Declarative query language for APIs allowing clients to request precisely the data they require.', demandRating: 4, relatedSkills: ['Node.js', 'REST APIs', 'Apollo'] },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'Frameworks & Tools', description: 'Utility-first CSS framework for rapid modern UI development and responsive design.', demandRating: 5, relatedSkills: ['CSS', 'HTML', 'React'] },

  // Data & AI
  { id: 'data_analytics', name: 'Data Analytics', category: 'Data & AI', description: 'Inspecting, cleansing, transforming, and modeling data to discover actionable business insights.', demandRating: 5, relatedSkills: ['SQL', 'Excel', 'Power BI', 'Python', 'Statistics'] },
  { id: 'machine_learning', name: 'Machine Learning', category: 'Data & AI', description: 'Supervised, unsupervised algorithms, regression, classification, clustering, scikit-learn.', demandRating: 5, relatedSkills: ['Python', 'Statistics', 'Deep Learning', 'Pandas'] },
  { id: 'deep_learning', name: 'Deep Learning', category: 'Data & AI', description: 'Neural networks, CNNs, RNNs, Transformers, computer vision, and PyTorch / TensorFlow.', demandRating: 5, relatedSkills: ['Python', 'PyTorch', 'TensorFlow', 'Machine Learning'] },
  { id: 'ai', name: 'Artificial Intelligence & Generative AI', category: 'Data & AI', description: 'LLMs, Prompt Engineering, RAG (Retrieval Augmented Generation), LangChain, Vector Databases.', demandRating: 5, relatedSkills: ['Python', 'PyTorch', 'LangChain', 'OpenAI APIs'] },
  { id: 'powerbi', name: 'Power BI', category: 'Data & AI', description: 'Microsoft business analytics tool to visualize data and share insights across an organization.', demandRating: 5, relatedSkills: ['SQL', 'Excel', 'DAX', 'Data Analytics'] },
  { id: 'tableau', name: 'Tableau', category: 'Data & AI', description: 'Visual analytics platform transforming raw data into actionable, interactive dashboards.', demandRating: 4, relatedSkills: ['Data Visualization', 'SQL', 'Data Analytics'] },
  { id: 'excel', name: 'Advanced Excel', category: 'Data & AI', description: 'Pivot tables, VLOOKUP/XLOOKUP, index-match, financial modeling, Power Query, macros.', demandRating: 5, relatedSkills: ['Data Analytics', 'Business Intelligence', 'Statistics'] },
  { id: 'pandas', name: 'Pandas & NumPy', category: 'Data & AI', description: 'Python libraries for high-performance numerical computation and structured tabular data wrangling.', demandRating: 5, relatedSkills: ['Python', 'Data Analytics', 'Machine Learning'] },
  { id: 'statistics', name: 'Probability & Statistics', category: 'Data & AI', description: 'Hypothesis testing, distributions, regression analysis, Bayesian inference, A/B testing.', demandRating: 5, relatedSkills: ['Mathematics', 'Data Analytics', 'Machine Learning'] },
  { id: 'mathematics', name: 'Linear Algebra & Calculus', category: 'Data & AI', description: 'Vector spaces, matrix decomposition, gradients, optimization foundations for machine learning.', demandRating: 4, relatedSkills: ['Machine Learning', 'Deep Learning', 'Statistics'] },
  { id: 'data_engineering', name: 'Data Engineering & ETL', category: 'Data & AI', description: 'Building resilient data pipelines, ETL workflows, data lakes, and distributed processing.', demandRating: 5, relatedSkills: ['Apache Spark', 'Kafka', 'SQL', 'Python', 'Airflow'] },
  { id: 'spark', name: 'Apache Spark', category: 'Data & AI', description: 'Unified analytics engine for large-scale distributed data processing and batch/streaming analytics.', demandRating: 5, relatedSkills: ['Python', 'Data Engineering', 'SQL', 'Hadoop'] },
  { id: 'nlp', name: 'Natural Language Processing (NLP)', category: 'Data & AI', description: 'Text processing, tokenization, sentiment analysis, named entity recognition, BERT, LLMs.', demandRating: 5, relatedSkills: ['Python', 'Deep Learning', 'PyTorch', 'HuggingFace'] },
  { id: 'computer_vision', name: 'Computer Vision', category: 'Data & AI', description: 'Image processing, object detection, segmentation, OpenCV, YOLO, and vision transformers.', demandRating: 4, relatedSkills: ['Python', 'PyTorch', 'OpenCV', 'Deep Learning'] },

  // Cloud & Infrastructure & DevOps
  { id: 'cloud', name: 'Cloud Computing', category: 'Cloud & Infrastructure', description: 'Core principles of cloud IaaS, PaaS, SaaS, elasticity, high availability, and multi-region deployment.', demandRating: 5, relatedSkills: ['AWS', 'Azure', 'DevOps', 'Docker'] },
  { id: 'aws', name: 'AWS (Amazon Web Services)', category: 'Cloud & Infrastructure', description: 'EC2, S3, Lambda, RDS, IAM, VPC, CloudFront, ECS, and Serverless architectures.', demandRating: 5, relatedSkills: ['Cloud Computing', 'Docker', 'DevOps', 'Terraform'] },
  { id: 'azure', name: 'Microsoft Azure', category: 'Cloud & Infrastructure', description: 'Azure VMs, App Services, Azure Functions, Entra ID, Cosmos DB, and enterprise cloud solutions.', demandRating: 5, relatedSkills: ['Cloud Computing', 'Power BI', 'DevOps'] },
  { id: 'gcp', name: 'Google Cloud Platform (GCP)', category: 'Cloud & Infrastructure', description: 'BigQuery, Compute Engine, GKE, Vertex AI, Cloud Run, and Google infrastructure.', demandRating: 4, relatedSkills: ['Cloud Computing', 'Kubernetes', 'Data Engineering'] },
  { id: 'devops', name: 'DevOps & CI/CD', category: 'Cloud & Infrastructure', description: 'Automating build, test, and release pipelines using GitHub Actions, Jenkins, GitLab CI.', demandRating: 5, relatedSkills: ['Docker', 'Kubernetes', 'Linux', 'Git'] },
  { id: 'docker', name: 'Docker & Containerization', category: 'Cloud & Infrastructure', description: 'Packaging applications into lightweight, isolated containers for consistent runtime environments.', demandRating: 5, relatedSkills: ['Kubernetes', 'DevOps', 'Linux'] },
  { id: 'kubernetes', name: 'Kubernetes (K8s)', category: 'Cloud & Infrastructure', description: 'Production-grade container orchestration system for automating deployment, scaling, and operations.', demandRating: 5, relatedSkills: ['Docker', 'Cloud Computing', 'DevOps', 'Terraform'] },
  { id: 'terraform', name: 'Terraform (IaC)', category: 'Cloud & Infrastructure', description: 'Infrastructure as Code to define, provision, and version cloud infrastructure predictably.', demandRating: 5, relatedSkills: ['AWS', 'DevOps', 'Cloud Computing'] },
  { id: 'linux', name: 'Linux & Shell Scripting', category: 'Cloud & Infrastructure', description: 'Command-line mastery, Bash scripting, process management, permissions, and server administration.', demandRating: 5, relatedSkills: ['DevOps', 'Cloud Computing', 'Cybersecurity'] },
  { id: 'git', name: 'Git & GitHub', category: 'Cloud & Infrastructure', description: 'Distributed version control, branching strategies, pull request workflows, and merge conflict resolution.', demandRating: 5, relatedSkills: ['DevOps', 'Collaboration', 'Software Development'] },

  // Cybersecurity
  { id: 'cybersecurity', name: 'Cybersecurity Fundamentals', category: 'Cybersecurity', description: 'CIA triad, threat modeling, security policies, authentication protocols, and defense in depth.', demandRating: 5, relatedSkills: ['Network Security', 'Ethical Hacking', 'Linux'] },
  { id: 'ethical_hacking', name: 'Ethical Hacking & Penetration Testing', category: 'Cybersecurity', description: 'Vulnerability assessment, exploit development, Burp Suite, Kali Linux, OWASP Top 10.', demandRating: 5, relatedSkills: ['Cybersecurity', 'Network Security', 'Python'] },
  { id: 'network_security', name: 'Network Security & Firewalls', category: 'Cybersecurity', description: 'TCP/IP, DNS, VPNs, IDS/IPS, Wireshark packet analysis, and zero-trust architecture.', demandRating: 4, relatedSkills: ['Cybersecurity', 'Linux', 'Computer Networks'] },
  { id: 'soc_analysis', name: 'SOC & Incident Response', category: 'Cybersecurity', description: 'Security Operations Center workflows, SIEM (Splunk/Sentinel), threat intelligence, digital forensics.', demandRating: 4, relatedSkills: ['Cybersecurity', 'Linux', 'Log Analysis'] },
  { id: 'cryptography', name: 'Cryptography & PKI', category: 'Cybersecurity', description: 'Symmetric/asymmetric encryption, hashing, digital certificates, SSL/TLS, and key management.', demandRating: 4, relatedSkills: ['Cybersecurity', 'Mathematics', 'Network Security'] },

  // Design & UI/UX
  { id: 'ui_ux', name: 'UI/UX Design', category: 'Design & UX', description: 'User-centered design principles, wireframing, prototyping, usability testing, and visual hierarchy.', demandRating: 5, relatedSkills: ['Figma', 'User Research', 'Design Systems', 'HTML'] },
  { id: 'figma', name: 'Figma', category: 'Design & UX', description: 'Collaborative cloud interface design tool for components, auto-layout, interactive prototypes, and design systems.', demandRating: 5, relatedSkills: ['UI/UX Design', 'Wireframing', 'Prototyping'] },
  { id: 'user_research', name: 'User Research & Personas', category: 'Design & UX', description: 'User interviews, journey mapping, usability benchmarking, persona creation, and cognitive walkthroughs.', demandRating: 4, relatedSkills: ['UI/UX Design', 'Empathy', 'Information Architecture'] },
  { id: 'wireframing', name: 'Wireframing & Prototyping', category: 'Design & UX', description: 'Translating product concepts into low/high-fidelity interactive click-through prototypes.', demandRating: 4, relatedSkills: ['Figma', 'UI/UX Design'] },
  { id: 'design_systems', name: 'Design Systems & Tokens', category: 'Design & UX', description: 'Building scalable tokenized UI component libraries that align designers and developers.', demandRating: 4, relatedSkills: ['Figma', 'CSS', 'React', 'UI/UX Design'] },

  // Business, Product & Soft Skills
  { id: 'communication', name: 'Communication Skills', category: 'Business & Soft Skills', description: 'Clear technical documentation, verbal presentations, active listening, and cross-functional storytelling.', demandRating: 5, relatedSkills: ['Leadership', 'Teamwork', 'Presentation Skills'] },
  { id: 'problem_solving', name: 'Problem Solving & Critical Thinking', category: 'Business & Soft Skills', description: 'Deconstructing complex challenges into structured hypotheses and actionable solutions.', demandRating: 5, relatedSkills: ['Analytical Thinking', 'Data Structures', 'Algorithmic Logic'] },
  { id: 'leadership', name: 'Leadership & Mentorship', category: 'Business & Soft Skills', description: 'Guiding teams, fostering engineering culture, resolving blockers, and delegating responsibilities.', demandRating: 4, relatedSkills: ['Management', 'Communication', 'Agile'] },
  { id: 'product_management', name: 'Product Management', category: 'Business & Soft Skills', description: 'Product lifecycle, roadmaps, PRDs, user stories, feature prioritization frameworks (RICE), KPIs.', demandRating: 5, relatedSkills: ['Agile / Scrum', 'Data Analytics', 'UI/UX Design'] },
  { id: 'agile', name: 'Agile & Scrum Methodologies', category: 'Business & Soft Skills', description: 'Sprint planning, daily standups, backlog grooming, retrospective reviews, Jira workflows.', demandRating: 5, relatedSkills: ['Product Management', 'Teamwork', 'Leadership'] },
  { id: 'business_analysis', name: 'Business Analysis', category: 'Business & Soft Skills', description: 'Gathering business requirements, gap analysis, process modeling (BPMN), and ROI evaluation.', demandRating: 4, relatedSkills: ['Excel', 'SQL', 'Product Management', 'Data Analytics'] },
  { id: 'financial_analysis', name: 'Financial Analysis & Modeling', category: 'Business & Soft Skills', description: 'DCF valuation, balance sheet forecasting, variance analysis, and investment evaluation.', demandRating: 4, relatedSkills: ['Excel', 'Business Analysis', 'Statistics'] }
];

export const INTEREST_OPTIONS = [
  'Coding & Web Development',
  'Artificial Intelligence & ML',
  'Data Analytics & Insights',
  'Cloud Architecture & DevOps',
  'Cybersecurity & Defense',
  'UI/UX Design & Creative Arts',
  'Product Strategy & Management',
  'Business & Financial Markets',
  'Research & Scientific Discovery',
  'Mobile App Development',
  'Problem Solving & Algorithms',
  'Leadership & People Management',
  'Entrepreneurship & Startups',
  'Teaching & Tech Mentorship',
  'Hardware & IoT Systems'
];

export const STRENGTH_OPTIONS = [
  'Analytical & Logical Reasoning',
  'Creative Visual Design',
  'Mathematical Aptitude',
  'Clear Verbal & Written Communication',
  'Detail Orientation & Precision',
  'Rapid Learning & Adaptability',
  'Empathetic User Understanding',
  'Team Collaboration & Mentorship',
  'Systems Thinking & Architecture',
  'Persistence in Debugging',
  'Business Strategic Acumen',
  'Process Organization & Planning'
];

export const CAREER_PREFERENCES_OPTIONS = [
  'Remote Work Friendly',
  'High Earning Potential',
  'Work-Life Balance',
  'Fast-Paced Startup Environment',
  'Established Enterprise Stability',
  'Creative & Visual Autonomy',
  'Heavy Problem-Solving / Math Focus',
  'Client-Facing / Consulting',
  'Continuous Technical Learning',
  'Global Career Mobility'
];
