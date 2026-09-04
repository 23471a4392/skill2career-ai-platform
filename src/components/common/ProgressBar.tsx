import React from 'react';
import { cn } from '../../utils/cn';

interface ProgressBarProps {
  value: number; // 0 - 100
  max?: number;
  color?: 'purple' | 'amber' | 'gold' | 'rose' | 'teal' | 'emerald';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  color = 'purple',
  size = 'md',
  showLabel = false,
  className
}) => {
  const percentage = Math.min(100, Math.max(0, Math.round((value / max) * 100)));

  const colors = {
    purple: 'bg-gradient-to-r from-purple-600 to-violet-400 shadow-sm shadow-purple-500/50',
    amber: 'bg-gradient-to-r from-amber-500 to-yellow-400 shadow-sm shadow-amber-500/50',
    gold: 'bg-gradient-to-r from-amber-400 to-yellow-300 shadow-sm shadow-amber-400/50',
    rose: 'bg-gradient-to-r from-rose-500 to-pink-400 shadow-sm shadow-rose-500/50',
    teal: 'bg-gradient-to-r from-violet-500 to-purple-400 shadow-sm shadow-purple-500/50',
    emerald: 'bg-gradient-to-r from-purple-600 to-violet-400 shadow-sm shadow-purple-500/50'
  };

  const sizes = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4'
  };

  return (
    <div className={cn('w-full', className)}>
      {showLabel && (
        <div className="flex justify-between items-center text-xs font-semibold text-purple-200 mb-1.5">
          <span>Progress</span>
          <span>{percentage}%</span>
        </div>
      )}
      <div className={cn('w-full bg-[#18122c] rounded-full overflow-hidden border border-purple-900/40', sizes[size])}>
        <div
          className={cn('h-full rounded-full transition-all duration-500 ease-out', colors[color] || colors.purple)}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
