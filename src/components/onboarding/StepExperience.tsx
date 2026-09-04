import React from 'react';
import { ExperienceLevel, UserProfile } from '../../types';
import { UserCheck, Check, Sparkles } from 'lucide-react';

interface StepExperienceProps {
  formData: Partial<UserProfile>;
  onChange: (updates: Partial<UserProfile>) => void;
}

const LEVELS: { value: ExperienceLevel; label: string; desc: string }[] = [
  { value: 'Student', label: 'College Student', desc: 'Currently enrolled in undergraduate or postgraduate studies' },
  { value: 'Fresher', label: 'Recent Graduate / Fresher', desc: '0 - 1 year experience, actively looking for first role' },
  { value: 'Beginner', label: 'Self-Taught / Beginner', desc: 'Transitioning or building foundational tech knowledge' },
  { value: 'Working Professional', label: 'Working Professional', desc: '1 - 4 years experience in tech or non-tech domain' },
  { value: 'Experienced', label: 'Senior / Experienced', desc: '4+ years of professional industry experience' },
];

export const StepExperience: React.FC<StepExperienceProps> = ({ formData, onChange }) => {
  return (
    <div className="space-y-6">
      <div className="text-center max-w-lg mx-auto">
        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto mb-3 border border-cyan-500/20">
          <UserCheck className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold text-slate-100">What is your current experience level?</h2>
        <p className="text-xs text-slate-400 mt-1">
          Final step! This calibrates the difficulty progression of your customized curriculum.
        </p>
      </div>

      <div className="space-y-3">
        {LEVELS.map((lvl) => {
          const isSelected = formData.experienceLevel === lvl.value;
          return (
            <button
              key={lvl.value}
              onClick={() => onChange({ experienceLevel: lvl.value })}
              className={`w-full p-4 rounded-xl border text-left flex items-center justify-between transition ${
                isSelected
                  ? 'bg-cyan-500/15 border-cyan-500 text-slate-100 shadow-sm shadow-cyan-500/20 ring-1 ring-cyan-500'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-850'
              }`}
            >
              <div>
                <h4 className="text-sm font-bold text-slate-100">{lvl.label}</h4>
                <p className="text-xs text-slate-400 mt-0.5">{lvl.desc}</p>
              </div>
              <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ml-2 ${
                isSelected ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-500'
              }`}>
                {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </div>
            </button>
          );
        })}
      </div>

      {/* Profile Review Card */}
      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs text-slate-300">
        <div className="flex items-center gap-1.5 font-bold text-slate-100">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>Profile Summary Ready for Career Engine:</span>
        </div>
        <p className="text-slate-400">
          Degree: <span className="text-slate-200 font-semibold">{formData.highestQualification}</span> | 
          Skills: <span className="text-slate-200 font-semibold">{formData.skills?.length || 0} selected</span> | 
          Language: <span className="text-slate-200 font-semibold">{formData.preferredLanguage}</span> | 
          Goal: <span className="text-slate-200 font-semibold">{formData.careerGoal}</span>
        </p>
      </div>
    </div>
  );
};
