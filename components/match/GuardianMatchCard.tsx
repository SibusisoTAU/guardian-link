'use client';

import React from 'react';
import { MatchFactor } from '@/services/guardian-match';

export interface MatchReason {
  signal: string;
  pass: boolean;
  label: string;
}

export interface GuardianMatchCardProps {
  score: number;
  reasons: MatchReason[];
  candidateName: string;
  onViewProfile?: () => void;
}

export const GuardianMatchCard: React.FC<GuardianMatchCardProps> = ({
  score,
  reasons,
  candidateName,
  onViewProfile,
}) => {
  // Color coding based on score
  const scoreColor =
    score >= 70
      ? 'text-emerald-600'
      : score >= 50
        ? 'text-amber-600'
        : 'text-slate-600';

  const scoreBackground =
    score >= 70
      ? 'bg-emerald-50'
      : score >= 50
        ? 'bg-amber-50'
        : 'bg-slate-50';

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
        <div>
          <span className="text-xs font-bold text-emerald-600 tracking-wider uppercase">Guardian Match</span>
          <h4 className="text-lg font-bold text-slate-900">{candidateName}</h4>
        </div>
        <div className={`text-right ${scoreBackground} px-4 py-2 rounded-lg`}>
          <div className={`text-3xl font-black ${scoreColor}`}>{score}%</div>
          <span className="text-[10px] text-slate-400 uppercase tracking-wider">Match Score</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-300 ${
              score >= 70
                ? 'bg-emerald-500'
                : score >= 50
                  ? 'bg-amber-500'
                  : 'bg-slate-400'
            }`}
            style={{ width: `${score}%` }}
          />
        </div>
      </div>

      {/* Match Explanation */}
      <div className="space-y-2">
        <p className="text-xs font-medium text-slate-500 mb-2">Match Explanation:</p>
        {reasons.map((reason, idx) => (
          <div key={idx} className="flex items-center text-xs">
            {reason.pass ? (
              <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mr-2 text-[10px] font-bold">✓</span>
            ) : (
              <span className="w-4 h-4 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mr-2 text-[10px] font-bold">✕</span>
            )}
            <span className={reason.pass ? 'text-slate-800 font-medium' : 'text-slate-400'}>
              {reason.label}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
      {onViewProfile && (
        <div className="mt-4 pt-4 border-t border-slate-100">
          <button
            onClick={onViewProfile}
            className="w-full text-xs font-semibold text-emerald-600 hover:text-emerald-700 transition"
          >
            View Full Profile →
          </button>
        </div>
      )}
    </div>
  );
};
