// A103 · Type guard no filter

function ehNumero(x: unknown): x is number {
  return typeof x === 'number'
}

const misturado: unknown[] = [8, 'dez', 6, null, 9]
const notas: number[] = misturado.filter(ehNumero) // sem o "x is number", seria unknown[]

console.log(notas) // [ 8, 6, 9 ]
