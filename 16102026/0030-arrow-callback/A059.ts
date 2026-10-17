// A059 · Regras para os preços da cantina

function ehCaro(preco: number): boolean {
  return preco > 10
}
const comDesconto = (preco: number): number => preco - 2

const precos: number[] = [8, 15, 12]

console.log(precos.filter(ehCaro)) // [ 15, 12 ]
console.log(precos.map(comDesconto)) // [ 6, 13, 10 ]
console.log(precos.find((p) => p < 10)) // 8
