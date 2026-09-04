import React from 'react';
import { LearningLanguage, UserProfile } from '../../types';
import { LANGUAGE_OPTIONS } from '../../data/resources';
import { Languages, Check, Video } from 'lucide-react';

interface StepLanguageProps {
  formData: Partial<UserProfile>;
  onChange: (updates: Partial<UserProfile>) => void;
}

export const StepLanguage: React.FC<StepLanguageProps> = ({ formData, onChange }) => {
  const languages = LANGUAGE_OPTIONS.filter(l => l.value !== 'All');

  return (
    <div className="space-y-6">
      <div className="text-center max-w-lg mx-auto">
        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mx-auto mb-3 border border-indigo-500/20">
          <Languages className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold text-slate-100">Select your preferred learning language</h2>
        <p className="text-xs text-slate-400 mt-1">
          Skill2Career will dynamically prioritize YouTube video tutorials, playlists, and course materials recorded in your native language.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {languages.map((lang) => {
          const isSelected = formData.preferredLanguage === lang.value;
          return (
            <button
              key={lang.value}
              onClick={() => onChange({ preferredLanguage: lang.value as LearningLanguage })}
              className={`p-5 rounded-2xl border text-left flex items-center justify-between transition duration-200 ${
                isSelected
                  ? 'bg-indigo-500/15 border-indigo-500 text-slate-100 shadow-md shadow-indigo-500/15 ring-1 ring-indigo-500'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-850'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{lang.flag}</span>
                <div>
                  <h4 className="text-sm font-bold text-slate-100">{lang.label}</h4>
                  <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                    <Video className="w-3 h-3 text-indigo-400" /> Curated YouTube & Playlists
                  </p>
                </div>
              </div>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                isSelected ? 'bg-indigo-500 text-slate-950' : 'bg-slate-800 text-slate-500'
              }`}>
                {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </div>
            </button>
          );
        })}
      </div>

      <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 text-center">
        💡 You can switch your resource language anytime from the top navigation bar without losing your progress.
      </div>
    </div>
  );
};
