import { RecommendedProject } from '../types';

export const RECOMMENDED_PROJECTS: RecommendedProject[] = [
  // DATA ANALYST PROJECTS
  {
    id: 'sales-dashboard',
    title: 'Executive Sales Performance & Regional Revenue Dashboard',
    careerId: 'data-analyst',
    difficulty: 'Beginner',
    requiredSkills: ['SQL', 'Power BI', 'Advanced Excel', 'Data Analytics'],
    description: 'Build an interactive multi-page business dashboard analyzing $10M+ in retail transactions across product categories, geographic regions, and quarterly profit margins.',
    expectedOutcome: 'A portfolio-ready Power BI dashboard featuring dynamic slicers, KPI summary cards, time-intelligence DAX metrics (YoY, MoM growth), and actionable sales recommendations.',
    suggestedTechStack: ['Power BI', 'SQL Server / PostgreSQL', 'Excel Power Query', 'DAX'],
    estimatedHours: 20,
    portfolioValue: 'High',
    milestones: [
      { id: 'm1', title: 'Data Cleaning & Normalization', description: 'Clean raw transaction CSVs using Power Query, handle null values, and structure date dimension tables.', estimatedHours: 5 },
      { id: 'm2', title: 'Data Modeling & Star Schema', description: 'Establish 1-to-many relationships between Fact Sales and Dim Customer, Dim Store, and Dim Product.', estimatedHours: 4 },
      { id: 'm3', title: 'DAX Measures & Business Logic', description: 'Write DAX formulas for Total Revenue, Gross Margin %, Same Period Last Year (SPLY), and Regional Rank.', estimatedHours: 6 },
      { id: 'm4', title: 'Visual Design & Executive Narrative', description: 'Design clean visual hierarchy with drill-through pages and executive summary insights.', estimatedHours: 5 }
    ],
    starterGithubRepo: 'https://github.com/microsoft/powerbi-desktop-samples',
    demoUrl: 'https://community.powerbi.com/t5/Data-Stories-Gallery/bd-p/DataStoriesGallery',
    evaluationRubric: [
      'Correct relational modeling (Star schema instead of flat table)',
      'Accurate DAX formulas with no circular dependencies',
      'Clear, distraction-free visual layout with accessible contrast',
      'Concise written executive summary with 3 key strategic recommendations'
    ]
  },
  {
    id: 'customer-churn-analytics',
    title: 'Telecom Customer Churn Predictor & Cohort Analysis',
    careerId: 'data-analyst',
    difficulty: 'Intermediate',
    requiredSkills: ['Python', 'Pandas & NumPy', 'SQL', 'Probability & Statistics'],
    description: 'Analyze telecom customer subscriber retention data to identify key churn indicators, perform cohort retention analysis, and propose customer loyalty strategies.',
    expectedOutcome: 'Comprehensive Jupyter Notebook report with automated feature correlations, churn risk heatmaps, and SQL retention cohort queries.',
    suggestedTechStack: ['Python', 'Pandas', 'Seaborn', 'PostgreSQL', 'Scikit-Learn'],
    estimatedHours: 25,
    portfolioValue: 'Very High',
    milestones: [
      { id: 'm1', title: 'Exploratory Data Analysis', description: 'Inspect categorical variables, contract types, monthly charges distribution, and churn ratios.', estimatedHours: 6 },
      { id: 'm2', title: 'SQL Cohort Retention Matrix', description: 'Construct SQL window queries to measure month-over-month customer retention curves.', estimatedHours: 7 },
      { id: 'm3', title: 'Statistical Hypothesis Testing', description: 'Perform Chi-Square tests and T-tests on contract tenure vs churn likelihood.', estimatedHours: 6 },
      { id: 'm4', title: 'Business Recommendation Slide Deck', description: 'Compile key findings into a 5-slide PDF presentation for marketing leadership.', estimatedHours: 6 }
    ],
    starterGithubRepo: 'https://github.com/scikit-learn/scikit-learn',
    evaluationRubric: [
      'Statistically valid hypothesis testing and significance calculation',
      'Clean modular Pandas code with vectorized operations',
      'Actionable business retention strategy backed by data'
    ]
  },

  // FRONTEND DEVELOPER PROJECTS
  {
    id: 'portfolio-saas-dashboard',
    title: 'Modern Analytics SaaS Dashboard with Dark Mode & Charts',
    careerId: 'frontend-developer',
    difficulty: 'Intermediate',
    requiredSkills: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3 / Modern Styling'],
    description: 'Design and build a responsive web application dashboard with interactive analytics charts, data tables with pagination and sorting, theme toggling, and accessible modals.',
    expectedOutcome: 'A fully functional production web application deployed on Vercel with responsive mobile views, custom hook abstractions, and clean TypeScript typings.',
    suggestedTechStack: ['React 18', 'TypeScript', 'Tailwind CSS', 'Lucide React', 'Vite'],
    estimatedHours: 22,
    portfolioValue: 'Very High',
    milestones: [
      { id: 'm1', title: 'Component Architecture & Layout Grid', description: 'Create responsive sidebar, navbar, responsive container, and dark mode theme provider.', estimatedHours: 5 },
      { id: 'm2', title: 'Interactive Charts & Metrics Cards', description: 'Implement SVG/Canvas charts with tooltip hover states and metric delta percentages.', estimatedHours: 6 },
      { id: 'm3', title: 'Data Table with Filtering & Sort', description: 'Build reusable table component supporting client-side search, multi-column sorting, and pagination.', estimatedHours: 6 },
      { id: 'm4', title: 'Accessibility & Lighthouse Audit', description: 'Optimize for 95+ Google Lighthouse scores in Performance, Accessibility, and Best Practices.', estimatedHours: 5 }
    ],
    starterGithubRepo: 'https://github.com/facebook/react',
    demoUrl: 'https://tailwindui.com/templates',
    evaluationRubric: [
      'Flawless responsive behavior on 375px mobile through 4K displays',
      'Strict TypeScript typings without any `any` declarations',
      'Reusable component structure with clean prop interfaces'
    ]
  },
  {
    id: 'kanban-task-app',
    title: 'Drag-and-Drop Agile Kanban Project Manager',
    careerId: 'frontend-developer',
    difficulty: 'Beginner',
    requiredSkills: ['React', 'JavaScript', 'HTML5', 'CSS3 / Modern Styling'],
    description: 'Build a Trello-like task board with drag-and-drop column reordering, task cards, tagging, search filtering, and localStorage persistence.',
    expectedOutcome: 'Interactive single-page task management app with fluid drag animations and persistent offline storage.',
    suggestedTechStack: ['React', 'HTML5 Drag and Drop / @hello-pangea/dnd', 'Tailwind CSS'],
    estimatedHours: 16,
    portfolioValue: 'High',
    milestones: [
      { id: 'm1', title: 'Board State Management', description: 'Design nested state model for Columns and Cards with immutable updates.', estimatedHours: 4 },
      { id: 'm2', title: 'Drag and Drop Interaction', description: 'Implement drag event handlers for moving cards within and between columns.', estimatedHours: 6 },
      { id: 'm3', title: 'Card Details & Labels Modal', description: 'Allow adding deadlines, sub-tasks, priority badges, and search filtering.', estimatedHours: 6 }
    ],
    evaluationRubric: [
      'Smooth 60fps drag and drop transitions',
      'Persists user changes accurately in browser storage',
      'Clean keyboard accessibility for adding and deleting tasks'
    ]
  },

  // FULL STACK DEVELOPER PROJECTS
  {
    id: 'collaborative-whiteboard',
    title: 'Real-Time Collaborative Workspace & Document Editor',
    careerId: 'fullstack-developer',
    difficulty: 'Advanced',
    requiredSkills: ['React', 'Node.js', 'TypeScript', 'SQL', 'Docker & Containerization'],
    description: 'Architect a multi-user collaborative workspace with real-time cursor presence, synchronized document editing via WebSockets, user authentication, and revision history.',
    expectedOutcome: 'Production-ready full stack SaaS application with Docker Compose setup, PostgreSQL database, and WebSocket cluster.',
    suggestedTechStack: ['React', 'Node.js / Express', 'Socket.io', 'PostgreSQL / Prisma', 'Docker'],
    estimatedHours: 35,
    portfolioValue: 'Exceptional',
    milestones: [
      { id: 'm1', title: 'Auth & DB Schema Design', description: 'Implement JWT refresh token authentication and relational schema for Workspaces, Documents, and Permissions.', estimatedHours: 8 },
      { id: 'm2', title: 'WebSocket Realtime Sync Engine', description: 'Build operational transformation or CRDT conflict resolution for concurrent edits.', estimatedHours: 12 },
      { id: 'm3', title: 'Frontend Canvas / Rich Text UI', description: 'Integrate rich text editor with live multiplayer avatar cursors and presence status.', estimatedHours: 9 },
      { id: 'm4', title: 'Dockerization & Deployment', description: 'Write multi-stage Dockerfiles and deploy frontend, backend, and PostgreSQL with Docker Compose.', estimatedHours: 6 }
    ],
    evaluationRubric: [
      'Zero race conditions or data loss during concurrent multi-user editing',
      'Secure WebSocket authentication and CORS configuration',
      'Complete Docker Compose setup runnable with a single command'
    ]
  },

  // MACHINE LEARNING PROJECTS
  {
    id: 'fraud-detection-engine',
    title: 'Real-Time Financial Fraud Detection & MLOps Pipeline',
    careerId: 'machine-learning-engineer',
    difficulty: 'Advanced',
    requiredSkills: ['Python', 'Machine Learning', 'Probability & Statistics', 'Docker & Containerization', 'FastAPI'],
    description: 'Develop an end-to-end fraud detection system handling highly imbalanced transaction data (SMOTE), training XGBoost and Random Forest models, and serving real-time predictions via FastAPI.',
    expectedOutcome: 'Containerized ML microservice providing sub-50ms inference latency with Prometheus latency monitoring and high ROC-AUC (>0.96) score.',
    suggestedTechStack: ['Python', 'Scikit-Learn', 'XGBoost', 'FastAPI', 'Docker', 'MLflow'],
    estimatedHours: 32,
    portfolioValue: 'Exceptional',
    milestones: [
      { id: 'm1', title: 'Imbalanced Dataset Handling', description: 'Perform SMOTE oversampling, feature scaling, and precision-recall tradeoff analysis.', estimatedHours: 8 },
      { id: 'm2', title: 'Model Training & MLflow Tracking', description: 'Tune XGBoost hyperparameters with Bayesian optimization; log experiments with MLflow.', estimatedHours: 10 },
      { id: 'm3', title: 'FastAPI High-Speed Inference Microservice', description: 'Create asynchronous prediction endpoint validating input payload with Pydantic.', estimatedHours: 8 },
      { id: 'm4', title: 'Docker Container & Stress Testing', description: 'Containerize application with Docker; run Locust benchmark for 500 requests/sec throughput.', estimatedHours: 6 }
    ],
    evaluationRubric: [
      'Proper cross-validation preventing data leakage on imbalanced data',
      'Sub-50ms p99 inference latency in containerized benchmark',
      'Complete REST API documentation and automated test suite'
    ]
  },

  // CLOUD & DEVOPS PROJECTS
  {
    id: 'k8s-microservices-deploy',
    title: 'Enterprise Multi-Tier Kubernetes Deployment with GitOps CI/CD',
    careerId: 'cloud-devops-engineer',
    difficulty: 'Advanced',
    requiredSkills: ['AWS (Amazon Web Services)', 'Docker & Containerization', 'Kubernetes (K8s)', 'DevOps & CI/CD', 'Terraform (IaC)'],
    description: 'Deploy a multi-tier microservices architecture on AWS EKS using Terraform Infrastructure-as-Code, Helm charts, automated GitHub Actions CI/CD, and Prometheus/Grafana observability.',
    expectedOutcome: 'A production-grade cloud infrastructure repository demonstrating automated continuous deployment with zero downtime.',
    suggestedTechStack: ['AWS EKS', 'Terraform', 'Kubernetes Helm', 'GitHub Actions', 'Prometheus', 'Grafana'],
    estimatedHours: 30,
    portfolioValue: 'Exceptional',
    milestones: [
      { id: 'm1', title: 'Terraform AWS EKS Provisioning', description: 'Write modular Terraform code for VPC, public/private subnets, NAT Gateways, and EKS Managed Node Groups.', estimatedHours: 8 },
      { id: 'm2', title: 'Helm Charts & Ingress Controller', description: 'Package backend and frontend microservices into Helm charts with NGINX Ingress and Cert-Manager SSL.', estimatedHours: 8 },
      { id: 'm3', title: 'GitHub Actions Automated CI/CD', description: 'Build pipeline that runs unit tests, scans Docker images with Trivy, pushes to ECR, and updates Helm releases.', estimatedHours: 8 },
      { id: 'm4', title: 'Prometheus & Grafana Observability', description: 'Deploy kube-prometheus-stack; configure dashboards for CPU, Memory, and Pod restart alerts.', estimatedHours: 6 }
    ],
    evaluationRubric: [
      'Idempotent Terraform modules with remote S3 state and DynamoDB locking',
      'Zero-downtime rolling updates verified under load',
      'Strict IAM least-privilege security policies'
    ]
  },

  // CYBERSECURITY PROJECTS
  {
    id: 'soc-home-lab-splunk',
    title: 'Virtual SOC Threat Detection Home Lab with Splunk & Sysmon',
    careerId: 'cybersecurity-analyst',
    difficulty: 'Intermediate',
    requiredSkills: ['Cybersecurity Fundamentals', 'Network Security & Firewalls', 'Linux & Shell Scripting', 'SOC & Incident Response'],
    description: 'Set up an isolated virtual penetration testing and monitoring laboratory using VirtualBox/Proxmox, Windows Server, Sysmon event logging, Splunk Enterprise SIEM, and simulated attack telemetry.',
    expectedOutcome: 'Documented SOC incident detection runbook with custom Splunk SPL search queries, alerts for Mimikatz / brute-force attacks, and triage write-ups.',
    suggestedTechStack: ['Splunk Enterprise', 'Sysmon', 'Kali Linux', 'Atomic Red Team', 'Wireshark'],
    estimatedHours: 24,
    portfolioValue: 'Very High',
    milestones: [
      { id: 'm1', title: 'Virtual Network Architecture', description: 'Configure segmented subnets for Active Directory Domain Controller and SIEM collector.', estimatedHours: 6 },
      { id: 'm2', title: 'Sysmon & Splunk Forwarder Ingestion', description: 'Deploy Sysmon configuration optimized for MITRE ATT&CK detection; forward logs to Splunk.', estimatedHours: 6 },
      { id: 'm3', title: 'Simulated Attack Emulation', description: 'Execute Atomic Red Team attacks (Pass-the-Hash, PowerShell encoded execution, privilege escalation).', estimatedHours: 6 },
      { id: 'm4', title: 'Splunk Alerts & Investigation Playbook', description: 'Write SPL detection queries and compile a step-by-step incident response report.', estimatedHours: 6 }
    ],
    evaluationRubric: [
      'Correct mapping of detected security events to MITRE ATT&CK framework',
      'Accurate, efficient SPL queries with low false-positive rate',
      'Thorough incident response investigation notes'
    ]
  }
];
