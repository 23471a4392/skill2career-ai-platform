import React, { useState } from 'react';
import { useProfile } from '../context/UserProfileContext';
import { UserProfile, EducationalQualification, LearningLanguage, CareerGoal, ExperienceLevel, SkillProficiency } from '../types';
import { DEGREE_OPTIONS } from '../data/degrees';
import { LANGUAGE_OPTIONS } from '../data/resources';
import { SKILL_DEFINITIONS } from '../data/skills';
import { Button } from '../components/common/Button';
import { 
  UserCircle, 
  Save, 
  Download, 
  RotateCcw, 
  Sparkles, 
  Plus, 
  Trash2, 
  CheckCircle2,
  GraduationCap,
  Briefcase
} from 'lucide-react';

export const ProfilePage: React.FC = () => {
  const { profile, updateProfile, exportProfile, resetProfileToDemo } = useProfile();
  const [formData, setFormData] = useState<UserProfile>(profile);
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillProf, setNewSkillProf] = useState<SkillProficiency>('Beginner');
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(formData);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleAddSkill = () => {
    if (!newSkillName.trim()) return;
    const exists = formData.skills.some(s => s.name.toLowerCase() === newSkillName.toLowerCase());
    if (!exists) {
      const updated = [...formData.skills, { name: newSkillName.trim(), category: 'Custom', proficiency: newSkillProf }];
      setFormData({ ...formData, skills: updated });
      newSkillName && setNewSkillName('');
    }
  };

  const handleRemoveSkill = (skillName: string) => {
    const updated = formData.skills.filter(s => s.name !== skillName);
    setFormData({ ...formData, skills: updated });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <UserCircle className="w-5 h-5 text-emerald-400" />
            <h1 className="text-2xl sm:text-3xl font-black text-slate-100">Profile & Career Settings</h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-400">
            Keep your skills and preferences up to date. Updates instantly recalculate your career recommendations and job readiness.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={exportProfile}
            leftIcon={<Download className="w-4 h-4" />}
          >
            Export Profile JSON
          </Button>
        </div>
      </div>

      {saveSuccess && (
        <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold flex items-center gap-2 animate-in fade-in duration-200">
          <CheckCircle2 className="w-4 h-4" />
          <span>Profile saved successfully! Your recommendations and readiness scores have been refreshed.</span>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSave} className="space-y-6">
        {/* Personal Details */}
        <div className="p-6 rounded-3xl glass-card border border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
            <UserCircle className="w-4 h-4 text-emerald-400" /> Personal & Contact Info
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">Full Name</label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>
        </div>

        {/* Education & Academic Level */}
        <div className="p-6 rounded-3xl glass-card border border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-cyan-400" /> Educational Background
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">Highest Qualification</label>
              <select
                value={formData.highestQualification}
                onChange={(e) => setFormData({ ...formData, highestQualification: e.target.value as EducationalQualification })}
                className="w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-cyan-500"
              >
                {DEGREE_OPTIONS.map(d => (
                  <option key={d.value} value={d.value}>{d.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">Degree Name / Specialization</label>
              <input
                type="text"
                value={formData.degreeName || ''}
                onChange={(e) => setFormData({ ...formData, degreeName: e.target.value })}
                placeholder="e.g. Computer Science / Accounting"
                className="w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">Graduation Year</label>
              <input
                type="number"
                value={formData.graduationYear}
                onChange={(e) => setFormData({ ...formData, graduationYear: parseInt(e.target.value, 10) })}
                className="w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">Preferred Learning Language</label>
              <select
                value={formData.preferredLanguage}
                onChange={(e) => setFormData({ ...formData, preferredLanguage: e.target.value as LearningLanguage })}
                className="w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-cyan-500"
              >
                {LANGUAGE_OPTIONS.filter(l => l.value !== 'All').map(l => (
                  <option key={l.value} value={l.value}>{l.flag} {l.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Skills & Proficiency */}
        <div className="p-6 rounded-3xl glass-card border border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400" /> Active Skills & Proficiency
          </h3>

          {/* Add Skill Row */}
          <div className="flex gap-2">
            <input
              type="text"
              value={newSkillName}
              onChange={(e) => setNewSkillName(e.target.value)}
              placeholder="Add skill (e.g. Docker, TypeScript, FastApi)..."
              className="flex-1 rounded-xl bg-slate-900 border border-slate-700 px-4 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500"
            />
            <select
              value={newSkillProf}
              onChange={(e) => setNewSkillProf(e.target.value as SkillProficiency)}
              className="rounded-xl bg-slate-900 border border-slate-700 px-3 py-2.5 text-xs text-slate-100 focus:outline-none"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
            <Button type="button" variant="primary" size="sm" onClick={handleAddSkill} leftIcon={<Plus className="w-4 h-4" />}>
              Add
            </Button>
          </div>

          {/* Existing Skills List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-60 overflow-y-auto pr-1">
            {formData.skills.map(s => (
              <div key={s.name} className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-100">{s.name}</p>
                  <p className="text-[10px] text-slate-400">{s.proficiency}</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveSkill(s.name)}
                  className="text-slate-500 hover:text-rose-400 p-1 transition"
                  aria-label="Remove skill"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Save CTA */}
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => resetProfileToDemo('student')}
            >
              Reset to Student Demo
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => resetProfileToDemo('switcher')}
            >
              Reset to Switcher Demo
            </Button>
          </div>

          <Button type="submit" variant="primary" size="lg" leftIcon={<Save className="w-5 h-5" />}>
            Save Changes & Update Engine
          </Button>
        </div>
      </form>
    </div>
  );
};
