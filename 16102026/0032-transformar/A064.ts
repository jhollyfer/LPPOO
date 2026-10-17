// A064 · Encadeando: só os caros, com 10% de desconto, somados

const precos: number[] = [12, 5, 30]

const total = precos
  .filter((p) => p > 10) // [12, 30]
  .map((p) => p * 0.9) // [10.8, 27]
  .reduce((acc, p) => acc + p, 0) // 37.8

console.log(`Total: R$ ${total.toFixed(2)}`)
