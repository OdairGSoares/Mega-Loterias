export const LOTTERY_GAMES = [
  {
    id: 'megasena',
    name: 'Mega-Sena',
    minNumbers: 6,
    maxNumbers: 15,
    range: 60,
    color: 'rgb(0, 155, 58)',
    drawDays: ['Quarta', 'Sábado']
  },
  {
    id: 'lotofacil',
    name: 'Lotofácil',
    minNumbers: 15,
    maxNumbers: 20,
    range: 25,
    color: 'rgb(147, 44, 93)',
    drawDays: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta']
  },
  {
    id: 'quina',
    name: 'Quina',
    minNumbers: 5,
    maxNumbers: 15,
    range: 80,
    color: 'rgb(38, 49, 97)',
    drawDays: ['Segunda a Sábado']
  },
  {
    id: 'lotomania',
    name: 'Lotomania',
    minNumbers: 50,
    maxNumbers: 50,
    range: 100,
    color: 'rgb(247, 111, 33)',
    drawDays: ['Segunda', 'Quarta', 'Sexta']
  },
  {
    id: 'timemania',
    name: 'Timemania',
    minNumbers: 10,
    maxNumbers: 10,
    range: 80,
    color: 'rgb(0, 155, 58)',
    drawDays: ['Terça', 'Quinta', 'Sábado']
  },
  {
    id: 'duplasena',
    name: 'Dupla Sena',
    minNumbers: 6,
    maxNumbers: 15,
    range: 50,
    color: 'rgb(144, 0, 39)',
    drawDays: ['Segunda', 'Quarta', 'Sexta']
  },
  {
    id: 'diadesorte',
    name: 'Dia de Sorte',
    minNumbers: 7,
    maxNumbers: 15,
    range: 31,
    color: 'rgb(251, 171, 52)',
    drawDays: ['Terça', 'Quinta', 'Sábado']
  },
  {
    id: 'supersete',
    name: 'Super Sete',
    minNumbers: 7,
    maxNumbers: 7,
    range: 10,
    color: 'rgb(255, 151, 0)',
    drawDays: ['Segunda', 'Quarta', 'Sexta']
  },
  {
    id: 'maismilionaria',
    name: '+Milionária',
    minNumbers: 6,
    maxNumbers: 12,
    range: 50,
    color: 'rgb(0, 147, 207)',
    drawDays: ['Sábado']
  }
] as const;