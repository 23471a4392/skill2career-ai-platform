import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, Mail, AlertCircle, LogIn, UserPlus, ShieldCheck } from 'lucide-react';
import { Button } from '../components/common/Button';
import { BrandLogo } from '../components/common/BrandLogo';
import { validateEmail } from '../utils/validation';

export const AuthLoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, switchDemoUser } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both your registered email and password.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email format.');
      return;
    }

    login(email, 'student');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-[82vh] flex items-center justify-center px-4 py-12 relative z-10">
      <div className="w-full max-w-md p-8 rounded-3xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 shadow-xl space-y-6">
        
        {/* Brand Header */}
        <div className="text-center space-y-3">
          <div className="flex justify-center">
            <BrandLogo size="lg" showTagline={false} />
          </div>
          <h2 className="text-xl font-bold dark:text-white text-slate-900">
            Sign In to Skill2Career
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Welcome back! Access your saved roadmaps and personalized learning path.
          </p>
        </div>

        {error && (
          <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-600 dark:text-rose-300 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Existing User Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">Registered Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(''); }}
                placeholder="you@example.com"
                className="w-full rounded-xl dark:bg-slate-800 bg-slate-50 border dark:border-slate-700 border-slate-300 pl-10 pr-4 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">Password</label>
              <Link to="/auth/forgot-password" className="text-[11px] text-purple-600 dark:text-amber-400 hover:underline transition font-medium">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
              <input
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(''); }}
                placeholder="••••••••"
                className="w-full rounded-xl dark:bg-slate-800 bg-slate-50 border dark:border-slate-700 border-slate-300 pl-10 pr-4 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition"
              />
            </div>
          </div>

          <Button type="submit" variant="primary" size="md" className="w-full font-bold" leftIcon={<LogIn className="w-4 h-4" />}>
            Sign In to Dashboard
          </Button>
        </form>

        {/* 1-Click Fast Persona Login */}
        <div className="pt-4 border-t dark:border-slate-800 border-slate-200 space-y-3">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-center">
            Or 1-Click Fast Login with Demo Account:
          </p>
          <div className="grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => { switchDemoUser('student'); navigate('/dashboard'); }}
              className="p-2.5 rounded-xl dark:bg-slate-800 bg-slate-50 hover:bg-slate-100 dark:hover:bg-slate-750 border dark:border-slate-700 border-slate-200 text-left text-xs text-slate-800 dark:text-slate-200 transition flex items-center gap-2"
            >
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=64"
                alt="Aarav"
                className="w-7 h-7 rounded-full object-cover border border-purple-500/40 shrink-0"
              />
              <div className="leading-tight">
                <p className="font-bold">Aarav (Student)</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">B.Tech CS • Telugu</p>
              </div>
            </button>

            <button
              type="button"
              onClick={() => { switchDemoUser('switcher'); navigate('/dashboard'); }}
              className="p-2.5 rounded-xl dark:bg-slate-800 bg-slate-50 hover:bg-slate-100 dark:hover:bg-slate-750 border dark:border-slate-700 border-slate-200 text-left text-xs text-slate-800 dark:text-slate-200 transition flex items-center gap-2"
            >
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=64"
                alt="Priya"
                className="w-7 h-7 rounded-full object-cover border border-teal-500/40 shrink-0"
              />
              <div className="leading-tight">
                <p className="font-bold">Priya (Switcher)</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">B.Com • Hindi</p>
              </div>
            </button>

            <button
              type="button"
              onClick={() => { switchDemoUser('professional'); navigate('/dashboard'); }}
              className="p-2.5 rounded-xl dark:bg-slate-800 bg-slate-50 hover:bg-slate-100 dark:hover:bg-slate-750 border dark:border-slate-700 border-slate-200 text-left text-xs text-slate-800 dark:text-slate-200 transition flex items-center gap-2"
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=64"
                alt="Karthik"
                className="w-7 h-7 rounded-full object-cover border border-amber-500/40 shrink-0"
              />
              <div className="leading-tight">
                <p className="font-bold">Karthik (Pro)</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">B.Tech IT • English</p>
              </div>
            </button>

            <button
              type="button"
              onClick={() => { switchDemoUser('admin'); navigate('/admin'); }}
              className="p-2.5 rounded-xl dark:bg-slate-800 bg-slate-50 hover:bg-slate-100 dark:hover:bg-slate-750 border dark:border-slate-700 border-slate-200 text-left text-xs text-amber-700 dark:text-amber-400 font-semibold transition flex items-center gap-2"
            >
              <div className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <p className="font-bold">Admin Console</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">Dean / Oversight</p>
              </div>
            </button>
          </div>
        </div>

        {/* Link to Sign Up */}
        <div className="pt-2 text-center text-xs text-slate-500 dark:text-slate-400">
          <span>New to Skill2Career? </span>
          <Link to="/auth/signup" className="text-purple-600 dark:text-amber-400 font-bold hover:underline">
            Create Free Account
          </Link>
        </div>
      </div>
    </div>
  );
};
