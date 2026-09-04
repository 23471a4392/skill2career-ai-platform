export function formatPercentage(val: number): string {
  return `${Math.round(val)}%`;
}

export function formatDuration(duration: string): string {
  return duration;
}

export function formatTimeAgo(isoString: string): string {
  try {
    const date = new Date(isoString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays === 1) return 'Yesterday';
    return `${diffDays}d ago`;
  } catch {
    return 'Recently';
  }
}

export function getDifficultyColor(diff: string): { bg: string; text: string; border: string } {
  switch (diff?.toLowerCase()) {
    case 'entry':
    case 'easy':
    case 'beginner':
    case 'foundational':
      return { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30' };
    case 'moderate':
    case 'medium':
    case 'intermediate':
    case 'associate':
      return { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30' };
    case 'challenging':
    case 'hard':
    case 'advanced':
    case 'professional':
      return { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30' };
    case 'high':
    case 'expert':
      return { bg: 'bg-rose-500/10', text: 'text-rose-400', border: 'border-rose-500/30' };
    default:
      return { bg: 'bg-slate-800', text: 'text-slate-300', border: 'border-slate-700' };
  }
}
