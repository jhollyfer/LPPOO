// A066 · Somar até digitar 0

import { input } from '#core/input.ts'

let soma = 0
let numero = Number(input('Número (0 para parar): '))

while (numero !== 0) {
  soma += numero
  numero = Number(input('Número (0 para parar): '))
}

console.log(`Soma: ${soma}`)
