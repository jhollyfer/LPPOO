// 0011 · Objeto Math
// Exercício E022
//
// Peça a pontuação de três jogadores e mostre a maior e a menor.
//
// Dicas:
// 1. Converta as três pontuações com `Number`.
// 2. `Math.max` e `Math.min` aceitam vários números separados por vírgula.
// 3. Teste com valores repetidos para ver o que acontece.
//
// Para ler dados do teclado use:
// import { input } from '#core/input.ts'
//
// Escreva sua resposta abaixo:

import { input } from '#core/input.ts'

const jogador1 = Number(input('Pontuação do jogador 1: '))
const jogador2 = Number(input('Pontuação do jogador 2: '))
const jogador3 = Number(input('Pontuação do jogador 3: '))

console.log(Math.max(jogador1, jogador2, jogador3))
console.log(Math.min(jogador1, jogador2, jogador3))

// Execute com:
// tsx ~/LPPOO/15102026/0010-aritmetica/E022.ts
