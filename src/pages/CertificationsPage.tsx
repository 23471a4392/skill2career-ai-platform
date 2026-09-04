import React, { useState } from 'react';
import { CERTIFICATIONS } from '../data/certifications';
import { useProfile } from '../context/UserProfileContext';
import { Award, Search, ExternalLink, CheckCircle2, ShieldCheck, DollarSign, Calendar } from 'lucide-react';
import { Button } from '../components/common/Button';
import { getDifficultyColor } from '../utils/formatters';

export const CertificationsPage: React.FC = () => {
  const { profile, toggleCompleteCert } = useProfile();
  const [selectedProvider, setSelectedProvider] = useState<string>('All');
  const [search, setSearch] = useState<string>('');

  const providers = ['All', 'Microsoft', 'Google / Coursera', 'Meta / Coursera', 'Amazon Web Services', 'Linux Foundation / CNCF', 'CompTIA', 'Project Management Institute (PMI)'];

  const filteredCerts = CERTIFICATIONS.filter(cert => {
    if (selectedProvider !== 'All' && cert.provider !== selectedProvider) return false;
    if (search.trim() !== '') {
      const q = search.toLowerCase().trim();
      const matchName = cert.name.toLowerCase().includes(q);
      const matchSkill = cert.skillArea.toLowerCase().includes(q);
      const matchProvider = cert.provider.toLowerCase().includes(q);
      if (!matchName && !matchSkill && !matchProvider) return false;
    }
    return true;
  });

  const completedCount = profile.completedCertIds?.length || 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Award className="w-5 h-5 text-amber-400" />
            <h1 className="text-2xl sm:text-3xl font-black text-slate-100">Industry Certification Navigator</h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-400">
            Globally recognized cloud, data, engineering, and project credentials with official syllabus mappings.
          </p>
        </div>

        <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-xs flex items-center gap-3">
          <span className="text-slate-400">Achieved Certifications:</span>
          <span className="font-extrabold text-amber-400 text-sm">{completedCount}</span>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="p-4 rounded-2xl glass-card border border-slate-800 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="relative md:col-span-2">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search certifications (e.g. AWS, Power BI, Meta, Security+)..."
              className="w-full rounded-xl bg-slate-900 border border-slate-700/80 pl-10 pr-4 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <select
              value={selectedProvider}
              onChange={(e) => setSelectedProvider(e.target.value)}
              className="w-full rounded-xl bg-slate-900 border border-slate-700/80 px-4 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-amber-500"
            >
              {providers.map(p => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Certification Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCerts.map(cert => {
          const isCompleted = profile.completedCertIds?.includes(cert.id);
          const diffStyle = getDifficultyColor(cert.difficulty);

          return (
            <div
              key={cert.id}
              className={`p-6 rounded-3xl glass-card border flex flex-col justify-between space-y-5 ${
                isCompleted ? 'border-amber-500/40 bg-amber-950/15' : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-200">
                      {cert.provider}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${diffStyle.bg} ${diffStyle.text} ${diffStyle.border}`}>
                      {cert.difficulty}
                    </span>
                    {cert.examCode && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-850 text-slate-400">
                        Code: {cert.examCode}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-slate-400 font-medium">
                    {cert.estimatedCost}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-extrabold text-slate-100 mb-1 leading-snug">{cert.name}</h3>
                  <p className="text-xs text-slate-400">Skill Area: <span className="text-slate-200 font-semibold">{cert.skillArea}</span></p>
                </div>

                {/* Topics Covered */}
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Exam Domains & Weights:</p>
                  <ul className="space-y-1">
                    {cert.topicsCovered.map((topic, tIdx) => (
                      <li key={tIdx} className="text-xs text-slate-300 flex items-center gap-1.5">
                        <span className="text-amber-400 text-xs">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-2 border-t border-slate-800/80">
                <a href={cert.officialUrl} target="_blank" rel="noreferrer" className="flex-1">
                  <Button variant="secondary" size="sm" className="w-full text-xs" rightIcon={<ExternalLink className="w-3.5 h-3.5" />}>
                    Official Portal & Prep Guide
                  </Button>
                </a>
                <Button
                  variant={isCompleted ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => toggleCompleteCert(cert.id)}
                  leftIcon={<CheckCircle2 className="w-4 h-4" />}
                >
                  {isCompleted ? 'Achieved ✓' : 'Mark Achieved'}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
