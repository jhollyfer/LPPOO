// A129 · O mesmo formato com type e com interface

type ProdutoT = { nome: string; preco: number }

interface ProdutoI {
  nome: string
  preco: number
}

const acai: ProdutoT = { nome: 'açaí', preco: 15 }
const tapioca: ProdutoI = acai // serve: o formato é o mesmo

console.log(tapioca.nome, tapioca.preco)
