import React from 'react';
import { UserProfile } from '../../types';
import { STRENGTH_OPTIONS } from '../../data/skills';
import { Award, Check } from 'lucide-react';

interface StepStrengthsProps {
  formData: Partial<UserProfile>;
  onChange: (updates: Partial<UserProfile>) => void;
}

export const StepStrengths: React.FC<StepStrengthsProps> = ({ formData, onChange }) => {
  const currentStrengths = formData.strengths || [];

  const toggleStrength = (strength: string) => {
    let updated: string[];
    if (currentStrengths.includes(strength)) {
      updated = currentStrengths.filter(s => s !== strength);
    } else {
      updated = [...currentStrengths, strength];
    }
    onChange({ strengths: updated });
  };

  return (
    <div className="space-y-6">
      <div className="text-center max-w-lg mx-auto">
        <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-400 flex items-center justify-center mx-auto mb-3 border border-rose-500/20">
          <Award className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold text-slate-100">What are your natural strengths?</h2>
        <p className="text-xs text-slate-400 mt-1">
          Pick core cognitive and personal strengths that describe your work style.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {STRENGTH_OPTIONS.map((strength) => {
          const isSelected = currentStrengths.includes(strength);
          return (
            <button
              key={strength}
              onClick={() => toggleStrength(strength)}
              className={`p-3.5 rounded-xl border text-left flex items-center justify-between transition ${
                isSelected
                  ? 'bg-rose-500/15 border-rose-500 text-rose-300 shadow-sm shadow-rose-500/20'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-850'
              }`}
            >
              <span className="text-xs font-semibold">{strength}</span>
              <div className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 ml-2 ${
                isSelected ? 'bg-rose-500 text-slate-950' : 'bg-slate-800 text-slate-500'
              }`}>
                {isSelected ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <span className="text-xs">+</span>}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
