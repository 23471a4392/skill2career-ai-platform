import React from 'react';
import { Modal } from '../common/Modal';
import { LearningResource } from '../../types';
import { ExternalLink, Star, ThumbsUp, Clock, Globe } from 'lucide-react';
import { Button } from '../common/Button';

interface VideoPreviewModalProps {
  resource: LearningResource | null;
  isOpen: boolean;
  onClose: () => void;
  onSaveToggle: (id: string) => void;
  isSaved: boolean;
}

export const VideoPreviewModal: React.FC<VideoPreviewModalProps> = ({
  resource,
  isOpen,
  onClose,
  onSaveToggle,
  isSaved
}) => {
  if (!resource) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={resource.title}
      subtitle={`${resource.language} • ${resource.channelOrProvider} • ${resource.duration}`}
      size="xl"
    >
      <div className="space-y-4">
        {/* Video Embed */}
        {resource.embedId ? (
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube-nocookie.com/embed/${resource.embedId}`}
              title={resource.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="p-12 text-center bg-slate-950 rounded-xl border border-slate-800 space-y-3">
            <p className="text-sm text-slate-300 font-semibold">{resource.title}</p>
            <p className="text-xs text-slate-400 max-w-md mx-auto">{resource.description}</p>
            <a href={resource.url} target="_blank" rel="noreferrer">
              <Button variant="primary" size="sm" rightIcon={<ExternalLink className="w-4 h-4" />}>
                Open Course on Provider Site
              </Button>
            </a>
          </div>
        )}

        {/* Metadata & Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1 font-bold text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400" /> {resource.rating.toFixed(1)} ({resource.votesCount.toLocaleString()} votes)
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-500" /> {resource.duration}
            </span>
            <span className="flex items-center gap-1 font-semibold text-indigo-400">
              <Globe className="w-3.5 h-3.5" /> {resource.language}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant={isSaved ? 'secondary' : 'outline'}
              size="sm"
              onClick={() => onSaveToggle(resource.id)}
            >
              {isSaved ? 'Saved in Library ✓' : 'Save Resource'}
            </Button>
            <a href={resource.url} target="_blank" rel="noreferrer">
              <Button variant="primary" size="sm" rightIcon={<ExternalLink className="w-3.5 h-3.5" />}>
                Watch on YouTube / Platform
              </Button>
            </a>
          </div>
        </div>

        {/* Description & Tags */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-2">
          <h5 className="font-bold text-slate-200">Course Syllabus & Overview</h5>
          <p className="text-slate-400 leading-relaxed">{resource.description}</p>
          <div className="flex flex-wrap gap-1.5 pt-2">
            {resource.tags.map(t => (
              <span key={t} className="px-2 py-0.5 rounded bg-slate-850 text-[10px] font-semibold text-slate-400 border border-slate-700/60">
                #{t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};
