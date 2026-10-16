// Exemplo 3 - Laço que só para com break

import { input } from '#core/input.ts'

let soma = 0

while (true) {
  const numero = Number(input('Número (0 para parar): '))
  if (numero === 0) break
  if (numero < 0) continue // negativo não entra na soma
  soma += numero
}

console.log(`Soma dos positivos: ${soma}`)
