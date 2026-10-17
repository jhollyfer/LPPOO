// A088 · Array que não pode ser mexido

const TURNOS: readonly string[] = ['manhã', 'tarde', 'noite']

console.log(TURNOS.join(', ')) // manhã, tarde, noite (ler pode)
console.log(TURNOS.includes('noite')) // true

// Mexer não pode. Tire o // e veja:
// TURNOS.push('madrugada')
// erro: Property 'push' does not exist on type 'readonly string[]'.
