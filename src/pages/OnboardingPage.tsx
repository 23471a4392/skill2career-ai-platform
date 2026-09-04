import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserProfile } from '../types';
import { useProfile } from '../context/UserProfileContext';
import { OnboardingProgress } from '../components/onboarding/OnboardingProgress';
import { StepEducation } from '../components/onboarding/StepEducation';
import { StepSkills } from '../components/onboarding/StepSkills';
import { StepProficiency } from '../components/onboarding/StepProficiency';
import { StepInterests } from '../components/onboarding/StepInterests';
import { StepStrengths } from '../components/onboarding/StepStrengths';
import { StepCareerPreferences } from '../components/onboarding/StepCareerPreferences';
import { StepLanguage } from '../components/onboarding/StepLanguage';
import { StepCareerGoal } from '../components/onboarding/StepCareerGoal';
import { StepExperience } from '../components/onboarding/StepExperience';
import { Button } from '../components/common/Button';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

const STEPS = [
  { title: 'Education', subtitle: 'Academic degree & level' },
  { title: 'Skills', subtitle: 'Search & pick skills' },
  { title: 'Proficiency', subtitle: 'Rate your mastery' },
  { title: 'Interests', subtitle: 'Domains you enjoy' },
  { title: 'Strengths', subtitle: 'Natural capabilities' },
  { title: 'Preferences', subtitle: 'Work style & culture' },
  { title: 'Language', subtitle: 'Regional learning hub' },
  { title: 'Career Goal', subtitle: 'Primary objective' },
  { title: 'Experience', subtitle: 'Current level & launch' },
];

export const OnboardingPage: React.FC = () => {
  const { profile, updateProfile } = useProfile();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<UserProfile>>({
    highestQualification: profile.highestQualification || 'B.Tech',
    degreeName: profile.degreeName || 'Computer Science & Engineering',
    graduationYear: profile.graduationYear || 2026,
    skills: profile.skills || [],
    interests: profile.interests || ['Data Analytics & Insights', 'Artificial Intelligence & ML'],
    strengths: profile.strengths || ['Analytical & Logical Reasoning'],
    careerPreferences: profile.careerPreferences || ['Remote Work Friendly'],
    preferredLanguage: profile.preferredLanguage || 'Telugu',
    careerGoal: profile.careerGoal || 'Get a job',
    experienceLevel: profile.experienceLevel || 'Student',
  });

  const navigate = useNavigate();

  const handleUpdate = (updates: Partial<UserProfile>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const handleNext = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Finalize Onboarding
      updateProfile({
        ...formData,
        onboardingCompleted: true
      });
      navigate('/dashboard');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Progress header */}
      <OnboardingProgress
        currentStep={currentStep}
        totalSteps={STEPS.length}
        steps={STEPS}
        onStepClick={(step) => setCurrentStep(step)}
      />

      {/* Current Step Card */}
      <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-slate-700/80 shadow-2xl space-y-8">
        {currentStep === 1 && <StepEducation formData={formData} onChange={handleUpdate} />}
        {currentStep === 2 && <StepSkills formData={formData} onChange={handleUpdate} />}
        {currentStep === 3 && <StepProficiency formData={formData} onChange={handleUpdate} />}
        {currentStep === 4 && <StepInterests formData={formData} onChange={handleUpdate} />}
        {currentStep === 5 && <StepStrengths formData={formData} onChange={handleUpdate} />}
        {currentStep === 6 && <StepCareerPreferences formData={formData} onChange={handleUpdate} />}
        {currentStep === 7 && <StepLanguage formData={formData} onChange={handleUpdate} />}
        {currentStep === 8 && <StepCareerGoal formData={formData} onChange={handleUpdate} />}
        {currentStep === 9 && <StepExperience formData={formData} onChange={handleUpdate} />}

        {/* Step Navigation Controls */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-800">
          <Button
            variant="secondary"
            size="md"
            onClick={handleBack}
            disabled={currentStep === 1}
            leftIcon={<ArrowLeft className="w-4 h-4" />}
          >
            Back
          </Button>

          <Button
            variant="primary"
            size="md"
            onClick={handleNext}
            rightIcon={
              currentStep === STEPS.length ? (
                <Sparkles className="w-4 h-4" />
              ) : (
                <ArrowRight className="w-4 h-4" />
              )
            }
          >
            {currentStep === STEPS.length ? 'Generate My Career Path' : 'Continue'}
          </Button>
        </div>
      </div>
    </div>
  );
};
