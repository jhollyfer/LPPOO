// A066 · Uma função sua que recebe callback

function aplicar(valor: number, operacao: (x: number) => number): number {
  return operacao(valor)
}

console.log(aplicar(10, (x) => x * x)) // 100
console.log(aplicar(10, (x) => x / 2)) // 5
