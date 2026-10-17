// Aula 01 · Exemplo 02 · Variáveis e constantes
// Crédito do celular: começa com 50 reais e vai mudando.

const creditoInicial = 50
let credito = creditoInicial

console.log(`Começou com R$ ${credito}`)

credito = credito - 15
console.log(`Depois do pacote de dados: R$ ${credito}`)

credito = credito + 20
console.log(`Depois da recarga: R$ ${credito}`)
