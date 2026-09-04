// React & Frontend Architecture Assessment
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

export const reactSkillAssessment: DiagnosticAssessment = {
  assessmentId: "reactSkillAssessment",
  title: "React & Frontend Architecture Assessment",
  skillKey: "react",
  passingScorePercentage: 75,
  timeLimitMinutes: 45,
  questions: [
    {
      questionId: "react_q_1",
      prompt: "Skill Assessment #1 for React & Frontend Architecture Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "react_q_2",
      prompt: "Skill Assessment #2 for React & Frontend Architecture Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "react_q_3",
      prompt: "Skill Assessment #3 for React & Frontend Architecture Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "react_q_4",
      prompt: "Skill Assessment #4 for React & Frontend Architecture Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "react_q_5",
      prompt: "Skill Assessment #5 for React & Frontend Architecture Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "react_q_6",
      prompt: "Skill Assessment #6 for React & Frontend Architecture Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "react_q_7",
      prompt: "Skill Assessment #7 for React & Frontend Architecture Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "react_q_8",
      prompt: "Skill Assessment #8 for React & Frontend Architecture Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "react_q_9",
      prompt: "Skill Assessment #9 for React & Frontend Architecture Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "react_q_10",
      prompt: "Skill Assessment #10 for React & Frontend Architecture Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "react_q_11",
      prompt: "Skill Assessment #11 for React & Frontend Architecture Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "react_q_12",
      prompt: "Skill Assessment #12 for React & Frontend Architecture Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "react_q_13",
      prompt: "Skill Assessment #13 for React & Frontend Architecture Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "react_q_14",
      prompt: "Skill Assessment #14 for React & Frontend Architecture Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "react_q_15",
      prompt: "Skill Assessment #15 for React & Frontend Architecture Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "react_q_16",
      prompt: "Skill Assessment #16 for React & Frontend Architecture Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "react_q_17",
      prompt: "Skill Assessment #17 for React & Frontend Architecture Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "react_q_18",
      prompt: "Skill Assessment #18 for React & Frontend Architecture Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "react_q_19",
      prompt: "Skill Assessment #19 for React & Frontend Architecture Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "react_q_20",
      prompt: "Skill Assessment #20 for React & Frontend Architecture Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "react_q_21",
      prompt: "Skill Assessment #21 for React & Frontend Architecture Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "react_q_22",
      prompt: "Skill Assessment #22 for React & Frontend Architecture Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "react_q_23",
      prompt: "Skill Assessment #23 for React & Frontend Architecture Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "react_q_24",
      prompt: "Skill Assessment #24 for React & Frontend Architecture Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "react_q_25",
      prompt: "Skill Assessment #25 for React & Frontend Architecture Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "react_q_26",
      prompt: "Skill Assessment #26 for React & Frontend Architecture Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "react_q_27",
      prompt: "Skill Assessment #27 for React & Frontend Architecture Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "react_q_28",
      prompt: "Skill Assessment #28 for React & Frontend Architecture Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "react_q_29",
      prompt: "Skill Assessment #29 for React & Frontend Architecture Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "react_q_30",
      prompt: "Skill Assessment #30 for React & Frontend Architecture Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
