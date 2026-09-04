import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Mail, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Button } from '../components/common/Button';
import { validateEmail } from '../utils/validation';

export const AuthForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md p-8 rounded-3xl glass-panel border border-slate-700/80 shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
            <Compass className="w-6 h-6 text-slate-950 stroke-[2.5]" />
          </div>
          <h2 className="text-2xl font-black text-slate-100">Reset Password</h2>
          <p className="text-xs text-slate-400">Enter your email and we will send you a recovery link</p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
            <h4 className="text-sm font-bold text-emerald-300">Password Reset Email Sent</h4>
            <p className="text-xs text-slate-300">
              We've dispatched password reset instructions to <span className="text-slate-100 font-semibold">{email}</span>.
            </p>
            <Link to="/auth/login" className="inline-block pt-2">
              <Button variant="primary" size="sm">
                Back to Sign In
              </Button>
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <p className="text-xs text-rose-400">{error}</p>}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(''); }}
                  placeholder="you@example.com"
                  className="w-full rounded-xl bg-slate-900 border border-slate-700 pl-10 pr-4 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <Button type="submit" variant="primary" size="md" className="w-full font-bold">
              Send Recovery Link
            </Button>
          </form>
        )}

        <div className="text-center pt-2 border-t border-slate-800">
          <Link to="/auth/login" className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200 transition">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};
