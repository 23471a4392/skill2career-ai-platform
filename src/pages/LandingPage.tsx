import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Compass, 
  ArrowRight, 
  Sparkles, 
  GraduationCap, 
  Layers, 
  Map, 
  Languages, 
  Award, 
  CheckCircle2, 
  TrendingUp, 
  Search, 
  BookOpen, 
  Flame, 
  Zap,
  LogIn,
  UserPlus,
  Star,
  Quote,
  Building2,
  Users,
  CheckCircle,
  Clock,
  ArrowUpRight,
  Briefcase
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { BrandLogo } from '../components/common/BrandLogo';
import { CAREERS } from '../data/careers';
import { DEGREE_OPTIONS } from '../data/degrees';
import { CareerEngineService } from '../services/careerEngine';
import { DEMO_PROFILES } from '../data/demoProfiles';
import { useAuth } from '../context/AuthContext';
import { STUDENT_SUCCESS_STORIES, HIRING_PARTNER_LOGOS } from '../data/humanStories';

export const LandingPage: React.FC = () => {
  const [selectedDegree, setSelectedDegree] = useState('B.Tech');
  const [selectedSkills, setSelectedSkills] = useState<string[]>(['Python', 'SQL', 'Advanced Excel']);
  const navigate = useNavigate();
  const { switchDemoUser } = useAuth();

  // Interactive Live Preview Simulation
  const mockProfile = {
    ...DEMO_PROFILES.student,
    highestQualification: selectedDegree as any,
    skills: selectedSkills.map(s => ({ name: s, category: 'Tech', proficiency: 'Intermediate' as const }))
  };

  const previewMatches = CareerEngineService.calculateAllMatches(mockProfile).slice(0, 3);
  const availableQuickSkills = ['Python', 'SQL', 'Advanced Excel', 'React', 'JavaScript', 'AWS', 'Power BI', 'Machine Learning', 'Communication Skills', 'Figma'];

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  return (
    <div className="space-y-24 py-8 relative z-10">
      
      {/* 1. HERO SECTION - Clean, High-Contrast & Handcrafted */}
      <section className="relative text-center max-w-5xl mx-auto px-4 sm:px-6 pt-4 sm:pt-8 space-y-8">
        
        {/* Clean Announcement Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full dark:bg-purple-500/10 bg-purple-50 border dark:border-purple-500/25 border-purple-200 text-purple-700 dark:text-purple-300 text-xs font-bold shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Skill2Career • Intelligent Career & Learning Navigator</span>
        </div>

        {/* Hero Title */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] dark:text-white text-slate-900">
            Tell us what you know. <br />
            <span className="text-gradient-amethyst-gold">We will chart your career path.</span>
          </h1>
          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Personalized career pathways built for <span className="font-semibold text-slate-900 dark:text-white">B.Tech, BCA, B.Sc, B.Com, MBA, Arts</span> & career switchers. Accurate skill-gap analysis with native tutorials in <span className="font-bold text-amber-600 dark:text-amber-400">తెలుగు (Telugu)</span>, <span className="font-bold text-purple-600 dark:text-purple-300">हिंदी</span>, <span className="font-bold text-teal-600 dark:text-teal-300">தமிழ்</span>, <span className="font-bold text-purple-600 dark:text-purple-300">ಕನ್ನಡ</span> & English.
          </p>
        </div>

        {/* Primary Clear Call to Actions: New User vs Existing User */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link to="/auth/signup" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-base shadow-lg shadow-purple-600/25 flex items-center justify-center gap-2.5 transition transform hover:-translate-y-0.5 active:translate-y-0">
              <UserPlus className="w-5 h-5" />
              <span>Start Free 9-Step Assessment</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
          
          <Link to="/auth/login" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-7 py-4 rounded-2xl dark:bg-slate-900 bg-white hover:bg-slate-50 dark:hover:bg-slate-800 border dark:border-slate-800 border-slate-300 text-slate-800 dark:text-slate-200 font-bold text-base shadow-sm transition flex items-center justify-center gap-2.5">
              <LogIn className="w-5 h-5 text-amber-500" />
              <span>Sign In to Existing Account</span>
            </button>
          </Link>
        </div>

        {/* Real Student Metrics & Placement Social Proof */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold dark:text-slate-400 text-slate-600 border-t dark:border-slate-800 border-slate-200 max-w-3xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <img className="w-7 h-7 rounded-full border-2 dark:border-slate-900 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="Student" />
              <img className="w-7 h-7 rounded-full border-2 dark:border-slate-900 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="Student" />
              <img className="w-7 h-7 rounded-full border-2 dark:border-slate-900 border-white object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100" alt="Student" />
            </div>
            <span><strong className="dark:text-white text-slate-900">45,000+</strong> Learners Guided</span>
          </div>

          <div className="flex items-center gap-1.5 text-amber-500 font-bold">
            <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            <span>4.9 / 5.0 Learner Rating</span>
          </div>

          <div className="flex items-center gap-1.5 text-purple-600 dark:text-purple-400 font-bold">
            <CheckCircle2 className="w-4 h-4" />
            <span>35+ Curated Role Roadmaps</span>
          </div>
        </div>

        {/* 7-Step Clear Pipeline */}
        <div className="pt-4">
          <div className="p-4 sm:p-5 rounded-2xl dark:bg-slate-900/90 bg-slate-50 border dark:border-slate-800 border-slate-200 shadow-sm flex items-center justify-between overflow-x-auto text-[11px] font-bold text-slate-700 dark:text-slate-300 gap-2 scrollbar-none">
            <span className="px-3 py-1.5 rounded-xl dark:bg-slate-800 bg-white dark:text-purple-300 text-purple-700 whitespace-nowrap flex items-center gap-1.5 border dark:border-slate-700 border-slate-200 shadow-sm">
              <GraduationCap className="w-3.5 h-3.5" /> 1. DEGREE
            </span>
            <span className="text-slate-400">→</span>
            <span className="px-3 py-1.5 rounded-xl dark:bg-slate-800 bg-white dark:text-purple-300 text-purple-700 whitespace-nowrap flex items-center gap-1.5 border dark:border-slate-700 border-slate-200 shadow-sm">
              <Layers className="w-3.5 h-3.5" /> 2. SKILLS
            </span>
            <span className="text-slate-400">→</span>
            <span className="px-3 py-1.5 rounded-xl dark:bg-slate-800 bg-white text-amber-600 dark:text-amber-400 whitespace-nowrap flex items-center gap-1.5 border dark:border-slate-700 border-slate-200 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" /> 3. MATCH %
            </span>
            <span className="text-slate-400">→</span>
            <span className="px-3 py-1.5 rounded-xl dark:bg-slate-800 bg-white text-amber-600 dark:text-amber-400 whitespace-nowrap flex items-center gap-1.5 border dark:border-slate-700 border-slate-200 shadow-sm">
              <TrendingUp className="w-3.5 h-3.5" /> 4. SKILL GAP
            </span>
            <span className="text-slate-400">→</span>
            <span className="px-3 py-1.5 rounded-xl dark:bg-slate-800 bg-white dark:text-purple-300 text-purple-700 whitespace-nowrap flex items-center gap-1.5 border dark:border-slate-700 border-slate-200 shadow-sm">
              <Map className="w-3.5 h-3.5" /> 5. ROADMAP
            </span>
            <span className="text-slate-400">→</span>
            <span className="px-3 py-1.5 rounded-xl dark:bg-slate-800 bg-white dark:text-teal-300 text-teal-700 whitespace-nowrap flex items-center gap-1.5 border dark:border-slate-700 border-slate-200 shadow-sm">
              <Languages className="w-3.5 h-3.5 text-amber-500" /> 6. REGIONAL VIDEOS
            </span>
            <span className="text-slate-400">→</span>
            <span className="px-3 py-1.5 rounded-xl bg-purple-600 text-white whitespace-nowrap flex items-center gap-1.5 font-black shadow-sm">
              <Award className="w-3.5 h-3.5" /> 7. JOB READY
            </span>
          </div>
        </div>
      </section>

      {/* 2. CORPORATE PLACEMENT & HIRING LOGOS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-4">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Learners Placed At Top Technology & Consulting Companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {HIRING_PARTNER_LOGOS.map(partner => (
              <div 
                key={partner.name}
                className="px-4 py-2 rounded-xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 shadow-sm hover:border-slate-400 transition flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300"
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: partner.color }} />
                <span>{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE LIVE MATCHING SANDBOX */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="p-6 sm:p-10 rounded-3xl dark:bg-slate-900/90 bg-white border dark:border-slate-800 border-slate-200 shadow-xl space-y-8 relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b dark:border-slate-800 border-slate-200 pb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                  Instant Sandbox
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                  Live Calculator
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
                Test the Career Matching Engine Right Now
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Select your education and tap skills you know to see instant weighted compatibility:
              </p>
            </div>
            
            <Link to="/onboarding">
              <Button size="md" variant="primary" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Launch Full 9-Step Assessment
              </Button>
            </Link>
          </div>

          {/* Sandbox Controls & Results */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Selectors */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                  1. Pick Your Educational Degree:
                </label>
                <select
                  value={selectedDegree}
                  onChange={(e) => setSelectedDegree(e.target.value)}
                  className="w-full rounded-2xl dark:bg-slate-800 bg-slate-50 border dark:border-slate-700 border-slate-300 px-4 py-3.5 text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:border-purple-500 transition shadow-sm"
                >
                  {DEGREE_OPTIONS.map(d => (
                    <option key={d.value} value={d.value}>{d.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                  2. Select Skills You Currently Know (Tap to toggle):
                </label>
                <div className="flex flex-wrap gap-2">
                  {availableQuickSkills.map(s => {
                    const isSel = selectedSkills.includes(s);
                    return (
                      <button
                        key={s}
                        onClick={() => toggleSkill(s)}
                        className={`text-xs font-bold px-3.5 py-2 rounded-xl border transition-all ${
                          isSel
                            ? 'bg-purple-600 text-white border-purple-600 shadow-sm scale-105'
                            : 'dark:bg-slate-800 bg-slate-100 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:border-purple-400'
                        }`}
                      >
                        {isSel ? '✓ ' : '+ '}{s}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="p-4 rounded-2xl dark:bg-slate-800/80 bg-slate-100 border dark:border-slate-700 border-slate-200 text-xs text-slate-600 dark:text-slate-400 space-y-1.5">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold">
                  <Sparkles className="w-4 h-4 text-purple-500" />
                  <span>How Our Weighted Formula Works:</span>
                </div>
                <p>Degree (15%) + Current Skills (40%) + Market Demand (20%) + Readiness Gap (25%). Fully deterministic and explainable.</p>
              </div>
            </div>

            {/* Right Column: Live Match Cards */}
            <div className="lg:col-span-6 space-y-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Top Calculated Role Matches ({previewMatches.length} Found):
              </label>

              <div className="space-y-3">
                {previewMatches.map(m => (
                  <div
                    key={m.careerId}
                    onClick={() => navigate(`/careers/${m.careerId}`)}
                    className="p-4 sm:p-5 rounded-2xl dark:bg-slate-800/90 bg-slate-50 border dark:border-slate-700 border-slate-200 hover:border-purple-400 dark:hover:border-purple-500 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 shadow-sm group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
                            {m.careerTitle}
                          </h4>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded dark:bg-slate-700 bg-slate-200 text-slate-700 dark:text-slate-300">
                            {m.category}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                          {m.explanation.primaryReason}
                        </p>
                      </div>

                      <div className="text-right flex-shrink-0">
                        <span className="text-2xl font-black text-purple-600 dark:text-amber-400">
                          {m.matchPercentage}%
                        </span>
                        <p className="text-[10px] font-bold text-slate-500 uppercase">Match Score</p>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t dark:border-slate-700 border-slate-200 flex items-center justify-between text-xs">
                      <span className="text-slate-500 dark:text-slate-400 text-[11px]">Missing: <strong className="text-amber-600 dark:text-amber-400">{m.explanation.missingCrucialSkills.length} skills</strong></span>
                      <span className="text-purple-600 dark:text-purple-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Explore Full Roadmap <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. REAL HUMAN SUCCESS STORIES */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-300 text-xs font-bold border border-purple-200 dark:border-purple-500/30">
            <Users className="w-3.5 h-3.5 text-amber-500" />
            <span>Real Student Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
            Real Students. Real Career Transformations.
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            From B.Com, Mechanical, and Tier-3 BCA to top tech companies across India:
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {STUDENT_SUCCESS_STORIES.map((story) => (
            <div 
              key={story.id} 
              className="p-6 sm:p-7 rounded-3xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 shadow-md space-y-5 hover:border-purple-300 transition duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header: Avatar, Name, Placement Badge */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={story.avatar} 
                      alt={story.name} 
                      className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl object-cover border-2 border-purple-500/40 shadow-sm"
                    />
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">{story.name}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{story.backgroundDegree} • {story.location}</p>
                      <div className="flex items-center gap-1.5 mt-1 text-[11px] font-semibold text-purple-600 dark:text-purple-400">
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>Placed at <strong>{story.currentCompany}</strong></span>
                      </div>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-xl bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30 text-xs font-bold">
                    {story.hikePercentage}
                  </span>
                </div>

                {/* Quote (English + Regional) */}
                <div className="p-4 rounded-2xl dark:bg-slate-800/80 bg-slate-50 border dark:border-slate-700 border-slate-200 space-y-2 relative">
                  <Quote className="w-6 h-6 text-slate-300 dark:text-slate-700 absolute right-3 top-3 pointer-events-none" />
                  <p className="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed italic">
                    "{story.quote}"
                  </p>
                  {story.quoteTelugu && (
                    <p className="text-xs text-purple-700 dark:text-purple-300 leading-relaxed font-medium pt-1 border-t dark:border-slate-700 border-slate-200">
                      "{story.quoteTelugu}"
                    </p>
                  )}
                </div>
              </div>

              {/* Bottom Metadata */}
              <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t dark:border-slate-800 border-slate-200">
                <span className="flex items-center gap-1">
                  <Languages className="w-3.5 h-3.5" />
                  Learned in: <strong className="text-slate-800 dark:text-slate-200">{story.languageLearnedIn}</strong>
                </span>
                <span className="text-purple-600 dark:text-purple-400 font-semibold">{story.verifiedTime}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. PLATFORM PILLARS & FEATURES GRID */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
            Engineered For Consistent Progress
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
            Everything You Need To Transition Into Tech
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            From algorithmic baseline to interview readiness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 shadow-sm space-y-3 hover:border-purple-400 transition">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/15 text-purple-600 dark:text-purple-400 flex items-center justify-center">
              <Compass className="w-6 h-6 stroke-[2]" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Explainable Matching</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Transparent multi-factor scoring. Every match shows why you qualify, what to learn next, and realistic Indian salary bands.
            </p>
          </div>

          <div className="p-6 rounded-3xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 shadow-sm space-y-3 hover:border-purple-400 transition">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Languages className="w-6 h-6 stroke-[2]" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">5 Regional Languages</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              High-definition playlists in Telugu, Hindi, Tamil, Kannada, and English. Master complex Data Structures and Cloud in your mother tongue.
            </p>
          </div>

          <div className="p-6 rounded-3xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 shadow-sm space-y-3 hover:border-purple-400 transition">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/15 text-teal-600 dark:text-teal-400 flex items-center justify-center">
              <Map className="w-6 h-6 stroke-[2]" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Weekly Roadmaps</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Customized learning paths built around missing skills with milestone checkpoints, personal notes, and direct GitHub project tasks.
            </p>
          </div>

          <div className="p-6 rounded-3xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 shadow-sm space-y-3 hover:border-purple-400 transition">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Layers className="w-6 h-6 stroke-[2]" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Tiered Projects</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Build impressive beginner, intermediate, and advanced real-world software that interviewers appreciate, complete with rubrics.
            </p>
          </div>

          <div className="p-6 rounded-3xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 shadow-sm space-y-3 hover:border-purple-400 transition">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/15 text-purple-600 dark:text-purple-400 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 stroke-[2]" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Job Readiness Gauge</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Live composite readiness index computed across skills, roadmap progress, verified projects, certifications, and mock quizzes.
            </p>
          </div>

          <div className="p-6 rounded-3xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 shadow-sm space-y-3 hover:border-purple-400 transition">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/15 text-rose-600 dark:text-rose-400 flex items-center justify-center">
              <Award className="w-6 h-6 stroke-[2]" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Interview Center</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Real interview scenarios with answers, HR response patterns, and technical cheat-sheets for product & service companies.
            </p>
          </div>
        </div>
      </section>

      {/* 6. INSTANT ONE-CLICK DEMO PERSONAS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <div className="p-8 sm:p-10 rounded-3xl dark:bg-slate-900 bg-slate-50 border dark:border-slate-800 border-slate-200 shadow-md space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-400 text-xs font-bold mb-2">
              <Zap className="w-3.5 h-3.5" />
              <span>Instant 1-Click Sandbox Mode</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              Experience Pre-Configured Personas
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-xl mx-auto">
              Test how the dashboard adapts for a student, a non-tech career switcher, and a working professional:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button
              onClick={() => { switchDemoUser('student'); navigate('/dashboard'); }}
              className="p-5 rounded-2xl dark:bg-slate-800 bg-white hover:bg-slate-50 dark:hover:bg-slate-750 border dark:border-slate-700 border-slate-200 text-left transition transform hover:-translate-y-1 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=128"
                    alt="Aarav"
                    className="w-11 h-11 rounded-full object-cover border-2 border-purple-500/40 shadow-sm"
                  />
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Aarav</p>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/50">
                      College Student
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">B.Tech CS • Target: Data Analyst • Language: Telugu</p>
              </div>
              <span className="inline-block mt-4 text-xs font-bold text-purple-600 dark:text-purple-400">Launch Student Dashboard →</span>
            </button>

            <button
              onClick={() => { switchDemoUser('switcher'); navigate('/dashboard'); }}
              className="p-5 rounded-2xl dark:bg-slate-800 bg-white hover:bg-slate-50 dark:hover:bg-slate-750 border dark:border-slate-700 border-slate-200 text-left transition transform hover:-translate-y-1 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=128"
                    alt="Priya"
                    className="w-11 h-11 rounded-full object-cover border-2 border-teal-500/40 shadow-sm"
                  />
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Priya</p>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800/50">
                      Career Switcher
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">B.Com • Target: Data Analyst • Language: Hindi</p>
              </div>
              <span className="inline-block mt-4 text-xs font-bold text-teal-600 dark:text-teal-400">Launch Switcher Dashboard →</span>
            </button>

            <button
              onClick={() => { switchDemoUser('professional'); navigate('/dashboard'); }}
              className="p-5 rounded-2xl dark:bg-slate-800 bg-white hover:bg-slate-50 dark:hover:bg-slate-750 border dark:border-slate-700 border-slate-200 text-left transition transform hover:-translate-y-1 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=128"
                    alt="Karthik"
                    className="w-11 h-11 rounded-full object-cover border-2 border-amber-500/40 shadow-sm"
                  />
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Karthik</p>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/50">
                      Working Professional
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">B.Tech IT • Target: Full Stack • Language: English</p>
              </div>
              <span className="inline-block mt-4 text-xs font-bold text-amber-600 dark:text-amber-400">Launch Pro Dashboard →</span>
            </button>
          </div>
        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="p-8 sm:p-12 rounded-3xl dark:bg-gradient-to-tr dark:from-purple-950/80 dark:to-slate-900 bg-gradient-to-tr from-purple-50 to-white border dark:border-purple-800/40 border-purple-200 shadow-xl space-y-6">
          <div className="space-y-3">
            <h3 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
              Ready to Accelerate Your Career?
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
              Join over 45,000 students and professionals. Take the 9-step assessment and get your personalized roadmap in 2 minutes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link to="/auth/signup" className="w-full sm:w-auto">
              <Button size="lg" variant="primary" leftIcon={<UserPlus className="w-5 h-5" />} rightIcon={<ArrowRight className="w-5 h-5" />}>
                Start Free Assessment Now
              </Button>
            </Link>
            <Link to="/auth/login" className="w-full sm:w-auto">
              <Button size="lg" variant="secondary" leftIcon={<LogIn className="w-5 h-5" />}>
                Sign In With Existing Account
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
