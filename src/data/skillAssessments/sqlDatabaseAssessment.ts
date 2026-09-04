// SQL, Indexing & Database Optimization Assessment
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

export const sqlDatabaseAssessment: DiagnosticAssessment = {
  assessmentId: "sqlDatabaseAssessment",
  title: "SQL, Indexing & Database Optimization Assessment",
  skillKey: "sql-db",
  passingScorePercentage: 75,
  timeLimitMinutes: 45,
  questions: [
    {
      questionId: "sql-db_q_1",
      prompt: "Skill Assessment #1 for SQL, Indexing & Database Optimization Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "sql-db_q_2",
      prompt: "Skill Assessment #2 for SQL, Indexing & Database Optimization Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "sql-db_q_3",
      prompt: "Skill Assessment #3 for SQL, Indexing & Database Optimization Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "sql-db_q_4",
      prompt: "Skill Assessment #4 for SQL, Indexing & Database Optimization Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "sql-db_q_5",
      prompt: "Skill Assessment #5 for SQL, Indexing & Database Optimization Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "sql-db_q_6",
      prompt: "Skill Assessment #6 for SQL, Indexing & Database Optimization Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "sql-db_q_7",
      prompt: "Skill Assessment #7 for SQL, Indexing & Database Optimization Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "sql-db_q_8",
      prompt: "Skill Assessment #8 for SQL, Indexing & Database Optimization Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "sql-db_q_9",
      prompt: "Skill Assessment #9 for SQL, Indexing & Database Optimization Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "sql-db_q_10",
      prompt: "Skill Assessment #10 for SQL, Indexing & Database Optimization Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "sql-db_q_11",
      prompt: "Skill Assessment #11 for SQL, Indexing & Database Optimization Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "sql-db_q_12",
      prompt: "Skill Assessment #12 for SQL, Indexing & Database Optimization Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "sql-db_q_13",
      prompt: "Skill Assessment #13 for SQL, Indexing & Database Optimization Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "sql-db_q_14",
      prompt: "Skill Assessment #14 for SQL, Indexing & Database Optimization Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "sql-db_q_15",
      prompt: "Skill Assessment #15 for SQL, Indexing & Database Optimization Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "sql-db_q_16",
      prompt: "Skill Assessment #16 for SQL, Indexing & Database Optimization Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "sql-db_q_17",
      prompt: "Skill Assessment #17 for SQL, Indexing & Database Optimization Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "sql-db_q_18",
      prompt: "Skill Assessment #18 for SQL, Indexing & Database Optimization Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "sql-db_q_19",
      prompt: "Skill Assessment #19 for SQL, Indexing & Database Optimization Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "sql-db_q_20",
      prompt: "Skill Assessment #20 for SQL, Indexing & Database Optimization Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "sql-db_q_21",
      prompt: "Skill Assessment #21 for SQL, Indexing & Database Optimization Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "sql-db_q_22",
      prompt: "Skill Assessment #22 for SQL, Indexing & Database Optimization Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "sql-db_q_23",
      prompt: "Skill Assessment #23 for SQL, Indexing & Database Optimization Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "sql-db_q_24",
      prompt: "Skill Assessment #24 for SQL, Indexing & Database Optimization Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "sql-db_q_25",
      prompt: "Skill Assessment #25 for SQL, Indexing & Database Optimization Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "sql-db_q_26",
      prompt: "Skill Assessment #26 for SQL, Indexing & Database Optimization Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "sql-db_q_27",
      prompt: "Skill Assessment #27 for SQL, Indexing & Database Optimization Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "sql-db_q_28",
      prompt: "Skill Assessment #28 for SQL, Indexing & Database Optimization Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "sql-db_q_29",
      prompt: "Skill Assessment #29 for SQL, Indexing & Database Optimization Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
      questionId: "sql-db_q_30",
      prompt: "Skill Assessment #30 for SQL, Indexing & Database Optimization Assessment: What is the optimal architectural approach for high-throughput concurrency?",
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
