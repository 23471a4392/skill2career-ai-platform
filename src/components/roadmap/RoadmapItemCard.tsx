import React from 'react';
import { RoadmapItem } from '../../types';
import { CheckCircle2, Clock, BookOpen, FileEdit, Sparkles, ExternalLink } from 'lucide-react';
import { Button } from '../common/Button';
import { getDifficultyColor } from '../../utils/formatters';
import { LEARNING_RESOURCES } from '../../data/resources';
import { Link } from 'react-router-dom';

interface RoadmapItemCardProps {
  item: RoadmapItem;
  onToggleComplete: (id: string) => void;
  onEditNote?: (item: RoadmapItem) => void;
}

export const RoadmapItemCard: React.FC<RoadmapItemCardProps> = ({ item, onToggleComplete, onEditNote }) => {
  const isCompleted = item.status === 'Completed';
  const diffStyle = getDifficultyColor(item.difficulty);

  const matchingResources = LEARNING_RESOURCES.filter(r => item.suggestedResourceIds?.includes(r.id));

  return (
    <div
      className={`p-6 rounded-2xl border transition-all duration-200 glass-card space-y-4 ${
        isCompleted
          ? 'bg-emerald-950/15 border-emerald-500/40 shadow-sm shadow-emerald-500/10'
          : 'border-slate-800 hover:border-slate-700'
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-slate-800 text-slate-200 border border-slate-700">
            Week {item.weekNumber}
          </span>
          <span className="text-xs font-bold text-slate-400">{item.phaseTitle}</span>
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${diffStyle.bg} ${diffStyle.text} ${diffStyle.border}`}>
            {item.difficulty}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-500" /> ~{item.estimatedHours} Hours
          </span>
          <Button
            variant={isCompleted ? 'primary' : 'outline'}
            size="sm"
            onClick={() => onToggleComplete(item.id)}
            leftIcon={<CheckCircle2 className="w-4 h-4" />}
          >
            {isCompleted ? 'Completed ✓' : 'Mark Done'}
          </Button>
        </div>
      </div>

      <div>
        <h4 className="text-base font-extrabold text-slate-100 mb-1">{item.topicTitle}</h4>
        <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
      </div>

      {/* Skills Covered */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Skills:</span>
        {item.skillsCovered.map(s => (
          <span key={s} className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-slate-850 text-slate-300 border border-slate-700/60">
            {s}
          </span>
        ))}
      </div>

      {/* Hands-On Practice Task Callout */}
      {item.practiceTask && (
        <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-1">
          <p className="font-bold text-emerald-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Hands-On Practice Deliverable:
          </p>
          <p className="text-slate-400">{item.practiceTask}</p>
        </div>
      )}

      {/* Recommended Language Resources */}
      {matchingResources.length > 0 && (
        <div className="space-y-2 pt-2 border-t border-slate-800/80">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" /> Recommended Learning Modules:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {matchingResources.map(res => (
              <a
                key={res.id}
                href={res.url}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-850 border border-slate-800 hover:border-cyan-500/40 text-left flex items-center justify-between group transition"
              >
                <div className="min-w-0 pr-2">
                  <p className="text-xs font-bold text-slate-200 group-hover:text-cyan-400 transition truncate">{res.title}</p>
                  <p className="text-[10px] text-slate-400">{res.language} • {res.channelOrProvider}</p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 shrink-0" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Notes trigger */}
      {onEditNote && (
        <div className="flex justify-end pt-1">
          <button
            onClick={() => onEditNote(item)}
            className="text-xs font-semibold text-slate-400 hover:text-slate-200 flex items-center gap-1 transition"
          >
            <FileEdit className="w-3.5 h-3.5" />
            {item.userNotes ? 'Edit My Milestone Notes' : '+ Add Milestone Note'}
          </button>
        </div>
      )}
    </div>
  );
};
