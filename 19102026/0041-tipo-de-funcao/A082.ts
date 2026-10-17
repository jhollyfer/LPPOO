// A082 · Um tipo para regras de filtro

type Regra = (n: number) => boolean

const aprovado: Regra = (n) => n >= 6
const par: Regra = (n) => n % 2 === 0

const notas: number[] = [8, 5, 6, 3]
console.log(notas.filter(aprovado)) // [ 8, 6 ]
console.log(notas.filter(par)) // [ 8, 6 ]
