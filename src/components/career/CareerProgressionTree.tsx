import React from 'react';
import { CareerRoleProgression } from '../../types';
import { TrendingUp } from 'lucide-react';

interface CareerProgressionTreeProps {
  progression: CareerRoleProgression[];
}

export const CareerProgressionTree: React.FC<CareerProgressionTreeProps> = ({ progression }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <TrendingUp className="w-5 h-5 text-emerald-400" />
        <h4 className="text-base font-bold text-slate-100">Career Hierarchy & Salary Trajectory</h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
        {progression.map((stage) => {
          const isEntry = stage.level === 'Beginner';
          const isMid = stage.level === 'Intermediate';

          return (
            <div
              key={stage.title}
              className={`p-6 rounded-3xl border flex flex-col justify-between space-y-4 ${
                isEntry
                  ? 'bg-emerald-950/20 border-emerald-500/30'
                  : isMid
                  ? 'bg-amber-950/20 border-amber-500/30'
                  : 'bg-purple-950/20 border-purple-500/30'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                    isEntry ? 'bg-emerald-500/20 text-emerald-300' : isMid ? 'bg-amber-500/20 text-amber-300' : 'bg-purple-500/20 text-purple-300'
                  }`}>
                    {stage.level} Level
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{stage.experienceRange}</span>
                </div>

                <h5 className="text-sm font-extrabold text-slate-100 mb-1">{stage.title}</h5>
                <p className="text-xs font-bold text-emerald-400 mb-3">Est. {stage.typicalSalaryRange}</p>

                <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Core Responsibilities:</p>
                  <ul className="space-y-1">
                    {stage.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="text-xs text-slate-300 flex items-start gap-1.5">
                        <span className="text-emerald-400 mt-0.5">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
