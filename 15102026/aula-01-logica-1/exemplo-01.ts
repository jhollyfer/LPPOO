// Aula 01 · Exemplo 01 · Entrada e saída
// Inscrição no torneio de xadrez: o programa pergunta o nome e a escola.

import { input } from '#core/input.ts'

const nome = input('Seu nome: ')
const escola = input('Sua escola: ')

console.log(`${nome} está inscrito no torneio pela escola ${escola}.`)
