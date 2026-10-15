// Exemplo 2 - Valor padrão com ??

let apelido: string | undefined = undefined

console.log(apelido ?? 'sem apelido') // sem apelido

apelido = 'Juju'
console.log(apelido ?? 'sem apelido') // Juju
