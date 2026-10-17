// Aula 02 · Exemplo 14 · Inserir, remover e buscar
// Fila de atendimento da secretaria.

const fila: string[] = ['Ana', 'Bia']
fila.push('Caio') // entra no fim
fila.unshift('Davi') // prioridade: entra na frente
console.log(`Fila: ${fila.join(', ')}`) // Fila: Davi, Ana, Bia, Caio
console.log(`Tem Zé na fila? ${fila.includes('Zé')}`) // Tem Zé na fila? false

console.log(`Atendido: ${fila.shift()}`) // Atendido: Davi

const desistiu = fila.indexOf('Bia') // 1
if (desistiu !== -1) fila.splice(desistiu, 1)
console.log(`Fila agora: ${fila.join(', ')}`) // Fila agora: Ana, Caio
