// Aula 02 · Exemplo 17 · Arrow functions e callbacks
// Promoção na feira: cada regra é uma arrow, e quem chama as regras é o método.

const comDesconto = (p: number): number => p - 2
const cabeNoBolso = (p: number): boolean => p <= 10
const mostrar = (p: number): void => console.log(`Leva por R$ ${p}`)

const precos: number[] = [12, 4, 8, 20]

const promocao = precos.map(comDesconto).filter(cabeNoBolso) // [10, 2, 6]
promocao.forEach(mostrar)
// Leva por R$ 10
// Leva por R$ 2
// Leva por R$ 6
