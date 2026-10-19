// 0010 · Operadores aritméticos
// Exercício E020
//
// Peça um número e mostre o resto da divisão dele por 2. Rode com um número
// par e com um ímpar e veja a diferença.
//
// Dicas:
// 1. O resto da divisão é o operador `%`.
// 2. Lembre de converter o que foi digitado com `Number`.
// 3. Número par sempre deixa resto 0 na divisão por 2.
//
// Para ler dados do teclado use:
// import { input } from '#core/input.ts'
//
// Escreva sua resposta abaixo:

import { input } from '#core/input.ts'
const numero = Number(input('Digite um número: '))
console.log(numero % 2)

// Execute com:
// tsx ~/LPPOO/15102026/0010-aritmetica/E020.ts
