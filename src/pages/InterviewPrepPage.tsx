import React, { useState } from 'react';
import { INTERVIEW_QUESTIONS } from '../data/interviewQuestions';
import { CAREERS } from '../data/careers';
import { useProfile } from '../context/UserProfileContext';
import { QuestionCard } from '../components/interview/QuestionCard';
import { InterviewQuestionCategory } from '../types';
import { HelpCircle, Search, Play, RotateCcw, Award, CheckCircle2, Clock } from 'lucide-react';
import { Button } from '../components/common/Button';

export const InterviewPrepPage: React.FC = () => {
  const { profile, toggleCompleteInterviewQuestion } = useProfile();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedCareer, setSelectedCareer] = useState<string>(profile.targetCareerId || 'All');
  const [search, setSearch] = useState<string>('');
  const [isSimulatorMode, setIsSimulatorMode] = useState<boolean>(false);
  const [simulatorIndex, setSimulatorIndex] = useState<number>(0);

  const categories = ['All', 'Technical', 'HR & Behavioral', 'Scenario-Based', 'Aptitude & Logic', 'System Design & Architecture'];

  const filteredQuestions = INTERVIEW_QUESTIONS.filter(q => {
    if (selectedCategory !== 'All' && q.category !== selectedCategory) return false;
    if (selectedCareer !== 'All' && q.careerId !== selectedCareer) return false;
    if (search.trim() !== '') {
      const query = search.toLowerCase().trim();
      const matchQ = q.question.toLowerCase().includes(query);
      const matchTopic = q.skillTopic.toLowerCase().includes(query);
      const matchAns = q.answerSummary.toLowerCase().includes(query);
      if (!matchQ && !matchTopic && !matchAns) return false;
    }
    return true;
  });

  const completedCount = profile.completedInterviewQuestionIds?.length || 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <HelpCircle className="w-5 h-5 text-rose-400" />
            <h1 className="text-2xl sm:text-3xl font-black text-slate-100">Mock Interview Preparation</h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-400">
            Practice real technical, scenario, coding, and HR behavioral questions curated for your target career.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-xs flex items-center gap-2">
            <span className="text-slate-400">Practiced:</span>
            <span className="font-extrabold text-emerald-400 text-sm">{completedCount}</span>
          </div>

          <Button
            variant={isSimulatorMode ? 'secondary' : 'primary'}
            size="md"
            onClick={() => {
              setIsSimulatorMode(!isSimulatorMode);
              setSimulatorIndex(0);
            }}
            leftIcon={isSimulatorMode ? <RotateCcw className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          >
            {isSimulatorMode ? 'Exit Simulator' : 'Start Mock Simulator'}
          </Button>
        </div>
      </div>

      {/* Simulator Mode View */}
      {isSimulatorMode ? (
        <div className="max-w-3xl mx-auto p-8 rounded-3xl glass-panel border border-slate-700/80 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-rose-400">Live Mock Simulation</span>
              <h3 className="text-lg font-bold text-slate-100">
                Question {simulatorIndex + 1} of {filteredQuestions.length}
              </h3>
            </div>
            <span className="text-xs text-slate-400">Target: {profile.targetCareerId || 'Data Analyst'}</span>
          </div>

          {filteredQuestions.length === 0 ? (
            <div className="p-8 text-center text-xs text-slate-400">
              No questions found for current filters. Exit simulator and choose "All".
            </div>
          ) : (
            <div className="space-y-6">
              <QuestionCard
                question={filteredQuestions[simulatorIndex]}
                isCompleted={profile.completedInterviewQuestionIds?.includes(filteredQuestions[simulatorIndex].id)}
                onToggleComplete={toggleCompleteInterviewQuestion}
              />

              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setSimulatorIndex(Math.max(0, simulatorIndex - 1))}
                  disabled={simulatorIndex === 0}
                >
                  Previous Question
                </Button>

                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setSimulatorIndex(Math.min(filteredQuestions.length - 1, simulatorIndex + 1))}
                  disabled={simulatorIndex === filteredQuestions.length - 1}
                >
                  Next Question
                </Button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Regular Browse Mode */
        <div className="space-y-6">
          {/* Filters Bar */}
          <div className="p-4 rounded-2xl glass-card border border-slate-800 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="relative md:col-span-2">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search questions by keyword or topic (e.g. SQL, React, Event Loop, STAR)..."
                  className="w-full rounded-xl bg-slate-900 border border-slate-700/80 pl-10 pr-4 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-rose-500"
                />
              </div>

              <div>
                <select
                  value={selectedCareer}
                  onChange={(e) => setSelectedCareer(e.target.value)}
                  className="w-full rounded-xl bg-slate-900 border border-slate-700/80 px-4 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-rose-500"
                >
                  <option value="All">All Careers</option>
                  {CAREERS.map(c => (
                    <option key={c.id} value={c.id}>{c.title}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition ${
                    selectedCategory === cat
                      ? 'bg-rose-500 text-slate-950 font-bold'
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-850'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Question List */}
          <div className="space-y-4">
            {filteredQuestions.map(q => (
              <QuestionCard
                key={q.id}
                question={q}
                isCompleted={profile.completedInterviewQuestionIds?.includes(q.id)}
                onToggleComplete={toggleCompleteInterviewQuestion}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
