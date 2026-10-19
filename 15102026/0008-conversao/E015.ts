// 0008 · Conversão de tipos
// Exercício E015
//
// Pergunte dois números com `input`, converta com `Number` e mostre a soma de
// verdade.
//
// Dicas:
// 1. Converta logo na hora de guardar: `Number(input(...))`.
// 2. Depois some as duas variáveis numa terceira.
// 3. Teste com `2` e `3`: se aparecer `23`, faltou converter algum.
//
// Para ler dados do teclado use:
// import { input } from '#core/input.ts'
//
// Escreva sua resposta abaixo:

import { input } from '#core/input.ts'

const a = Number(input('Digite o primeiro número: '))
const b = Number(input('Digite o segundo número: '))

const soma = a + b

console.log(soma)

// Execute com:
// tsx ~/LPPOO/15102026/0008-conversao/E015.ts
