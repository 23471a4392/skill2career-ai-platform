import React from 'react';
import { CareerGoal, UserProfile } from '../../types';
import { Target, Check, Briefcase, RefreshCw, TrendingUp, GraduationCap, Laptop, Rocket, Award } from 'lucide-react';

interface StepCareerGoalProps {
  formData: Partial<UserProfile>;
  onChange: (updates: Partial<UserProfile>) => void;
}

const GOALS: { value: CareerGoal; label: string; desc: string; icon: React.ReactNode }[] = [
  { value: 'Get a job', label: 'Get a Full-Time Job', desc: 'Seeking placement or campus hiring in tech', icon: <Briefcase className="w-5 h-5 text-emerald-400" /> },
  { value: 'Career switch', label: 'Career Switch / Pivot', desc: 'Transitioning from another field (e.g. Commerce/Arts to Tech)', icon: <RefreshCw className="w-5 h-5 text-cyan-400" /> },
  { value: 'Improve current skills', label: 'Upskill in Current Role', desc: 'Leveling up to Senior, Staff, or Architect level', icon: <TrendingUp className="w-5 h-5 text-purple-400" /> },
  { value: 'Internship', label: 'Secure an Internship', desc: 'Hands-on industry experience for students', icon: <Award className="w-5 h-5 text-amber-400" /> },
  { value: 'Freelancing', label: 'Freelancing & Remote Work', desc: 'Building high-value freelance client projects', icon: <Laptop className="w-5 h-5 text-teal-400" /> },
  { value: 'Higher studies', label: 'Higher Studies & Research', desc: 'Preparing for M.Tech, MS abroad, or PhD research', icon: <GraduationCap className="w-5 h-5 text-rose-400" /> },
  { value: 'Entrepreneurship', label: 'Build a Startup', desc: 'Creating your own software product or venture', icon: <Rocket className="w-5 h-5 text-indigo-400" /> },
];

export const StepCareerGoal: React.FC<StepCareerGoalProps> = ({ formData, onChange }) => {
  return (
    <div className="space-y-6">
      <div className="text-center max-w-lg mx-auto">
        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-3 border border-emerald-500/20">
          <Target className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold text-slate-100">What is your primary career goal?</h2>
        <p className="text-xs text-slate-400 mt-1">
          This directs the pacing and project portfolio focus of your generated roadmap.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {GOALS.map((goal) => {
          const isSelected = formData.careerGoal === goal.value;
          return (
            <button
              key={goal.value}
              onClick={() => onChange({ careerGoal: goal.value })}
              className={`p-4 rounded-xl border text-left flex items-center justify-between transition ${
                isSelected
                  ? 'bg-emerald-500/15 border-emerald-500 text-slate-100 shadow-sm shadow-emerald-500/20'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-850'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-800 shrink-0">{goal.icon}</div>
                <div>
                  <h4 className="text-xs font-bold text-slate-100">{goal.label}</h4>
                  <p className="text-[11px] text-slate-400">{goal.desc}</p>
                </div>
              </div>
              <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ml-2 ${
                isSelected ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-500'
              }`}>
                {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
