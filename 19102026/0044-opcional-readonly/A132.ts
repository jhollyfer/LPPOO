// A132 · Parâmetro opcional dentro de um objeto de opções

type OpcoesDeSaudacao = { nome: string; formal?: boolean }

function saudar(opcoes: OpcoesDeSaudacao): string {
  return opcoes.formal ? `Prezada(o) ${opcoes.nome}` : `Oi, ${opcoes.nome}!`
}

console.log(saudar({ nome: 'Ana' })) // Oi, Ana!
console.log(saudar({ nome: 'Ana', formal: true })) // Prezada(o) Ana
