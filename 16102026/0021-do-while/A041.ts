// A041 · Adivinhe o número

import { input } from '#core/input.ts'

const segredo = 7
let chute // a caixa nasce vazia: o do pede o chute antes de conferir
let tentativas = 0

do {
  chute = Number(input('Chute de 1 a 10: ')) // digite: 3, depois 7
  tentativas++
} while (chute !== segredo)

console.log(`Acertou em ${tentativas} tentativas!`) // Acertou em 2 tentativas!
