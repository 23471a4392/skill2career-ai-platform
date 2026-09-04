import React, { useState } from 'react';
import { InterviewQuestion } from '../../types';
import { Eye, EyeOff, CheckCircle2, Lightbulb, Code2, HelpCircle } from 'lucide-react';
import { Button } from '../common/Button';
import { getDifficultyColor } from '../../utils/formatters';

interface QuestionCardProps {
  question: InterviewQuestion;
  isCompleted?: boolean;
  onToggleComplete: (id: string) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  isCompleted = false,
  onToggleComplete
}) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const diffStyle = getDifficultyColor(question.difficulty);

  return (
    <div className={`p-6 rounded-2xl glass-card border transition-all space-y-4 ${
      isCompleted ? 'border-emerald-500/40 bg-emerald-950/15' : 'border-slate-800 hover:border-slate-700'
    }`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-bold px-2.5 py-0.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700">
            {question.skillTopic}
          </span>
          <span className="text-xs text-slate-400 font-medium">
            {question.category}
          </span>
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${diffStyle.bg} ${diffStyle.text} ${diffStyle.border}`}>
            {question.difficulty}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant={showAnswer ? 'secondary' : 'primary'}
            size="sm"
            onClick={() => setShowAnswer(!showAnswer)}
            leftIcon={showAnswer ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
          >
            {showAnswer ? 'Hide Solution' : 'Reveal Answer'}
          </Button>
          <Button
            variant={isCompleted ? 'primary' : 'outline'}
            size="sm"
            onClick={() => onToggleComplete(question.id)}
            leftIcon={<CheckCircle2 className="w-3.5 h-3.5" />}
          >
            {isCompleted ? 'Mastered ✓' : 'Mark Practiced'}
          </Button>
        </div>
      </div>

      <div>
        <h4 className="text-base font-bold text-slate-100 leading-snug flex items-start gap-2">
          <HelpCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
          <span>{question.question}</span>
        </h4>
      </div>

      {showAnswer && (
        <div className="space-y-4 pt-4 border-t border-slate-800/80 animate-in fade-in duration-200">
          {/* Quick Summary */}
          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs text-emerald-200 font-medium leading-relaxed">
            <span className="font-bold text-emerald-400 block mb-1">Key Summary:</span>
            {question.answerSummary}
          </div>

          {/* Detailed Explanation */}
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-2">
            <span className="font-bold text-slate-200 block">Detailed Explanation:</span>
            <div className="whitespace-pre-line text-slate-400 leading-relaxed">
              {question.detailedExplanation}
            </div>
          </div>

          {/* Code Snippet if applicable */}
          {question.codeSnippet && (
            <div className="rounded-xl bg-slate-950 border border-slate-800 overflow-hidden">
              <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center gap-2 text-xs font-mono text-slate-400">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" /> Code Reference
              </div>
              <pre className="p-4 text-xs font-mono text-emerald-300 overflow-x-auto">
                <code>{question.codeSnippet}</code>
              </pre>
            </div>
          )}

          {/* Sample HR Answer if present */}
          {question.sampleAnswerHR && (
            <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/30 text-xs text-slate-300 space-y-1">
              <span className="font-bold text-indigo-300 block">Sample High-Scoring STAR Response:</span>
              <p className="italic text-slate-400 leading-relaxed">"{question.sampleAnswerHR}"</p>
            </div>
          )}

          {/* Interviewer Pro-Tips */}
          {question.tips && question.tips.length > 0 && (
            <div className="p-3.5 rounded-xl bg-amber-950/15 border border-amber-500/20 text-xs text-amber-300 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-amber-400">
                <Lightbulb className="w-3.5 h-3.5" /> Interviewer Insight Tips:
              </div>
              <ul className="list-disc list-inside space-y-0.5 text-slate-400">
                {question.tips.map((t, idx) => (
                  <li key={idx}>{t}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
