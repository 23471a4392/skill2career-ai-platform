import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glow?: 'emerald' | 'cyan' | 'purple' | 'none';
  variant?: 'default' | 'glass' | 'flat';
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverEffect = false,
  glow = 'none',
  variant = 'glass',
  ...props
}) => {
  const glows = {
    none: '',
    emerald: 'hover:shadow-glow-emerald',
    cyan: 'hover:shadow-glow-cyan',
    purple: 'hover:shadow-glow-purple'
  };

  const variants = {
    glass: 'glass-card',
    default: 'bg-slate-900 border border-slate-800',
    flat: 'bg-slate-850 border border-slate-800/80'
  };

  return (
    <div
      className={cn(
        'rounded-2xl p-6 transition-all duration-200',
        variants[variant],
        hoverEffect && 'glass-card-hover cursor-pointer',
        glows[glow],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
