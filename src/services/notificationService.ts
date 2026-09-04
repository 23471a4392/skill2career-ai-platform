import { AppNotification } from '../types';

const NOTIFICATIONS_STORAGE_KEY = 'skill2career_notifications_v1';

export const INITIAL_NOTIFICATIONS: AppNotification[] = [
  {
    id: 'notif-1',
    userId: 'any',
    title: 'Welcome to Skill2Career!',
    message: 'Your personalized career roadmap and skill gap analysis are ready. Explore your tailored path.',
    type: 'system',
    timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    isRead: false,
    actionUrl: '/dashboard'
  },
  {
    id: 'notif-2',
    userId: 'any',
    title: 'Language Learning Resources Active',
    message: 'High-definition video courses in your preferred regional language are now available in your Resource Hub.',
    type: 'course',
    timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
    isRead: false,
    actionUrl: '/resources'
  },
  {
    id: 'notif-3',
    userId: 'any',
    title: 'Streak Alert 🔥',
    message: 'Keep up your daily learning momentum! Complete one roadmap milestone today.',
    type: 'streak',
    timestamp: new Date(Date.now() - 1000 * 60 * 360).toISOString(),
    isRead: true,
    actionUrl: '/roadmap'
  }
];

export class NotificationService {
  public static getNotifications(): AppNotification[] {
    try {
      const data = localStorage.getItem(NOTIFICATIONS_STORAGE_KEY);
      if (data) {
        return JSON.parse(data);
      }
    } catch {
      // Fallback
    }
    return INITIAL_NOTIFICATIONS;
  }

  public static saveNotifications(notifications: AppNotification[]) {
    try {
      localStorage.setItem(NOTIFICATIONS_STORAGE_KEY, JSON.stringify(notifications));
    } catch (e) {
      console.error('Failed to save notifications', e);
    }
  }

  public static addNotification(notif: Omit<AppNotification, 'id' | 'timestamp' | 'isRead'>): AppNotification {
    const list = this.getNotifications();
    const newNotif: AppNotification = {
      ...notif,
      id: `notif-${Date.now()}`,
      timestamp: new Date().toISOString(),
      isRead: false
    };
    list.unshift(newNotif);
    this.saveNotifications(list);
    return newNotif;
  }

  public static markAsRead(id: string) {
    const list = this.getNotifications();
    const updated = list.map(n => n.id === id ? { ...n, isRead: true } : n);
    this.saveNotifications(updated);
    return updated;
  }

  public static markAllAsRead() {
    const list = this.getNotifications();
    const updated = list.map(n => ({ ...n, isRead: true }));
    this.saveNotifications(updated);
    return updated;
  }
}
