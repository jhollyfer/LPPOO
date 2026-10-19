// 0005 · Texto (string)
// Exercício E010
//
// Pergunte uma palavra e mostre ela GRITANDO (maiúsculas) e depois sussurrando
// (minúsculas).
//
// Dicas:
// 1. Um `input` só, e a mesma palavra é usada duas vezes.
// 2. Os métodos são `toUpperCase()` e `toLowerCase()`, com parênteses.
// 3. O método não muda a variável: ele devolve uma string nova.
//
// Para ler dados do teclado use:
// import { input } from '#core/input.ts'
//
// Escreva sua resposta abaixo:

import { input } from '#core/input.ts'

const palavra = await input('Digite uma palavra: ')
console.log(palavra.toUpperCase())
console.log(palavra.toLowerCase())

// Execute com:
// tsx ~/LPPOO/15102026/0005-texto/E010.ts
