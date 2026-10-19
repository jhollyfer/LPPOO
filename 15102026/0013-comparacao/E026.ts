// 0013 · Comparação de igualdade
// Exercício E026
//
// Adivinhação: peça um número e mostre se ele é igual a 7, o número da sorte
// do professor.
//
// Dicas:
// 1. O `input` devolve texto. Converta com `Number` antes de comparar com 7.
// 2. Se não converter, o TypeScript reclama da comparação. Leia o erro.
// 3. Teste com 7 e com outro número.
//
// Para ler dados do teclado use:
// import { input } from '#core/input.ts'
//
// Escreva sua resposta abaixo:

import { input } from '#core/input.ts'

const numero = Number(input('Digite um número: '))

console.log(numero === 7)

// Execute com:
// tsx ~/LPPOO/15102026/0013-comparacao/E026.ts
