import React, { useState } from 'react';
import { UserProfile, UserSkill } from '../../types';
import { SKILL_DEFINITIONS } from '../../data/skills';
import { Search, Plus, Check, Layers } from 'lucide-react';

interface StepSkillsProps {
  formData: Partial<UserProfile>;
  onChange: (updates: Partial<UserProfile>) => void;
}

export const StepSkills: React.FC<StepSkillsProps> = ({ formData, onChange }) => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Programming', 'Data & AI', 'Cloud & Infrastructure', 'Frameworks & Tools', 'Design & UX', 'Business & Soft Skills', 'Cybersecurity'];

  const selectedSkillNames = (formData.skills || []).map(s => s.name);

  const filteredSkills = SKILL_DEFINITIONS.filter(s => {
    const matchesCategory = activeCategory === 'All' || s.category === activeCategory;
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.category.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleSkill = (skillName: string, category: string) => {
    const current = formData.skills || [];
    const exists = current.some(s => s.name === skillName);

    let updated: UserSkill[];
    if (exists) {
      updated = current.filter(s => s.name !== skillName);
    } else {
      updated = [...current, { name: skillName, category, proficiency: 'Beginner' }];
    }
    onChange({ skills: updated });
  };

  return (
    <div className="space-y-6">
      <div className="text-center max-w-lg mx-auto">
        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto mb-3 border border-cyan-500/20">
          <Layers className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold text-slate-100">Select skills you have encountered or practiced</h2>
        <p className="text-xs text-slate-400 mt-1">
          Pick technical, analytical, or soft skills. You will specify your exact proficiency in the next step.
        </p>
      </div>

      {/* Selected pill counter */}
      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs">
        <span className="font-semibold text-slate-300">
          Selected Skills: <span className="text-emerald-400 font-bold">{selectedSkillNames.length}</span>
        </span>
        <span className="text-slate-400">Recommended: 3 to 10 skills</span>
      </div>

      {/* Search & Category Filter */}
      <div className="space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search skills (e.g. Python, SQL, React, AWS, Communication, Excel)..."
            className="w-full rounded-xl bg-slate-900 border border-slate-700/80 pl-10 pr-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-850'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 max-h-80 overflow-y-auto pr-1">
        {filteredSkills.map((s) => {
          const isSelected = selectedSkillNames.includes(s.name);
          return (
            <button
              key={s.id}
              onClick={() => toggleSkill(s.name, s.category)}
              className={`p-3 rounded-xl border text-left flex items-center justify-between transition duration-150 ${
                isSelected
                  ? 'bg-cyan-500/15 border-cyan-500 text-cyan-300 shadow-sm shadow-cyan-500/20'
                  : 'bg-slate-900 border-slate-800/80 text-slate-300 hover:border-slate-700 hover:bg-slate-850'
              }`}
            >
              <div className="min-w-0 pr-1">
                <p className="text-xs font-bold truncate">{s.name}</p>
                <p className="text-[10px] text-slate-400 truncate">{s.category}</p>
              </div>
              <div className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 ${
                isSelected ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-500'
              }`}>
                {isSelected ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <Plus className="w-3.5 h-3.5" />}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
