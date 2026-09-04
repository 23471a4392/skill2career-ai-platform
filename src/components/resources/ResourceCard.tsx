import React from 'react';
import { LearningResource } from '../../types';
import { Star, Clock, Bookmark, PlayCircle, ExternalLink } from 'lucide-react';
import { Button } from '../common/Button';
import { getDifficultyColor } from '../../utils/formatters';

interface ResourceCardProps {
  resource: LearningResource;
  onPreview: (resource: LearningResource) => void;
  onSaveToggle: (id: string) => void;
  isSaved?: boolean;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
  resource,
  onPreview,
  onSaveToggle,
  isSaved = false
}) => {
  const diffStyle = getDifficultyColor(resource.difficulty);

  const getLanguageBadge = (lang: string) => {
    switch (lang) {
      case 'Telugu':
        return 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30';
      case 'Hindi':
        return 'bg-amber-500/15 text-amber-300 border-amber-500/30';
      case 'Tamil':
        return 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30';
      case 'Kannada':
        return 'bg-rose-500/15 text-rose-300 border-rose-500/30';
      default:
        return 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30';
    }
  };

  return (
    <div className="p-5 rounded-2xl glass-card border border-slate-800 hover:border-slate-700 transition flex flex-col justify-between space-y-4">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getLanguageBadge(resource.language)}`}>
              {resource.language}
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
              {resource.resourceType}
            </span>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${diffStyle.bg} ${diffStyle.text} ${diffStyle.border}`}>
              {resource.difficulty}
            </span>
          </div>

          <button
            onClick={() => onSaveToggle(resource.id)}
            className={`p-1.5 rounded-lg transition ${
              isSaved ? 'text-amber-400 bg-amber-500/10' : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800'
            }`}
            aria-label="Save resource"
          >
            <Bookmark className="w-4 h-4 fill-current" />
          </button>
        </div>

        {/* Title & Channel */}
        <h4 className="text-sm font-bold text-slate-100 mb-1 line-clamp-2 leading-snug">
          {resource.title}
        </h4>
        <p className="text-xs text-slate-400 mb-2 font-medium">
          Channel: <span className="text-slate-200">{resource.channelOrProvider}</span>
        </p>
        <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-3">
          {resource.description}
        </p>

        {/* Metrics: Rating, Duration, Topic */}
        <div className="flex items-center gap-3 text-xs text-slate-400 pb-2 border-b border-slate-800/80">
          <span className="flex items-center gap-1 text-amber-400 font-bold">
            <Star className="w-3.5 h-3.5 fill-amber-400" /> {resource.rating.toFixed(1)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-500" /> {resource.duration}
          </span>
          <span className="text-[11px] text-slate-400 truncate">
            #{resource.topic}
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-2 pt-1">
        <Button
          variant="primary"
          size="sm"
          className="flex-1 text-xs"
          onClick={() => onPreview(resource)}
          leftIcon={<PlayCircle className="w-4 h-4" />}
        >
          Watch Tutorial
        </Button>
        <a href={resource.url} target="_blank" rel="noreferrer">
          <Button variant="outline" size="sm" className="p-2" aria-label="Open external link">
            <ExternalLink className="w-4 h-4" />
          </Button>
        </a>
      </div>
    </div>
  );
};
