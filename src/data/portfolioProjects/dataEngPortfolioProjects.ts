// Real-Time Data Lakehouses & Streaming Pipelines
// Generated for Skill2Career Capstone Portfolio Intelligence

export interface PortfolioProjectSpec {
  projectId: string;
  title: string;
  tagline: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedHours: number;
  techStack: string[];
  architectureOverview: string;
  keyFeatures: string[];
  userStories: string[];
  databaseSchemaOverview: string;
  deploymentGuide: string;
  githubTemplateUrl: string;
}

export interface PortfolioCollection {
  collectionId: string;
  domain: string;
  title: string;
  projects: PortfolioProjectSpec[];
}

export const dataEngPortfolioProjects: PortfolioCollection = {
  collectionId: "dataEngPortfolioProjects",
  domain: "data-eng",
  title: "Real-Time Data Lakehouses & Streaming Pipelines",
  projects: [
    {
      projectId: "data-eng_proj_1",
      title: "Enterprise Project #1: Real-Time Solution",
      tagline: "Build a production-grade data-eng system handling thousands of real-time requests.",
      difficulty: "Advanced",
      estimatedHours: 40,
      techStack: ["TypeScript", "React", "Node.js", "Docker", "PostgreSQL", "Redis", "AWS"],
      architectureOverview: "Modular microservices architecture with event-driven message queues and automated CI/CD deployment pipelines.",
      keyFeatures: [
        "Real-time state synchronization with WebSocket connection pool",
        "Role-based access control (RBAC) with JWT and refresh token rotation",
        "End-to-end integration tests and load testing with k6"
      ],
      userStories: [
        "As a user, I want instant live updates without manual page refreshes",
        "As an admin, I want audit logs and telemetry dashboards for all mutations",
        "As a DevOps engineer, I want zero-downtime rolling deployments"
      ],
      databaseSchemaOverview: "Normalized 3NF relational schema with composite indexes and audit tables.",
      deploymentGuide: "Containerized via Docker multi-stage builds and deployed to AWS ECS / Kubernetes cluster.",
      githubTemplateUrl: "https://github.com/skill2career/starter-template"
    },    {
      projectId: "data-eng_proj_2",
      title: "Enterprise Project #2: Real-Time Solution",
      tagline: "Build a production-grade data-eng system handling thousands of real-time requests.",
      difficulty: "Intermediate",
      estimatedHours: 40,
      techStack: ["TypeScript", "React", "Node.js", "Docker", "PostgreSQL", "Redis", "AWS"],
      architectureOverview: "Modular microservices architecture with event-driven message queues and automated CI/CD deployment pipelines.",
      keyFeatures: [
        "Real-time state synchronization with WebSocket connection pool",
        "Role-based access control (RBAC) with JWT and refresh token rotation",
        "End-to-end integration tests and load testing with k6"
      ],
      userStories: [
        "As a user, I want instant live updates without manual page refreshes",
        "As an admin, I want audit logs and telemetry dashboards for all mutations",
        "As a DevOps engineer, I want zero-downtime rolling deployments"
      ],
      databaseSchemaOverview: "Normalized 3NF relational schema with composite indexes and audit tables.",
      deploymentGuide: "Containerized via Docker multi-stage builds and deployed to AWS ECS / Kubernetes cluster.",
      githubTemplateUrl: "https://github.com/skill2career/starter-template"
    },    {
      projectId: "data-eng_proj_3",
      title: "Enterprise Project #3: Real-Time Solution",
      tagline: "Build a production-grade data-eng system handling thousands of real-time requests.",
      difficulty: "Advanced",
      estimatedHours: 40,
      techStack: ["TypeScript", "React", "Node.js", "Docker", "PostgreSQL", "Redis", "AWS"],
      architectureOverview: "Modular microservices architecture with event-driven message queues and automated CI/CD deployment pipelines.",
      keyFeatures: [
        "Real-time state synchronization with WebSocket connection pool",
        "Role-based access control (RBAC) with JWT and refresh token rotation",
        "End-to-end integration tests and load testing with k6"
      ],
      userStories: [
        "As a user, I want instant live updates without manual page refreshes",
        "As an admin, I want audit logs and telemetry dashboards for all mutations",
        "As a DevOps engineer, I want zero-downtime rolling deployments"
      ],
      databaseSchemaOverview: "Normalized 3NF relational schema with composite indexes and audit tables.",
      deploymentGuide: "Containerized via Docker multi-stage builds and deployed to AWS ECS / Kubernetes cluster.",
      githubTemplateUrl: "https://github.com/skill2career/starter-template"
    },    {
      projectId: "data-eng_proj_4",
      title: "Enterprise Project #4: Real-Time Solution",
      tagline: "Build a production-grade data-eng system handling thousands of real-time requests.",
      difficulty: "Intermediate",
      estimatedHours: 40,
      techStack: ["TypeScript", "React", "Node.js", "Docker", "PostgreSQL", "Redis", "AWS"],
      architectureOverview: "Modular microservices architecture with event-driven message queues and automated CI/CD deployment pipelines.",
      keyFeatures: [
        "Real-time state synchronization with WebSocket connection pool",
        "Role-based access control (RBAC) with JWT and refresh token rotation",
        "End-to-end integration tests and load testing with k6"
      ],
      userStories: [
        "As a user, I want instant live updates without manual page refreshes",
        "As an admin, I want audit logs and telemetry dashboards for all mutations",
        "As a DevOps engineer, I want zero-downtime rolling deployments"
      ],
      databaseSchemaOverview: "Normalized 3NF relational schema with composite indexes and audit tables.",
      deploymentGuide: "Containerized via Docker multi-stage builds and deployed to AWS ECS / Kubernetes cluster.",
      githubTemplateUrl: "https://github.com/skill2career/starter-template"
    },    {
      projectId: "data-eng_proj_5",
      title: "Enterprise Project #5: Real-Time Solution",
      tagline: "Build a production-grade data-eng system handling thousands of real-time requests.",
      difficulty: "Advanced",
      estimatedHours: 40,
      techStack: ["TypeScript", "React", "Node.js", "Docker", "PostgreSQL", "Redis", "AWS"],
      architectureOverview: "Modular microservices architecture with event-driven message queues and automated CI/CD deployment pipelines.",
      keyFeatures: [
        "Real-time state synchronization with WebSocket connection pool",
        "Role-based access control (RBAC) with JWT and refresh token rotation",
        "End-to-end integration tests and load testing with k6"
      ],
      userStories: [
        "As a user, I want instant live updates without manual page refreshes",
        "As an admin, I want audit logs and telemetry dashboards for all mutations",
        "As a DevOps engineer, I want zero-downtime rolling deployments"
      ],
      databaseSchemaOverview: "Normalized 3NF relational schema with composite indexes and audit tables.",
      deploymentGuide: "Containerized via Docker multi-stage builds and deployed to AWS ECS / Kubernetes cluster.",
      githubTemplateUrl: "https://github.com/skill2career/starter-template"
    },    {
      projectId: "data-eng_proj_6",
      title: "Enterprise Project #6: Real-Time Solution",
      tagline: "Build a production-grade data-eng system handling thousands of real-time requests.",
      difficulty: "Intermediate",
      estimatedHours: 40,
      techStack: ["TypeScript", "React", "Node.js", "Docker", "PostgreSQL", "Redis", "AWS"],
      architectureOverview: "Modular microservices architecture with event-driven message queues and automated CI/CD deployment pipelines.",
      keyFeatures: [
        "Real-time state synchronization with WebSocket connection pool",
        "Role-based access control (RBAC) with JWT and refresh token rotation",
        "End-to-end integration tests and load testing with k6"
      ],
      userStories: [
        "As a user, I want instant live updates without manual page refreshes",
        "As an admin, I want audit logs and telemetry dashboards for all mutations",
        "As a DevOps engineer, I want zero-downtime rolling deployments"
      ],
      databaseSchemaOverview: "Normalized 3NF relational schema with composite indexes and audit tables.",
      deploymentGuide: "Containerized via Docker multi-stage builds and deployed to AWS ECS / Kubernetes cluster.",
      githubTemplateUrl: "https://github.com/skill2career/starter-template"
    },    {
      projectId: "data-eng_proj_7",
      title: "Enterprise Project #7: Real-Time Solution",
      tagline: "Build a production-grade data-eng system handling thousands of real-time requests.",
      difficulty: "Advanced",
      estimatedHours: 40,
      techStack: ["TypeScript", "React", "Node.js", "Docker", "PostgreSQL", "Redis", "AWS"],
      architectureOverview: "Modular microservices architecture with event-driven message queues and automated CI/CD deployment pipelines.",
      keyFeatures: [
        "Real-time state synchronization with WebSocket connection pool",
        "Role-based access control (RBAC) with JWT and refresh token rotation",
        "End-to-end integration tests and load testing with k6"
      ],
      userStories: [
        "As a user, I want instant live updates without manual page refreshes",
        "As an admin, I want audit logs and telemetry dashboards for all mutations",
        "As a DevOps engineer, I want zero-downtime rolling deployments"
      ],
      databaseSchemaOverview: "Normalized 3NF relational schema with composite indexes and audit tables.",
      deploymentGuide: "Containerized via Docker multi-stage builds and deployed to AWS ECS / Kubernetes cluster.",
      githubTemplateUrl: "https://github.com/skill2career/starter-template"
    },    {
      projectId: "data-eng_proj_8",
      title: "Enterprise Project #8: Real-Time Solution",
      tagline: "Build a production-grade data-eng system handling thousands of real-time requests.",
      difficulty: "Intermediate",
      estimatedHours: 40,
      techStack: ["TypeScript", "React", "Node.js", "Docker", "PostgreSQL", "Redis", "AWS"],
      architectureOverview: "Modular microservices architecture with event-driven message queues and automated CI/CD deployment pipelines.",
      keyFeatures: [
        "Real-time state synchronization with WebSocket connection pool",
        "Role-based access control (RBAC) with JWT and refresh token rotation",
        "End-to-end integration tests and load testing with k6"
      ],
      userStories: [
        "As a user, I want instant live updates without manual page refreshes",
        "As an admin, I want audit logs and telemetry dashboards for all mutations",
        "As a DevOps engineer, I want zero-downtime rolling deployments"
      ],
      databaseSchemaOverview: "Normalized 3NF relational schema with composite indexes and audit tables.",
      deploymentGuide: "Containerized via Docker multi-stage builds and deployed to AWS ECS / Kubernetes cluster.",
      githubTemplateUrl: "https://github.com/skill2career/starter-template"
    },    {
      projectId: "data-eng_proj_9",
      title: "Enterprise Project #9: Real-Time Solution",
      tagline: "Build a production-grade data-eng system handling thousands of real-time requests.",
      difficulty: "Advanced",
      estimatedHours: 40,
      techStack: ["TypeScript", "React", "Node.js", "Docker", "PostgreSQL", "Redis", "AWS"],
      architectureOverview: "Modular microservices architecture with event-driven message queues and automated CI/CD deployment pipelines.",
      keyFeatures: [
        "Real-time state synchronization with WebSocket connection pool",
        "Role-based access control (RBAC) with JWT and refresh token rotation",
        "End-to-end integration tests and load testing with k6"
      ],
      userStories: [
        "As a user, I want instant live updates without manual page refreshes",
        "As an admin, I want audit logs and telemetry dashboards for all mutations",
        "As a DevOps engineer, I want zero-downtime rolling deployments"
      ],
      databaseSchemaOverview: "Normalized 3NF relational schema with composite indexes and audit tables.",
      deploymentGuide: "Containerized via Docker multi-stage builds and deployed to AWS ECS / Kubernetes cluster.",
      githubTemplateUrl: "https://github.com/skill2career/starter-template"
    },    {
      projectId: "data-eng_proj_10",
      title: "Enterprise Project #10: Real-Time Solution",
      tagline: "Build a production-grade data-eng system handling thousands of real-time requests.",
      difficulty: "Intermediate",
      estimatedHours: 40,
      techStack: ["TypeScript", "React", "Node.js", "Docker", "PostgreSQL", "Redis", "AWS"],
      architectureOverview: "Modular microservices architecture with event-driven message queues and automated CI/CD deployment pipelines.",
      keyFeatures: [
        "Real-time state synchronization with WebSocket connection pool",
        "Role-based access control (RBAC) with JWT and refresh token rotation",
        "End-to-end integration tests and load testing with k6"
      ],
      userStories: [
        "As a user, I want instant live updates without manual page refreshes",
        "As an admin, I want audit logs and telemetry dashboards for all mutations",
        "As a DevOps engineer, I want zero-downtime rolling deployments"
      ],
      databaseSchemaOverview: "Normalized 3NF relational schema with composite indexes and audit tables.",
      deploymentGuide: "Containerized via Docker multi-stage builds and deployed to AWS ECS / Kubernetes cluster.",
      githubTemplateUrl: "https://github.com/skill2career/starter-template"
    },    {
      projectId: "data-eng_proj_11",
      title: "Enterprise Project #11: Real-Time Solution",
      tagline: "Build a production-grade data-eng system handling thousands of real-time requests.",
      difficulty: "Advanced",
      estimatedHours: 40,
      techStack: ["TypeScript", "React", "Node.js", "Docker", "PostgreSQL", "Redis", "AWS"],
      architectureOverview: "Modular microservices architecture with event-driven message queues and automated CI/CD deployment pipelines.",
      keyFeatures: [
        "Real-time state synchronization with WebSocket connection pool",
        "Role-based access control (RBAC) with JWT and refresh token rotation",
        "End-to-end integration tests and load testing with k6"
      ],
      userStories: [
        "As a user, I want instant live updates without manual page refreshes",
        "As an admin, I want audit logs and telemetry dashboards for all mutations",
        "As a DevOps engineer, I want zero-downtime rolling deployments"
      ],
      databaseSchemaOverview: "Normalized 3NF relational schema with composite indexes and audit tables.",
      deploymentGuide: "Containerized via Docker multi-stage builds and deployed to AWS ECS / Kubernetes cluster.",
      githubTemplateUrl: "https://github.com/skill2career/starter-template"
    },    {
      projectId: "data-eng_proj_12",
      title: "Enterprise Project #12: Real-Time Solution",
      tagline: "Build a production-grade data-eng system handling thousands of real-time requests.",
      difficulty: "Intermediate",
      estimatedHours: 40,
      techStack: ["TypeScript", "React", "Node.js", "Docker", "PostgreSQL", "Redis", "AWS"],
      architectureOverview: "Modular microservices architecture with event-driven message queues and automated CI/CD deployment pipelines.",
      keyFeatures: [
        "Real-time state synchronization with WebSocket connection pool",
        "Role-based access control (RBAC) with JWT and refresh token rotation",
        "End-to-end integration tests and load testing with k6"
      ],
      userStories: [
        "As a user, I want instant live updates without manual page refreshes",
        "As an admin, I want audit logs and telemetry dashboards for all mutations",
        "As a DevOps engineer, I want zero-downtime rolling deployments"
      ],
      databaseSchemaOverview: "Normalized 3NF relational schema with composite indexes and audit tables.",
      deploymentGuide: "Containerized via Docker multi-stage builds and deployed to AWS ECS / Kubernetes cluster.",
      githubTemplateUrl: "https://github.com/skill2career/starter-template"
    },    {
      projectId: "data-eng_proj_13",
      title: "Enterprise Project #13: Real-Time Solution",
      tagline: "Build a production-grade data-eng system handling thousands of real-time requests.",
      difficulty: "Advanced",
      estimatedHours: 40,
      techStack: ["TypeScript", "React", "Node.js", "Docker", "PostgreSQL", "Redis", "AWS"],
      architectureOverview: "Modular microservices architecture with event-driven message queues and automated CI/CD deployment pipelines.",
      keyFeatures: [
        "Real-time state synchronization with WebSocket connection pool",
        "Role-based access control (RBAC) with JWT and refresh token rotation",
        "End-to-end integration tests and load testing with k6"
      ],
      userStories: [
        "As a user, I want instant live updates without manual page refreshes",
        "As an admin, I want audit logs and telemetry dashboards for all mutations",
        "As a DevOps engineer, I want zero-downtime rolling deployments"
      ],
      databaseSchemaOverview: "Normalized 3NF relational schema with composite indexes and audit tables.",
      deploymentGuide: "Containerized via Docker multi-stage builds and deployed to AWS ECS / Kubernetes cluster.",
      githubTemplateUrl: "https://github.com/skill2career/starter-template"
    },    {
      projectId: "data-eng_proj_14",
      title: "Enterprise Project #14: Real-Time Solution",
      tagline: "Build a production-grade data-eng system handling thousands of real-time requests.",
      difficulty: "Intermediate",
      estimatedHours: 40,
      techStack: ["TypeScript", "React", "Node.js", "Docker", "PostgreSQL", "Redis", "AWS"],
      architectureOverview: "Modular microservices architecture with event-driven message queues and automated CI/CD deployment pipelines.",
      keyFeatures: [
        "Real-time state synchronization with WebSocket connection pool",
        "Role-based access control (RBAC) with JWT and refresh token rotation",
        "End-to-end integration tests and load testing with k6"
      ],
      userStories: [
        "As a user, I want instant live updates without manual page refreshes",
        "As an admin, I want audit logs and telemetry dashboards for all mutations",
        "As a DevOps engineer, I want zero-downtime rolling deployments"
      ],
      databaseSchemaOverview: "Normalized 3NF relational schema with composite indexes and audit tables.",
      deploymentGuide: "Containerized via Docker multi-stage builds and deployed to AWS ECS / Kubernetes cluster.",
      githubTemplateUrl: "https://github.com/skill2career/starter-template"
    },    {
      projectId: "data-eng_proj_15",
      title: "Enterprise Project #15: Real-Time Solution",
      tagline: "Build a production-grade data-eng system handling thousands of real-time requests.",
      difficulty: "Advanced",
      estimatedHours: 40,
      techStack: ["TypeScript", "React", "Node.js", "Docker", "PostgreSQL", "Redis", "AWS"],
      architectureOverview: "Modular microservices architecture with event-driven message queues and automated CI/CD deployment pipelines.",
      keyFeatures: [
        "Real-time state synchronization with WebSocket connection pool",
        "Role-based access control (RBAC) with JWT and refresh token rotation",
        "End-to-end integration tests and load testing with k6"
      ],
      userStories: [
        "As a user, I want instant live updates without manual page refreshes",
        "As an admin, I want audit logs and telemetry dashboards for all mutations",
        "As a DevOps engineer, I want zero-downtime rolling deployments"
      ],
      databaseSchemaOverview: "Normalized 3NF relational schema with composite indexes and audit tables.",
      deploymentGuide: "Containerized via Docker multi-stage builds and deployed to AWS ECS / Kubernetes cluster.",
      githubTemplateUrl: "https://github.com/skill2career/starter-template"
    }
  ]
};
