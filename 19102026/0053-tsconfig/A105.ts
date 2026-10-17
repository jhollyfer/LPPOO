// A105 · noUncheckedIndexedAccess: a posição pode estar vazia

const fila = ['Ana', 'Bia', 'Caio']

console.log(fila[2]?.toUpperCase() ?? 'ninguém') // CAIO
console.log(fila[4]?.toUpperCase() ?? 'ninguém') // ninguém

// Sem o ?., o tsc reclama, porque fila[2] é string | undefined:
// fila[2].toUpperCase()
// erro: Object is possibly 'undefined'.
