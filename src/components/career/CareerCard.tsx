import React from 'react';
import { Link } from 'react-router-dom';
import { Career, CareerMatchScore } from '../../types';
import { Button } from '../common/Button';
import { Bookmark, Sparkles, TrendingUp, ArrowRight } from 'lucide-react';
import { getDifficultyColor } from '../../utils/formatters';
import { useProfile } from '../../context/UserProfileContext';

interface CareerCardProps {
  career: Career;
  matchScore?: CareerMatchScore;
  onSetTarget?: (careerId: string) => void;
  isTarget?: boolean;
}

export const CareerCard: React.FC<CareerCardProps> = ({
  career,
  matchScore,
  onSetTarget,
  isTarget = false
}) => {
  const { profile, toggleBookmarkCareer } = useProfile();
  const isBookmarked = profile.bookmarkedCareerIds.includes(career.id);
  const diffStyle = getDifficultyColor(career.difficulty);

  const matchPercent = matchScore?.matchPercentage || 75;
  const readinessPercent = matchScore?.readinessPercentage || 60;

  return (
    <div className={`rounded-3xl p-6 transition-all duration-200 glass-card flex flex-col justify-between border ${
      isTarget ? 'border-purple-500/60 bg-purple-950/30 shadow-glow-royal' : 'border-purple-900/60 hover:border-purple-700/80'
    }`}>
      <div>
        {/* Top badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#1b1433] text-purple-200 border border-purple-800/60">
              {career.category}
            </span>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${diffStyle.bg} ${diffStyle.text} ${diffStyle.border}`}>
              {career.difficulty}
            </span>
            {isTarget && (
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-purple-600 text-white shadow-sm flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-300" />
                Active Target
              </span>
            )}
          </div>
          <button
            onClick={() => toggleBookmarkCareer(career.id)}
            className={`p-1.5 rounded-lg transition ${
              isBookmarked ? 'text-amber-400 bg-amber-500/15' : 'text-purple-400/60 hover:text-purple-200 hover:bg-[#1f163a]'
            }`}
            aria-label="Bookmark Career"
          >
            <Bookmark className="w-4 h-4 fill-current" />
          </button>
        </div>

        {/* Career Title & Overview */}
        <h3 className="text-lg font-extrabold text-slate-100 mb-1.5 group-hover:text-amber-400 transition">
          {career.title}
        </h3>
        <p className="text-xs text-purple-300/80 leading-relaxed mb-4 line-clamp-2">
          {career.shortDescription}
        </p>

        {/* Compatibility Match & Readiness Gauge */}
        <div className="grid grid-cols-2 gap-2 p-3 rounded-2xl bg-[#120d20] border border-purple-900/60 mb-4">
          <div>
            <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-purple-400 mb-0.5">
              <Sparkles className="w-3 h-3 text-amber-400" /> Career Match
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-black text-amber-400">{matchPercent}%</span>
              <span className="text-[10px] text-purple-300/70">fit</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-purple-400 mb-0.5">
              <TrendingUp className="w-3 h-3 text-purple-300" /> Readiness
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-black text-purple-300">{readinessPercent}%</span>
              <span className="text-[10px] text-purple-300/70">ready</span>
            </div>
          </div>
        </div>

        {/* Key Required Skills Preview */}
        <div className="mb-4">
          <p className="text-[10px] font-bold uppercase tracking-wider text-purple-300/80 mb-1.5">
            Key Required Skills:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {career.primarySkills.slice(0, 4).map((s) => {
              const hasSkill = profile.skills.some(us => us.name.toLowerCase() === s.skillName.toLowerCase());
              return (
                <span
                  key={s.skillName}
                  className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${
                    hasSkill
                      ? 'bg-purple-500/15 text-purple-200 border-purple-500/40'
                      : 'bg-[#140f26] text-purple-300/60 border-purple-900/40'
                  }`}
                >
                  {hasSkill ? '✓ ' : ''}{s.skillName}
                </span>
              );
            })}
            {career.primarySkills.length > 4 && (
              <span className="text-[10px] text-purple-400/80 self-center">
                +{career.primarySkills.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Salary estimate */}
        <div className="flex items-center justify-between text-xs text-purple-300/80 pt-2 border-t border-purple-900/60 mb-4">
          <span>Avg Salary:</span>
          <span className="font-bold text-slate-100">{career.averageSalaryIndia}</span>
        </div>
      </div>

      {/* Action CTA Buttons */}
      <div className="flex items-center gap-2 pt-2">
        <Link to={`/careers/${career.id}`} className="flex-1">
          <Button variant="secondary" size="sm" className="w-full" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
            View Path & Gaps
          </Button>
        </Link>
        {onSetTarget && !isTarget && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => onSetTarget(career.id)}
            className="text-xs"
          >
            Set Target
          </Button>
        )}
      </div>
    </div>
  );
};
