import React from 'react';
import { SkillProficiency, UserProfile } from '../../types';
import { Gauge } from 'lucide-react';

interface StepProficiencyProps {
  formData: Partial<UserProfile>;
  onChange: (updates: Partial<UserProfile>) => void;
}

const PROFICIENCIES: { label: SkillProficiency; desc: string; color: string }[] = [
  { label: 'Never Used', desc: 'Theoretical awareness only', color: 'text-slate-400' },
  { label: 'Beginner', desc: 'Basic syntax & small exercises', color: 'text-emerald-400' },
  { label: 'Intermediate', desc: 'Built real projects independently', color: 'text-cyan-400' },
  { label: 'Advanced', desc: 'Production experience & optimization', color: 'text-purple-400' },
  { label: 'Expert', desc: 'Architectural mastery & mentorship', color: 'text-amber-400' },
];

export const StepProficiency: React.FC<StepProficiencyProps> = ({ formData, onChange }) => {
  const skills = formData.skills || [];

  const updateProficiency = (skillName: string, prof: SkillProficiency) => {
    const updated = skills.map(s => s.name === skillName ? { ...s, proficiency: prof } : s);
    onChange({ skills: updated });
  };

  return (
    <div className="space-y-6">
      <div className="text-center max-w-lg mx-auto">
        <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center mx-auto mb-3 border border-purple-500/20">
          <Gauge className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold text-slate-100">Rate your skill proficiency</h2>
        <p className="text-xs text-slate-400 mt-1">
          Be honest! This allows the Career Matching Engine to generate mathematically accurate skill-gap recommendations.
        </p>
      </div>

      {skills.length === 0 ? (
        <div className="p-8 text-center text-xs text-slate-400 bg-slate-900 rounded-2xl border border-slate-800">
          No skills selected yet. Please go back to Step 2 and choose your skills.
        </div>
      ) : (
        <div className="space-y-3 max-h-[420px] overflow-y-auto pr-2">
          {skills.map((skill) => (
            <div key={skill.name} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-100">{skill.name}</h4>
                  <span className="text-[10px] text-slate-400">{skill.category}</span>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-200 border border-slate-700">
                  {skill.proficiency}
                </span>
              </div>

              {/* Proficiency Selector Buttons */}
              <div className="grid grid-cols-5 gap-1.5">
                {PROFICIENCIES.map((p) => {
                  const isCurrent = skill.proficiency === p.label;
                  return (
                    <button
                      key={p.label}
                      onClick={() => updateProficiency(skill.name, p.label)}
                      className={`p-2 rounded-lg text-center transition flex flex-col items-center justify-center ${
                        isCurrent
                          ? 'bg-purple-500/20 border border-purple-500 text-purple-300 font-bold'
                          : 'bg-slate-850 hover:bg-slate-800 text-slate-400 border border-slate-800'
                      }`}
                    >
                      <span className="text-[11px] truncate w-full">{p.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
