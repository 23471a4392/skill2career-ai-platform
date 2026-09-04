import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
  isWatermark?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showTagline = true,
  className = '',
  isWatermark = false
}) => {
  if (isWatermark) {
    return (
      <div className={`pointer-events-none select-none opacity-[0.045] fixed inset-0 flex items-center justify-center overflow-hidden z-0 ${className}`}>
        <svg
          viewBox="0 0 800 800"
          className="w-[1000px] h-[1000px] text-purple-400 dark:text-purple-400 text-purple-600 animate-pulse"
          style={{ animationDuration: '9s' }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Background Geometric Circuit & Compass */}
          <circle cx="400" cy="400" r="360" stroke="currentColor" strokeWidth="2" strokeDasharray="12 12" />
          <circle cx="400" cy="400" r="280" stroke="currentColor" strokeWidth="3" />
          <circle cx="400" cy="400" r="180" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
          
          {/* Dynamic Vector Compass Arrows */}
          <path d="M400 60 L440 360 L740 400 L440 440 L400 740 L360 440 L60 400 L360 360 Z" fill="currentColor" opacity="0.4" />
          <polygon points="400,120 425,375 680,400 425,425 400,680 375,425 120,400 375,375" fill="currentColor" opacity="0.6" />
          
          {/* Center Orb */}
          <circle cx="400" cy="400" r="60" fill="currentColor" />
          <circle cx="400" cy="400" r="40" className="dark:fill-[#090714] fill-white" />
          <circle cx="400" cy="400" r="20" fill="currentColor" />
        </svg>
      </div>
    );
  }

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl',
    xl: 'text-2xl sm:text-3xl',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* High-Clarity Custom SVG Logo Mark with Royal Amethyst & Gold */}
      <div className={`relative ${iconSizes[size]} flex-shrink-0 group`}>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-600 via-violet-500 to-amber-500 p-[2px] shadow-lg shadow-purple-500/20 transition-transform duration-300 group-hover:scale-105">
          <div className="w-full h-full rounded-[14px] bg-white dark:bg-[#090714] flex items-center justify-center p-1.5 transition-colors">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="logoRoyalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="50%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
                <filter id="royalGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              
              {/* Outer Guidance Orbit */}
              <circle cx="50" cy="50" r="42" stroke="url(#logoRoyalGrad)" strokeWidth="4" strokeLinecap="round" strokeDasharray="180 30" />
              
              {/* Intelligent Compass Star */}
              <path
                d="M50 14 L59 41 L86 50 L59 59 L50 86 L41 59 L14 50 L41 41 Z"
                fill="url(#logoRoyalGrad)"
                filter="url(#royalGlow)"
              />
              
              {/* Core Precision Pivot */}
              <circle cx="50" cy="50" r="7" className="fill-white dark:fill-[#090714] stroke-purple-600" strokeWidth="2.5" />
              <circle cx="50" cy="50" r="3" fill="#d97706" />
            </svg>
          </div>
        </div>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <div className={`font-black tracking-tight text-slate-900 dark:text-slate-50 flex items-center gap-1 leading-tight ${textSizes[size]}`}>
          <span>Skill</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-amber-500">2</span>
          <span>Career</span>
        </div>
        {showTagline && (
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-[9px] uppercase tracking-wider text-slate-500 dark:text-purple-300/80 font-bold">
              AI Career Platform
            </span>
            <span className="inline-block w-1 h-1 rounded-full bg-amber-500" />
            <span className="text-[9px] font-bold text-amber-600 dark:text-amber-400">
              Verified
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
