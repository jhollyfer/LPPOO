// Prática em sala · Desafio: filter, map e reduce encadeados
//
// A cantina tem estes produtos, com os preços na mesma ordem dos nomes:
//
//   const nomes: string[] = ['açaí', 'tapioca', 'suco', 'x-tudo']
//   const precos: number[] = [15, 8, 6, 25]
//
// Num encadeamento só: fique com os preços acima de R$ 7, aplique 10% de
// desconto e some tudo. Mostre o total com duas casas decimais. Depois mostre
// os nomes em ordem alfabética, separados por vírgula, sem mudar o array
// original.
//
// Dicas:
// 1. filter((p) => p > 7), depois map((p) => p * 0.9), depois reduce.
// 2. Não esqueça o valor inicial 0 no reduce. O total esperado é R$ 43.20.
// 3. Para os nomes: slice(), sort() e join(', ').
//
// Escreva sua resposta abaixo:
