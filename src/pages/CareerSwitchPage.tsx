import React, { useState } from 'react';
import { useProfile } from '../context/UserProfileContext';
import { CAREERS } from '../data/careers';
import { CareerEngineService } from '../services/careerEngine';
import { SkillGapEngineService } from '../services/skillGapEngine';
import { 
  Repeat, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Zap 
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { Link } from 'react-router-dom';

export const CareerSwitchPage: React.FC = () => {
  const { profile, setTargetCareer } = useProfile();
  const [selectedTargetId, setSelectedTargetId] = useState<string>(profile.targetCareerId || 'data-analyst');

  const targetCareer = CAREERS.find(c => c.id === selectedTargetId) || CAREERS[0];
  const matchScore = CareerEngineService.evaluateCareerMatch(profile, targetCareer);
  const skillGap = SkillGapEngineService.analyzeSkillGap(profile, targetCareer.id);

  // Transferable non-zero credit score
  const nonZeroCredit = Math.max(30, Math.round((skillGap.strongSkills.length * 15) + (profile.skills.length * 5) + 20));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Repeat className="w-5 h-5 text-amber-400" />
          <h1 className="text-2xl sm:text-3xl font-black text-slate-100">Career Switch Navigator</h1>
        </div>
        <p className="text-xs sm:text-sm text-slate-400">
          Transition into high-growth tech roles from Commerce, Arts, Sciences, Management, or Non-Technical degrees.
        </p>
      </div>

      {/* "You Don't Need to Start from Zero" Callout Banner */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-amber-950/30 via-slate-900 to-emerald-950/30 border border-amber-500/40 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bridge Mode Active</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-100">
              "You don't need to start from zero."
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Your degree in <span className="text-amber-300 font-bold">{profile.highestQualification}</span> and your existing background provide a <span className="text-emerald-400 font-bold">{nonZeroCredit}% baseline head start</span>. Skill2Career bridges the exact missing technical skills so you can transition efficiently.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-700 text-center shrink-0 min-w-[200px]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Transferable Baseline
            </span>
            <span className="text-4xl font-black text-amber-400">{nonZeroCredit}%</span>
            <span className="text-[10px] text-slate-400 block mt-1">Foundation Ready</span>
          </div>
        </div>
      </div>

      {/* Target Role Selector */}
      <div className="p-6 rounded-3xl glass-card border border-slate-800 space-y-4">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
          Select Your Target Transition Career:
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {CAREERS.map(c => {
            const isSel = c.id === selectedTargetId;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedTargetId(c.id)}
                className={`p-3.5 rounded-xl border text-left transition ${
                  isSel
                    ? 'bg-amber-500/15 border-amber-500 text-amber-300 font-bold shadow-sm shadow-amber-500/20'
                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <p className="text-xs font-bold truncate">{c.title}</p>
                <p className="text-[10px] text-slate-400">{c.category}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Transferable Skills vs Missing Bridge Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Transferable Skills */}
        <div className="p-6 rounded-3xl glass-card border border-emerald-500/30 space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-emerald-500/20">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <div>
              <h3 className="text-base font-bold text-slate-100">Your Transferable Strengths</h3>
              <p className="text-xs text-slate-400">Skills you already have that directly transfer to this role</p>
            </div>
          </div>

          <div className="space-y-2">
            {profile.skills.length === 0 ? (
              <p className="text-xs text-slate-400 italic">No current skills listed. Update your profile to reveal transferable credit.</p>
            ) : (
              profile.skills.map(s => (
                <div key={s.name} className="p-3 rounded-xl bg-slate-900 border border-emerald-500/20 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-100">{s.name}</p>
                    <p className="text-[10px] text-slate-400">{s.proficiency} level</p>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                    Transfers ✓
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Missing Bridge Skills */}
        <div className="p-6 rounded-3xl glass-card border border-amber-500/30 space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-amber-500/20">
            <Zap className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="text-base font-bold text-slate-100">Exact Bridge Skills to Master</h3>
              <p className="text-xs text-slate-400">Target these 3-4 competencies to become job ready</p>
            </div>
          </div>

          <div className="space-y-2">
            {skillGap.missingSkills.slice(0, 4).map(m => (
              <div key={m.name} className="p-3 rounded-xl bg-slate-900 border border-amber-500/20 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-100">{m.name}</p>
                  <p className="text-[10px] text-slate-400">Goal: {m.requiredProficiency} ({m.importance})</p>
                </div>
                <Link
                  to={`/resources?skill=${encodeURIComponent(m.name)}`}
                  className="text-xs font-bold text-amber-400 hover:text-amber-300"
                >
                  View Tutorials →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Next Step Callout */}
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h4 className="text-base font-bold text-slate-100">Start Your Transition into {targetCareer.title}</h4>
          <p className="text-xs text-slate-400">Align your roadmap and track your weekly milestone progress.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="md"
            onClick={() => setTargetCareer(targetCareer.id)}
          >
            Set as Target
          </Button>
          <Link to="/roadmap">
            <Button variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Open Transition Roadmap
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
