import React from 'react';
import { RecommendedProject } from '../../types';
import { CheckCircle2, Clock, FolderGit2, Star, ArrowUpRight } from 'lucide-react';
import { Button } from '../common/Button';
import { getDifficultyColor } from '../../utils/formatters';

interface ProjectCardProps {
  project: RecommendedProject;
  isCompleted?: boolean;
  onToggleComplete: (id: string) => void;
  onViewDetails: (project: RecommendedProject) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isCompleted = false,
  onToggleComplete,
  onViewDetails
}) => {
  const diffStyle = getDifficultyColor(project.difficulty);

  return (
    <div className={`p-6 rounded-2xl glass-card border transition-all flex flex-col justify-between space-y-4 ${
      isCompleted ? 'border-emerald-500/40 bg-emerald-950/15' : 'border-slate-800 hover:border-slate-700'
    }`}>
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${diffStyle.bg} ${diffStyle.text} ${diffStyle.border}`}>
              {project.difficulty}
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
              {project.portfolioValue} Portfolio Impact
            </span>
            {isCompleted && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950">
                Completed ✓
              </span>
            )}
          </div>
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-500" /> ~{project.estimatedHours}h
          </span>
        </div>

        <h4 className="text-base font-bold text-slate-100 mb-1.5 leading-snug">
          {project.title}
        </h4>
        <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="space-y-1.5 mb-4">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Suggested Stack:</span>
          <div className="flex flex-wrap gap-1.5">
            {project.suggestedTechStack.map(t => (
              <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-850 text-slate-300 border border-slate-700/60">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 pt-2 border-t border-slate-800/80">
        <Button
          variant="secondary"
          size="sm"
          className="flex-1 text-xs"
          onClick={() => onViewDetails(project)}
          rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
        >
          View Guide & Milestones
        </Button>
        <Button
          variant={isCompleted ? 'primary' : 'outline'}
          size="sm"
          onClick={() => onToggleComplete(project.id)}
          leftIcon={<CheckCircle2 className="w-4 h-4" />}
        >
          {isCompleted ? 'Done' : 'Mark Complete'}
        </Button>
      </div>
    </div>
  );
};
