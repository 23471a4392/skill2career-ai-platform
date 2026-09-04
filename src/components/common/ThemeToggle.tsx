import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showText?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  showText = false
}) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative inline-flex items-center gap-2 p-2 rounded-xl transition-all duration-300 border focus:outline-none ${
        isDark
          ? 'bg-[#18122c] border-purple-800/80 text-amber-300 hover:text-amber-200 hover:border-amber-400/50 shadow-md shadow-purple-950/40'
          : 'bg-white border-purple-200 text-purple-700 hover:text-purple-900 hover:border-purple-400 shadow-sm'
      } ${className}`}
      title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      aria-label="Toggle Theme"
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400 transform rotate-0 transition-transform duration-300 animate-in spin-in-180" />
        ) : (
          <Moon className="w-4 h-4 text-purple-700 transform rotate-0 transition-transform duration-300" />
        )}
      </div>
      {showText && (
        <span className="text-xs font-bold">
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </span>
      )}
    </button>
  );
};
