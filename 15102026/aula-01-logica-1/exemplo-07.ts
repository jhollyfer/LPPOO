// Aula 01 · Exemplo 07 · Comparação e operadores lógicos
// Show na Ponta Negra: entra quem tem 16 anos ou mais e ingresso. Ou quem está
// na lista de convidados.

const idade = 15
const temIngresso = 'sim'
const naLista = true

const temIdade = idade >= 16
const comIngresso = temIngresso === 'sim'

console.log(`Tem idade? ${temIdade}`) // false
console.log(`Idade e ingresso? ${temIdade && comIngresso}`) // false
console.log(`Pode entrar? ${(temIdade && comIngresso) || naLista}`) // true
