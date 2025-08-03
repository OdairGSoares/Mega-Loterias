import { useQuery } from 'react-query';
import { fetchLotteryResult } from '../services/api/lottery';

export function useLotteryResult(gameId: string, concurso?: string) {
  return useQuery(
    ['lotteryResult', gameId, concurso],
    () => fetchLotteryResult(gameId, concurso),
    {
      enabled: !!gameId,
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 30, // 30 minutes
    }
  );
}