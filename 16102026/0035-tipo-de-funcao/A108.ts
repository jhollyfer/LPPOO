// A108 · Um array de funções

type Operacao = (a: number, b: number) => number

const operacoes: Operacao[] = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b]

for (const op of operacoes) {
  console.log(op(10, 2)) // 12, depois 8, depois 20
}
