import axios from 'axios';
import { api } from './client';
import { LotteryApiResponse, TransformedLotteryResult } from './types';
import { LOTTERY_GAMES } from '../../config/constants';
import { formatCurrency } from '../../utils/formatters';

function transformLotteryResult(result: LotteryApiResponse, gameId: string): TransformedLotteryResult {
  const game = LOTTERY_GAMES.find(g => g.id === gameId)!;
  
  const winningCities = result.listaMunicipioUFGanhadores?.map(location => ({
    city: location.municipio,
    state: location.uf,
    winners: location.ganhadores
  })) || [];

  return {
    gameId,
    gameName: game.name,
    drawNumber: result.numero,
    drawDate: result.dataApuracao,
    location: result.localSorteio,
    numbers: result.listaDezenas.map(Number),
    prizes: result.listaRateioPremio.map(p => ({
      description: p.descricaoFaixa,
      winners: p.numeroDeGanhadores,
      prize: formatCurrency(p.valorPremio)
    })),
    accumulated: result.acumulado,
    nextDrawPrize: formatCurrency(result.valorEstimadoProximoConcurso),
    nextDrawDate: result.dataProximoConcurso,
    nextDrawNumber: result.numeroConcursoProximo,
    specialNumber: result.nomeTimeCoracaoMesSorte?.trim() || undefined,
    collectionAmount: formatCurrency(result.valorArrecadado),
    drawLocation: result.nomeMunicipioUFSorteio,
    winningCities
  };
}

export async function fetchLatestResult(gameId: string): Promise<TransformedLotteryResult> {
  try {
    const response = await api.get<LotteryApiResponse>(`/${gameId}/ultimo`);
    return transformLotteryResult(response.data, gameId);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Erro ao buscar resultado de ${gameId}`);
    }
    throw error;
  }
}

export async function fetchLotteryResult(gameId: string, concurso?: string): Promise<TransformedLotteryResult> {
  try {
    const url = concurso ? `/${gameId}/${concurso}` : `/${gameId}/ultimo`;
    const response = await api.get<LotteryApiResponse>(url);
    return transformLotteryResult(response.data, gameId);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Resultado não encontrado`);
    }
    throw error;
  }
}

export async function fetchAllLatestResults(): Promise<TransformedLotteryResult[]> {
  try {
    const results = await Promise.allSettled(
      LOTTERY_GAMES.map(game => fetchLatestResult(game.id))
    );

    const successfulResults = results
      .filter((result): result is PromiseFulfilledResult<TransformedLotteryResult> => 
        result.status === 'fulfilled')
      .map(result => result.value);

    if (successfulResults.length === 0) {
      throw new Error('Não foi possível carregar nenhum resultado. Tente novamente mais tarde.');
    }

    return successfulResults;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Erro ao carregar resultados: ${error.message}`);
    }
    throw new Error('Erro inesperado ao carregar resultados');
  }
}