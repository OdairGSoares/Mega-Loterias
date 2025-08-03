import { useQuery } from 'react-query';
import { fetchAllLatestResults } from '../services/api/lottery';

export function useLotteryResults() {
  return useQuery('lotteryResults', fetchAllLatestResults, {
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchInterval: 1000 * 60 * 5,
    refetchOnWindowFocus: true,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000)
  });
}