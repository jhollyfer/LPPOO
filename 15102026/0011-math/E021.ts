// 0011 · Objeto Math
// Exercício E021
//
// Peça um número decimal (com ponto, tipo 7.6) e mostre ele arredondado com
// `round`, `floor` e `ceil`.
//
// Dicas:
// 1. Converta o que foi digitado com `Number`.
// 2. `Math.round` vai para o mais próximo, `Math.floor` para baixo e
//    `Math.ceil` para cima.
// 3. Teste com 7.6 e depois com 7.2 e compare os resultados.
//
// Para ler dados do teclado use:
// import { input } from '#core/input.ts'
//
// Escreva sua resposta abaixo:

import { input } from '#core/input.ts'

const numero = Number(input('Digite um número decimal: '))

console.log(Math.round(numero))
console.log(Math.floor(numero))
console.log(Math.ceil(numero))

// Execute com:
// tsx ~/LPPOO/15102026/0010-aritmetica/E021.ts
