import axios, { AxiosError } from 'axios';
import { format } from 'date-fns';
import { LotteryApiResponse, LotteryResult } from '../types/lottery';
import { LotteryApiError } from '../types/api';
import { formatCurrency } from '../utils/currency';

const api = axios.create({
  baseURL: 'https://loteriascaixa-api.herokuapp.com/api'
});

function handleApiError(error: unknown): never {
  if (axios.isAxiosError(error)) {
    const message = error.response?.status === 404
      ? 'Resultado não encontrado'
      : 'Erro ao conectar com o servidor';
    throw new LotteryApiError(message);
  }
  throw new LotteryApiError('Ocorreu um erro inesperado');
}

function transformApiResponse(data: LotteryApiResponse): LotteryResult {
  return {
    gameType: data.loteria,
    drawNumber: data.concurso,
    date: format(new Date(data.data), 'dd/MM/yyyy'),
    numbers: data.dezenas.map(Number),
    prize: formatCurrency(data.premiacoes[0]?.premio || '0'),
    nextDrawPrize: formatCurrency(data.acumuladaProxConcurso || '0'),
    nextDrawDate: data.dataProxConcurso 
      ? format(new Date(data.dataProxConcurso), 'dd/MM/yyyy')
      : undefined,
    winners: data.premiacoes[0]?.vencedores || 0,
    isAccumulated: data.acumulou
  };
}

export async function fetchLotteryResults(gameId: number): Promise<LotteryResult> {
  try {
    const response = await api.get<LotteryApiResponse>(`/${gameId}/latest`);
    return transformApiResponse(response.data);
  } catch (error) {
    handleApiError(error);
  }
}

export async function fetchAllLotteryResults(): Promise<LotteryResult[]> {
  try {
    const gameIds = [0, 1, 2, 3, 4, 5];
    const results = await Promise.allSettled(
      gameIds.map(id => fetchLotteryResults(id))
    );
    
    return results
      .filter((result): result is PromiseFulfilledResult<LotteryResult> => 
        result.status === 'fulfilled')
      .map(result => result.value);
  } catch (error) {
    handleApiError(error);
  }
}