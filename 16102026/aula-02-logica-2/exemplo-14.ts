// Aula 02 · Exemplo 14 · Inserir, remover e buscar
// Fila de atendimento da secretaria.

const fila: string[] = []

fila.push('Ana')
fila.push('Bia')
fila.push('Caio')
fila.unshift('Davi') // prioridade: entra na frente

console.log(`Fila: ${fila.join(', ')}`) // Davi, Ana, Bia, Caio
console.log(`Bia está na posição ${fila.indexOf('Bia')}`) // 2
console.log(`Tem Zé na fila? ${fila.includes('Zé')}`) // false

const atendido = fila.shift()
console.log(`Atendido: ${atendido}`) // Davi

const desistiu = fila.indexOf('Bia')
if (desistiu !== -1) fila.splice(desistiu, 1)

console.log(`Fila agora: ${fila.join(', ')}`) // Ana, Caio
console.log(`Alguém com nome de 3 letras? ${fila.some((n) => n.length === 3)}`) // true
