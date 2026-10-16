// A093 · Uma função usando outra

function calcularMedia(valores: number[]): number {
  return valores.reduce((acc, v) => acc + v, 0) / valores.length
}

function situacao(valores: number[]): string {
  const media = calcularMedia(valores)
  return media >= 6 ? 'Aprovado' : 'Reprovado'
}

console.log(situacao([8, 6, 10])) // Aprovado
console.log(situacao([3, 5])) // Reprovado
