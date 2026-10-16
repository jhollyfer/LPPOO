// Aula 02 · Exemplo 10 · Laço while
// Os peixes do tanque dobram a cada mês. Em quantos meses passam de 1000?

let peixes = 100
let meses = 0

while (peixes <= 1000) {
  peixes *= 2
  meses++
  console.log(`Mês ${meses}: ${peixes} peixes`)
}

console.log(`Em ${meses} meses o tanque passou de 1000 peixes.`)
