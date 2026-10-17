// Aula 03 · Exemplo 20 · União, literais e narrowing
// Turno da escola e um valor que pode chegar como texto ou número.

type Turno = 'manhã' | 'tarde' | 'noite'
const turno: Turno = 'tarde'

function dobrar(valor: string | number): number {
  if (typeof valor === 'string') return Number(valor) * 2 // aqui é string
  return valor * 2 // aqui é number
}

console.log(turno, dobrar('21'), dobrar(4)) // tarde 42 8
