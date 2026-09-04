import React, { useState } from 'react';
import { MOCK_ADMIN_METRICS, MOCK_ADMIN_USERS, AdminUserRecord } from '../data/mockAdminData';
import { 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  Map, 
  Languages, 
  Search, 
  Send, 
  Award, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { Modal } from '../components/common/Modal';
import { useNotifications } from '../context/NotificationContext';

export const AdminDashboardPage: React.FC = () => {
  const [users, setUsers] = useState<AdminUserRecord[]>(MOCK_ADMIN_USERS);
  const [userSearch, setUserSearch] = useState('');
  const [broadcastOpen, setBroadcastOpen] = useState(false);
  const [broadcastTitle, setBroadcastTitle] = useState('');
  const [broadcastMessage, setBroadcastMessage] = useState('');
  const [broadcastSent, setBroadcastSent] = useState(false);
  const { addNotification } = useNotifications();

  const filteredUsers = users.filter(u => {
    if (userSearch.trim() !== '') {
      const q = userSearch.toLowerCase().trim();
      return u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q) || u.targetCareer.toLowerCase().includes(q) || u.qualification.toLowerCase().includes(q);
    }
    return true;
  });

  const handleSendBroadcast = () => {
    if (!broadcastTitle || !broadcastMessage) return;
    addNotification(broadcastTitle, broadcastMessage, 'system', '/dashboard');
    setBroadcastSent(true);
    setTimeout(() => {
      setBroadcastSent(false);
      setBroadcastOpen(false);
      setBroadcastTitle('');
      setBroadcastMessage('');
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <ShieldCheck className="w-6 h-6 text-purple-400" />
            <h1 className="text-2xl sm:text-3xl font-black text-slate-100">Enterprise Admin & Analytics Portal</h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-400">
            Real-time cohort insights, regional language distribution, top skill gaps, and learner progress metrics.
          </p>
        </div>

        <Button
          variant="primary"
          size="md"
          onClick={() => setBroadcastOpen(true)}
          leftIcon={<Send className="w-4 h-4" />}
        >
          Broadcast Platform Notification
        </Button>
      </div>

      {/* KPI Stat Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-6 rounded-3xl glass-card border border-slate-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Registered</span>
            <Users className="w-4 h-4 text-emerald-400" />
          </div>
          <p className="text-2xl sm:text-3xl font-black text-slate-100">{MOCK_ADMIN_METRICS.totalLearners.toLocaleString()}</p>
          <p className="text-[11px] text-emerald-400 font-semibold">+18.4% from last month</p>
        </div>

        <div className="p-6 rounded-3xl glass-card border border-slate-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Active Learners</span>
            <Sparkles className="w-4 h-4 text-cyan-400" />
          </div>
          <p className="text-2xl sm:text-3xl font-black text-slate-100">{MOCK_ADMIN_METRICS.activeThisMonth.toLocaleString()}</p>
          <p className="text-[11px] text-cyan-400 font-semibold">46% monthly active ratio</p>
        </div>

        <div className="p-6 rounded-3xl glass-card border border-slate-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Roadmaps Generated</span>
            <Map className="w-4 h-4 text-purple-400" />
          </div>
          <p className="text-2xl sm:text-3xl font-black text-slate-100">{MOCK_ADMIN_METRICS.totalRoadmapsGenerated.toLocaleString()}</p>
          <p className="text-[11px] text-purple-400 font-semibold">{MOCK_ADMIN_METRICS.completionRate} completion rate</p>
        </div>

        <div className="p-6 rounded-3xl glass-card border border-slate-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Avg Job Readiness</span>
            <TrendingUp className="w-4 h-4 text-amber-400" />
          </div>
          <p className="text-2xl sm:text-3xl font-black text-emerald-400">{MOCK_ADMIN_METRICS.averageJobReadiness}%</p>
          <p className="text-[11px] text-slate-400 font-semibold">+4.2% cohort growth</p>
        </div>
      </div>

      {/* Analytics Breakdown Grid: Language Distribution & Top Careers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Language Distribution */}
        <div className="p-6 rounded-3xl glass-card border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-100">Regional Language Distribution</h3>
              <p className="text-xs text-slate-400">User breakdown across supported instructional languages</p>
            </div>
            <Languages className="w-5 h-5 text-indigo-400" />
          </div>

          <div className="space-y-3 pt-2">
            {MOCK_ADMIN_METRICS.languageDistribution.map(item => (
              <div key={item.language} className="space-y-1">
                <div className="flex justify-between text-xs font-medium text-slate-300">
                  <span className="font-semibold text-slate-200">{item.language}</span>
                  <span className="text-slate-400">{item.count.toLocaleString()} learners ({item.percentage}%)</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Demanded Careers & Skill Gaps */}
        <div className="p-6 rounded-3xl glass-card border border-slate-800 space-y-4">
          <div>
            <h3 className="text-base font-bold text-slate-100">Most Demanded Career Pathways</h3>
            <p className="text-xs text-slate-400">Highest enrolled career paths with monthly enrollment growth</p>
          </div>

          <div className="space-y-2.5 pt-2">
            {MOCK_ADMIN_METRICS.topDemandedCareers.map(c => (
              <div key={c.career} className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-200">{c.career}</p>
                  <p className="text-[10px] text-slate-400">{c.count.toLocaleString()} active roadmaps</p>
                </div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  {c.growth}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* User Management Table */}
      <div className="p-6 rounded-3xl glass-card border border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-slate-100">Learner Cohort Records</h3>
            <p className="text-xs text-slate-400">Live progress tracking across registered students and career switchers</p>
          </div>

          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
            <input
              type="text"
              value={userSearch}
              onChange={(e) => setUserSearch(e.target.value)}
              placeholder="Search user name, email, degree..."
              className="rounded-xl bg-slate-900 border border-slate-700 pl-9 pr-4 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-900 text-slate-400 font-bold uppercase tracking-wider text-[10px] border-b border-slate-800">
              <tr>
                <th className="p-3">Learner</th>
                <th className="p-3">Degree Background</th>
                <th className="p-3">Target Career</th>
                <th className="p-3">Language</th>
                <th className="p-3">Job Readiness</th>
                <th className="p-3">Streak</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredUsers.map(user => (
                <tr key={user.id} className="hover:bg-slate-850 transition">
                  <td className="p-3">
                    <p className="font-bold text-slate-100">{user.name}</p>
                    <p className="text-[10px] text-slate-500">{user.email}</p>
                  </td>
                  <td className="p-3 text-slate-300 font-medium">{user.qualification}</td>
                  <td className="p-3 text-slate-200 font-bold">{user.targetCareer}</td>
                  <td className="p-3">
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-semibold text-indigo-300">
                      {user.language}
                    </span>
                  </td>
                  <td className="p-3">
                    <span className="font-black text-emerald-400">{user.readiness}%</span>
                  </td>
                  <td className="p-3 font-semibold text-rose-400">{user.streak}d 🔥</td>
                  <td className="p-3">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Broadcast Modal */}
      {broadcastOpen && (
        <Modal
          isOpen={true}
          onClose={() => setBroadcastOpen(false)}
          title="Broadcast Platform Notification"
          subtitle="Sends high-priority learning alerts to all active learners in real-time"
        >
          <div className="space-y-4">
            {broadcastSent ? (
              <div className="p-6 text-center text-emerald-400 space-y-2">
                <CheckCircle2 className="w-10 h-10 mx-auto" />
                <p className="text-sm font-bold">Broadcast Sent Successfully!</p>
              </div>
            ) : (
              <>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Notification Title
                  </label>
                  <input
                    type="text"
                    value={broadcastTitle}
                    onChange={(e) => setBroadcastTitle(e.target.value)}
                    placeholder="e.g. New Telugu Python & SQL Masterclass Released"
                    className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Message Body
                  </label>
                  <textarea
                    value={broadcastMessage}
                    onChange={(e) => setBroadcastMessage(e.target.value)}
                    rows={4}
                    placeholder="e.g. Check your Resource Hub to access the newly curated video series with practical projects..."
                    className="w-full rounded-xl bg-slate-950 border border-slate-700 p-4 text-xs text-slate-100 focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2 border-t border-slate-800">
                  <Button variant="secondary" size="sm" onClick={() => setBroadcastOpen(false)}>
                    Cancel
                  </Button>
                  <Button variant="primary" size="sm" onClick={handleSendBroadcast} leftIcon={<Send className="w-4 h-4" />}>
                    Send Broadcast Alert
                  </Button>
                </div>
              </>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
};
