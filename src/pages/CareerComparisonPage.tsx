import React, { useState } from 'react';
import { CAREERS } from '../data/careers';
import { useProfile } from '../context/UserProfileContext';
import { CareerEngineService } from '../services/careerEngine';
import { SplitSquareVertical, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/common/Button';
import { Link } from 'react-router-dom';

export const CareerComparisonPage: React.FC = () => {
  const { profile } = useProfile();
  const [careerId1, setCareerId1] = useState<string>('data-analyst');
  const [careerId2, setCareerId2] = useState<string>('fullstack-developer');
  const [careerId3, setCareerId3] = useState<string>('machine-learning-engineer');

  const c1 = CAREERS.find(c => c.id === careerId1) || CAREERS[0];
  const c2 = CAREERS.find(c => c.id === careerId2) || CAREERS[1];
  const c3 = CAREERS.find(c => c.id === careerId3) || CAREERS[3];

  const m1 = CareerEngineService.evaluateCareerMatch(profile, c1);
  const m2 = CareerEngineService.evaluateCareerMatch(profile, c2);
  const m3 = CareerEngineService.evaluateCareerMatch(profile, c3);

  const comparedCareers = [
    { career: c1, match: m1, setter: setCareerId1, selectedId: careerId1 },
    { career: c2, match: m2, setter: setCareerId2, selectedId: careerId2 },
    { career: c3, match: m3, setter: setCareerId3, selectedId: careerId3 }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <SplitSquareVertical className="w-5 h-5 text-emerald-400" />
          <h1 className="text-2xl sm:text-3xl font-black text-slate-100">Career Comparison Matrix</h1>
        </div>
        <p className="text-xs sm:text-sm text-slate-400">
          Compare 2 or 3 career trajectories side-by-side to evaluate learning curve, salary potential, and your personalized compatibility score.
        </p>
      </div>

      {/* Comparison Selectors */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {comparedCareers.map((col, idx) => (
          <div key={idx} className="p-4 rounded-2xl glass-card border border-slate-800 space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
              Select Career #{idx + 1}:
            </label>
            <select
              value={col.selectedId}
              onChange={(e) => col.setter(e.target.value)}
              className="w-full rounded-xl bg-slate-900 border border-slate-700 px-3 py-2.5 text-xs font-bold text-slate-100 focus:outline-none focus:border-emerald-500"
            >
              {CAREERS.map(c => (
                <option key={c.id} value={c.id}>{c.title}</option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Side-by-Side Comparison Table / Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {comparedCareers.map(({ career, match }, idx) => (
          <div key={career.id} className="p-6 rounded-3xl glass-card border border-slate-800 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Header */}
              <div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                  {career.category}
                </span>
                <h3 className="text-xl font-black text-slate-100 mt-2 mb-1">{career.title}</h3>
                <p className="text-xs text-slate-400 line-clamp-2">{career.shortDescription}</p>
              </div>

              {/* Match Score & Readiness Box */}
              <div className="grid grid-cols-2 gap-2 p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Match Fit</span>
                  <p className="text-2xl font-black text-emerald-400">{match.matchPercentage}%</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Readiness</span>
                  <p className="text-2xl font-black text-amber-400">{match.readinessPercentage}%</p>
                </div>
              </div>

              {/* Attributes Comparison */}
              <div className="space-y-3 text-xs border-t border-slate-800 pt-3">
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Market Demand:</span>
                  <span className="font-bold text-slate-200">{career.marketDemand}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Difficulty:</span>
                  <span className="font-bold text-slate-200">{career.difficulty}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Salary (India):</span>
                  <span className="font-bold text-emerald-400">{career.averageSalaryIndia}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Salary (Global):</span>
                  <span className="font-bold text-slate-200">{career.averageSalaryUS}</span>
                </div>
              </div>

              {/* Primary Skills Matrix */}
              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Required Skills & Gaps:</span>
                <div className="space-y-1.5">
                  {career.primarySkills.map(s => {
                    const hasSkill = profile.skills.some(us => us.name.toLowerCase() === s.skillName.toLowerCase());
                    return (
                      <div key={s.skillName} className="flex items-center justify-between p-2 rounded-lg bg-slate-900 text-xs">
                        <span className="text-slate-300">{s.skillName}</span>
                        {hasSkill ? (
                          <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> Ready
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold text-rose-400 flex items-center gap-1">
                            <XCircle className="w-3 h-3" /> Missing
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <Link to={`/careers/${career.id}`} className="block pt-4">
              <Button variant="primary" size="sm" className="w-full text-xs" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                View Full Path
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
