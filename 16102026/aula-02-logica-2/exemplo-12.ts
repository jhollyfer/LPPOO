// Aula 02 · Exemplo 12 · Laço for
// Fatorial: 5! = 5 x 4 x 3 x 2 x 1

const numero = 5
let resultado = 1

for (let i = numero; i >= 1; i--) {
  resultado *= i
}

console.log(`${numero}! = ${resultado}`) // 120
