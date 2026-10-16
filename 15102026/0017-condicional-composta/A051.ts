// A051 · Pode votar?

import { input } from '#core/input.ts'

const idade = Number(input('Idade: '))

if (idade >= 16) {
  console.log('Pode votar')
} else {
  console.log(`Ainda não pode votar. Faltam ${16 - idade} ano(s).`)
}
