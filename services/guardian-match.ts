import { createClient } from '@/lib/supabase/server';

export interface MatchFactor {
  score: number;
  max: number;
  passed: boolean;
  [key: string]: string | number | boolean;
}

export interface MatchBreakdown {
  skill_match: MatchFactor;
  location: MatchFactor & { town?: string };
  availability: MatchFactor & { status?: string };
  experience: MatchFactor;
  verification: MatchFactor;
}

export interface GuardianMatchResult {
  score: number;
  breakdown: MatchBreakdown;
  explainabilityList: Array<{ label: string; passed: boolean; scoreText: string }>;
}

export class GuardianMatchError extends Error {
  constructor(
    public code: 'NOT_FOUND' | 'CALCULATION_FAILED' | 'INVALID_INPUT',
    message: string
  ) {
    super(message);
    this.name = 'GuardianMatchError';
  }
}

const MATCH_CACHE = new Map<string, { result: GuardianMatchResult; timestamp: number }>();
const CACHE_TTL = 60 * 60 * 1000; // 1 hour

const FACTOR_LABELS: Record<string, string> = {
  skill_match: 'Core Capability / Skill Match',
  location: 'Location Match',
  availability: 'Availability Status',
  experience: 'Relevant Experience Level',
  verification: 'Verified Work History Signals',
};

export async function calculateGuardianMatch(
  opportunityId: string,
  talentId: string,
  skipCache = false
): Promise<GuardianMatchResult> {
  // Validate inputs
  if (!opportunityId?.trim() || !talentId?.trim()) {
    throw new GuardianMatchError('INVALID_INPUT', 'Opportunity and talent IDs required');
  }

  // Check cache
  const cacheKey = `${opportunityId}:${talentId}`;
  if (!skipCache) {
    const cached = MATCH_CACHE.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      return cached.result;
    }
  }

  const supabase = await createClient();

  const { data, error } = await supabase.rpc('calculate_guardian_match', {
    p_opportunity_id: opportunityId,
    p_talent_id: talentId,
  });

  if (error) {
    console.error('Guardian Match Calculation Error:', error);
    throw new GuardianMatchError('CALCULATION_FAILED', `Failed to calculate match: ${error.message}`);
  }

  if (!data || data.length === 0) {
    throw new GuardianMatchError('NOT_FOUND', 'No match data returned');
  }

  const result = data[0];
  const score: number = result.match_score;
  const breakdown: MatchBreakdown = result.breakdown;

  // Format explainable signals
  const explainabilityList = Object.entries(breakdown)
    .map(([key, factor]) => ({
      label: FACTOR_LABELS[key] || key,
      passed: factor.passed,
      scoreText: `${factor.score}/${factor.max} pts`,
    }))
    .filter((item): item is typeof item => !!item);

  const matchResult: GuardianMatchResult = {
    score,
    breakdown,
    explainabilityList,
  };

  // Cache result
  MATCH_CACHE.set(cacheKey, { result: matchResult, timestamp: Date.now() });

  return matchResult;
}

/**
 * Calculate matches for all talents against a single opportunity
 */
export async function calculateOpportunityMatches(
  opportunityId: string,
  talentIds: string[]
): Promise<Map<string, GuardianMatchResult | GuardianMatchError>> {
  const results = new Map<string, GuardianMatchResult | GuardianMatchError>();

  await Promise.all(
    talentIds.map(async (talentId) => {
      try {
        const match = await calculateGuardianMatch(opportunityId, talentId);
        results.set(talentId, match);
      } catch (err) {
        results.set(talentId, err instanceof GuardianMatchError ? err : new GuardianMatchError('CALCULATION_FAILED', String(err)));
      }
    })
  );

  return results;
}

/**
 * Clear match cache (for admin/testing)
 */
export function clearMatchCache() {
  MATCH_CACHE.clear();
}
