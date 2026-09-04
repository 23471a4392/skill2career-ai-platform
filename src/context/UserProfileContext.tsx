import React, { createContext, useContext, useState, useEffect } from 'react';
import { CareerMatchScore, JobReadinessBreakdown, LearningLanguage, SkillGapAnalysis, UserProfile, UserSkill } from '../types';
import { StorageService } from '../services/storageService';
import { CareerEngineService } from '../services/careerEngine';
import { SkillGapEngineService } from '../services/skillGapEngine';
import { ReadinessEngineService } from '../services/readinessEngine';
import { NotificationService } from '../services/notificationService';

interface UserProfileContextType {
  profile: UserProfile;
  updateProfile: (partial: Partial<UserProfile>) => void;
  updateSkill: (skillName: string, proficiency: UserSkill['proficiency'], category?: string) => void;
  removeSkill: (skillName: string) => void;
  setTargetCareer: (careerId: string) => void;
  setPreferredLanguage: (lang: LearningLanguage) => void;
  toggleBookmarkCareer: (careerId: string) => void;
  toggleSaveResource: (resourceId: string) => void;
  toggleCompleteRoadmapTask: (taskId: string) => void;
  toggleCompleteProject: (projectId: string) => void;
  toggleCompleteCert: (certId: string) => void;
  toggleCompleteInterviewQuestion: (questionId: string) => void;
  careerMatches: CareerMatchScore[];
  currentSkillGap: SkillGapAnalysis;
  jobReadiness: JobReadinessBreakdown;
  exportProfile: () => void;
  resetProfileToDemo: (role: 'student' | 'switcher' | 'professional') => void;
}

const UserProfileContext = createContext<UserProfileContextType | undefined>(undefined);

export const UserProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<UserProfile>(() => StorageService.loadProfile());

  useEffect(() => {
    StorageService.saveProfile(profile);
  }, [profile]);

  // Derived state calculations
  const careerMatches = CareerEngineService.calculateAllMatches(profile);
  const currentSkillGap = SkillGapEngineService.analyzeSkillGap(profile, profile.targetCareerId || 'data-analyst');
  const jobReadiness = ReadinessEngineService.calculateJobReadiness(profile, profile.targetCareerId || 'data-analyst');

  const updateProfile = (partial: Partial<UserProfile>) => {
    setProfile(prev => {
      const updated = { ...prev, ...partial };
      return updated;
    });
  };

  const updateSkill = (skillName: string, proficiency: UserSkill['proficiency'], category: string = 'General') => {
    setProfile(prev => {
      const existingIdx = prev.skills.findIndex(s => s.name.toLowerCase() === skillName.toLowerCase());
      let updatedSkills: UserSkill[];
      if (existingIdx >= 0) {
        updatedSkills = [...prev.skills];
        updatedSkills[existingIdx] = { ...updatedSkills[existingIdx], proficiency };
      } else {
        updatedSkills = [...prev.skills, { name: skillName, category, proficiency }];
      }
      return { ...prev, skills: updatedSkills };
    });
  };

  const removeSkill = (skillName: string) => {
    setProfile(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s.name.toLowerCase() !== skillName.toLowerCase())
    }));
  };

  const setTargetCareer = (careerId: string) => {
    setProfile(prev => ({
      ...prev,
      targetCareerId: careerId
    }));
    NotificationService.addNotification({
      userId: profile.id,
      title: 'Target Career Updated 🎯',
      message: `Your learning navigator is now aligned with your new target career goals.`,
      type: 'career',
      actionUrl: `/careers/${careerId}`
    });
  };

  const setPreferredLanguage = (lang: LearningLanguage) => {
    setProfile(prev => ({
      ...prev,
      preferredLanguage: lang
    }));
    NotificationService.addNotification({
      userId: profile.id,
      title: 'Language Updated 🌐',
      message: `Course and YouTube video recommendations updated to ${lang}.`,
      type: 'system',
      actionUrl: '/resources'
    });
  };

  const toggleBookmarkCareer = (careerId: string) => {
    setProfile(prev => {
      const isBookmarked = prev.bookmarkedCareerIds.includes(careerId);
      const updated = isBookmarked
        ? prev.bookmarkedCareerIds.filter(id => id !== careerId)
        : [...prev.bookmarkedCareerIds, careerId];
      return { ...prev, bookmarkedCareerIds: updated };
    });
  };

  const toggleSaveResource = (resourceId: string) => {
    setProfile(prev => {
      const isSaved = prev.savedResourceIds.includes(resourceId);
      const updated = isSaved
        ? prev.savedResourceIds.filter(id => id !== resourceId)
        : [...prev.savedResourceIds, resourceId];
      return { ...prev, savedResourceIds: updated };
    });
  };

  const toggleCompleteRoadmapTask = (taskId: string) => {
    setProfile(prev => {
      const isCompleted = prev.completedRoadmapTaskIds?.includes(taskId);
      const updated = isCompleted
        ? prev.completedRoadmapTaskIds.filter(id => id !== taskId)
        : [...(prev.completedRoadmapTaskIds || []), taskId];
      
      return {
        ...prev,
        completedRoadmapTaskIds: updated,
        streakDays: prev.streakDays + (isCompleted ? 0 : 1)
      };
    });

    NotificationService.addNotification({
      userId: profile.id,
      title: 'Roadmap Milestone Completed',
      message: `Great job! Your job readiness score has increased. Keep up the momentum!`,
      type: 'milestone',
      actionUrl: '/roadmap'
    });
  };

  const toggleCompleteProject = (projectId: string) => {
    setProfile(prev => {
      const isCompleted = prev.completedProjectIds?.includes(projectId);
      const updated = isCompleted
        ? prev.completedProjectIds.filter(id => id !== projectId)
        : [...(prev.completedProjectIds || []), projectId];
      return { ...prev, completedProjectIds: updated };
    });
  };

  const toggleCompleteCert = (certId: string) => {
    setProfile(prev => {
      const isCompleted = prev.completedCertIds?.includes(certId);
      const updated = isCompleted
        ? prev.completedCertIds.filter(id => id !== certId)
        : [...(prev.completedCertIds || []), certId];
      return { ...prev, completedCertIds: updated };
    });
  };

  const toggleCompleteInterviewQuestion = (questionId: string) => {
    setProfile(prev => {
      const isCompleted = prev.completedInterviewQuestionIds?.includes(questionId);
      const updated = isCompleted
        ? prev.completedInterviewQuestionIds.filter(id => id !== questionId)
        : [...(prev.completedInterviewQuestionIds || []), questionId];
      return { ...prev, completedInterviewQuestionIds: updated };
    });
  };

  const exportProfile = () => {
    StorageService.exportProfileJSON(profile);
  };

  const resetProfileToDemo = (role: 'student' | 'switcher' | 'professional') => {
    const updated = StorageService.resetToDemo(role);
    setProfile(updated);
  };

  return (
    <UserProfileContext.Provider
      value={{
        profile,
        updateProfile,
        updateSkill,
        removeSkill,
        setTargetCareer,
        setPreferredLanguage,
        toggleBookmarkCareer,
        toggleSaveResource,
        toggleCompleteRoadmapTask,
        toggleCompleteProject,
        toggleCompleteCert,
        toggleCompleteInterviewQuestion,
        careerMatches,
        currentSkillGap,
        jobReadiness,
        exportProfile,
        resetProfileToDemo
      }}
    >
      {children}
    </UserProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(UserProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a UserProfileProvider');
  }
  return context;
};
