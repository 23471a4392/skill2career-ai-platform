import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useProfile } from '../context/UserProfileContext';
import { Mail, Lock, User, AlertCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/common/Button';
import { BrandLogo } from '../components/common/BrandLogo';
import { validateEmail, validatePassword } from '../utils/validation';

export const AuthSignUpPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const { updateProfile } = useProfile();
  const navigate = useNavigate();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !password) {
      setError('Please fill in your name, email, and password.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please provide a valid email format.');
      return;
    }
    const passVal = validatePassword(password);
    if (!passVal.isValid) {
      setError(passVal.message || 'Password must be at least 6 characters.');
      return;
    }

    login(email, 'student');
    updateProfile({ fullName, email });
    navigate('/onboarding');
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
            Create Free Account
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Start your personalized 9-Step Career Assessment and get matched with industry roadmaps.
          </p>
        </div>

        {error && (
          <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-600 dark:text-rose-300 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">Your Full Name</label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
              <input
                type="text"
                value={fullName}
                onChange={(e) => { setFullName(e.target.value); setError(''); }}
                placeholder="e.g. Sravani Reddy / Aarav Sharma"
                className="w-full rounded-xl dark:bg-slate-800 bg-slate-50 border dark:border-slate-700 border-slate-300 pl-10 pr-4 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
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
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">Create Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
              <input
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(''); }}
                placeholder="Minimum 6 characters"
                className="w-full rounded-xl dark:bg-slate-800 bg-slate-50 border dark:border-slate-700 border-slate-300 pl-10 pr-4 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition"
              />
            </div>
          </div>

          <Button type="submit" variant="primary" size="md" className="w-full font-bold" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Create Account & Start Assessment
          </Button>
        </form>

        {/* Existing User Link */}
        <div className="pt-4 border-t dark:border-slate-800 border-slate-200 text-center text-xs text-slate-500 dark:text-slate-400">
          <span>Already have an account? </span>
          <Link to="/auth/login" className="text-purple-600 dark:text-amber-400 font-bold hover:underline">
            Sign In Here
          </Link>
        </div>
      </div>
    </div>
  );
};
