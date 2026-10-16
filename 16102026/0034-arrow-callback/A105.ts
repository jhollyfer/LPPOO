// A105 · Arrow com chaves precisa de return

const ehPar = (n: number): boolean => n % 2 === 0

const classificar = (n: number): string => {
  if (n >= 6) {
    return 'aprovado'
  }
  return 'reprovado'
}

console.log([1, 2, 3, 4].filter(ehPar)) // [ 2, 4 ]
console.log([8, 4].map(classificar)) // [ 'aprovado', 'reprovado' ]
