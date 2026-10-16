// Aula 02 · Exemplo 11 · Laço do...while
// Pede a quantidade de açaís até ser um número de 1 a 5.

import { input } from '#core/input.ts'

let quantidade: number
let tentativas = 0

do {
  quantidade = Number(input('Quantos açaís (1 a 5)? '))
  tentativas++
} while (quantidade < 1 || quantidade > 5)

console.log(`Pedido de ${quantidade} açaí(s), feito em ${tentativas} tentativa(s).`)
