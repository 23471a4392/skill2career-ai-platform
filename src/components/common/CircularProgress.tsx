import React from 'react';
import { cn } from '../../utils/cn';

interface CircularProgressProps {
  value: number; // 0 - 100
  size?: number;
  strokeWidth?: number;
  color?: 'purple' | 'amber' | 'gold' | 'rose' | 'emerald' | 'teal';
  label?: string;
  sublabel?: string;
  className?: string;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  value,
  size = 140,
  strokeWidth = 12,
  color = 'purple',
  label,
  sublabel,
  className
}) => {
  const percentage = Math.min(100, Math.max(0, Math.round(value)));
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const colorStyles = {
    purple: { stroke: '#a855f7', glow: 'rgba(168, 85, 247, 0.45)' },
    amber: { stroke: '#f59e0b', glow: 'rgba(245, 158, 11, 0.4)' },
    gold: { stroke: '#fbbf24', glow: 'rgba(251, 191, 36, 0.45)' },
    rose: { stroke: '#f43f5e', glow: 'rgba(244, 63, 94, 0.4)' },
    emerald: { stroke: '#a855f7', glow: 'rgba(168, 85, 247, 0.45)' },
    teal: { stroke: '#8b5cf6', glow: 'rgba(139, 92, 246, 0.45)' }
  };

  const selectedColor = colorStyles[color] || colorStyles.purple;

  return (
    <div className={cn('relative inline-flex flex-col items-center justify-center', className)}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Track background */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#261c3e"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Progress Arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={selectedColor.stroke}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="transparent"
          className="transition-all duration-1000 ease-out"
          style={{ filter: `drop-shadow(0 0 8px ${selectedColor.glow})` }}
        />
      </svg>
      {/* Center percentage and text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-2xl font-black text-slate-50 tracking-tight">
          {percentage}%
        </span>
        {label && <span className="text-[10px] font-semibold text-purple-300 uppercase tracking-wider">{label}</span>}
      </div>
      {sublabel && (
        <span className="mt-2 text-xs font-medium text-purple-300/80 text-center">
          {sublabel}
        </span>
      )}
    </div>
  );
};
