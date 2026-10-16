// A148 · primeiro<T>

function primeiro<T>(lista: T[]): T | undefined {
  return lista[0]
}

const nota = primeiro([8, 10, 6]) // T = number
const nome = primeiro(['Ana', 'Bia']) // T = string
const vazio = primeiro<number>([]) // dá para dizer o T na mão

console.log(nota, nome, vazio) // 8 Ana undefined
