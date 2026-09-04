import React, { createContext, useContext, useState, useEffect } from 'react';
import { StorageService } from '../services/storageService';

interface AuthContextType {
  isAuthenticated: boolean;
  userEmail: string;
  userRole: 'student' | 'switcher' | 'professional' | 'admin' | 'guest';
  login: (email: string, role?: 'student' | 'switcher' | 'professional' | 'admin') => void;
  logout: () => void;
  switchDemoUser: (role: 'student' | 'switcher' | 'professional' | 'admin') => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const [userEmail, setUserEmail] = useState<string>('student.aarav@example.com');
  const [userRole, setUserRole] = useState<'student' | 'switcher' | 'professional' | 'admin' | 'guest'>('student');

  useEffect(() => {
    const session = StorageService.getAuthSession();
    if (session && session.isAuthenticated) {
      setIsAuthenticated(true);
      setUserEmail(session.email || 'student.aarav@example.com');
      setUserRole((session.role as any) || 'student');
    }
  }, []);

  const login = (email: string, role: 'student' | 'switcher' | 'professional' | 'admin' = 'student') => {
    setIsAuthenticated(true);
    setUserEmail(email);
    setUserRole(role);
    StorageService.saveAuthSession({ isAuthenticated: true, email, role });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserEmail('');
    setUserRole('guest');
    StorageService.saveAuthSession({ isAuthenticated: false });
  };

  const switchDemoUser = (role: 'student' | 'switcher' | 'professional' | 'admin') => {
    let email = 'student.aarav@example.com';
    if (role === 'switcher') email = 'priya.switcher@example.com';
    if (role === 'professional') email = 'karthik.dev@example.com';
    if (role === 'admin') email = 'admin@skill2career.com';

    login(email, role);
    if (role !== 'admin') {
      StorageService.resetToDemo(role);
      window.location.reload();
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userEmail, userRole, login, logout, switchDemoUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
