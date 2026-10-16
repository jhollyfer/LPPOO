// Aula 03 · Exemplo 20 · União, literais e narrowing
// Turno da escola e um valor que pode chegar como texto ou número.

type Turno = 'manhã' | 'tarde' | 'noite'

function horario(t: Turno): string {
  if (t === 'manhã') return '07:00'
  if (t === 'tarde') return '13:00'
  return '19:00' // aqui só sobrou 'noite'
}

function dobrar(valor: string | number): number {
  if (typeof valor === 'string') return Number(valor) * 2 // aqui é string
  return valor * 2 // aqui é number
}

console.log(horario('tarde'))
console.log(dobrar('21'), dobrar(4))
