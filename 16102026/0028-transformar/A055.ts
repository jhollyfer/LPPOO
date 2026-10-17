// A055 · map, filter, reduce e forEach

const notas: number[] = [8, 4, 9, 5]

const dobradas = notas.map((n) => n * 2)
const aprovadas = notas.filter((n) => n >= 6)
const soma = notas.reduce((acc, n) => acc + n, 0)

console.log(dobradas) // [ 16, 8, 18, 10 ]
console.log(aprovadas) // [ 8, 9 ]
console.log(soma) // 26
notas.forEach((n) => console.log(`Nota: ${n}`))
