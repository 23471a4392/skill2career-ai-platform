import React, { useState } from 'react';
import { useProfile } from '../context/UserProfileContext';
import { CAREERS } from '../data/careers';
import { RoadmapEngineService } from '../services/roadmapEngine';
import { RoadmapItemCard } from '../components/roadmap/RoadmapItemCard';
import { ProgressBar } from '../components/common/ProgressBar';
import { Modal } from '../components/common/Modal';
import { Button } from '../components/common/Button';
import { RoadmapItem } from '../types';
import { Map, Sparkles, CheckCircle2, Clock, Calendar, ArrowRight, Languages } from 'lucide-react';
import { Link } from 'react-router-dom';

export const RoadmapPage: React.FC = () => {
  const { profile, toggleCompleteRoadmapTask } = useProfile();
  const [activeFilter, setActiveFilter] = useState<'All' | 'Not Started' | 'Completed'>('All');
  const [selectedItemForNote, setSelectedItemForNote] = useState<RoadmapItem | null>(null);
  const [noteContent, setNoteContent] = useState('');

  const targetCareer = CAREERS.find(c => c.id === (profile.targetCareerId || 'data-analyst')) || CAREERS[0];
  const roadmap = RoadmapEngineService.generatePersonalizedRoadmap(profile, targetCareer.id);

  const completedCount = roadmap.items.filter(i => i.status === 'Completed').length;
  const progressPercent = Math.round((completedCount / Math.max(1, roadmap.items.length)) * 100);

  const filteredItems = roadmap.items.filter(i => {
    if (activeFilter === 'Not Started') return i.status !== 'Completed';
    if (activeFilter === 'Completed') return i.status === 'Completed';
    return true;
  });

  const handleOpenNoteModal = (item: RoadmapItem) => {
    setSelectedItemForNote(item);
    setNoteContent(item.userNotes || '');
  };

  const handleSaveNote = () => {
    if (selectedItemForNote) {
      selectedItemForNote.userNotes = noteContent;
      setSelectedItemForNote(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="p-8 rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                Personalized Curriculum
              </span>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                🌐 Language: {profile.preferredLanguage}
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-100">
              Personalized Learning Roadmap for {targetCareer.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
              Tailored week-by-week progression matching your background in {profile.degreeName || profile.highestQualification}, focusing specifically on your missing prerequisite skills.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="p-4 rounded-2xl bg-slate-850 border border-slate-700 text-center min-w-[120px]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Total Duration</span>
              <span className="text-2xl font-black text-slate-100">{roadmap.totalWeeks} Weeks</span>
              <span className="text-[10px] text-slate-500 block">~{roadmap.estimatedTotalHours} Hours</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-850 border border-slate-700 text-center min-w-[120px]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Completed</span>
              <span className="text-2xl font-black text-emerald-400">{completedCount}/{roadmap.totalWeeks}</span>
              <span className="text-[10px] text-slate-500 block">{progressPercent}% done</span>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="space-y-2 pt-2 border-t border-slate-800">
          <div className="flex justify-between text-xs font-bold text-slate-300">
            <span>Roadmap Completion</span>
            <span>{progressPercent}%</span>
          </div>
          <ProgressBar value={progressPercent} color="emerald" size="md" />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          {(['All', 'Not Started', 'Completed'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeFilter === tab
                  ? 'bg-emerald-500 text-slate-950 font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {tab} ({tab === 'All' ? roadmap.items.length : tab === 'Completed' ? completedCount : roadmap.items.length - completedCount})
            </button>
          ))}
        </div>

        <Link to="/resources">
          <Button variant="outline" size="sm" leftIcon={<Languages className="w-4 h-4" />}>
            Switch Learning Resources Language ({profile.preferredLanguage})
          </Button>
        </Link>
      </div>

      {/* Roadmap Items Timeline List */}
      <div className="space-y-4">
        {filteredItems.map(item => (
          <RoadmapItemCard
            key={item.id}
            item={item}
            onToggleComplete={toggleCompleteRoadmapTask}
            onEditNote={handleOpenNoteModal}
          />
        ))}
      </div>

      {/* Milestone Notes Modal */}
      {selectedItemForNote && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedItemForNote(null)}
          title={`Milestone Notes: Week ${selectedItemForNote.weekNumber}`}
          subtitle={selectedItemForNote.topicTitle}
        >
          <div className="space-y-4">
            <p className="text-xs text-slate-400">
              Record key learnings, code snippet links, or questions you encountered during this milestone.
            </p>
            <textarea
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
              placeholder="e.g. Mastered SQL Window Functions (ROW_NUMBER vs DENSE_RANK). Built sales ranking query..."
              rows={5}
              className="w-full rounded-xl bg-slate-950 border border-slate-700 p-4 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
            <div className="flex justify-end gap-2">
              <Button variant="secondary" size="sm" onClick={() => setSelectedItemForNote(null)}>
                Cancel
              </Button>
              <Button variant="primary" size="sm" onClick={handleSaveNote}>
                Save Notes
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
