import React from 'react';
import { EducationalQualification, UserProfile } from '../../types';
import { DEGREE_OPTIONS } from '../../data/degrees';
import { GraduationCap, Sparkles } from 'lucide-react';

interface StepEducationProps {
  formData: Partial<UserProfile>;
  onChange: (updates: Partial<UserProfile>) => void;
}

export const StepEducation: React.FC<StepEducationProps> = ({ formData, onChange }) => {
  const selectedDegree = DEGREE_OPTIONS.find(d => d.value === formData.highestQualification);

  return (
    <div className="space-y-6">
      <div className="text-center max-w-lg mx-auto">
        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-3 border border-emerald-500/20">
          <GraduationCap className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold text-slate-100">What is your educational background?</h2>
        <p className="text-xs text-slate-400 mt-1">
          Skill2Career empowers learners from Engineering, Sciences, Commerce, Arts, Vocational, or Non-Technical backgrounds.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {DEGREE_OPTIONS.map((opt) => {
          const isSelected = formData.highestQualification === opt.value;
          return (
            <div
              key={opt.value}
              onClick={() => onChange({ highestQualification: opt.value as EducationalQualification })}
              className={`p-4 rounded-xl border transition-all cursor-pointer text-left flex flex-col justify-between ${
                isSelected
                  ? 'bg-emerald-500/10 border-emerald-500 text-slate-100 shadow-md shadow-emerald-500/10'
                  : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-850'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-slate-800 text-slate-300">
                    {opt.category}
                  </span>
                  {isSelected && <Sparkles className="w-4 h-4 text-emerald-400" />}
                </div>
                <h4 className="text-sm font-bold text-slate-100 mb-1">{opt.value}</h4>
                <p className="text-xs text-slate-400 line-clamp-2">{opt.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      {selectedDegree && (
        <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-xs text-slate-300 space-y-1">
          <p className="font-bold text-emerald-400 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" /> Degree Capability Highlight:
          </p>
          <p>
            {selectedDegree.typicalStartingPoint}. Common natural strengths include{' '}
            <span className="text-slate-100 font-semibold">{selectedDegree.commonStrengths.join(', ')}</span>.
          </p>
        </div>
      )}

      {/* Secondary Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
            Degree Name / Major (Optional)
          </label>
          <input
            type="text"
            value={formData.degreeName || ''}
            onChange={(e) => onChange({ degreeName: e.target.value })}
            placeholder="e.g. Computer Science & Engineering"
            className="w-full rounded-xl bg-slate-900 border border-slate-700/80 px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-emerald-500"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
            Graduation Year
          </label>
          <select
            value={formData.graduationYear || 2026}
            onChange={(e) => onChange({ graduationYear: parseInt(e.target.value, 10) })}
            className="w-full rounded-xl bg-slate-900 border border-slate-700/80 px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-emerald-500"
          >
            {[2028, 2027, 2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2015].map(yr => (
              <option key={yr} value={yr}>{yr}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
