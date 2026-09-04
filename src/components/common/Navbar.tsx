import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Compass, 
  Map, 
  BookOpen, 
  FolderGit2, 
  Award, 
  HelpCircle, 
  LayoutDashboard, 
  Search, 
  UserCircle, 
  LogOut, 
  LogIn,
  UserPlus,
  Menu, 
  X,
  Languages,
  ShieldCheck,
  Zap,
  SplitSquareVertical,
  Repeat,
  ChevronDown
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useProfile } from '../../context/UserProfileContext';
import { NotificationDropdown } from './NotificationDropdown';
import { GlobalSearchModal } from './GlobalSearchModal';
import { LANGUAGE_OPTIONS } from '../../data/resources';
import { LearningLanguage } from '../../types';
import { Button } from './Button';
import { BrandLogo } from './BrandLogo';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [exploreMenuOpen, setExploreMenuOpen] = useState(false);
  const [practiceMenuOpen, setPracticeMenuOpen] = useState(false);

  const { isAuthenticated, logout, switchDemoUser } = useAuth();
  const { profile, setPreferredLanguage } = useProfile();
  const location = useLocation();
  const navigate = useNavigate();

  const exploreRef = useRef<HTMLDivElement>(null);
  const practiceRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (exploreRef.current && !exploreRef.current.contains(event.target as Node)) {
        setExploreMenuOpen(false);
      }
      if (practiceRef.current && !practiceRef.current.contains(event.target as Node)) {
        setPracticeMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPreferredLanguage(e.target.value as LearningLanguage);
  };

  const isCurrent = (path: string) => {
    if (path === '/dashboard' && location.pathname === '/dashboard') return true;
    if (path !== '/dashboard' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header className="sticky top-0 z-40 dark:bg-slate-950/90 bg-white/95 backdrop-blur-md border-b dark:border-slate-800/80 border-slate-200/80 shadow-sm transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            
            {/* Left: Clean Brand Logo */}
            <div className="flex items-center flex-shrink-0">
              <Link to="/" className="group focus:outline-none flex items-center">
                <BrandLogo size="md" showTagline={false} />
              </Link>
            </div>

            {/* Center: Streamlined & Beautifully Padded Navigation Links */}
            {isAuthenticated && (
              <nav className="hidden lg:flex items-center space-x-1.5 flex-1 justify-center max-w-2xl">
                {/* 1. Dashboard */}
                <Link
                  to="/dashboard"
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isCurrent('/dashboard')
                      ? 'dark:bg-purple-500/15 bg-purple-50 dark:text-purple-300 text-purple-700 font-bold border dark:border-purple-500/30 border-purple-200'
                      : 'dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-slate-900 dark:hover:bg-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <LayoutDashboard className="w-4 h-4 text-purple-500" />
                  <span>Dashboard</span>
                </Link>

                {/* 2. Explore Careers (Dropdown) */}
                <div className="relative" ref={exploreRef}>
                  <button
                    onClick={() => { setExploreMenuOpen(!exploreMenuOpen); setPracticeMenuOpen(false); }}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                      ['/careers', '/career-comparison', '/career-switch'].some(p => location.pathname.startsWith(p))
                        ? 'dark:bg-purple-500/15 bg-purple-50 dark:text-purple-300 text-purple-700 font-bold border dark:border-purple-500/30 border-purple-200'
                        : 'dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-slate-900 dark:hover:bg-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <Compass className="w-4 h-4 text-purple-500" />
                    <span>Careers</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${exploreMenuOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {exploreMenuOpen && (
                    <div className="absolute left-0 mt-2 w-56 rounded-2xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 shadow-xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                      <Link
                        to="/careers"
                        onClick={() => setExploreMenuOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold dark:text-slate-300 text-slate-700 dark:hover:bg-slate-800 hover:bg-slate-50 dark:hover:text-white hover:text-slate-900"
                      >
                        <Compass className="w-4 h-4 text-purple-500" />
                        <div>
                          <p className="font-bold">Career Explorer</p>
                          <p className="text-[10px] text-slate-400 font-normal">All 35+ industry paths</p>
                        </div>
                      </Link>
                      <Link
                        to="/career-comparison"
                        onClick={() => setExploreMenuOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold dark:text-slate-300 text-slate-700 dark:hover:bg-slate-800 hover:bg-slate-50 dark:hover:text-white hover:text-slate-900"
                      >
                        <SplitSquareVertical className="w-4 h-4 text-amber-500" />
                        <div>
                          <p className="font-bold">Compare Roles</p>
                          <p className="text-[10px] text-slate-400 font-normal">Side-by-side matrices</p>
                        </div>
                      </Link>
                      <Link
                        to="/career-switch"
                        onClick={() => setExploreMenuOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold dark:text-slate-300 text-slate-700 dark:hover:bg-slate-800 hover:bg-slate-50 dark:hover:text-white hover:text-slate-900"
                      >
                        <Repeat className="w-4 h-4 text-teal-500" />
                        <div>
                          <p className="font-bold">Career Switcher</p>
                          <p className="text-[10px] text-slate-400 font-normal">Non-tech transition mode</p>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>

                {/* 3. Learning Roadmap */}
                <Link
                  to="/roadmap"
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isCurrent('/roadmap')
                      ? 'dark:bg-purple-500/15 bg-purple-50 dark:text-purple-300 text-purple-700 font-bold border dark:border-purple-500/30 border-purple-200'
                      : 'dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-slate-900 dark:hover:bg-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Map className="w-4 h-4 text-amber-500" />
                  <span>Roadmap</span>
                </Link>

                {/* 4. Resources Hub */}
                <Link
                  to="/resources"
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isCurrent('/resources')
                      ? 'dark:bg-purple-500/15 bg-purple-50 dark:text-purple-300 text-purple-700 font-bold border dark:border-purple-500/30 border-purple-200'
                      : 'dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-slate-900 dark:hover:bg-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <BookOpen className="w-4 h-4 text-teal-500" />
                  <span>Resources</span>
                </Link>

                {/* 5. Projects & Practice (Dropdown) */}
                <div className="relative" ref={practiceRef}>
                  <button
                    onClick={() => { setPracticeMenuOpen(!practiceMenuOpen); setExploreMenuOpen(false); }}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                      ['/projects', '/certifications', '/interview-prep'].some(p => location.pathname.startsWith(p))
                        ? 'dark:bg-purple-500/15 bg-purple-50 dark:text-purple-300 text-purple-700 font-bold border dark:border-purple-500/30 border-purple-200'
                        : 'dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-slate-900 dark:hover:bg-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <FolderGit2 className="w-4 h-4 text-purple-500" />
                    <span>Practice</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${practiceMenuOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {practiceMenuOpen && (
                    <div className="absolute right-0 mt-2 w-56 rounded-2xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 shadow-xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                      <Link
                        to="/projects"
                        onClick={() => setPracticeMenuOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold dark:text-slate-300 text-slate-700 dark:hover:bg-slate-800 hover:bg-slate-50 dark:hover:text-white hover:text-slate-900"
                      >
                        <FolderGit2 className="w-4 h-4 text-purple-500" />
                        <div>
                          <p className="font-bold">Portfolio Projects</p>
                          <p className="text-[10px] text-slate-400 font-normal">Tiered real-world repos</p>
                        </div>
                      </Link>
                      <Link
                        to="/certifications"
                        onClick={() => setPracticeMenuOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold dark:text-slate-300 text-slate-700 dark:hover:bg-slate-800 hover:bg-slate-50 dark:hover:text-white hover:text-slate-900"
                      >
                        <Award className="w-4 h-4 text-amber-500" />
                        <div>
                          <p className="font-bold">Certifications</p>
                          <p className="text-[10px] text-slate-400 font-normal">AWS, Azure & Google</p>
                        </div>
                      </Link>
                      <Link
                        to="/interview-prep"
                        onClick={() => setPracticeMenuOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold dark:text-slate-300 text-slate-700 dark:hover:bg-slate-800 hover:bg-slate-50 dark:hover:text-white hover:text-slate-900"
                      >
                        <HelpCircle className="w-4 h-4 text-rose-500" />
                        <div>
                          <p className="font-bold">Mock Interview</p>
                          <p className="text-[10px] text-slate-400 font-normal">Tech & HR scenarios</p>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
              </nav>
            )}

            {/* Right: Controls & Actions (Theme Toggle, Search, Language, Profile) */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              
              {/* Theme Toggle Button (Light / Dark) */}
              <ThemeToggle />

              {/* Quick Search */}
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 sm:px-3 sm:py-2 rounded-xl text-xs font-semibold dark:text-slate-400 text-slate-600 dark:hover:text-white hover:text-slate-900 dark:hover:bg-slate-800 hover:bg-slate-100 border dark:border-slate-800 border-slate-200 transition flex items-center gap-1.5"
                title="Search Careers & Skills (Ctrl + K)"
              >
                <Search className="w-4 h-4" />
                <span className="hidden md:inline">Search</span>
                <kbd className="hidden md:inline px-1.5 py-0.5 text-[10px] dark:bg-slate-900 bg-slate-100 border dark:border-slate-700 border-slate-300 rounded font-mono">⌘K</kbd>
              </button>

              {/* Language Selector */}
              <div className="relative hidden sm:flex items-center">
                <Languages className="w-3.5 h-3.5 absolute left-2.5 text-slate-400 pointer-events-none" />
                <select
                  value={profile?.preferredLanguage || 'English'}
                  onChange={handleLanguageChange}
                  className="pl-8 pr-3 py-1.5 rounded-xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 text-xs font-bold dark:text-slate-200 text-slate-800 focus:outline-none focus:border-purple-500 cursor-pointer transition shadow-sm"
                >
                  {LANGUAGE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.flag} {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Logged In User Avatar & Dropdown */}
              {isAuthenticated ? (
                <>
                  <NotificationDropdown />

                  <div className="relative">
                    <button
                      onClick={() => setUserMenuOpen(!userMenuOpen)}
                      className="flex items-center gap-2 p-1.5 rounded-xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 hover:border-slate-300 dark:hover:border-slate-700 transition shadow-sm"
                    >
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-purple-600 to-amber-500 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                        {profile?.fullName?.charAt(0) || 'U'}
                      </div>
                      <div className="hidden sm:block text-left text-xs leading-tight pr-1">
                        <p className="font-bold dark:text-slate-100 text-slate-900 truncate max-w-[90px]">{profile?.fullName || 'User'}</p>
                        <p className="text-[10px] text-purple-500 font-medium capitalize">{profile?.experienceLevel || 'Learner'}</p>
                      </div>
                    </button>

                    {userMenuOpen && (
                      <div 
                        className="absolute right-0 mt-2 w-56 rounded-2xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 shadow-2xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        <div className="px-4 py-2 border-b dark:border-slate-800 border-slate-100">
                          <p className="text-xs font-bold dark:text-slate-100 text-slate-900">{profile?.fullName}</p>
                          <p className="text-[11px] text-slate-400 truncate">{profile?.email || 'user@skill2career.ai'}</p>
                          <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-semibold dark:bg-purple-500/15 bg-purple-50 dark:text-purple-300 text-purple-700 border dark:border-purple-500/30 border-purple-200">
                            {profile?.highestQualification} • {profile?.experienceLevel}
                          </span>
                        </div>

                        <Link to="/profile" className="flex items-center gap-2 px-4 py-2 text-xs dark:text-slate-300 text-slate-700 dark:hover:bg-slate-800 hover:bg-slate-50">
                          <UserCircle className="w-4 h-4 text-purple-500" />
                          My Career Profile
                        </Link>
                        <Link to="/roadmap" className="flex items-center gap-2 px-4 py-2 text-xs dark:text-slate-300 text-slate-700 dark:hover:bg-slate-800 hover:bg-slate-50">
                          <Map className="w-4 h-4 text-amber-500" />
                          Active Roadmap
                        </Link>
                        <Link to="/admin" className="flex items-center gap-2 px-4 py-2 text-xs text-amber-600 dark:text-amber-400 dark:hover:bg-slate-800 hover:bg-slate-50 font-bold">
                          <ShieldCheck className="w-4 h-4" />
                          Admin Analytics
                        </Link>

                        {/* Quick Switch Persona */}
                        <div className="border-t dark:border-slate-800 border-slate-100 my-1 pt-1.5 px-2">
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1">Quick Switch Persona</p>
                          <div className="space-y-1">
                            <button
                              onClick={() => switchDemoUser('student')}
                              className="w-full text-left px-2 py-1.5 dark:text-slate-200 text-slate-700 dark:hover:bg-slate-800 hover:bg-slate-100 rounded-xl flex items-center justify-between transition group"
                            >
                              <div className="flex items-center gap-2">
                                <img
                                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=64"
                                  alt="Aarav"
                                  className="w-5 h-5 rounded-full object-cover border border-purple-500/30"
                                />
                                <div className="leading-tight">
                                  <p className="text-xs font-semibold">Aarav</p>
                                  <p className="text-[10px] text-slate-400">Student • B.Tech</p>
                                </div>
                              </div>
                              <span className="text-[10px] text-purple-600 dark:text-purple-400 font-bold opacity-0 group-hover:opacity-100 transition">Switch</span>
                            </button>

                            <button
                              onClick={() => switchDemoUser('switcher')}
                              className="w-full text-left px-2 py-1.5 dark:text-slate-200 text-slate-700 dark:hover:bg-slate-800 hover:bg-slate-100 rounded-xl flex items-center justify-between transition group"
                            >
                              <div className="flex items-center gap-2">
                                <img
                                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=64"
                                  alt="Priya"
                                  className="w-5 h-5 rounded-full object-cover border border-teal-500/30"
                                />
                                <div className="leading-tight">
                                  <p className="text-xs font-semibold">Priya</p>
                                  <p className="text-[10px] text-slate-400">Career Switcher • B.Com</p>
                                </div>
                              </div>
                              <span className="text-[10px] text-teal-600 dark:text-teal-400 font-bold opacity-0 group-hover:opacity-100 transition">Switch</span>
                            </button>

                            <button
                              onClick={() => switchDemoUser('professional')}
                              className="w-full text-left px-2 py-1.5 dark:text-slate-200 text-slate-700 dark:hover:bg-slate-800 hover:bg-slate-100 rounded-xl flex items-center justify-between transition group"
                            >
                              <div className="flex items-center gap-2">
                                <img
                                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=64"
                                  alt="Karthik"
                                  className="w-5 h-5 rounded-full object-cover border border-amber-500/30"
                                />
                                <div className="leading-tight">
                                  <p className="text-xs font-semibold">Karthik</p>
                                  <p className="text-[10px] text-slate-400">Professional • Dev</p>
                                </div>
                              </div>
                              <span className="text-[10px] text-amber-600 dark:text-amber-400 font-bold opacity-0 group-hover:opacity-100 transition">Switch</span>
                            </button>

                            <button
                              onClick={() => switchDemoUser('admin')}
                              className="w-full text-left px-2 py-1.5 dark:text-amber-300 text-amber-800 dark:hover:bg-slate-800 hover:bg-amber-50/60 rounded-xl flex items-center justify-between transition group"
                            >
                              <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-600 flex items-center justify-center text-[10px] font-bold">
                                  <ShieldCheck className="w-3.5 h-3.5" />
                                </div>
                                <div className="leading-tight">
                                  <p className="text-xs font-bold">Admin Console</p>
                                  <p className="text-[10px] text-amber-600/70">Dean / Analytics</p>
                                </div>
                              </div>
                              <span className="text-[10px] text-amber-600 font-bold opacity-0 group-hover:opacity-100 transition">Open</span>
                            </button>
                          </div>
                        </div>

                        <div className="border-t dark:border-slate-800 border-slate-100 mt-1 pt-1">
                          <button
                            onClick={() => { logout(); navigate('/auth/login'); }}
                            className="w-full flex items-center gap-2 px-4 py-2 text-xs text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/20 transition"
                          >
                            <LogOut className="w-4 h-4" />
                            Sign Out
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                /* Unauthenticated View: High Clarity Dual Action */
                <div className="flex items-center gap-2">
                  <Link to="/auth/login">
                    <button className="px-3.5 py-1.5 rounded-xl text-xs font-bold dark:text-slate-200 text-slate-700 dark:hover:bg-slate-800 hover:bg-slate-100 border dark:border-slate-700 border-slate-300 transition">
                      Log In
                    </button>
                  </Link>

                  <Link to="/auth/signup">
                    <button className="px-4 py-1.5 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-500 text-white shadow-sm transition transform active:scale-95">
                      Sign Up Free
                    </button>
                  </Link>
                </div>
              )}

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white dark:hover:bg-slate-800 hover:bg-slate-100"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden dark:bg-slate-900 bg-white border-b dark:border-slate-800 border-slate-200 px-4 pt-3 pb-6 space-y-3">
            {isAuthenticated ? (
              <div className="grid grid-cols-2 gap-2 pt-1">
                <Link
                  to="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 p-2.5 rounded-xl text-xs font-bold dark:bg-slate-800 bg-slate-100 dark:text-slate-100 text-slate-800"
                >
                  <LayoutDashboard className="w-4 h-4 text-purple-500" />
                  Dashboard
                </Link>
                <Link
                  to="/careers"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 p-2.5 rounded-xl text-xs font-bold dark:bg-slate-800 bg-slate-100 dark:text-slate-100 text-slate-800"
                >
                  <Compass className="w-4 h-4 text-purple-500" />
                  Careers
                </Link>
                <Link
                  to="/roadmap"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 p-2.5 rounded-xl text-xs font-bold dark:bg-slate-800 bg-slate-100 dark:text-slate-100 text-slate-800"
                >
                  <Map className="w-4 h-4 text-amber-500" />
                  Roadmap
                </Link>
                <Link
                  to="/resources"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 p-2.5 rounded-xl text-xs font-bold dark:bg-slate-800 bg-slate-100 dark:text-slate-100 text-slate-800"
                >
                  <BookOpen className="w-4 h-4 text-teal-500" />
                  Resources
                </Link>
                <Link
                  to="/projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 p-2.5 rounded-xl text-xs font-bold dark:bg-slate-800 bg-slate-100 dark:text-slate-100 text-slate-800"
                >
                  <FolderGit2 className="w-4 h-4 text-purple-500" />
                  Projects
                </Link>
                <Link
                  to="/interview-prep"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 p-2.5 rounded-xl text-xs font-bold dark:bg-slate-800 bg-slate-100 dark:text-slate-100 text-slate-800"
                >
                  <HelpCircle className="w-4 h-4 text-rose-500" />
                  Mock Interview
                </Link>
              </div>
            ) : (
              <div className="space-y-2 pt-2">
                <Link to="/auth/signup" onClick={() => setMobileMenuOpen(false)} className="block">
                  <Button variant="primary" className="w-full" leftIcon={<UserPlus className="w-4 h-4" />}>
                    Sign Up Free (Start Assessment)
                  </Button>
                </Link>
                <Link to="/auth/login" onClick={() => setMobileMenuOpen(false)} className="block">
                  <Button variant="secondary" className="w-full" leftIcon={<LogIn className="w-4 h-4" />}>
                    Log In to Existing Account
                  </Button>
                </Link>
              </div>
            )}
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <GlobalSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};
