// A100 · function, arrow function e callback

function dobrar(n: number): number {
  return n * 2
}
const triplicar = (n: number): number => n * 3

const notas: number[] = [4, 5]

console.log(notas.map(dobrar)) // [ 8, 10 ]
console.log(notas.map(triplicar)) // [ 12, 15 ]
console.log(notas.map((n) => n + 1)) // [ 5, 6 ]
