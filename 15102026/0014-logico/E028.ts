// 0014 · Operadores lógicos
// Exercício E028
//
// Autoescola: peça a idade e se a pessoa tem habilitação (`sim`/`nao`). Mostre
// se ela pode dirigir, ou seja, 18 anos ou mais e habilitação.
//
// Dicas:
// 1. Converta a idade com `Number`.
// 2. Transforme a resposta em boolean comparando: `resposta === 'sim'`.
// 3. As duas coisas precisam ser verdade ao mesmo tempo: `&&`.
//
// Para ler dados do teclado use:
// import { input } from '#core/input.ts'
//
// Escreva sua resposta abaixo:

import { input } from '#core/input.ts'

const idade = Number(input('Digite a idade: '))
const resposta = input('Tem habilitação? (sim/nao): ')

const temHabilitacao = resposta === 'sim'

console.log(idade >= 18 && temHabilitacao)

// Execute com:
// tsx ~/LPPOO/15102026/0014-logico/E028.ts
