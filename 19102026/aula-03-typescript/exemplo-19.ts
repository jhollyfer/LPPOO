// Aula 03 · Exemplo 19 · Propriedade opcional e readonly
// Carteirinha: a matrícula não muda, o apelido pode faltar.

type Carteirinha = { readonly matricula: string; nome: string; apelido?: string }

function chamar(c: Carteirinha): string {
  return `${c.matricula}: ${c.apelido ?? c.nome}`
}

console.log(chamar({ matricula: 'A01', nome: 'Ana' })) // A01: Ana
console.log(chamar({ matricula: 'A02', nome: 'José', apelido: 'Zé' })) // A02: Zé
// c.matricula = 'A99' daria erro: matricula é readonly
