import { UserProfile } from '../types';
import { DEMO_PROFILES } from '../data/demoProfiles';

const PROFILE_STORAGE_KEY = 'skill2career_user_profile_v1';
const AUTH_STORAGE_KEY = 'skill2career_auth_session_v1';

export class StorageService {
  public static loadProfile(): UserProfile {
    try {
      const stored = localStorage.getItem(PROFILE_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Failed to load profile', e);
    }
    // Default to student demo profile initially
    return DEMO_PROFILES.student;
  }

  public static saveProfile(profile: UserProfile): void {
    try {
      localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
    } catch (e) {
      console.error('Failed to save profile', e);
    }
  }

  public static exportProfileJSON(profile: UserProfile): void {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(profile, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `skill2career-profile-${profile.fullName.toLowerCase().replace(/\s+/g, '-')}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  }

  public static resetToDemo(role: 'student' | 'switcher' | 'professional'): UserProfile {
    const profile = DEMO_PROFILES[role] || DEMO_PROFILES.student;
    this.saveProfile(profile);
    return profile;
  }

  public static getAuthSession(): { isAuthenticated: boolean; email?: string; role?: string } {
    try {
      const auth = localStorage.getItem(AUTH_STORAGE_KEY);
      if (auth) return JSON.parse(auth);
    } catch {
      // Ignore
    }
    return { isAuthenticated: true, email: 'student.aarav@example.com', role: 'student' };
  }

  public static saveAuthSession(session: { isAuthenticated: boolean; email?: string; role?: string }): void {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
  }

  public static clearAuthSession(): void {
    localStorage.removeItem(AUTH_STORAGE_KEY);
  }
}
