import React from 'react';
import { TransformedLotteryResult } from '../../services/api/types';
import { ResultCard } from './ResultCard';

interface LotteryResultsProps {
  results: TransformedLotteryResult[];
}

export function LotteryResults({ results }: LotteryResultsProps) {
  return (
    <div className="space-y-6">
      {results.map((result) => (
        <ResultCard key={`${result.gameId}-${result.drawNumber}`} result={result} />
      ))}
    </div>
  );
}