// Exemplo 3 - Acesso opcional com ?.

let nome: string | undefined

console.log(nome?.toUpperCase()) // undefined (sem erro)

nome = 'carlos'
console.log(nome?.toUpperCase()) // CARLOS
