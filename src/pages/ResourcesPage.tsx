import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { LEARNING_RESOURCES, LANGUAGE_OPTIONS, RESOURCE_TYPE_OPTIONS } from '../data/resources';
import { useProfile } from '../context/UserProfileContext';
import { LearningLanguage, LearningResource, ResourceType } from '../types';
import { ResourceCard } from '../components/resources/ResourceCard';
import { VideoPreviewModal } from '../components/resources/VideoPreviewModal';
import { ResourceService } from '../services/resourceService';
import { BookOpen, Search, Languages, Filter, Bookmark, PlayCircle } from 'lucide-react';
import { EmptyState } from '../components/common/EmptyState';

export const ResourcesPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialSkill = searchParams.get('skill') || '';

  const { profile, toggleSaveResource, setPreferredLanguage } = useProfile();
  const [selectedLanguage, setSelectedLanguage] = useState<LearningLanguage | 'All'>(profile.preferredLanguage || 'All');
  const [selectedType, setSelectedType] = useState<ResourceType | 'All Types'>('All Types');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [search, setSearch] = useState<string>(initialSkill);
  const [previewResource, setPreviewResource] = useState<LearningResource | null>(null);
  const [showSavedOnly, setShowSavedOnly] = useState(false);

  useEffect(() => {
    if (initialSkill) {
      setSearch(initialSkill);
    }
  }, [initialSkill]);

  const filteredResources = ResourceService.filterResources(LEARNING_RESOURCES, {
    language: selectedLanguage,
    resourceType: selectedType,
    difficulty: selectedDifficulty,
    searchQuery: search
  }).filter(r => !showSavedOnly || profile.savedResourceIds.includes(r.id));

  const handleLanguageTabClick = (lang: LearningLanguage | 'All') => {
    setSelectedLanguage(lang);
    if (lang !== 'All') {
      setPreferredLanguage(lang);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <BookOpen className="w-5 h-5 text-indigo-400" />
            <h1 className="text-2xl sm:text-3xl font-black text-slate-100">Language-Aware Resource Hub</h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-400">
            Curated high-definition video tutorials, courses, and documentation in Telugu, Hindi, Tamil, Kannada, and English.
          </p>
        </div>

        <button
          onClick={() => setShowSavedOnly(!showSavedOnly)}
          className={`px-4 py-2 rounded-xl text-xs font-bold border flex items-center gap-1.5 transition ${
            showSavedOnly
              ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
              : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-600'
          }`}
        >
          <Bookmark className="w-4 h-4 fill-current" />
          {showSavedOnly ? 'Showing Saved' : `Saved in Library (${profile.savedResourceIds.length})`}
        </button>
      </div>

      {/* Language Filter Tabs */}
      <div className="p-2 rounded-2xl glass-card border border-slate-800 flex items-center gap-2 overflow-x-auto">
        {LANGUAGE_OPTIONS.map((lang) => {
          const isSelected = selectedLanguage === lang.value;
          return (
            <button
              key={lang.value}
              onClick={() => handleLanguageTabClick(lang.value as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                isSelected
                  ? 'bg-indigo-500 text-slate-950 font-black shadow-md shadow-indigo-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-850'
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          );
        })}
      </div>

      {/* Search & Secondary Filters */}
      <div className="p-4 rounded-2xl glass-card border border-slate-800 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {/* Search Input */}
          <div className="relative md:col-span-2">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by topic, skill (e.g. Python, React, SQL), or channel..."
              className="w-full rounded-xl bg-slate-900 border border-slate-700/80 pl-10 pr-4 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Resource Type */}
          <div>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value as any)}
              className="w-full rounded-xl bg-slate-900 border border-slate-700/80 px-4 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-indigo-500"
            >
              {RESOURCE_TYPE_OPTIONS.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          {/* Difficulty */}
          <div>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full rounded-xl bg-slate-900 border border-slate-700/80 px-4 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-indigo-500"
            >
              <option value="All">All Difficulty Levels</option>
              <option value="Easy">Beginner Friendly</option>
              <option value="Medium">Intermediate</option>
              <option value="Hard">Advanced</option>
            </select>
          </div>
        </div>
      </div>

      {/* Resource Cards Grid */}
      {filteredResources.length === 0 ? (
        <EmptyState
          icon={<BookOpen className="w-8 h-8" />}
          title="No Learning Resources Found"
          description={`No tutorials matched "${search}" in ${selectedLanguage}. Try searching for "Python", "SQL", or switching language.`}
          actionText="Reset Search"
          onAction={() => {
            setSearch('');
            setSelectedLanguage('All');
            setSelectedType('All Types');
            setShowSavedOnly(false);
          }}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map(resource => (
            <ResourceCard
              key={resource.id}
              resource={resource}
              onPreview={(r) => setPreviewResource(r)}
              onSaveToggle={toggleSaveResource}
              isSaved={profile.savedResourceIds.includes(resource.id)}
            />
          ))}
        </div>
      )}

      {/* Video Modal */}
      <VideoPreviewModal
        resource={previewResource}
        isOpen={!!previewResource}
        onClose={() => setPreviewResource(null)}
        onSaveToggle={toggleSaveResource}
        isSaved={previewResource ? profile.savedResourceIds.includes(previewResource.id) : false}
      />
    </div>
  );
};
