// Aula 01 · Exemplo 03 · Texto e seus métodos
// Nome de usuário do Wi-Fi da escola, digitado com espaços e letras misturadas.

const usuario = '   Joao.Silva   '
const limpo = usuario.trim()

console.log(limpo) // Joao.Silva
console.log(limpo.toLowerCase()) // joao.silva
console.log(`Tem ${limpo.length} caracteres`) // 10
console.log(limpo.includes('Silva')) // true
