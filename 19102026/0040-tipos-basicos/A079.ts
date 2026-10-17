// A079 · Primitivos, unknown e never

const nome: string = 'Ana'
const idade: number = 17
const matriculado: boolean = true

function tamanho(valor: unknown): number {
  if (typeof valor === 'string') return valor.length
  if (typeof valor === 'number') return valor.toString().length
  return 0
}

function falhar(mensagem: string): never {
  throw new Error(mensagem)
}

if (idade < 0) falhar('Idade inválida')
console.log(nome, idade, matriculado)
console.log(tamanho('Benjamin')) // 8
console.log(tamanho(2026)) // 4
