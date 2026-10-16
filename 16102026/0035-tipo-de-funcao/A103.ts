// A103 · type Operacao

type Operacao = (a: number, b: number) => number

const somar: Operacao = (a, b) => a + b
const multiplicar: Operacao = (a, b) => a * b

function calcular(a: number, b: number, op: Operacao): number {
  return op(a, b)
}

console.log(calcular(6, 7, somar)) // 13
console.log(calcular(6, 7, multiplicar)) // 42
