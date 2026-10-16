// A064 · Quantas passagens cabem no cartão

let saldo = 20
let viagens = 0

while (saldo >= 4.5) {
  saldo -= 4.5
  viagens++
}

console.log(`Deu para ${viagens} viagens. Sobrou R$ ${saldo.toFixed(2)}`)
