export interface LotteryResult {
  gameType: string;
  drawNumber: number;
  date: string;
  numbers: number[];
  prize: string;
  nextDrawPrize?: string;
  nextDrawDate?: string;
  winners?: number;
  isAccumulated?: boolean;
}

export interface GameRules {
  name: string;
  minNumbers: number;
  maxNumbers: number;
  range: number;
  color: string;
  apiId: number;
}

export interface LotteryApiResponse {
  loteria: string;
  concurso: number;
  data: string;
  dezenas: string[];
  premiacoes: {
    acertos: string;
    vencedores: number;
    premio: string;
  }[];
  acumulou: boolean;
  acumuladaProxConcurso: string;
  dataProxConcurso: string;
  proxConcurso: number;
}