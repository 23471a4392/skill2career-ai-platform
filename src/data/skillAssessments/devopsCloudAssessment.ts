// DevOps, CI/CD & Kubernetes Assessment
// Generated for Skill2Career Skill Assessment Diagnostic

export interface AssessmentQuestion {
  questionId: string;
  prompt: string;
  options: string[];
  correctOptionIndex: number;
  skillLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  weight: number;
  explanation: string;
  relatedCurriculumTopic: string;
}

export interface DiagnosticAssessment {
  assessmentId: string;
  title: string;
  skillKey: string;
  passingScorePercentage: number;
  timeLimitMinutes: number;
  questions: AssessmentQuestion[];
}

export const devopsCloudAssessment: DiagnosticAssessment = {
  assessmentId: "devopsCloudAssessment",
  title: "DevOps, CI/CD & Kubernetes Assessment",
  skillKey: "devops",
  passingScorePercentage: 75,
  timeLimitMinutes: 45,
  questions: [
    {
      questionId: "devops_q_1",
      prompt: "Skill Assessment #1 for DevOps, CI/CD & Kubernetes Assessment: What is the optimal architectural approach for high-throughput concurrency?",
      options: [
        "Asynchronous non-blocking event-driven loop with bounded thread pooling",
        "Synchronous blocking thread-per-request model with unlimited threads",
        "Spinlock polling in user space without kernel yield",
        "Disabling all database connection pools and reconnecting per request"
      ],
      correctOptionIndex: 0,
      skillLevel: "Beginner",
      weight: 1,
      explanation: "Asynchronous non-blocking execution prevents thread starvation while maximizing I/O utilization under heavy concurrency.",
      relatedCurriculumTopic: "Concurrency Models and System Performance"
    },    {
      questionId: "devops_q_2",
      prompt: "Skill Assessment #2 for DevOps, CI/CD & Kubernetes Assessment: What is the optimal architectural approach for high-throughput concurrency?",
      options: [
        "Asynchronous non-blocking event-driven loop with bounded thread pooling",
        "Synchronous blocking thread-per-request model with unlimited threads",
        "Spinlock polling in user space without kernel yield",
        "Disabling all database connection pools and reconnecting per request"
      ],
      correctOptionIndex: 0,
      skillLevel: "Beginner",
      weight: 1,
      explanation: "Asynchronous non-blocking execution prevents thread starvation while maximizing I/O utilization under heavy concurrency.",
      relatedCurriculumTopic: "Concurrency Models and System Performance"
    },    {
      questionId: "devops_q_3",
      prompt: "Skill Assessment #3 for DevOps, CI/CD & Kubernetes Assessment: What is the optimal architectural approach for high-throughput concurrency?",
      options: [
        "Asynchronous non-blocking event-driven loop with bounded thread pooling",
        "Synchronous blocking thread-per-request model with unlimited threads",
        "Spinlock polling in user space without kernel yield",
        "Disabling all database connection pools and reconnecting per request"
      ],
      correctOptionIndex: 0,
      skillLevel: "Beginner",
      weight: 1,
      explanation: "Asynchronous non-blocking execution prevents thread starvation while maximizing I/O utilization under heavy concurrency.",
      relatedCurriculumTopic: "Concurrency Models and System Performance"
    },    {
      questionId: "devops_q_4",
      prompt: "Skill Assessment #4 for DevOps, CI/CD & Kubernetes Assessment: What is the optimal architectural approach for high-throughput concurrency?",
      options: [
        "Asynchronous non-blocking event-driven loop with bounded thread pooling",
        "Synchronous blocking thread-per-request model with unlimited threads",
        "Spinlock polling in user space without kernel yield",
        "Disabling all database connection pools and reconnecting per request"
      ],
      correctOptionIndex: 0,
      skillLevel: "Beginner",
      weight: 1,
      explanation: "Asynchronous non-blocking execution prevents thread starvation while maximizing I/O utilization under heavy concurrency.",
      relatedCurriculumTopic: "Concurrency Models and System Performance"
    },    {
      questionId: "devops_q_5",
      prompt: "Skill Assessment #5 for DevOps, CI/CD & Kubernetes Assessment: What is the optimal architectural approach for high-throughput concurrency?",
      options: [
        "Asynchronous non-blocking event-driven loop with bounded thread pooling",
        "Synchronous blocking thread-per-request model with unlimited threads",
        "Spinlock polling in user space without kernel yield",
        "Disabling all database connection pools and reconnecting per request"
      ],
      correctOptionIndex: 0,
      skillLevel: "Beginner",
      weight: 1,
      explanation: "Asynchronous non-blocking execution prevents thread starvation while maximizing I/O utilization under heavy concurrency.",
      relatedCurriculumTopic: "Concurrency Models and System Performance"
    },    {
      questionId: "devops_q_6",
      prompt: "Skill Assessment #6 for DevOps, CI/CD & Kubernetes Assessment: What is the optimal architectural approach for high-throughput concurrency?",
      options: [
        "Asynchronous non-blocking event-driven loop with bounded thread pooling",
        "Synchronous blocking thread-per-request model with unlimited threads",
        "Spinlock polling in user space without kernel yield",
        "Disabling all database connection pools and reconnecting per request"
      ],
      correctOptionIndex: 0,
      skillLevel: "Beginner",
      weight: 1,
      explanation: "Asynchronous non-blocking execution prevents thread starvation while maximizing I/O utilization under heavy concurrency.",
      relatedCurriculumTopic: "Concurrency Models and System Performance"
    },    {
      questionId: "devops_q_7",
      prompt: "Skill Assessment #7 for DevOps, CI/CD & Kubernetes Assessment: What is the optimal architectural approach for high-throughput concurrency?",
      options: [
        "Asynchronous non-blocking event-driven loop with bounded thread pooling",
        "Synchronous blocking thread-per-request model with unlimited threads",
        "Spinlock polling in user space without kernel yield",
        "Disabling all database connection pools and reconnecting per request"
      ],
      correctOptionIndex: 0,
      skillLevel: "Beginner",
      weight: 1,
      explanation: "Asynchronous non-blocking execution prevents thread starvation while maximizing I/O utilization under heavy concurrency.",
      relatedCurriculumTopic: "Concurrency Models and System Performance"
    },    {
      questionId: "devops_q_8",
      prompt: "Skill Assessment #8 for DevOps, CI/CD & Kubernetes Assessment: What is the optimal architectural approach for high-throughput concurrency?",
      options: [
        "Asynchronous non-blocking event-driven loop with bounded thread pooling",
        "Synchronous blocking thread-per-request model with unlimited threads",
        "Spinlock polling in user space without kernel yield",
        "Disabling all database connection pools and reconnecting per request"
      ],
      correctOptionIndex: 0,
      skillLevel: "Beginner",
      weight: 1,
      explanation: "Asynchronous non-blocking execution prevents thread starvation while maximizing I/O utilization under heavy concurrency.",
      relatedCurriculumTopic: "Concurrency Models and System Performance"
    },    {
      questionId: "devops_q_9",
      prompt: "Skill Assessment #9 for DevOps, CI/CD & Kubernetes Assessment: What is the optimal architectural approach for high-throughput concurrency?",
      options: [
        "Asynchronous non-blocking event-driven loop with bounded thread pooling",
        "Synchronous blocking thread-per-request model with unlimited threads",
        "Spinlock polling in user space without kernel yield",
        "Disabling all database connection pools and reconnecting per request"
      ],
      correctOptionIndex: 0,
      skillLevel: "Beginner",
      weight: 1,
      explanation: "Asynchronous non-blocking execution prevents thread starvation while maximizing I/O utilization under heavy concurrency.",
      relatedCurriculumTopic: "Concurrency Models and System Performance"
    },    {
      questionId: "devops_q_10",
      prompt: "Skill Assessment #10 for DevOps, CI/CD & Kubernetes Assessment: What is the optimal architectural approach for high-throughput concurrency?",
      options: [
        "Asynchronous non-blocking event-driven loop with bounded thread pooling",
        "Synchronous blocking thread-per-request model with unlimited threads",
        "Spinlock polling in user space without kernel yield",
        "Disabling all database connection pools and reconnecting per request"
      ],
      correctOptionIndex: 0,
      skillLevel: "Beginner",
      weight: 1,
      explanation: "Asynchronous non-blocking execution prevents thread starvation while maximizing I/O utilization under heavy concurrency.",
      relatedCurriculumTopic: "Concurrency Models and System Performance"
    },    {
      questionId: "devops_q_11",
      prompt: "Skill Assessment #11 for DevOps, CI/CD & Kubernetes Assessment: What is the optimal architectural approach for high-throughput concurrency?",
      options: [
        "Asynchronous non-blocking event-driven loop with bounded thread pooling",
        "Synchronous blocking thread-per-request model with unlimited threads",
        "Spinlock polling in user space without kernel yield",
        "Disabling all database connection pools and reconnecting per request"
      ],
      correctOptionIndex: 0,
      skillLevel: "Intermediate",
      weight: 2,
      explanation: "Asynchronous non-blocking execution prevents thread starvation while maximizing I/O utilization under heavy concurrency.",
      relatedCurriculumTopic: "Concurrency Models and System Performance"
    },    {
      questionId: "devops_q_12",
      prompt: "Skill Assessment #12 for DevOps, CI/CD & Kubernetes Assessment: What is the optimal architectural approach for high-throughput concurrency?",
      options: [
        "Asynchronous non-blocking event-driven loop with bounded thread pooling",
        "Synchronous blocking thread-per-request model with unlimited threads",
        "Spinlock polling in user space without kernel yield",
        "Disabling all database connection pools and reconnecting per request"
      ],
      correctOptionIndex: 0,
      skillLevel: "Intermediate",
      weight: 2,
      explanation: "Asynchronous non-blocking execution prevents thread starvation while maximizing I/O utilization under heavy concurrency.",
      relatedCurriculumTopic: "Concurrency Models and System Performance"
    },    {
      questionId: "devops_q_13",
      prompt: "Skill Assessment #13 for DevOps, CI/CD & Kubernetes Assessment: What is the optimal architectural approach for high-throughput concurrency?",
      options: [
        "Asynchronous non-blocking event-driven loop with bounded thread pooling",
        "Synchronous blocking thread-per-request model with unlimited threads",
        "Spinlock polling in user space without kernel yield",
        "Disabling all database connection pools and reconnecting per request"
      ],
      correctOptionIndex: 0,
      skillLevel: "Intermediate",
      weight: 2,
      explanation: "Asynchronous non-blocking execution prevents thread starvation while maximizing I/O utilization under heavy concurrency.",
      relatedCurriculumTopic: "Concurrency Models and System Performance"
    },    {
      questionId: "devops_q_14",
      prompt: "Skill Assessment #14 for DevOps, CI/CD & Kubernetes Assessment: What is the optimal architectural approach for high-throughput concurrency?",
      options: [
        "Asynchronous non-blocking event-driven loop with bounded thread pooling",
        "Synchronous blocking thread-per-request model with unlimited threads",
        "Spinlock polling in user space without kernel yield",
        "Disabling all database connection pools and reconnecting per request"
      ],
      correctOptionIndex: 0,
      skillLevel: "Intermediate",
      weight: 2,
      explanation: "Asynchronous non-blocking execution prevents thread starvation while maximizing I/O utilization under heavy concurrency.",
      relatedCurriculumTopic: "Concurrency Models and System Performance"
    },    {
      questionId: "devops_q_15",
      prompt: "Skill Assessment #15 for DevOps, CI/CD & Kubernetes Assessment: What is the optimal architectural approach for high-throughput concurrency?",
      options: [
        "Asynchronous non-blocking event-driven loop with bounded thread pooling",
        "Synchronous blocking thread-per-request model with unlimited threads",
        "Spinlock polling in user space without kernel yield",
        "Disabling all database connection pools and reconnecting per request"
      ],
      correctOptionIndex: 0,
      skillLevel: "Intermediate",
      weight: 2,
      explanation: "Asynchronous non-blocking execution prevents thread starvation while maximizing I/O utilization under heavy concurrency.",
      relatedCurriculumTopic: "Concurrency Models and System Performance"
    },    {
      questionId: "devops_q_16",
      prompt: "Skill Assessment #16 for DevOps, CI/CD & Kubernetes Assessment: What is the optimal architectural approach for high-throughput concurrency?",
      options: [
        "Asynchronous non-blocking event-driven loop with bounded thread pooling",
        "Synchronous blocking thread-per-request model with unlimited threads",
        "Spinlock polling in user space without kernel yield",
        "Disabling all database connection pools and reconnecting per request"
      ],
      correctOptionIndex: 0,
      skillLevel: "Intermediate",
      weight: 2,
      explanation: "Asynchronous non-blocking execution prevents thread starvation while maximizing I/O utilization under heavy concurrency.",
      relatedCurriculumTopic: "Concurrency Models and System Performance"
    },    {
      questionId: "devops_q_17",
      prompt: "Skill Assessment #17 for DevOps, CI/CD & Kubernetes Assessment: What is the optimal architectural approach for high-throughput concurrency?",
      options: [
        "Asynchronous non-blocking event-driven loop with bounded thread pooling",
        "Synchronous blocking thread-per-request model with unlimited threads",
        "Spinlock polling in user space without kernel yield",
        "Disabling all database connection pools and reconnecting per request"
      ],
      correctOptionIndex: 0,
      skillLevel: "Intermediate",
      weight: 2,
      explanation: "Asynchronous non-blocking execution prevents thread starvation while maximizing I/O utilization under heavy concurrency.",
      relatedCurriculumTopic: "Concurrency Models and System Performance"
    },    {
      questionId: "devops_q_18",
      prompt: "Skill Assessment #18 for DevOps, CI/CD & Kubernetes Assessment: What is the optimal architectural approach for high-throughput concurrency?",
      options: [
        "Asynchronous non-blocking event-driven loop with bounded thread pooling",
        "Synchronous blocking thread-per-request model with unlimited threads",
        "Spinlock polling in user space without kernel yield",
        "Disabling all database connection pools and reconnecting per request"
      ],
      correctOptionIndex: 0,
      skillLevel: "Intermediate",
      weight: 2,
      explanation: "Asynchronous non-blocking execution prevents thread starvation while maximizing I/O utilization under heavy concurrency.",
      relatedCurriculumTopic: "Concurrency Models and System Performance"
    },    {
      questionId: "devops_q_19",
      prompt: "Skill Assessment #19 for DevOps, CI/CD & Kubernetes Assessment: What is the optimal architectural approach for high-throughput concurrency?",
      options: [
        "Asynchronous non-blocking event-driven loop with bounded thread pooling",
        "Synchronous blocking thread-per-request model with unlimited threads",
        "Spinlock polling in user space without kernel yield",
        "Disabling all database connection pools and reconnecting per request"
      ],
      correctOptionIndex: 0,
      skillLevel: "Intermediate",
      weight: 2,
      explanation: "Asynchronous non-blocking execution prevents thread starvation while maximizing I/O utilization under heavy concurrency.",
      relatedCurriculumTopic: "Concurrency Models and System Performance"
    },    {
      questionId: "devops_q_20",
      prompt: "Skill Assessment #20 for DevOps, CI/CD & Kubernetes Assessment: What is the optimal architectural approach for high-throughput concurrency?",
      options: [
        "Asynchronous non-blocking event-driven loop with bounded thread pooling",
        "Synchronous blocking thread-per-request model with unlimited threads",
        "Spinlock polling in user space without kernel yield",
        "Disabling all database connection pools and reconnecting per request"
      ],
      correctOptionIndex: 0,
      skillLevel: "Intermediate",
      weight: 2,
      explanation: "Asynchronous non-blocking execution prevents thread starvation while maximizing I/O utilization under heavy concurrency.",
      relatedCurriculumTopic: "Concurrency Models and System Performance"
    },    {
      questionId: "devops_q_21",
      prompt: "Skill Assessment #21 for DevOps, CI/CD & Kubernetes Assessment: What is the optimal architectural approach for high-throughput concurrency?",
      options: [
        "Asynchronous non-blocking event-driven loop with bounded thread pooling",
        "Synchronous blocking thread-per-request model with unlimited threads",
        "Spinlock polling in user space without kernel yield",
        "Disabling all database connection pools and reconnecting per request"
      ],
      correctOptionIndex: 0,
      skillLevel: "Advanced",
      weight: 3,
      explanation: "Asynchronous non-blocking execution prevents thread starvation while maximizing I/O utilization under heavy concurrency.",
      relatedCurriculumTopic: "Concurrency Models and System Performance"
    },    {
      questionId: "devops_q_22",
      prompt: "Skill Assessment #22 for DevOps, CI/CD & Kubernetes Assessment: What is the optimal architectural approach for high-throughput concurrency?",
      options: [
        "Asynchronous non-blocking event-driven loop with bounded thread pooling",
        "Synchronous blocking thread-per-request model with unlimited threads",
        "Spinlock polling in user space without kernel yield",
        "Disabling all database connection pools and reconnecting per request"
      ],
      correctOptionIndex: 0,
      skillLevel: "Advanced",
      weight: 3,
      explanation: "Asynchronous non-blocking execution prevents thread starvation while maximizing I/O utilization under heavy concurrency.",
      relatedCurriculumTopic: "Concurrency Models and System Performance"
    },    {
      questionId: "devops_q_23",
      prompt: "Skill Assessment #23 for DevOps, CI/CD & Kubernetes Assessment: What is the optimal architectural approach for high-throughput concurrency?",
      options: [
        "Asynchronous non-blocking event-driven loop with bounded thread pooling",
        "Synchronous blocking thread-per-request model with unlimited threads",
        "Spinlock polling in user space without kernel yield",
        "Disabling all database connection pools and reconnecting per request"
      ],
      correctOptionIndex: 0,
      skillLevel: "Advanced",
      weight: 3,
      explanation: "Asynchronous non-blocking execution prevents thread starvation while maximizing I/O utilization under heavy concurrency.",
      relatedCurriculumTopic: "Concurrency Models and System Performance"
    },    {
      questionId: "devops_q_24",
      prompt: "Skill Assessment #24 for DevOps, CI/CD & Kubernetes Assessment: What is the optimal architectural approach for high-throughput concurrency?",
      options: [
        "Asynchronous non-blocking event-driven loop with bounded thread pooling",
        "Synchronous blocking thread-per-request model with unlimited threads",
        "Spinlock polling in user space without kernel yield",
        "Disabling all database connection pools and reconnecting per request"
      ],
      correctOptionIndex: 0,
      skillLevel: "Advanced",
      weight: 3,
      explanation: "Asynchronous non-blocking execution prevents thread starvation while maximizing I/O utilization under heavy concurrency.",
      relatedCurriculumTopic: "Concurrency Models and System Performance"
    },    {
      questionId: "devops_q_25",
      prompt: "Skill Assessment #25 for DevOps, CI/CD & Kubernetes Assessment: What is the optimal architectural approach for high-throughput concurrency?",
      options: [
        "Asynchronous non-blocking event-driven loop with bounded thread pooling",
        "Synchronous blocking thread-per-request model with unlimited threads",
        "Spinlock polling in user space without kernel yield",
        "Disabling all database connection pools and reconnecting per request"
      ],
      correctOptionIndex: 0,
      skillLevel: "Advanced",
      weight: 3,
      explanation: "Asynchronous non-blocking execution prevents thread starvation while maximizing I/O utilization under heavy concurrency.",
      relatedCurriculumTopic: "Concurrency Models and System Performance"
    },    {
      questionId: "devops_q_26",
      prompt: "Skill Assessment #26 for DevOps, CI/CD & Kubernetes Assessment: What is the optimal architectural approach for high-throughput concurrency?",
      options: [
        "Asynchronous non-blocking event-driven loop with bounded thread pooling",
        "Synchronous blocking thread-per-request model with unlimited threads",
        "Spinlock polling in user space without kernel yield",
        "Disabling all database connection pools and reconnecting per request"
      ],
      correctOptionIndex: 0,
      skillLevel: "Advanced",
      weight: 3,
      explanation: "Asynchronous non-blocking execution prevents thread starvation while maximizing I/O utilization under heavy concurrency.",
      relatedCurriculumTopic: "Concurrency Models and System Performance"
    },    {
      questionId: "devops_q_27",
      prompt: "Skill Assessment #27 for DevOps, CI/CD & Kubernetes Assessment: What is the optimal architectural approach for high-throughput concurrency?",
      options: [
        "Asynchronous non-blocking event-driven loop with bounded thread pooling",
        "Synchronous blocking thread-per-request model with unlimited threads",
        "Spinlock polling in user space without kernel yield",
        "Disabling all database connection pools and reconnecting per request"
      ],
      correctOptionIndex: 0,
      skillLevel: "Advanced",
      weight: 3,
      explanation: "Asynchronous non-blocking execution prevents thread starvation while maximizing I/O utilization under heavy concurrency.",
      relatedCurriculumTopic: "Concurrency Models and System Performance"
    },    {
      questionId: "devops_q_28",
      prompt: "Skill Assessment #28 for DevOps, CI/CD & Kubernetes Assessment: What is the optimal architectural approach for high-throughput concurrency?",
      options: [
        "Asynchronous non-blocking event-driven loop with bounded thread pooling",
        "Synchronous blocking thread-per-request model with unlimited threads",
        "Spinlock polling in user space without kernel yield",
        "Disabling all database connection pools and reconnecting per request"
      ],
      correctOptionIndex: 0,
      skillLevel: "Advanced",
      weight: 3,
      explanation: "Asynchronous non-blocking execution prevents thread starvation while maximizing I/O utilization under heavy concurrency.",
      relatedCurriculumTopic: "Concurrency Models and System Performance"
    },    {
      questionId: "devops_q_29",
      prompt: "Skill Assessment #29 for DevOps, CI/CD & Kubernetes Assessment: What is the optimal architectural approach for high-throughput concurrency?",
      options: [
        "Asynchronous non-blocking event-driven loop with bounded thread pooling",
        "Synchronous blocking thread-per-request model with unlimited threads",
        "Spinlock polling in user space without kernel yield",
        "Disabling all database connection pools and reconnecting per request"
      ],
      correctOptionIndex: 0,
      skillLevel: "Advanced",
      weight: 3,
      explanation: "Asynchronous non-blocking execution prevents thread starvation while maximizing I/O utilization under heavy concurrency.",
      relatedCurriculumTopic: "Concurrency Models and System Performance"
    },    {
      questionId: "devops_q_30",
      prompt: "Skill Assessment #30 for DevOps, CI/CD & Kubernetes Assessment: What is the optimal architectural approach for high-throughput concurrency?",
      options: [
        "Asynchronous non-blocking event-driven loop with bounded thread pooling",
        "Synchronous blocking thread-per-request model with unlimited threads",
        "Spinlock polling in user space without kernel yield",
        "Disabling all database connection pools and reconnecting per request"
      ],
      correctOptionIndex: 0,
      skillLevel: "Advanced",
      weight: 3,
      explanation: "Asynchronous non-blocking execution prevents thread starvation while maximizing I/O utilization under heavy concurrency.",
      relatedCurriculumTopic: "Concurrency Models and System Performance"
    }
  ]
};
