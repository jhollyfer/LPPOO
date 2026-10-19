// 0015 · Condicional simples (if)
// Exercício E029
//
// Peça a idade e, se for 18 ou mais, mostre `Pode entrar na festa de
// formatura sem autorização dos pais`.
//
// Dicas:
// 1. O `input` devolve texto. Converta com `Number` antes de comparar.
// 2. "18 ou mais" se escreve com `>=`.
// 3. Teste com 17, 18 e 19 para ver a divisa.
//
// Para ler dados do teclado use:
// import { input } from '#core/input.ts'
//
// Escreva sua resposta abaixo:

import { input } from '#core/input.ts'

const idade = Number(input('Digite a idade: '))

if (idade >= 18) {
  console.log('Pode entrar na festa de formatura sem autorização dos pais')
}

// Execute com:
// tsx ~/LPPOO/15102026/0015-condicional-simples/E029.ts
