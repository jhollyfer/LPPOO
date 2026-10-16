// Prática em sala · Desafio: filter, map e reduce encadeados
//
// Os produtos têm nome e preço:
//
//   type Produto = { nome: string; preco: number }
//   const produtos: Produto[] = [
//     { nome: 'açaí', preco: 15 },
//     { nome: 'tapioca', preco: 8 },
//     { nome: 'suco', preco: 6 },
//     { nome: 'x-tudo', preco: 25 },
//   ]
//
// Num encadeamento só: fique com os que custam mais de R$ 7, aplique 10% de
// desconto e some tudo. Depois mostre os nomes dos que sobraram, em ordem
// alfabética.
//
// Dicas:
// 1. Dentro da arrow, acesse o preço com p.preco.
// 2. No map, devolva um produto novo: ({ nome: p.nome, preco: p.preco * 0.9 }).
// 3. Para os nomes: map((p) => p.nome), sort() e join(', ').
//
// Escreva sua resposta abaixo:
