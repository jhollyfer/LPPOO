// A052 · Fila da cantina: entra no fim, sai do começo

const fila: string[] = []

fila.push('Ana')
fila.push('Bia')
fila.push('Caio')

const atendido = fila.shift()
console.log(`Atendido: ${atendido}`) // Ana
console.log('Ainda na fila:', fila) // [ 'Bia', 'Caio' ]
