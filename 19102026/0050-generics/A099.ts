// A099 · Quem é o último da fila?

function ultimo<T>(fila: T[]): T | undefined {
  return fila[fila.length - 1]
}

const filaDaCantina = ['Ana', 'Caio', 'Lia']
const senhas = [41, 42, 43, 44]

const nome = ultimo(filaDaCantina) // aqui T = string
const senha = ultimo(senhas) // aqui T = number

console.log(nome, senha) // Lia 44
console.log(`Próxima senha: ${(senha ?? 0) + 1}`) // Próxima senha: 45
console.log(ultimo<string>([])) // undefined: fila vazia

// const errado: string | undefined = ultimo(senhas)
// erro: Type 'number | undefined' is not assignable to type 'string | undefined'.
