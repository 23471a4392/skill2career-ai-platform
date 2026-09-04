import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CAREERS } from '../data/careers';
import { useProfile } from '../context/UserProfileContext';
import { SkillGapEngineService } from '../services/skillGapEngine';
import { CareerEngineService } from '../services/careerEngine';
import { SkillGapVisualizer } from '../components/career/SkillGapVisualizer';
import { WhyThisCareer } from '../components/career/WhyThisCareer';
import { CareerProgressionTree } from '../components/career/CareerProgressionTree';
import { Button } from '../components/common/Button';
import { 
  Compass, 
  Map, 
  Bookmark, 
  Sparkles, 
  CheckCircle2, 
  IndianRupee, 
  Building2, 
  Award, 
  HelpCircle,
  FolderGit2,
  ArrowRight,
  ChevronLeft
} from 'lucide-react';
import { RECOMMENDED_PROJECTS } from '../data/projects';
import { CERTIFICATIONS } from '../data/certifications';
import { INTERVIEW_QUESTIONS } from '../data/interviewQuestions';

export const CareerDetailPage: React.FC = () => {
  const { careerId } = useParams<{ careerId: string }>();
  const { profile, setTargetCareer, toggleBookmarkCareer } = useProfile();
  const navigate = useNavigate();

  const career = CAREERS.find(c => c.id === careerId) || CAREERS[0];
  const isTarget = profile.targetCareerId === career.id;
  const isBookmarked = profile.bookmarkedCareerIds.includes(career.id);

  const matchScore = CareerEngineService.evaluateCareerMatch(profile, career);
  const skillGap = SkillGapEngineService.analyzeSkillGap(profile, career.id);

  // Filter projects, certs, and questions for this career
  const projects = RECOMMENDED_PROJECTS.filter(p => career.recommendedProjects.includes(p.id) || p.careerId === career.id);
  const certs = CERTIFICATIONS.filter(c => career.recommendedCertifications.includes(c.id) || c.careerIds.includes(career.id));
  const questions = INTERVIEW_QUESTIONS.filter(q => q.careerId === career.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Back Button */}
      <Link to="/careers" className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-slate-100 transition">
        <ChevronLeft className="w-4 h-4" /> Back to Career Explorer
      </Link>

      {/* Header Banner */}
      <div className="p-8 rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-800 text-slate-200 border border-slate-700">
                {career.category}
              </span>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                {career.marketDemand} Market Demand
              </span>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                {career.difficulty} Learning Curve
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-100">{career.title}</h1>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
              {career.fullOverview}
            </p>
          </div>

          {/* Quick Metrics & Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <div className="p-4 rounded-2xl bg-slate-850 border border-slate-700/80 text-center min-w-[140px]">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Career Match</span>
              <span className="text-3xl font-black text-emerald-400">{matchScore.matchPercentage}%</span>
              <span className="text-[10px] text-slate-500 block">Suitability</span>
            </div>

            <div className="flex flex-col gap-2 w-full sm:w-auto">
              {!isTarget ? (
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => setTargetCareer(career.id)}
                  leftIcon={<Sparkles className="w-4 h-4" />}
                >
                  Set as Active Target
                </Button>
              ) : (
                <Button
                  variant="outline"
                  size="md"
                  disabled
                  className="bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                >
                  Current Active Target ✓
                </Button>
              )}

              <Button
                variant={isBookmarked ? 'secondary' : 'outline'}
                size="md"
                onClick={() => toggleBookmarkCareer(career.id)}
                leftIcon={<Bookmark className="w-4 h-4 fill-current" />}
              >
                {isBookmarked ? 'Saved to Bookmarks' : 'Bookmark Career'}
              </Button>
            </div>
          </div>
        </div>

        {/* Salary & Hiring Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-xs">
          <div>
            <span className="text-slate-400 block mb-0.5">Average Salary (India):</span>
            <span className="font-extrabold text-slate-100 text-sm">{career.averageSalaryIndia}</span>
          </div>
          <div>
            <span className="text-slate-400 block mb-0.5">Average Salary (US / Global):</span>
            <span className="font-extrabold text-slate-100 text-sm">{career.averageSalaryUS}</span>
          </div>
          <div>
            <span className="text-slate-400 block mb-0.5">Top Hiring Companies:</span>
            <span className="font-semibold text-slate-300 line-clamp-1">{career.topHiringCompanies.join(', ')}</span>
          </div>
        </div>
      </div>

      {/* "Why This Career" Feature */}
      <WhyThisCareer career={career} matchScore={matchScore} />

      {/* Visual Skill Gap Analysis */}
      <SkillGapVisualizer analysis={skillGap} targetCareerTitle={career.title} />

      {/* Typical Responsibilities */}
      <div className="p-6 rounded-2xl glass-card border border-slate-800 space-y-3">
        <h4 className="text-base font-bold text-slate-100">Typical Day-to-Day Responsibilities</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {career.typicalResponsibilities.map((resp, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-xs text-slate-300 leading-relaxed">{resp}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Career Role Progression Tree */}
      <CareerProgressionTree progression={career.careerProgression} />

      {/* Recommended Projects for this Career */}
      {projects.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-extrabold text-slate-100">Recommended Portfolio Projects</h3>
              <p className="text-xs text-slate-400">Build these real-world projects to prove your hands-on competence</p>
            </div>
            <Link to="/projects" className="text-xs font-bold text-emerald-400 hover:text-emerald-300 transition">
              View All Projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map(p => (
              <div key={p.id} className="p-5 rounded-2xl glass-card border border-slate-800 space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">{p.difficulty}</span>
                    <span className="text-xs text-slate-400">~{p.estimatedHours}h</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-100 mb-1">{p.title}</h4>
                  <p className="text-xs text-slate-400 line-clamp-2">{p.description}</p>
                </div>
                <Link to="/projects">
                  <Button variant="secondary" size="sm" className="w-full text-xs">
                    View Project Guide
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Certifications & Interview Prep Callout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Certifications */}
        <div className="p-6 rounded-2xl glass-card border border-slate-800 space-y-4">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <h4 className="text-base font-bold text-slate-100">Recommended Certifications</h4>
          </div>
          <div className="space-y-2">
            {certs.slice(0, 2).map(c => (
              <div key={c.id} className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-200">{c.name}</p>
                  <p className="text-[10px] text-slate-400">{c.provider} • {c.difficulty}</p>
                </div>
                <a href={c.officialUrl} target="_blank" rel="noreferrer" className="text-xs font-bold text-amber-400 hover:text-amber-300">
                  Official Guide →
                </a>
              </div>
            ))}
          </div>
          <Link to="/certifications" className="block text-center">
            <Button variant="outline" size="sm" className="w-full text-xs">
              Explore All Certifications
            </Button>
          </Link>
        </div>

        {/* Interview Prep */}
        <div className="p-6 rounded-2xl glass-card border border-slate-800 space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-rose-400" />
            <h4 className="text-base font-bold text-slate-100">Interview Focus Topics</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {career.interviewFocusAreas.map(topic => (
              <span key={topic} className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
                {topic}
              </span>
            ))}
          </div>
          <Link to="/interview-prep" className="block text-center pt-2">
            <Button variant="primary" size="sm" className="w-full text-xs">
              Start Mock Interview Practice
            </Button>
          </Link>
        </div>
      </div>

      {/* Floating CTA to start roadmap */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-extrabold text-slate-100">Ready to start your personalized roadmap?</h3>
          <p className="text-xs text-slate-300">Tailored curriculum generated specifically for your {career.title} transition.</p>
        </div>
        <Link to="/roadmap">
          <Button variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Open Personalized Roadmap
          </Button>
        </Link>
      </div>
    </div>
  );
};
