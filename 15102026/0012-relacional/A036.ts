// A036 · Guardando o resultado

import { input } from '#core/input.ts'

const idade = Number(input('Sua idade: '))
const maiorDeIdade = idade >= 18

console.log(`Maior de idade? ${maiorDeIdade}`)
