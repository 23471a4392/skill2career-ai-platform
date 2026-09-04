import { InterviewQuestion } from '../types';

export const INTERVIEW_QUESTIONS: InterviewQuestion[] = [
  // --- DATA ANALYST QUESTIONS ---
  {
    id: 'da-q1',
    careerId: 'data-analyst',
    skillTopic: 'SQL',
    category: 'Technical',
    difficulty: 'Medium',
    question: 'What is the difference between WHERE and HAVING clauses in SQL, and when would you use each?',
    answerSummary: 'WHERE filters individual records before any groupings are formed, whereas HAVING filters aggregated groups after GROUP BY is applied.',
    detailedExplanation: `In SQL query execution order:
1. FROM / JOIN
2. WHERE (filters individual rows before aggregation; cannot use aggregate functions like COUNT, SUM, AVG)
3. GROUP BY (collapses rows into groups)
4. HAVING (filters groups created by GROUP BY based on aggregated calculations)
5. SELECT (evaluates column projections and window functions)
6. ORDER BY / LIMIT

Example:
SELECT department_id, AVG(salary) AS avg_sal
FROM employees
WHERE hire_date >= '2022-01-01' -- filters individual rows
GROUP BY department_id
HAVING AVG(salary) > 75000; -- filters aggregated departments`,
    codeSnippet: `SELECT department_id, AVG(salary) AS avg_sal
FROM employees
WHERE hire_date >= '2022-01-01'
GROUP BY department_id
HAVING AVG(salary) > 75000;`,
    tips: ['Mention SQL query execution order to show deep relational knowledge', 'State clearly that WHERE cannot contain aggregate expressions']
  },
  {
    id: 'da-q2',
    careerId: 'data-analyst',
    skillTopic: 'Power BI / DAX',
    category: 'Technical',
    difficulty: 'Medium',
    question: 'Explain the difference between Calculated Columns and Measures in Power BI.',
    answerSummary: 'Calculated Columns are evaluated during data refresh and stored in memory row-by-row. Measures are calculated dynamically on-the-fly at query time based on user filter context.',
    detailedExplanation: `Key differences:
1. Evaluation Context:
   - Calculated Columns: Row Context (runs for each row in the table, static after refresh).
   - Measures: Filter Context (runs dynamically whenever the user slices or filters a report visual).

2. Memory & Storage:
   - Calculated Columns consume RAM and model disk storage because values are physically stored in the VertiPaq database.
   - Measures consume zero disk storage and minimal RAM since they calculate only when the visualization renders.

3. Golden Rule: Always prefer Measures over Calculated Columns unless you need to use the resulting value as an axis or slicer!`,
    tips: ['Use the keyword "VertiPaq engine" and "Filter context vs Row context" to impress the interviewer.']
  },
  {
    id: 'da-q3',
    careerId: 'data-analyst',
    skillTopic: 'Data Strategy',
    category: 'Scenario-Based',
    difficulty: 'Hard',
    question: 'If our main e-commerce checkout conversion rate suddenly drops by 15% this morning, how would you diagnose the root cause?',
    answerSummary: 'I would follow a structured 4-step diagnostic process: Data Validation -> Segmentation Analysis -> Funnel Breakdown -> External & Technical Checks.',
    detailedExplanation: `Step-by-step diagnostic framework:
1. Data & Instrumentation Validation:
   - Verify tracking tags, telemetry pipeline health, and whether the drop is real or a logging latency issue.
2. Dimensional Segmentation:
   - Device: Is the drop isolated to iOS, Android, or Desktop?
   - Browser & OS: Did a recent Chrome/Safari release break checkout JavaScript?
   - Geography / Network: Is there a regional gateway outage?
   - Payment Gateway: Is Razorpay/Stripe failing for a specific bank or UPI provider?
3. User Funnel Step Analysis:
   - Identify where dropoff is concentrated: Cart -> Address -> Payment Selection -> OTP -> Success.
4. Release / Marketing Changes:
   - Check if engineering deployed a new release in the last 24h, or if a coupon promotion expired.`,
    sampleAnswerHR: 'I would start by confirming data integrity to rule out telemetry glitch, then slice the drop across device, payment method, and funnel step to isolate whether it is a technical bug, gateway outage, or UX friction point.',
    tips: ['Structured thinking matters far more than guessing a single random cause.']
  },

  // --- FRONTEND DEVELOPER QUESTIONS ---
  {
    id: 'fe-q1',
    careerId: 'frontend-developer',
    skillTopic: 'React',
    category: 'Technical',
    difficulty: 'Medium',
    question: 'Explain React Virtual DOM and the Reconciliation (Diffing) algorithm.',
    answerSummary: 'The Virtual DOM is a lightweight JavaScript representation of the real DOM in memory. Reconciliation is the process where React diffs the old and new VDOM trees to calculate minimal real DOM operations.',
    detailedExplanation: `How it works:
1. When component state or props change, React invokes render and creates a new Virtual DOM tree.
2. React compares the new tree with the previous Virtual DOM tree using an $O(n)$ heuristic algorithm.
3. Key Diffing Heuristics:
   - Elements of different types (e.g. <div> to <span>) will tear down the entire old tree.
   - For elements of the same type, React updates only changed attributes.
   - Keys on lists allow React to match children across renders to avoid unnecessary DOM node remounts.
4. React Batches real DOM updates via the Commit phase, minimizing expensive browser layout recalculations and repaints.`,
    codeSnippet: `// Key prop ensures React reuses DOM nodes correctly
{items.map((item) => (
  <ListItem key={item.id} data={item} />
))}`,
    tips: ['Explain that DOM manipulation is computationally expensive due to browser layout reflows', 'Explain the significance of the `key` prop in lists']
  },
  {
    id: 'fe-q2',
    careerId: 'frontend-developer',
    skillTopic: 'JavaScript',
    category: 'Technical',
    difficulty: 'Hard',
    question: 'What is the JavaScript Event Loop, and what is the difference between Microtasks and Macrotasks?',
    answerSummary: 'The Event Loop coordinates asynchronous execution between the Call Stack, Web APIs, Microtask Queue (Promises, queueMicrotask), and Macrotask/Task Queue (setTimeout, setInterval). Microtasks are always drained completely before the next macrotask.',
    detailedExplanation: `Execution Priority Order:
1. Execute synchronous code on the Call Stack.
2. When Call Stack is empty, drain ALL jobs in the Microtask Queue (Promise .then callbacks, async/await continuations, MutationObserver).
3. If Microtasks schedule more Microtasks, process those before moving on.
4. Render UI repaint if needed.
5. Pop and execute ONE task from the Macrotask Queue (setTimeout, setInterval, setImmediate, I/O).
6. Repeat loop.

Example:
console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');
// Output: 1, 4, 3, 2`,
    codeSnippet: `console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');
// Output: 1 -> 4 -> 3 -> 2`,
    tips: ['Walk through the output step-by-step to demonstrate mastery of the runtime model']
  },

  // --- GENERAL BEHAVIORAL & HR QUESTIONS ---
  {
    id: 'hr-q1',
    careerId: 'frontend-developer',
    skillTopic: 'Behavioral',
    category: 'HR & Behavioral',
    difficulty: 'Easy',
    question: 'Tell me about a challenging bug you encountered, and how you resolved it.',
    answerSummary: 'Use the STAR format: Situation, Task, Action, and Result with quantifiable outcomes.',
    detailedExplanation: 'Interviewers look for structured debugging habits: reproducing the issue, isolating hypotheses, utilizing browser devtools/profiler, and applying unit test regression shields.',
    sampleAnswerHR: 'In my previous project, we faced a memory leak where the dashboard became sluggish after 10 minutes of usage. (Situation/Task) I used Chrome DevTools Memory Profiler and heap snapshots to isolate an uncleaned setInterval in a custom chart hook. (Action) I added an explicit cleanup function in useEffect and added an ESLint rule. (Result) Memory consumption remained stable under 45MB and page frame rates jumped back to 60fps.',
    tips: ['Always state the tangible outcome and what preventative measure you put in place']
  },
  {
    id: 'hr-q2',
    careerId: 'data-analyst',
    skillTopic: 'Behavioral',
    category: 'HR & Behavioral',
    difficulty: 'Easy',
    question: 'How do you prioritize multiple urgent stakeholder requests with competing deadlines?',
    answerSummary: 'I assess impact vs effort, communicate transparently with trade-offs, and align with core business goals.',
    detailedExplanation: 'Show that you do not panic, but rather apply frameworks like Eisenhower Matrix or RICE scoring to rank items by expected revenue/cost impact.',
    sampleAnswerHR: 'I evaluate requests based on business urgency and impact on revenue or compliance. I then have a brief sync with stakeholders to transparently explain timeline dependencies and offer phased delivery—providing MVP insights immediately while scheduling deep dives for the following sprint.',
    tips: ['Demonstrate clear stakeholder communication rather than just working overtime silently']
  },

  // --- CLOUD & DEVOPS QUESTIONS ---
  {
    id: 'devops-q1',
    careerId: 'cloud-devops-engineer',
    skillTopic: 'Kubernetes',
    category: 'Technical',
    difficulty: 'Hard',
    question: 'What happens under the hood when a Kubernetes Pod is scheduled and launched on a worker node?',
    answerSummary: 'API Server records Pod spec -> kube-scheduler selects optimum node -> kubelet on node detects assignment -> invokes container runtime (containerd/CRI-O) and CNI network plugin -> sets up container namespaces, cgroups, and IP -> reports Running status.',
    detailedExplanation: `Detailed lifecycle:
1. User submits YAML -> Kube-API Server validates and stores Pod in etcd.
2. Kube-Scheduler watches for unassigned pods, filters nodes by resource requests/tolerations, scores candidate nodes, and assigns nodeName.
3. Kubelet running as an agent on that node notices the assignment.
4. Kubelet invokes Container Runtime Interface (CRI) to pull container images.
5. Invokes Container Network Interface (CNI, e.g. Calico/Flannel/AWS VPC CNI) to allocate an IP address and virtual ethernet bridge.
6. Invokes Container Storage Interface (CSI) to mount PersistentVolumes.
7. Launches containers with Linux cgroups (resource limits) and namespaces (isolation).
8. Runs Liveness/Readiness probes and reports Pod status back to API Server.`,
    tips: ['Mention etcd, Kube-Scheduler, Kubelet, CRI, CNI, and CSI components']
  },

  // --- AI / MACHINE LEARNING QUESTIONS ---
  {
    id: 'ml-q1',
    careerId: 'machine-learning-engineer',
    skillTopic: 'Machine Learning',
    category: 'Technical',
    difficulty: 'Medium',
    question: 'What is the Bias-Variance tradeoff, and how do you diagnose underfitting vs overfitting?',
    answerSummary: 'Bias is error from erroneous assumptions (underfitting), while Variance is sensitivity to small fluctuations in training data (overfitting). The goal is to minimize total generalization error.',
    detailedExplanation: `Diagnosis:
- High Bias (Underfitting): Model performs poorly on both training and validation data (High training loss, high validation loss).
  * Fixes: Increase model complexity, add new features, reduce L1/L2 regularization, train longer.
- High Variance (Overfitting): Model performs exceptionally well on training data but poorly on validation data (Low training loss, high validation loss).
  * Fixes: Add more training data, apply dropout/L2 regularization, reduce feature count, use cross-validation, early stopping.`,
    tips: ['Draw or describe the U-shaped error curve with model complexity on the x-axis']
  }
];
