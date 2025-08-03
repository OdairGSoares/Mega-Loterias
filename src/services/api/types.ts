export interface LotteryApiResponse {
  trevosSorteados: null;
  acumulado: boolean;
  dataApuracao: string;
  dataProximoConcurso: string;
  dezenasSorteadasOrdemSorteio: string[];
  listaDezenas: string[];
  listaDezenasSegundoSorteio: null;
  listaMunicipioUFGanhadores: {
    ganhadores: number;
    municipio: string;
    nomeFatansiaUL: string;
    posicao: number;
    serie: string;
    uf: string;
  }[];
  listaRateioPremio: {
    descricaoFaixa: string;
    faixa: number;
    numeroDeGanhadores: number;
    valorPremio: number;
  }[];
  localSorteio: string;
  nomeMunicipioUFSorteio: string;
  nomeTimeCoracaoMesSorte: string;
  numero: number;
  numeroConcursoProximo: number;
  observacao: string;
  tipoJogo: string;
  valorArrecadado: number;
  valorEstimadoProximoConcurso: number;
}

export interface TransformedLotteryResult {
  gameId: string;
  gameName: string;
  drawNumber: number;
  drawDate: string;
  location: string;
  numbers: number[];
  prizes: {
    description: string;
    winners: number;
    prize: string;
  }[];
  accumulated: boolean;
  nextDrawPrize: string;
  nextDrawDate: string;
  nextDrawNumber: number;
  specialNumber?: string;
  collectionAmount?: string;
  drawLocation?: string;
  winningCities?: {
    city: string;
    state: string;
    winners: number;
  }[];
}