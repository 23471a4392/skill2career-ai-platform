// Tier-1 FAANG & Global Tech Giants Guide
// Generated for Skill2Career Company Intelligence

export interface InterviewRound {
  roundNumber: number;
  name: string;
  durationMins: number;
  focusAreas: string[];
}

export interface CompanyHiringGuide {
  companyId: string;
  companyName: string;
  tier: string;
  headquarters: string;
  hiringLocations: string[];
  averageFresherCTC: string;
  averageExperiencedCTC: string;
  interviewRounds: InterviewRound[];
  evaluationCriteria: string[];
  preparationTips: string[];
}

export interface CompanyCategoryGuide {
  category: string;
  title: string;
  companies: CompanyHiringGuide[];
}

export const faangCompanyGuides: CompanyCategoryGuide = {
  category: "faang",
  title: "Tier-1 FAANG & Global Tech Giants Guide",
  companies: [
    {
      companyId: "faang_comp_1",
      companyName: "Enterprise Global Organization #1",
      tier: "Tier-1",
      headquarters: "Global / Multi-National",
      hiringLocations: ["Bengaluru", "Hyderabad", "Pune", "San Francisco", "London", "Remote"],
      averageFresherCTC: "?14 - 28 LPA",
      averageExperiencedCTC: "?35 - 85 LPA",
      interviewRounds: [
        { roundNumber: 1, name: "Online Coding Assessment (DSA & Problem Solving)", durationMins: 90, focusAreas: ["Arrays", "Graphs", "DP", "SQL"] },
        { roundNumber: 2, name: "Technical Round 1 (Data Structures & Live Coding)", durationMins: 60, focusAreas: ["Tree traversals", "Concurrency", "Complexity"] },
        { roundNumber: 3, name: "Technical Round 2 (System Design & Architecture)", durationMins: 60, focusAreas: ["High availability", "Sharding", "API design"] },
        { roundNumber: 4, name: "Bar Raiser / Leadership Principles & Culture Fit", durationMins: 45, focusAreas: ["STAR scenarios", "Ownership", "Collaboration"] }
      ],
      evaluationCriteria: [
        "Algorithmic correctness and edge case handling",
        "Clean, maintainable, modular object-oriented/functional code structure",
        "System scalability intuition and trade-off articulation",
        "Cultural alignment, humble communication, and growth mindset"
      ],
      preparationTips: [
        "Practice mock whiteboard coding with time limits",
        "Clarify ambiguous requirements before writing any code",
        "Structure behavioral answers with clear metrics and quantifiable impact"
      ]
    },    {
      companyId: "faang_comp_2",
      companyName: "Enterprise Global Organization #2",
      tier: "Tier-1",
      headquarters: "Global / Multi-National",
      hiringLocations: ["Bengaluru", "Hyderabad", "Pune", "San Francisco", "London", "Remote"],
      averageFresherCTC: "?14 - 28 LPA",
      averageExperiencedCTC: "?35 - 85 LPA",
      interviewRounds: [
        { roundNumber: 1, name: "Online Coding Assessment (DSA & Problem Solving)", durationMins: 90, focusAreas: ["Arrays", "Graphs", "DP", "SQL"] },
        { roundNumber: 2, name: "Technical Round 1 (Data Structures & Live Coding)", durationMins: 60, focusAreas: ["Tree traversals", "Concurrency", "Complexity"] },
        { roundNumber: 3, name: "Technical Round 2 (System Design & Architecture)", durationMins: 60, focusAreas: ["High availability", "Sharding", "API design"] },
        { roundNumber: 4, name: "Bar Raiser / Leadership Principles & Culture Fit", durationMins: 45, focusAreas: ["STAR scenarios", "Ownership", "Collaboration"] }
      ],
      evaluationCriteria: [
        "Algorithmic correctness and edge case handling",
        "Clean, maintainable, modular object-oriented/functional code structure",
        "System scalability intuition and trade-off articulation",
        "Cultural alignment, humble communication, and growth mindset"
      ],
      preparationTips: [
        "Practice mock whiteboard coding with time limits",
        "Clarify ambiguous requirements before writing any code",
        "Structure behavioral answers with clear metrics and quantifiable impact"
      ]
    },    {
      companyId: "faang_comp_3",
      companyName: "Enterprise Global Organization #3",
      tier: "Tier-1",
      headquarters: "Global / Multi-National",
      hiringLocations: ["Bengaluru", "Hyderabad", "Pune", "San Francisco", "London", "Remote"],
      averageFresherCTC: "?14 - 28 LPA",
      averageExperiencedCTC: "?35 - 85 LPA",
      interviewRounds: [
        { roundNumber: 1, name: "Online Coding Assessment (DSA & Problem Solving)", durationMins: 90, focusAreas: ["Arrays", "Graphs", "DP", "SQL"] },
        { roundNumber: 2, name: "Technical Round 1 (Data Structures & Live Coding)", durationMins: 60, focusAreas: ["Tree traversals", "Concurrency", "Complexity"] },
        { roundNumber: 3, name: "Technical Round 2 (System Design & Architecture)", durationMins: 60, focusAreas: ["High availability", "Sharding", "API design"] },
        { roundNumber: 4, name: "Bar Raiser / Leadership Principles & Culture Fit", durationMins: 45, focusAreas: ["STAR scenarios", "Ownership", "Collaboration"] }
      ],
      evaluationCriteria: [
        "Algorithmic correctness and edge case handling",
        "Clean, maintainable, modular object-oriented/functional code structure",
        "System scalability intuition and trade-off articulation",
        "Cultural alignment, humble communication, and growth mindset"
      ],
      preparationTips: [
        "Practice mock whiteboard coding with time limits",
        "Clarify ambiguous requirements before writing any code",
        "Structure behavioral answers with clear metrics and quantifiable impact"
      ]
    },    {
      companyId: "faang_comp_4",
      companyName: "Enterprise Global Organization #4",
      tier: "Tier-1",
      headquarters: "Global / Multi-National",
      hiringLocations: ["Bengaluru", "Hyderabad", "Pune", "San Francisco", "London", "Remote"],
      averageFresherCTC: "?14 - 28 LPA",
      averageExperiencedCTC: "?35 - 85 LPA",
      interviewRounds: [
        { roundNumber: 1, name: "Online Coding Assessment (DSA & Problem Solving)", durationMins: 90, focusAreas: ["Arrays", "Graphs", "DP", "SQL"] },
        { roundNumber: 2, name: "Technical Round 1 (Data Structures & Live Coding)", durationMins: 60, focusAreas: ["Tree traversals", "Concurrency", "Complexity"] },
        { roundNumber: 3, name: "Technical Round 2 (System Design & Architecture)", durationMins: 60, focusAreas: ["High availability", "Sharding", "API design"] },
        { roundNumber: 4, name: "Bar Raiser / Leadership Principles & Culture Fit", durationMins: 45, focusAreas: ["STAR scenarios", "Ownership", "Collaboration"] }
      ],
      evaluationCriteria: [
        "Algorithmic correctness and edge case handling",
        "Clean, maintainable, modular object-oriented/functional code structure",
        "System scalability intuition and trade-off articulation",
        "Cultural alignment, humble communication, and growth mindset"
      ],
      preparationTips: [
        "Practice mock whiteboard coding with time limits",
        "Clarify ambiguous requirements before writing any code",
        "Structure behavioral answers with clear metrics and quantifiable impact"
      ]
    },    {
      companyId: "faang_comp_5",
      companyName: "Enterprise Global Organization #5",
      tier: "Tier-1",
      headquarters: "Global / Multi-National",
      hiringLocations: ["Bengaluru", "Hyderabad", "Pune", "San Francisco", "London", "Remote"],
      averageFresherCTC: "?14 - 28 LPA",
      averageExperiencedCTC: "?35 - 85 LPA",
      interviewRounds: [
        { roundNumber: 1, name: "Online Coding Assessment (DSA & Problem Solving)", durationMins: 90, focusAreas: ["Arrays", "Graphs", "DP", "SQL"] },
        { roundNumber: 2, name: "Technical Round 1 (Data Structures & Live Coding)", durationMins: 60, focusAreas: ["Tree traversals", "Concurrency", "Complexity"] },
        { roundNumber: 3, name: "Technical Round 2 (System Design & Architecture)", durationMins: 60, focusAreas: ["High availability", "Sharding", "API design"] },
        { roundNumber: 4, name: "Bar Raiser / Leadership Principles & Culture Fit", durationMins: 45, focusAreas: ["STAR scenarios", "Ownership", "Collaboration"] }
      ],
      evaluationCriteria: [
        "Algorithmic correctness and edge case handling",
        "Clean, maintainable, modular object-oriented/functional code structure",
        "System scalability intuition and trade-off articulation",
        "Cultural alignment, humble communication, and growth mindset"
      ],
      preparationTips: [
        "Practice mock whiteboard coding with time limits",
        "Clarify ambiguous requirements before writing any code",
        "Structure behavioral answers with clear metrics and quantifiable impact"
      ]
    },    {
      companyId: "faang_comp_6",
      companyName: "Enterprise Global Organization #6",
      tier: "Tier-1",
      headquarters: "Global / Multi-National",
      hiringLocations: ["Bengaluru", "Hyderabad", "Pune", "San Francisco", "London", "Remote"],
      averageFresherCTC: "?14 - 28 LPA",
      averageExperiencedCTC: "?35 - 85 LPA",
      interviewRounds: [
        { roundNumber: 1, name: "Online Coding Assessment (DSA & Problem Solving)", durationMins: 90, focusAreas: ["Arrays", "Graphs", "DP", "SQL"] },
        { roundNumber: 2, name: "Technical Round 1 (Data Structures & Live Coding)", durationMins: 60, focusAreas: ["Tree traversals", "Concurrency", "Complexity"] },
        { roundNumber: 3, name: "Technical Round 2 (System Design & Architecture)", durationMins: 60, focusAreas: ["High availability", "Sharding", "API design"] },
        { roundNumber: 4, name: "Bar Raiser / Leadership Principles & Culture Fit", durationMins: 45, focusAreas: ["STAR scenarios", "Ownership", "Collaboration"] }
      ],
      evaluationCriteria: [
        "Algorithmic correctness and edge case handling",
        "Clean, maintainable, modular object-oriented/functional code structure",
        "System scalability intuition and trade-off articulation",
        "Cultural alignment, humble communication, and growth mindset"
      ],
      preparationTips: [
        "Practice mock whiteboard coding with time limits",
        "Clarify ambiguous requirements before writing any code",
        "Structure behavioral answers with clear metrics and quantifiable impact"
      ]
    },    {
      companyId: "faang_comp_7",
      companyName: "Enterprise Global Organization #7",
      tier: "Tier-1",
      headquarters: "Global / Multi-National",
      hiringLocations: ["Bengaluru", "Hyderabad", "Pune", "San Francisco", "London", "Remote"],
      averageFresherCTC: "?14 - 28 LPA",
      averageExperiencedCTC: "?35 - 85 LPA",
      interviewRounds: [
        { roundNumber: 1, name: "Online Coding Assessment (DSA & Problem Solving)", durationMins: 90, focusAreas: ["Arrays", "Graphs", "DP", "SQL"] },
        { roundNumber: 2, name: "Technical Round 1 (Data Structures & Live Coding)", durationMins: 60, focusAreas: ["Tree traversals", "Concurrency", "Complexity"] },
        { roundNumber: 3, name: "Technical Round 2 (System Design & Architecture)", durationMins: 60, focusAreas: ["High availability", "Sharding", "API design"] },
        { roundNumber: 4, name: "Bar Raiser / Leadership Principles & Culture Fit", durationMins: 45, focusAreas: ["STAR scenarios", "Ownership", "Collaboration"] }
      ],
      evaluationCriteria: [
        "Algorithmic correctness and edge case handling",
        "Clean, maintainable, modular object-oriented/functional code structure",
        "System scalability intuition and trade-off articulation",
        "Cultural alignment, humble communication, and growth mindset"
      ],
      preparationTips: [
        "Practice mock whiteboard coding with time limits",
        "Clarify ambiguous requirements before writing any code",
        "Structure behavioral answers with clear metrics and quantifiable impact"
      ]
    },    {
      companyId: "faang_comp_8",
      companyName: "Enterprise Global Organization #8",
      tier: "Tier-1",
      headquarters: "Global / Multi-National",
      hiringLocations: ["Bengaluru", "Hyderabad", "Pune", "San Francisco", "London", "Remote"],
      averageFresherCTC: "?14 - 28 LPA",
      averageExperiencedCTC: "?35 - 85 LPA",
      interviewRounds: [
        { roundNumber: 1, name: "Online Coding Assessment (DSA & Problem Solving)", durationMins: 90, focusAreas: ["Arrays", "Graphs", "DP", "SQL"] },
        { roundNumber: 2, name: "Technical Round 1 (Data Structures & Live Coding)", durationMins: 60, focusAreas: ["Tree traversals", "Concurrency", "Complexity"] },
        { roundNumber: 3, name: "Technical Round 2 (System Design & Architecture)", durationMins: 60, focusAreas: ["High availability", "Sharding", "API design"] },
        { roundNumber: 4, name: "Bar Raiser / Leadership Principles & Culture Fit", durationMins: 45, focusAreas: ["STAR scenarios", "Ownership", "Collaboration"] }
      ],
      evaluationCriteria: [
        "Algorithmic correctness and edge case handling",
        "Clean, maintainable, modular object-oriented/functional code structure",
        "System scalability intuition and trade-off articulation",
        "Cultural alignment, humble communication, and growth mindset"
      ],
      preparationTips: [
        "Practice mock whiteboard coding with time limits",
        "Clarify ambiguous requirements before writing any code",
        "Structure behavioral answers with clear metrics and quantifiable impact"
      ]
    },    {
      companyId: "faang_comp_9",
      companyName: "Enterprise Global Organization #9",
      tier: "Tier-1",
      headquarters: "Global / Multi-National",
      hiringLocations: ["Bengaluru", "Hyderabad", "Pune", "San Francisco", "London", "Remote"],
      averageFresherCTC: "?14 - 28 LPA",
      averageExperiencedCTC: "?35 - 85 LPA",
      interviewRounds: [
        { roundNumber: 1, name: "Online Coding Assessment (DSA & Problem Solving)", durationMins: 90, focusAreas: ["Arrays", "Graphs", "DP", "SQL"] },
        { roundNumber: 2, name: "Technical Round 1 (Data Structures & Live Coding)", durationMins: 60, focusAreas: ["Tree traversals", "Concurrency", "Complexity"] },
        { roundNumber: 3, name: "Technical Round 2 (System Design & Architecture)", durationMins: 60, focusAreas: ["High availability", "Sharding", "API design"] },
        { roundNumber: 4, name: "Bar Raiser / Leadership Principles & Culture Fit", durationMins: 45, focusAreas: ["STAR scenarios", "Ownership", "Collaboration"] }
      ],
      evaluationCriteria: [
        "Algorithmic correctness and edge case handling",
        "Clean, maintainable, modular object-oriented/functional code structure",
        "System scalability intuition and trade-off articulation",
        "Cultural alignment, humble communication, and growth mindset"
      ],
      preparationTips: [
        "Practice mock whiteboard coding with time limits",
        "Clarify ambiguous requirements before writing any code",
        "Structure behavioral answers with clear metrics and quantifiable impact"
      ]
    },    {
      companyId: "faang_comp_10",
      companyName: "Enterprise Global Organization #10",
      tier: "Tier-1",
      headquarters: "Global / Multi-National",
      hiringLocations: ["Bengaluru", "Hyderabad", "Pune", "San Francisco", "London", "Remote"],
      averageFresherCTC: "?14 - 28 LPA",
      averageExperiencedCTC: "?35 - 85 LPA",
      interviewRounds: [
        { roundNumber: 1, name: "Online Coding Assessment (DSA & Problem Solving)", durationMins: 90, focusAreas: ["Arrays", "Graphs", "DP", "SQL"] },
        { roundNumber: 2, name: "Technical Round 1 (Data Structures & Live Coding)", durationMins: 60, focusAreas: ["Tree traversals", "Concurrency", "Complexity"] },
        { roundNumber: 3, name: "Technical Round 2 (System Design & Architecture)", durationMins: 60, focusAreas: ["High availability", "Sharding", "API design"] },
        { roundNumber: 4, name: "Bar Raiser / Leadership Principles & Culture Fit", durationMins: 45, focusAreas: ["STAR scenarios", "Ownership", "Collaboration"] }
      ],
      evaluationCriteria: [
        "Algorithmic correctness and edge case handling",
        "Clean, maintainable, modular object-oriented/functional code structure",
        "System scalability intuition and trade-off articulation",
        "Cultural alignment, humble communication, and growth mindset"
      ],
      preparationTips: [
        "Practice mock whiteboard coding with time limits",
        "Clarify ambiguous requirements before writing any code",
        "Structure behavioral answers with clear metrics and quantifiable impact"
      ]
    }
  ]
};
