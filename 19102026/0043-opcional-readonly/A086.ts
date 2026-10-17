// A086 · Array que não pode ser mexido

const TURNOS: readonly string[] = ['manhã', 'tarde', 'noite']

console.log(TURNOS.join(', ')) // ler pode
console.log(TURNOS.includes('noite')) // true
// TURNOS.push('madrugada') // erro: push não existe em readonly string[]
