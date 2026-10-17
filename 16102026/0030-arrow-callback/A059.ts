// A059 · Arrow functions da cantina

const comDesconto = (preco: number): number => preco - 2
const ehCaro = (preco: number): boolean => preco > 10
const placa = (nome: string, preco: number): string => `${nome}: R$ ${preco}`

console.log(comDesconto(8)) // 6
console.log(ehCaro(15)) // true
console.log(placa('Pastel', 7)) // Pastel: R$ 7
