import { GameRules } from '../types/lottery';

export const LOTTERY_GAMES: GameRules[] = [
  {
    name: 'Mega-Sena',
    minNumbers: 6,
    maxNumbers: 15,
    range: 60,
    color: 'rgb(0, 155, 58)',
    apiId: 0
  },
  {
    name: 'Lotofácil',
    minNumbers: 15,
    maxNumbers: 20,
    range: 25,
    color: 'rgb(147, 44, 93)',
    apiId: 1
  },
  {
    name: 'Quina',
    minNumbers: 5,
    maxNumbers: 15,
    range: 80,
    color: 'rgb(38, 49, 97)',
    apiId: 2
  },
  {
    name: 'Lotomania',
    minNumbers: 50,
    maxNumbers: 50,
    range: 100,
    color: 'rgb(247, 111, 33)',
    apiId: 3
  },
  {
    name: 'Timemania',
    minNumbers: 10,
    maxNumbers: 10,
    range: 80,
    color: 'rgb(0, 155, 58)',
    apiId: 4
  },
  {
    name: 'Dupla Sena',
    minNumbers: 6,
    maxNumbers: 15,
    range: 50,
    color: 'rgb(144, 0, 39)',
    apiId: 5
  }
];