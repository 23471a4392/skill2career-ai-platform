import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components/common/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12 text-center">
      <div className="max-w-md space-y-6">
        <div className="w-16 h-16 rounded-3xl bg-slate-900 border border-slate-800 text-emerald-400 flex items-center justify-center mx-auto shadow-2xl">
          <Compass className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-black text-slate-100">404</h1>
        <h2 className="text-xl font-bold text-slate-200">Career Pathway Not Found</h2>
        <p className="text-xs text-slate-400 leading-relaxed">
          The page or career dossier you requested does not exist or has been relocated.
        </p>
        <div className="flex items-center justify-center gap-3 pt-2">
          <Link to="/">
            <Button variant="primary" size="md" leftIcon={<Home className="w-4 h-4" />}>
              Back to Home
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button variant="secondary" size="md">
              User Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
