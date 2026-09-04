import React from 'react';
import { UserProfile } from '../../types';
import { INTEREST_OPTIONS } from '../../data/skills';
import { Sparkles, Check } from 'lucide-react';

interface StepInterestsProps {
  formData: Partial<UserProfile>;
  onChange: (updates: Partial<UserProfile>) => void;
}

export const StepInterests: React.FC<StepInterestsProps> = ({ formData, onChange }) => {
  const currentInterests = formData.interests || [];

  const toggleInterest = (interest: string) => {
    let updated: string[];
    if (currentInterests.includes(interest)) {
      updated = currentInterests.filter(i => i !== interest);
    } else {
      updated = [...currentInterests, interest];
    }
    onChange({ interests: updated });
  };

  return (
    <div className="space-y-6">
      <div className="text-center max-w-lg mx-auto">
        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto mb-3 border border-amber-500/20">
          <Sparkles className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold text-slate-100">What areas interest you most?</h2>
        <p className="text-xs text-slate-400 mt-1">
          Select subjects and technology domains you enjoy exploring.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {INTEREST_OPTIONS.map((interest) => {
          const isSelected = currentInterests.includes(interest);
          return (
            <button
              key={interest}
              onClick={() => toggleInterest(interest)}
              className={`p-3.5 rounded-xl border text-left flex items-center justify-between transition ${
                isSelected
                  ? 'bg-amber-500/15 border-amber-500 text-amber-300 shadow-sm shadow-amber-500/20'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-850'
              }`}
            >
              <span className="text-xs font-semibold">{interest}</span>
              <div className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 ml-2 ${
                isSelected ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-500'
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
