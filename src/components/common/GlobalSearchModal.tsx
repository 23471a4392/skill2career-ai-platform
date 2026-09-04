import React, { useState, useEffect, useRef } from 'react';
import { Search, Compass, BookOpen, Layers, Award, HelpCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { CAREERS } from '../../data/careers';
import { LEARNING_RESOURCES } from '../../data/resources';
import { RECOMMENDED_PROJECTS } from '../../data/projects';
import { CERTIFICATIONS } from '../../data/certifications';
import { INTERVIEW_QUESTIONS } from '../../data/interviewQuestions';
import { SKILL_DEFINITIONS } from '../../data/skills';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchingCareers = q ? CAREERS.filter(c => c.title.toLowerCase().includes(q) || c.shortDescription.toLowerCase().includes(q)).slice(0, 3) : [];
  const matchingSkills = q ? SKILL_DEFINITIONS.filter(s => s.name.toLowerCase().includes(q) || s.category.toLowerCase().includes(q)).slice(0, 3) : [];
  const matchingResources = q ? LEARNING_RESOURCES.filter(r => r.title.toLowerCase().includes(q) || r.topic.toLowerCase().includes(q)).slice(0, 3) : [];
  const matchingProjects = q ? RECOMMENDED_PROJECTS.filter(p => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)).slice(0, 2) : [];
  const matchingCerts = q ? CERTIFICATIONS.filter(c => c.name.toLowerCase().includes(q) || c.provider.toLowerCase().includes(q)).slice(0, 2) : [];
  const matchingQuestions = q ? INTERVIEW_QUESTIONS.filter(i => i.question.toLowerCase().includes(q) || i.skillTopic.toLowerCase().includes(q)).slice(0, 2) : [];

  const totalResults = matchingCareers.length + matchingSkills.length + matchingResources.length + matchingProjects.length + matchingCerts.length + matchingQuestions.length;

  const handleSelect = (url: string) => {
    navigate(url);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md" onClick={onClose} />

      {/* Dialog */}
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/90 rounded-2xl shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-900/80">
          <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search careers, skills, courses, projects, certifications..."
            className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
          />
          <kbd className="hidden sm:inline-block text-[10px] uppercase font-bold text-slate-400 bg-slate-800 border border-slate-700 px-2 py-0.5 rounded">
            ESC
          </kbd>
        </div>

        <div className="max-h-96 overflow-y-auto p-4 space-y-4">
          {query === '' ? (
            <div className="py-8 text-center text-xs text-slate-400">
              Type keywords like <span className="text-emerald-400 font-medium">"Data Analyst"</span>, <span className="text-cyan-400 font-medium">"React"</span>, or <span className="text-purple-400 font-medium">"Python"</span> to explore instant recommendations.
            </div>
          ) : totalResults === 0 ? (
            <div className="py-8 text-center text-xs text-slate-400">
              No matching records found for "{query}". Try another skill or career title.
            </div>
          ) : (
            <>
              {/* Careers */}
              {matchingCareers.length > 0 && (
                <div>
                  <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-emerald-400" /> Careers ({matchingCareers.length})
                  </h5>
                  <div className="space-y-1">
                    {matchingCareers.map(c => (
                      <div
                        key={c.id}
                        onClick={() => handleSelect(`/careers/${c.id}`)}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-800/80 cursor-pointer transition group"
                      >
                        <div>
                          <p className="text-sm font-semibold text-slate-200 group-hover:text-emerald-400 transition">{c.title}</p>
                          <p className="text-xs text-slate-400 line-clamp-1">{c.shortDescription}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills */}
              {matchingSkills.length > 0 && (
                <div>
                  <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-cyan-400" /> Skills ({matchingSkills.length})
                  </h5>
                  <div className="space-y-1">
                    {matchingSkills.map(s => (
                      <div
                        key={s.id}
                        onClick={() => handleSelect(`/resources?skill=${encodeURIComponent(s.name)}`)}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-800/80 cursor-pointer transition group"
                      >
                        <div>
                          <p className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition">{s.name}</p>
                          <p className="text-xs text-slate-400">{s.category} • {s.description}</p>
                        </div>
                        <span className="text-xs text-cyan-400 font-medium">View Resources →</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Resources */}
              {matchingResources.length > 0 && (
                <div>
                  <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-purple-400" /> Learning Resources ({matchingResources.length})
                  </h5>
                  <div className="space-y-1">
                    {matchingResources.map(r => (
                      <div
                        key={r.id}
                        onClick={() => handleSelect('/resources')}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-800/80 cursor-pointer transition group"
                      >
                        <div>
                          <p className="text-sm font-semibold text-slate-200 group-hover:text-purple-400 transition">{r.title}</p>
                          <p className="text-xs text-slate-400">{r.language} • {r.channelOrProvider} • {r.duration}</p>
                        </div>
                        <span className="text-xs text-purple-400 font-medium">Open →</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Certifications */}
              {matchingCerts.length > 0 && (
                <div>
                  <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-400" /> Certifications ({matchingCerts.length})
                  </h5>
                  <div className="space-y-1">
                    {matchingCerts.map(c => (
                      <div
                        key={c.id}
                        onClick={() => handleSelect('/certifications')}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-800/80 cursor-pointer transition group"
                      >
                        <div>
                          <p className="text-sm font-semibold text-slate-200 group-hover:text-amber-400 transition">{c.name}</p>
                          <p className="text-xs text-slate-400">{c.provider} • {c.difficulty}</p>
                        </div>
                        <span className="text-xs text-amber-400 font-medium">Explore →</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Interview Questions */}
              {matchingQuestions.length > 0 && (
                <div>
                  <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-rose-400" /> Interview Questions ({matchingQuestions.length})
                  </h5>
                  <div className="space-y-1">
                    {matchingQuestions.map(i => (
                      <div
                        key={i.id}
                        onClick={() => handleSelect('/interview-prep')}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-800/80 cursor-pointer transition group"
                      >
                        <div>
                          <p className="text-sm font-semibold text-slate-200 group-hover:text-rose-400 transition">{i.question}</p>
                          <p className="text-xs text-slate-400">{i.skillTopic} • {i.category}</p>
                        </div>
                        <span className="text-xs text-rose-400 font-medium">Practice →</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
