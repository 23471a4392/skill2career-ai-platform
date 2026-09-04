import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useProfile } from '../context/UserProfileContext';
import { CAREERS } from '../data/careers';
import { CircularProgress } from '../components/common/CircularProgress';
import { ProgressBar } from '../components/common/ProgressBar';
import { Button } from '../components/common/Button';
import { CareerCard } from '../components/career/CareerCard';
import { RoadmapEngineService } from '../services/roadmapEngine';
import { 
  Compass, 
  Map, 
  BookOpen, 
  Flame, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  PlayCircle, 
  Layers, 
  Award, 
  HelpCircle,
  Repeat,
  SplitSquareVertical
} from 'lucide-react';
import { LEARNING_RESOURCES } from '../data/resources';
import { RECOMMENDED_PROJECTS } from '../data/projects';

export const DashboardPage: React.FC = () => {
  const { profile, careerMatches, currentSkillGap, jobReadiness, setTargetCareer, toggleCompleteRoadmapTask } = useProfile();
  const navigate = useNavigate();

  const targetCareer = CAREERS.find(c => c.id === (profile.targetCareerId || 'data-analyst')) || CAREERS[0];
  const targetMatchScore = careerMatches.find(m => m.careerId === targetCareer.id);

  // Generate Roadmap for current user
  const roadmap = RoadmapEngineService.generatePersonalizedRoadmap(profile, targetCareer.id);
  const nextRoadmapItem = roadmap.items.find(i => i.status !== 'Completed') || roadmap.items[0];

  const topMatches = careerMatches.slice(0, 3);
  const completedProjectsCount = profile.completedProjectIds?.length || 0;
  const completedQuestionsCount = profile.completedInterviewQuestionIds?.length || 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 relative z-10">
      
      {/* Top Welcome Banner */}
      <div className="p-6 sm:p-8 rounded-3xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 shadow-md relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold px-3 py-1 rounded-full dark:bg-purple-500/15 bg-purple-50 dark:text-purple-300 text-purple-700 border dark:border-purple-500/30 border-purple-200">
                {profile.highestQualification} • {profile.experienceLevel}
              </span>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                🌐 Learning in {profile.preferredLanguage}
              </span>
              <div className="flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-rose-500/15 text-rose-700 dark:text-rose-300 border border-rose-500/30">
                <Flame className="w-3.5 h-3.5 fill-rose-500 text-rose-500" /> {profile.streakDays} Day Streak 🔥
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              Welcome back, {profile.fullName.split(' ')[0]}! 👋
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
              Target Career: <span className="text-slate-900 dark:text-white font-bold">{targetCareer.title}</span> ({targetMatchScore?.matchPercentage || 85}% compatibility). You are progressing steadily toward job readiness.
            </p>
          </div>

          {/* Primary CTA button: Continue Learning */}
          <div className="flex items-center gap-3 shrink-0">
            <Link to="/roadmap">
              <Button size="lg" variant="primary" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Continue Learning
              </Button>
            </Link>
            <Link to="/careers">
              <Button size="lg" variant="secondary">
                Change Target
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Grid: Job Readiness Gauge + Next Action + Skill Gap */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Job Readiness Score Breakdown */}
        <div className="p-6 rounded-3xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 shadow-md space-y-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">Capability Engine</span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Your Job Readiness</h3>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full dark:bg-purple-500/20 bg-purple-50 dark:text-purple-200 text-purple-700 border dark:border-purple-500/40 border-purple-200">
                {jobReadiness.readinessTier}
              </span>
            </div>

            {/* Circular Gauge */}
            <div className="flex justify-center py-2">
              <CircularProgress
                value={jobReadiness.overallPercentage}
                size={160}
                strokeWidth={14}
                label="READINESS"
                sublabel="Calculated"
                color="purple"
              />
            </div>

            {/* 4 Pillars Breakdown */}
            <div className="space-y-3 pt-4 border-t dark:border-slate-800 border-slate-200">
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-600 dark:text-slate-400">Skill Baseline (30%)</span>
                  <span className="text-slate-900 dark:text-white font-bold">{jobReadiness.skillsScore}%</span>
                </div>
                <ProgressBar value={jobReadiness.skillsScore} size="sm" color="purple" />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-600 dark:text-slate-400">Roadmap Completed (30%)</span>
                  <span className="text-slate-900 dark:text-white font-bold">{jobReadiness.roadmapScore}%</span>
                </div>
                <ProgressBar value={jobReadiness.roadmapScore} size="sm" color="purple" />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-600 dark:text-slate-400">Projects Built (25%)</span>
                  <span className="text-amber-600 dark:text-amber-400 font-bold">{jobReadiness.projectsScore}%</span>
                </div>
                <ProgressBar value={jobReadiness.projectsScore} size="sm" color="amber" />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-600 dark:text-slate-400">Interview Simulation (15%)</span>
                  <span className="text-amber-600 dark:text-amber-400 font-bold">{jobReadiness.interviewScore}%</span>
                </div>
                <ProgressBar value={jobReadiness.interviewScore} size="sm" color="gold" />
              </div>
            </div>
          </div>

          <div className="pt-2">
            <Link to="/roadmap" className="block">
              <button className="w-full py-2.5 rounded-xl dark:bg-slate-800 bg-slate-100 hover:bg-slate-200 dark:hover:bg-slate-750 border dark:border-slate-700 border-slate-300 text-xs font-bold text-purple-700 dark:text-amber-400 flex items-center justify-center gap-1.5 transition">
                <span>View Full Readiness Diagnostics</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </Link>
          </div>
        </div>

        {/* Right 2 Columns: Next Roadmap Action + Skill Gap Priorities */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Immediate Next Action Card */}
          {nextRoadmapItem && (
            <div className="p-6 rounded-3xl dark:bg-slate-900 bg-white border dark:border-purple-800/40 border-purple-200 shadow-md space-y-4 relative overflow-hidden">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full dark:bg-purple-500/20 bg-purple-100 dark:text-purple-200 text-purple-800 text-xs font-bold">
                      Week {nextRoadmapItem.weekNumber} Current Focus
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Estimated: {nextRoadmapItem.estimatedHours} hrs</span>
                  </div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white mt-2">{nextRoadmapItem.topicTitle}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">{nextRoadmapItem.description}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t dark:border-slate-800 border-slate-200">
                <div className="flex items-center gap-2">
                  <Link to={`/resources?topic=${encodeURIComponent(nextRoadmapItem.topicTitle)}`}>
                    <Button variant="secondary" size="sm" leftIcon={<PlayCircle className="w-4 h-4 text-purple-500" />}>
                      Watch Videos ({profile.preferredLanguage})
                    </Button>
                  </Link>
                  <Link to="/roadmap">
                    <Button variant="ghost" size="sm">
                      View Full Roadmap
                    </Button>
                  </Link>
                </div>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => toggleCompleteRoadmapTask(nextRoadmapItem.id)}
                  leftIcon={<CheckCircle2 className="w-4 h-4" />}
                >
                  Mark Week {nextRoadmapItem.weekNumber} Done
                </Button>
              </div>
            </div>
          )}

          {/* Quick Skill Gap Highlights */}
          <div className="p-6 rounded-3xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 shadow-md space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Top Missing Skills for {targetCareer.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Target these in your weekly learning schedule</p>
              </div>
              <Link to={`/careers/${targetCareer.id}`} className="text-xs font-bold text-purple-600 dark:text-amber-400 hover:underline transition">
                Detailed Skill Matrix →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentSkillGap.learnNextPriority.slice(0, 4).map((item, idx) => (
                <div key={item.skillName} className="p-3.5 rounded-xl dark:bg-slate-850 bg-slate-50 border dark:border-slate-750 border-slate-200 flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase">Priority #{idx + 1}</span>
                    <h5 className="text-xs font-bold text-slate-900 dark:text-white">{item.skillName}</h5>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">{item.reason}</p>
                  </div>
                  <Link
                    to={`/resources?skill=${encodeURIComponent(item.skillName)}`}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-purple-600 dark:hover:text-amber-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition shrink-0 ml-2"
                    aria-label="View resources"
                  >
                    <BookOpen className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Top Career Recommendations Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Recommended Career Trajectories</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Algorithmically ranked by your degree background, skills, and strengths</p>
          </div>
          <Link to="/careers">
            <Button variant="ghost" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Explore All 35+ Careers
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topMatches.map(match => {
            const career = CAREERS.find(c => c.id === match.careerId);
            if (!career) return null;
            return (
              <CareerCard
                key={career.id}
                career={career}
                matchScore={match}
                isTarget={career.id === targetCareer.id}
                onSetTarget={(id) => setTargetCareer(id)}
              />
            );
          })}
        </div>
      </div>

      {/* Quick Access Modules Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Link
          to="/career-switch"
          className="p-4 rounded-2xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 hover:border-purple-400 shadow-sm transition flex items-center gap-3 group"
        >
          <div className="p-3 rounded-xl bg-purple-500/15 text-purple-600 dark:text-purple-300 group-hover:scale-105 transition">
            <Repeat className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-900 dark:text-white">Career Switch</p>
            <p className="text-[10px] text-slate-500 dark:text-slate-400">Bridge transfer skills</p>
          </div>
        </Link>

        <Link
          to="/career-comparison"
          className="p-4 rounded-2xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 hover:border-amber-400 shadow-sm transition flex items-center gap-3 group"
        >
          <div className="p-3 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-300 group-hover:scale-105 transition">
            <SplitSquareVertical className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-900 dark:text-white">Compare Roles</p>
            <p className="text-[10px] text-slate-500 dark:text-slate-400">Side-by-side matrix</p>
          </div>
        </Link>

        <Link
          to="/projects"
          className="p-4 rounded-2xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 hover:border-purple-400 shadow-sm transition flex items-center gap-3 group"
        >
          <div className="p-3 rounded-xl bg-purple-500/15 text-purple-600 dark:text-purple-300 group-hover:scale-105 transition">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-900 dark:text-white">Projects ({completedProjectsCount})</p>
            <p className="text-[10px] text-slate-500 dark:text-slate-400">Portfolio rubrics</p>
          </div>
        </Link>

        <Link
          to="/interview-prep"
          className="p-4 rounded-2xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 hover:border-rose-400 shadow-sm transition flex items-center gap-3 group"
        >
          <div className="p-3 rounded-xl bg-rose-500/15 text-rose-600 dark:text-rose-400 group-hover:scale-105 transition">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-900 dark:text-white">Mock Interview ({completedQuestionsCount})</p>
            <p className="text-[10px] text-slate-500 dark:text-slate-400">Technical & HR prep</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
