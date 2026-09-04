import React, { createContext, useContext, useState, useEffect } from 'react';
import { AppNotification } from '../types';
import { NotificationService } from '../services/notificationService';

interface NotificationContextType {
  notifications: AppNotification[];
  unreadCount: number;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  addNotification: (title: string, message: string, type?: AppNotification['type'], actionUrl?: string) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<AppNotification[]>(() => NotificationService.getNotifications());

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const markAsRead = (id: string) => {
    const updated = NotificationService.markAsRead(id);
    setNotifications(updated);
  };

  const markAllAsRead = () => {
    const updated = NotificationService.markAllAsRead();
    setNotifications(updated);
  };

  const addNotification = (title: string, message: string, type: AppNotification['type'] = 'system', actionUrl?: string) => {
    const notif = NotificationService.addNotification({
      userId: 'current',
      title,
      message,
      type,
      actionUrl
    });
    setNotifications(prev => [notif, ...prev]);
  };

  return (
    <NotificationContext.Provider value={{ notifications, unreadCount, markAsRead, markAllAsRead, addNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};
