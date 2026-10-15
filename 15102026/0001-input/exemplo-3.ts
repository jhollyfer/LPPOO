// Exemplo 3 - O input devolve texto

import { input } from '#core/input.ts'

const idade = input('Quantos anos você tem? ')

console.log(typeof idade) // string (mesmo digitando 17)
