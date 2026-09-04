import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'emerald' | 'cyan' | 'purple' | 'amber' | 'rose' | 'slate' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'slate',
  size = 'md',
  className
}) => {
  const base = 'inline-flex items-center font-medium rounded-full shrink-0';

  const variants = {
    emerald: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30',
    cyan: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30',
    purple: 'bg-purple-500/10 text-purple-400 border border-purple-500/30',
    amber: 'bg-amber-500/10 text-amber-400 border border-amber-500/30',
    rose: 'bg-rose-500/10 text-rose-400 border border-rose-500/30',
    slate: 'bg-slate-800 text-slate-300 border border-slate-700/60',
    outline: 'bg-transparent text-slate-400 border border-slate-700'
  };

  const sizes = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-xs px-2.5 py-1'
  };

  return (
    <span className={cn(base, variants[variant], sizes[size], className)}>
      {children}
    </span>
  );
};
