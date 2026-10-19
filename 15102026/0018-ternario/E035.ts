// 0018 · Operador ternário
// Exercício E035
//
// Peça a idade e use ternário para mostrar `Maior de idade` ou `Menor de
// idade`.
//
// Dicas:
// 1. Converta a idade com `Number`.
// 2. O formato é `condição ? valorSeSim : valorSeNao`.
// 3. Dá para guardar o resultado numa constante ou mostrar direto no
//    `console.log`.
//
// Para ler dados do teclado use:
// import { input } from '#core/input.ts'
//
// Escreva sua resposta abaixo:

import { input } from '#core/input.ts'

const idade = Number(input('Digite a idade: '))

const situacao = idade >= 18 ? 'Maior de idade' : 'Menor de idade'

console.log(situacao)

// Execute com:
// tsx ~/LPPOO/15102026/0018-ternario/E035.ts
