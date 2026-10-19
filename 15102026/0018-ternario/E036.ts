// 0018 · Operador ternário
// Exercício E036
//
// Peça o preço do açaí em duas barracas da feira e use ternário para guardar o
// menor preço numa constante. Mostre `Compre o de R$ X`.
//
// Dicas:
// 1. Converta os dois preços com `Number`.
// 2. A condição é qual preço é menor: `preco1 < preco2`.
// 3. O ternário devolve o próprio preço, não um texto.
// 4. Use `toFixed(2)` para mostrar os centavos.
//
// Para ler dados do teclado use:
// import { input } from '#core/input.ts'
//
// Escreva sua resposta abaixo:

import { input } from '#core/input.ts'

const preco1 = Number(input('Preço do açaí na barraca 1: '))
const preco2 = Number(input('Preço do açaí na barraca 2: '))

const menor = preco1 < preco2 ? preco1 : preco2

console.log(`Compre o de R$ ${menor.toFixed(2)}`)

// Execute com:
// tsx ~/LPPOO/15102026/0018-ternario/E036.ts
