import React from 'react';
import { SkillGapAnalysis } from '../../types';
import { CheckCircle2, AlertTriangle, XCircle, ArrowUpRight, BookOpen } from 'lucide-react';
import { ProgressBar } from '../common/ProgressBar';
import { Link } from 'react-router-dom';

interface SkillGapVisualizerProps {
  analysis: SkillGapAnalysis;
  targetCareerTitle: string;
}

export const SkillGapVisualizer: React.FC<SkillGapVisualizerProps> = ({ analysis, targetCareerTitle }) => {
  return (
    <div className="space-y-6">
      {/* Overall Readiness Header Card */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-700/80 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">Skill Gap Diagnosis</span>
            <h3 className="text-xl font-extrabold text-slate-100">Capability Matrix for {targetCareerTitle}</h3>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <span className="text-2xl font-black text-emerald-400">{analysis.overallReadiness}%</span>
              <p className="text-[10px] text-slate-400">Target Skill Readiness</p>
            </div>
          </div>
        </div>
        <ProgressBar value={analysis.overallReadiness} color="emerald" size="lg" />
      </div>

      {/* 3 Columns: Strong, Developing, Missing */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Strong Skills */}
        <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-emerald-500/20">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <h4 className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                Strong Skills ({analysis.strongSkills.length})
              </h4>
            </div>
          </div>
          {analysis.strongSkills.length === 0 ? (
            <p className="text-xs text-slate-400 italic py-2">No strong skill matches yet.</p>
          ) : (
            <div className="space-y-2">
              {analysis.strongSkills.map(s => (
                <div key={s.name} className="p-2.5 rounded-xl bg-slate-900/80 border border-emerald-500/20 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-100">{s.name}</p>
                    <p className="text-[10px] text-slate-400">Level: {s.userProficiency}</p>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Ready ✓
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Developing Skills */}
        <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-amber-500/20">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                Developing Skills ({analysis.developingSkills.length})
              </h4>
            </div>
          </div>
          {analysis.developingSkills.length === 0 ? (
            <p className="text-xs text-slate-400 italic py-2">No intermediate gaps identified.</p>
          ) : (
            <div className="space-y-2">
              {analysis.developingSkills.map(s => (
                <div key={s.name} className="p-2.5 rounded-xl bg-slate-900/80 border border-amber-500/20 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-100">{s.name}</p>
                    <p className="text-[10px] text-slate-400">Current: {s.userProficiency} → Need: {s.requiredProficiency}</p>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    Level Up ⚠
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Missing Skills */}
        <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-rose-500/20">
            <div className="flex items-center gap-2">
              <XCircle className="w-4 h-4 text-rose-400" />
              <h4 className="text-xs font-bold text-rose-300 uppercase tracking-wider">
                Missing Skills ({analysis.missingSkills.length})
              </h4>
            </div>
          </div>
          {analysis.missingSkills.length === 0 ? (
            <p className="text-xs text-slate-400 italic py-2">No missing prerequisites! You have covered all basics.</p>
          ) : (
            <div className="space-y-2">
              {analysis.missingSkills.map(s => (
                <div key={s.name} className="p-2.5 rounded-xl bg-slate-900/80 border border-rose-500/20 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-100">{s.name}</p>
                    <p className="text-[10px] text-slate-400">Target: {s.requiredProficiency} ({s.importance})</p>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 border border-rose-500/30">
                    To Learn ✗
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Actionable "Learn This Next" Priority Recommendations */}
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-base font-bold text-slate-100">Recommended "Learn Next" Action Queue</h4>
            <p className="text-xs text-slate-400">Prioritized by prerequisite dependency and market hiring weight</p>
          </div>
          <Link
            to="/resources"
            className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition"
          >
            <BookOpen className="w-3.5 h-3.5" />
            Explore Resource Hub
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {analysis.learnNextPriority.map((item, idx) => (
            <div key={item.skillName} className="p-4 rounded-xl bg-slate-850 border border-slate-800 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    Priority #{idx + 1}
                  </span>
                  <span className="text-[10px] text-slate-400">~{item.estimatedHours}h study</span>
                </div>
                <h5 className="text-sm font-bold text-slate-100 mb-1">{item.skillName}</h5>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">{item.reason}</p>
              </div>

              <Link
                to={`/resources?skill=${encodeURIComponent(item.skillName)}`}
                className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 hover:text-amber-300 transition pt-1"
              >
                <span>Find Tutorials ({item.recommendedResourcesCount})</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
