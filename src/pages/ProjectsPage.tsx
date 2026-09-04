import React, { useState } from 'react';
import { RECOMMENDED_PROJECTS } from '../data/projects';
import { CAREERS } from '../data/careers';
import { useProfile } from '../context/UserProfileContext';
import { RecommendedProject } from '../types';
import { ProjectCard } from '../components/projects/ProjectCard';
import { Modal } from '../components/common/Modal';
import { Button } from '../components/common/Button';
import { FolderGit2, Search, Filter, CheckCircle2, Clock, Star, ExternalLink, Code } from 'lucide-react';
import { EmptyState } from '../components/common/EmptyState';

export const ProjectsPage: React.FC = () => {
  const { profile, toggleCompleteProject } = useProfile();
  const [selectedCareer, setSelectedCareer] = useState<string>(profile.targetCareerId || 'All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [search, setSearch] = useState<string>('');
  const [activeProjectModal, setActiveProjectModal] = useState<RecommendedProject | null>(null);

  const filteredProjects = RECOMMENDED_PROJECTS.filter(project => {
    if (selectedCareer !== 'All' && project.careerId !== selectedCareer) return false;
    if (selectedDifficulty !== 'All' && project.difficulty !== selectedDifficulty) return false;
    if (search.trim() !== '') {
      const q = search.toLowerCase().trim();
      const matchTitle = project.title.toLowerCase().includes(q);
      const matchDesc = project.description.toLowerCase().includes(q);
      const matchSkills = project.requiredSkills.some(s => s.toLowerCase().includes(q));
      if (!matchTitle && !matchDesc && !matchSkills) return false;
    }
    return true;
  });

  const completedCount = profile.completedProjectIds?.length || 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <FolderGit2 className="w-5 h-5 text-purple-400" />
            <h1 className="text-2xl sm:text-3xl font-black text-slate-100">Portfolio Project Engine</h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-400">
            Build real-world portfolio capstones evaluated against industry engineering rubrics.
          </p>
        </div>

        <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-xs flex items-center gap-3">
          <span className="text-slate-400">Completed Projects:</span>
          <span className="font-extrabold text-emerald-400 text-sm">{completedCount}</span>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="p-4 rounded-2xl glass-card border border-slate-800 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search projects or tech stack..."
              className="w-full rounded-xl bg-slate-900 border border-slate-700/80 pl-10 pr-4 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <select
              value={selectedCareer}
              onChange={(e) => setSelectedCareer(e.target.value)}
              className="w-full rounded-xl bg-slate-900 border border-slate-700/80 px-4 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-purple-500"
            >
              <option value="All">All Careers</option>
              {CAREERS.map(c => (
                <option key={c.id} value={c.id}>{c.title}</option>
              ))}
            </select>
          </div>

          <div>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full rounded-xl bg-slate-900 border border-slate-700/80 px-4 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-purple-500"
            >
              <option value="All">All Difficulty Tiers</option>
              <option value="Beginner">Beginner Tier</option>
              <option value="Intermediate">Intermediate Tier</option>
              <option value="Advanced">Advanced Tier</option>
            </select>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <EmptyState
          icon={<FolderGit2 className="w-8 h-8" />}
          title="No Matching Projects Found"
          description="Try resetting your filters or search keywords."
          actionText="Reset Filters"
          onAction={() => {
            setSearch('');
            setSelectedCareer('All');
            setSelectedDifficulty('All');
          }}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              isCompleted={profile.completedProjectIds?.includes(project.id)}
              onToggleComplete={toggleCompleteProject}
              onViewDetails={(p) => setActiveProjectModal(p)}
            />
          ))}
        </div>
      )}

      {/* Project Details Guide Modal */}
      {activeProjectModal && (
        <Modal
          isOpen={true}
          onClose={() => setActiveProjectModal(null)}
          title={activeProjectModal.title}
          subtitle={`${activeProjectModal.difficulty} • ~${activeProjectModal.estimatedHours} Hours`}
          size="lg"
        >
          <div className="space-y-6">
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Description & Expected Outcome</h5>
              <p className="text-xs text-slate-300 leading-relaxed">{activeProjectModal.description}</p>
              <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs text-emerald-200 mt-3">
                <span className="font-bold text-emerald-400 block mb-0.5">Expected Deliverable:</span>
                {activeProjectModal.expectedOutcome}
              </div>
            </div>

            {/* Step-by-Step Milestones */}
            <div className="space-y-3">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">Step-by-Step Implementation Milestones</h5>
              <div className="space-y-2">
                {activeProjectModal.milestones.map((m, idx) => (
                  <div key={m.id} className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-800 text-emerald-400 font-bold text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <p className="text-xs font-bold text-slate-200">{m.title}</p>
                        <span className="text-[10px] text-slate-500 font-medium">~{m.estimatedHours}h</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{m.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Evaluation Rubric */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
              <h5 className="font-bold text-slate-200">Engineering Evaluation Rubric:</h5>
              <ul className="list-disc list-inside space-y-1 text-slate-400">
                {activeProjectModal.evaluationRubric.map((r, idx) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-800">
              <div className="flex items-center gap-2">
                {activeProjectModal.starterGithubRepo && (
                  <a href={activeProjectModal.starterGithubRepo} target="_blank" rel="noreferrer">
                    <Button variant="secondary" size="sm" leftIcon={<Code className="w-4 h-4" />}>
                      Starter Repo
                    </Button>
                  </a>
                )}
                {activeProjectModal.demoUrl && (
                  <a href={activeProjectModal.demoUrl} target="_blank" rel="noreferrer">
                    <Button variant="outline" size="sm" rightIcon={<ExternalLink className="w-4 h-4" />}>
                      Live Reference
                    </Button>
                  </a>
                )}
              </div>

              <Button
                variant={profile.completedProjectIds?.includes(activeProjectModal.id) ? 'primary' : 'outline'}
                size="sm"
                onClick={() => {
                  toggleCompleteProject(activeProjectModal.id);
                  setActiveProjectModal(null);
                }}
              >
                {profile.completedProjectIds?.includes(activeProjectModal.id) ? 'Project Completed ✓' : 'Mark Completed'}
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
