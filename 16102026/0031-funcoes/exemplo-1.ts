// Exemplo 1 - Média de um array

function calcularMedia(valores: number[]): number {
  const soma = valores.reduce((acc, v) => acc + v, 0)
  return soma / valores.length
}

console.log(calcularMedia([8, 6, 10])) // 8
console.log(calcularMedia([5, 7])) // 6
