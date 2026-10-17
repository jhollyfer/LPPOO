// A080 · Valor padrão com ??

let apelido = undefined // ainda sem apelido

console.log(apelido ?? 'sem apelido') // sem apelido

apelido = 'Juju'
console.log(apelido ?? 'sem apelido') // Juju
