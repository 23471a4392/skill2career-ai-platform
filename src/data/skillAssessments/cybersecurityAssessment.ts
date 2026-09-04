// Cybersecurity, OWASP & Network Defense Assessment
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

export const cybersecurityAssessment: DiagnosticAssessment = {
  assessmentId: "cybersecurityAssessment",
  title: "Cybersecurity, OWASP & Network Defense Assessment",
  skillKey: "cybersecurity",
  passingScorePercentage: 75,
  timeLimitMinutes: 45,
  questions: [
    {
      questionId: "cybersecurity_q_1",
      prompt: "Skill Assessment #1 for Cybersecurity, OWASP & Network Defense Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "cybersecurity_q_2",
      prompt: "Skill Assessment #2 for Cybersecurity, OWASP & Network Defense Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "cybersecurity_q_3",
      prompt: "Skill Assessment #3 for Cybersecurity, OWASP & Network Defense Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "cybersecurity_q_4",
      prompt: "Skill Assessment #4 for Cybersecurity, OWASP & Network Defense Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "cybersecurity_q_5",
      prompt: "Skill Assessment #5 for Cybersecurity, OWASP & Network Defense Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "cybersecurity_q_6",
      prompt: "Skill Assessment #6 for Cybersecurity, OWASP & Network Defense Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "cybersecurity_q_7",
      prompt: "Skill Assessment #7 for Cybersecurity, OWASP & Network Defense Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "cybersecurity_q_8",
      prompt: "Skill Assessment #8 for Cybersecurity, OWASP & Network Defense Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "cybersecurity_q_9",
      prompt: "Skill Assessment #9 for Cybersecurity, OWASP & Network Defense Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "cybersecurity_q_10",
      prompt: "Skill Assessment #10 for Cybersecurity, OWASP & Network Defense Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "cybersecurity_q_11",
      prompt: "Skill Assessment #11 for Cybersecurity, OWASP & Network Defense Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "cybersecurity_q_12",
      prompt: "Skill Assessment #12 for Cybersecurity, OWASP & Network Defense Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "cybersecurity_q_13",
      prompt: "Skill Assessment #13 for Cybersecurity, OWASP & Network Defense Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "cybersecurity_q_14",
      prompt: "Skill Assessment #14 for Cybersecurity, OWASP & Network Defense Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "cybersecurity_q_15",
      prompt: "Skill Assessment #15 for Cybersecurity, OWASP & Network Defense Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "cybersecurity_q_16",
      prompt: "Skill Assessment #16 for Cybersecurity, OWASP & Network Defense Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "cybersecurity_q_17",
      prompt: "Skill Assessment #17 for Cybersecurity, OWASP & Network Defense Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "cybersecurity_q_18",
      prompt: "Skill Assessment #18 for Cybersecurity, OWASP & Network Defense Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "cybersecurity_q_19",
      prompt: "Skill Assessment #19 for Cybersecurity, OWASP & Network Defense Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "cybersecurity_q_20",
      prompt: "Skill Assessment #20 for Cybersecurity, OWASP & Network Defense Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "cybersecurity_q_21",
      prompt: "Skill Assessment #21 for Cybersecurity, OWASP & Network Defense Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "cybersecurity_q_22",
      prompt: "Skill Assessment #22 for Cybersecurity, OWASP & Network Defense Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "cybersecurity_q_23",
      prompt: "Skill Assessment #23 for Cybersecurity, OWASP & Network Defense Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "cybersecurity_q_24",
      prompt: "Skill Assessment #24 for Cybersecurity, OWASP & Network Defense Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "cybersecurity_q_25",
      prompt: "Skill Assessment #25 for Cybersecurity, OWASP & Network Defense Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "cybersecurity_q_26",
      prompt: "Skill Assessment #26 for Cybersecurity, OWASP & Network Defense Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "cybersecurity_q_27",
      prompt: "Skill Assessment #27 for Cybersecurity, OWASP & Network Defense Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "cybersecurity_q_28",
      prompt: "Skill Assessment #28 for Cybersecurity, OWASP & Network Defense Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "cybersecurity_q_29",
      prompt: "Skill Assessment #29 for Cybersecurity, OWASP & Network Defense Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "cybersecurity_q_30",
      prompt: "Skill Assessment #30 for Cybersecurity, OWASP & Network Defense Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
