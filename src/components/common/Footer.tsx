import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Share2, Heart, ShieldCheck, Code } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t dark:border-slate-800 border-slate-200 dark:bg-slate-950 bg-slate-50 text-slate-500 dark:text-slate-400 text-xs mt-20 relative z-10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-10">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <BrandLogo size="md" showTagline={false} />
            <p className="text-xs leading-relaxed max-w-sm text-slate-600 dark:text-slate-400">
              Personalized Career Path & Learning Recommendation Platform. Bridging education, skill gaps, regional language courses, and real-world job readiness.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 text-slate-500 hover:text-slate-900 dark:hover:text-white transition shadow-sm" aria-label="Open Code Portal">
                <Code className="w-4 h-4" />
              </a>
              <a href="https://skill2career.com" target="_blank" rel="noreferrer" className="p-2 rounded-xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 text-slate-500 hover:text-purple-600 transition shadow-sm" aria-label="Platform Hub">
                <Globe className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 text-slate-500 hover:text-amber-500 transition shadow-sm" aria-label="Community Network">
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div>
            <h5 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-3">Platform</h5>
            <ul className="space-y-2">
              <li><Link to="/dashboard" className="hover:text-purple-600 dark:hover:text-purple-400 transition">User Dashboard</Link></li>
              <li><Link to="/careers" className="hover:text-purple-600 dark:hover:text-purple-400 transition">Career Explorer</Link></li>
              <li><Link to="/career-comparison" className="hover:text-purple-600 dark:hover:text-purple-400 transition">Career Comparison</Link></li>
              <li><Link to="/career-switch" className="hover:text-purple-600 dark:hover:text-purple-400 transition">Career Switch Mode</Link></li>
              <li><Link to="/roadmap" className="hover:text-purple-600 dark:hover:text-purple-400 transition">Learning Roadmaps</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-3">Resources</h5>
            <ul className="space-y-2">
              <li><Link to="/resources" className="hover:text-purple-600 dark:hover:text-purple-400 transition">Regional Video Hub</Link></li>
              <li><Link to="/projects" className="hover:text-purple-600 dark:hover:text-purple-400 transition">Portfolio Projects</Link></li>
              <li><Link to="/certifications" className="hover:text-purple-600 dark:hover:text-purple-400 transition">Certification Guides</Link></li>
              <li><Link to="/interview-prep" className="hover:text-purple-600 dark:hover:text-purple-400 transition">Mock Interview Center</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-3">Account</h5>
            <ul className="space-y-2">
              <li><Link to="/auth/signup" className="text-purple-600 dark:text-purple-400 font-bold hover:underline">New User Sign Up</Link></li>
              <li><Link to="/auth/login" className="hover:text-slate-900 dark:hover:text-white transition">Existing User Log In</Link></li>
              <li><Link to="/onboarding" className="hover:text-slate-900 dark:hover:text-white transition">9-Step Assessment</Link></li>
              <li>
                <Link to="/admin" className="inline-flex items-center gap-1 text-amber-600 dark:text-amber-400 hover:underline font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Admin Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t dark:border-slate-800 border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} Skill2Career Platform. Hand-crafted for Indian Students & Switchers.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for lifelong learning across all academic backgrounds.
          </p>
        </div>
      </div>
    </footer>
  );
};
