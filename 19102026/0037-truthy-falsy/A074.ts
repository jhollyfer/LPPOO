// A074 · Os atalhos ?? e ?.

let apelido = undefined // ainda sem apelido

console.log(apelido ?? 'sem apelido') // sem apelido

apelido = 'Juju'
console.log(apelido ?? 'sem apelido') // Juju

// a chamada tem dois nomes: a posição 2 não existe
const chamada = ['Ana', 'Caio']
console.log(chamada[0]?.toUpperCase()) // ANA
console.log(chamada[2]?.toUpperCase() ?? 'ninguém') // ninguém
