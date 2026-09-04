import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '../../utils/cn';

interface OnboardingProgressProps {
  currentStep: number;
  totalSteps: number;
  steps: { title: string; subtitle?: string }[];
  onStepClick?: (step: number) => void;
}

export const OnboardingProgress: React.FC<OnboardingProgressProps> = ({
  currentStep,
  totalSteps,
  steps,
  onStepClick
}) => {
  const percentage = Math.round(((currentStep - 1) / (totalSteps - 1)) * 100);

  return (
    <div className="w-full mb-8">
      {/* Top progress summary */}
      <div className="flex items-center justify-between text-xs mb-2">
        <span className="font-bold text-slate-300">
          Step {currentStep} of {totalSteps}: <span className="text-emerald-400">{steps[currentStep - 1]?.title}</span>
        </span>
        <span className="font-semibold text-slate-400">{percentage}% Completed</span>
      </div>

      {/* Progress track */}
      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden mb-6 border border-slate-700/50">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Step Pills on larger screens */}
      <div className="hidden lg:grid grid-cols-9 gap-1.5">
        {steps.map((step, idx) => {
          const stepNumber = idx + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            <button
              key={step.title}
              disabled={stepNumber > currentStep}
              onClick={() => onStepClick && onStepClick(stepNumber)}
              className={cn(
                'flex flex-col items-center p-2 rounded-xl text-center transition duration-150',
                isCurrent && 'bg-emerald-500/15 border border-emerald-500/40 text-emerald-400',
                isCompleted && 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 cursor-pointer',
                !isCurrent && !isCompleted && 'opacity-40 text-slate-500 cursor-not-allowed'
              )}
            >
              <div className="flex items-center justify-center w-5 h-5 rounded-full mb-1 text-[10px] font-bold">
                {isCompleted ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <span>{stepNumber}</span>
                )}
              </div>
              <span className="text-[10px] font-semibold truncate w-full">{step.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
