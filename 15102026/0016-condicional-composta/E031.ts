// 0016 · Condicional composta (if / else)
// Exercício E031
//
// Peça a idade e mostre `Maior de idade` ou `Menor de idade`.
//
// Dicas:
// 1. Converta a idade com `Number`.
// 2. Um teste só resolve: se for 18 ou mais, maior; senão, menor.
// 3. Teste com 17 e com 18.
//
// Para ler dados do teclado use:
// import { input } from '#core/input.ts'
//
// Escreva sua resposta abaixo:

import { input } from '#core/input.ts'

const idade = Number(input('Digite a idade: '))

if (idade >= 18) {
  console.log('Maior de idade')
} else {
  console.log('Menor de idade')
}

// Execute com:
// tsx ~/LPPOO/15102026/0016-condicional-composta/E031.ts
//
// // Execute com:
// tsx ~/LPPOO/15102026/0016-condicional-composta/E032.ts
