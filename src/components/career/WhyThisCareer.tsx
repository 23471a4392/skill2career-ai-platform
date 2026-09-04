import React from 'react';
import { Career, CareerMatchScore } from '../../types';
import { Sparkles, CheckCircle2, Lightbulb, AlertCircle } from 'lucide-react';
import { useProfile } from '../../context/UserProfileContext';

interface WhyThisCareerProps {
  career: Career;
  matchScore: CareerMatchScore;
}

export const WhyThisCareer: React.FC<WhyThisCareerProps> = ({ career, matchScore }) => {
  const { profile } = useProfile();

  return (
    <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
      <div className="flex items-center gap-2 pb-4 border-b border-slate-800">
        <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <Lightbulb className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base font-bold text-slate-100">Why does this career match your profile?</h3>
          <p className="text-xs text-slate-400">Algorithmic compatibility breakdown based on your educational background, skills, and strengths</p>
        </div>
      </div>

      {/* Primary Reason Callout */}
      <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-200 leading-relaxed font-medium">
        {matchScore.explanation.primaryReason}
      </div>

      {/* 4 Factor Synergies */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Education & Transferable Skills */}
        <div className="p-4 rounded-2xl bg-slate-850 border border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-slate-200 font-bold text-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Academic & Transferable Skill Alignment</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Your qualification in <span className="text-slate-200 font-semibold">{profile.degreeName || profile.highestQualification}</span> provides a strong base.
            {matchScore.explanation.transferableSkills.length > 0 && (
              <>
                {' '}You already bring key competencies in <span className="text-emerald-300 font-medium">{matchScore.explanation.transferableSkills.slice(0, 3).join(', ')}</span>.
              </>
            )}
          </p>
        </div>

        {/* Interests & Strengths Synergy */}
        <div className="p-4 rounded-2xl bg-slate-850 border border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-slate-200 font-bold text-xs">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Interest & Cognitive Strengths Match</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            {matchScore.explanation.interestMatch.length > 0 ? (
              <>Your passion for <span className="text-amber-300 font-medium">{matchScore.explanation.interestMatch.join(', ')}</span> directly parallels the day-to-day challenges of a {career.title}.</>
            ) : (
              <>Your selected strengths provide strong synergy with this role's problem-solving cadence.</>
            )}
          </p>
        </div>
      </div>

      {/* Gap Bridging Advice */}
      {matchScore.explanation.missingCrucialSkills.length > 0 && (
        <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-300 space-y-1">
            <p className="font-bold text-amber-300">Strategic Next Step to Reach 90%+ Readiness:</p>
            <p className="text-slate-400 leading-relaxed">
              Focus specifically on mastering <span className="text-slate-100 font-semibold">{matchScore.explanation.missingCrucialSkills.join(' and ')}</span> through your personalized roadmap.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
