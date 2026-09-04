import React from 'react';
import { UserProfile } from '../../types';
import { CAREER_PREFERENCES_OPTIONS } from '../../data/skills';
import { Compass, Check } from 'lucide-react';

interface StepCareerPreferencesProps {
  formData: Partial<UserProfile>;
  onChange: (updates: Partial<UserProfile>) => void;
}

export const StepCareerPreferences: React.FC<StepCareerPreferencesProps> = ({ formData, onChange }) => {
  const currentPreferences = formData.careerPreferences || [];

  const togglePref = (pref: string) => {
    let updated: string[];
    if (currentPreferences.includes(pref)) {
      updated = currentPreferences.filter(p => p !== pref);
    } else {
      updated = [...currentPreferences, pref];
    }
    onChange({ careerPreferences: updated });
  };

  return (
    <div className="space-y-6">
      <div className="text-center max-w-lg mx-auto">
        <div className="w-12 h-12 rounded-2xl bg-teal-500/10 text-teal-400 flex items-center justify-center mx-auto mb-3 border border-teal-500/20">
          <Compass className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold text-slate-100">What are your work preferences?</h2>
        <p className="text-xs text-slate-400 mt-1">
          Tell us about the environment, compensation style, and culture you value.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {CAREER_PREFERENCES_OPTIONS.map((pref) => {
          const isSelected = currentPreferences.includes(pref);
          return (
            <button
              key={pref}
              onClick={() => togglePref(pref)}
              className={`p-4 rounded-xl border text-left flex items-center justify-between transition ${
                isSelected
                  ? 'bg-teal-500/15 border-teal-500 text-teal-300 shadow-sm shadow-teal-500/20'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-850'
              }`}
            >
              <span className="text-xs font-semibold">{pref}</span>
              <div className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 ml-2 ${
                isSelected ? 'bg-teal-500 text-slate-950' : 'bg-slate-800 text-slate-500'
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
