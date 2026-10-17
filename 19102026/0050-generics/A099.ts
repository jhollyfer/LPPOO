// A099 · Quem é o último da fila?

function ultimo<T>(fila: T[]): T | undefined {
  return fila[fila.length - 1]
}

const nome = ultimo(['Ana', 'Caio', 'Lia']) // aqui T = string
const senha = ultimo([41, 42, 43]) // aqui T = number
console.log(nome, senha) // Lia 43

// const errado: string | undefined = ultimo([41, 42, 43])
// erro: Type 'number | undefined' is not assignable to type 'string | undefined'.
