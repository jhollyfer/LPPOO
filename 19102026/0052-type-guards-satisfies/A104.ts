// A104 · Type guard no filter

function ehNumero(x: unknown): x is number {
  return typeof x === 'number' && !Number.isNaN(x)
}

const misturado: unknown[] = [8, 'dez', 6, null, 9]

// sem o "x is number", o resultado seria unknown[]
const notas: number[] = misturado.filter(ehNumero)
const soma = notas.reduce((total, n) => total + n, 0)

console.log(notas, soma) // [ 8, 6, 9 ] 23
