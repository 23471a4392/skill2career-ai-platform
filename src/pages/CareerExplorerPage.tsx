import React, { useState } from 'react';
import { CAREERS, CAREER_CATEGORIES } from '../data/careers';
import { useProfile } from '../context/UserProfileContext';
import { CareerCard } from '../components/career/CareerCard';
import { Search, Compass, Filter, Bookmark, Sparkles } from 'lucide-react';
import { EmptyState } from '../components/common/EmptyState';

export const CareerExplorerPage: React.FC = () => {
  const { profile, careerMatches, setTargetCareer } = useProfile();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [search, setSearch] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [showBookmarkedOnly, setShowBookmarkedOnly] = useState(false);

  const matchMap = new Map(careerMatches.map(m => [m.careerId, m]));

  const filteredCareers = CAREERS.filter(career => {
    // Category match
    if (selectedCategory !== 'All' && career.category !== selectedCategory) {
      return false;
    }

    // Difficulty match
    if (selectedDifficulty !== 'All' && career.difficulty !== selectedDifficulty) {
      return false;
    }

    // Bookmarked filter
    if (showBookmarkedOnly && !profile.bookmarkedCareerIds.includes(career.id)) {
      return false;
    }

    // Search query
    if (search.trim() !== '') {
      const q = search.toLowerCase().trim();
      const matchTitle = career.title.toLowerCase().includes(q);
      const matchDesc = career.shortDescription.toLowerCase().includes(q);
      const matchSkills = career.primarySkills.some(s => s.skillName.toLowerCase().includes(q));
      if (!matchTitle && !matchDesc && !matchSkills) {
        return false;
      }
    }

    return true;
  });

  // Sort by match percentage descending
  const sortedCareers = [...filteredCareers].sort((a, b) => {
    const matchA = matchMap.get(a.id)?.matchPercentage || 0;
    const matchB = matchMap.get(b.id)?.matchPercentage || 0;
    return matchB - matchA;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Compass className="w-5 h-5 text-emerald-400" />
            <h1 className="text-2xl sm:text-3xl font-black text-slate-100">Career Explorer</h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-400">
            Explore 35+ technology career pathways with live capability matching and skill gap insights.
          </p>
        </div>

        <button
          onClick={() => setShowBookmarkedOnly(!showBookmarkedOnly)}
          className={`px-4 py-2 rounded-xl text-xs font-bold border flex items-center gap-1.5 transition ${
            showBookmarkedOnly
              ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
              : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-600'
          }`}
        >
          <Bookmark className="w-4 h-4 fill-current" />
          {showBookmarkedOnly ? 'Showing Saved Careers' : `Saved Careers (${profile.bookmarkedCareerIds.length})`}
        </button>
      </div>

      {/* Filter Controls Bar */}
      <div className="p-4 rounded-2xl glass-card border border-slate-800 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Search Input */}
          <div className="relative md:col-span-2">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search careers by title, role description, or skill (e.g. Python, SQL, Cloud)..."
              className="w-full rounded-xl bg-slate-900 border border-slate-700/80 pl-10 pr-4 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
          </div>

          {/* Difficulty filter */}
          <div>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full rounded-xl bg-slate-900 border border-slate-700/80 px-4 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-emerald-500"
            >
              <option value="All">All Difficulty Levels</option>
              <option value="Entry">Entry Level</option>
              <option value="Moderate">Moderate</option>
              <option value="Challenging">Challenging</option>
              <option value="High">High Complexity</option>
            </select>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          {CAREER_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition ${
                selectedCategory === cat
                  ? 'bg-emerald-500 text-slate-950 font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-850'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Career Grid */}
      {sortedCareers.length === 0 ? (
        <EmptyState
          icon={<Compass className="w-8 h-8" />}
          title="No Matching Careers Found"
          description="Try relaxing your search keywords or resetting difficulty filters."
          actionText="Reset Filters"
          onAction={() => {
            setSearch('');
            setSelectedCategory('All');
            setSelectedDifficulty('All');
            setShowBookmarkedOnly(false);
          }}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedCareers.map((career) => (
            <CareerCard
              key={career.id}
              career={career}
              matchScore={matchMap.get(career.id)}
              isTarget={career.id === profile.targetCareerId}
              onSetTarget={(id) => setTargetCareer(id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
