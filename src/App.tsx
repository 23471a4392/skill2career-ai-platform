import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { UserProfileProvider } from './context/UserProfileContext';
import { NotificationProvider } from './context/NotificationContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { BackgroundAtmosphere } from './components/common/BackgroundAtmosphere';

// Pages
import { LandingPage } from './pages/LandingPage';
import { OnboardingPage } from './pages/OnboardingPage';
import { DashboardPage } from './pages/DashboardPage';
import { CareerExplorerPage } from './pages/CareerExplorerPage';
import { CareerDetailPage } from './pages/CareerDetailPage';
import { CareerComparisonPage } from './pages/CareerComparisonPage';
import { CareerSwitchPage } from './pages/CareerSwitchPage';
import { RoadmapPage } from './pages/RoadmapPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { CertificationsPage } from './pages/CertificationsPage';
import { InterviewPrepPage } from './pages/InterviewPrepPage';
import { ProfilePage } from './pages/ProfilePage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { AuthLoginPage } from './pages/AuthLoginPage';
import { AuthSignUpPage } from './pages/AuthSignUpPage';
import { AuthForgotPasswordPage } from './pages/AuthForgotPasswordPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <UserProfileProvider>
          <NotificationProvider>
            <Router>
              <div className="relative flex flex-col min-h-screen dark:bg-[#090714] bg-[#f8f7fc] dark:text-slate-100 text-[#17112c] selection:bg-purple-500 selection:text-white overflow-x-hidden transition-colors duration-300">
                {/* High Clarity Ambient Background Graphics & Watermark */}
                <BackgroundAtmosphere />

                <Navbar />
                <main className="flex-grow relative z-10">
                  <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/onboarding" element={<OnboardingPage />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/careers" element={<CareerExplorerPage />} />
                    <Route path="/careers/:careerId" element={<CareerDetailPage />} />
                    <Route path="/career-comparison" element={<CareerComparisonPage />} />
                    <Route path="/career-switch" element={<CareerSwitchPage />} />
                    <Route path="/roadmap" element={<RoadmapPage />} />
                    <Route path="/resources" element={<ResourcesPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/certifications" element={<CertificationsPage />} />
                    <Route path="/interview-prep" element={<InterviewPrepPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/admin" element={<AdminDashboardPage />} />
                    <Route path="/auth/login" element={<AuthLoginPage />} />
                    <Route path="/auth/signup" element={<AuthSignUpPage />} />
                    <Route path="/auth/forgot-password" element={<AuthForgotPasswordPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            </Router>
          </NotificationProvider>
        </UserProfileProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};
