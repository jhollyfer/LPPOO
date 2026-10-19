// 0009 · Operadores de atribuição
// Exercício E018
//
// Fila da cantina: crie `let fila = 5`. Chegaram 3 pessoas de uma vez, depois
// uma foi atendida e depois chegou mais uma. Mostre a fila depois de cada passo.
//
// Dicas:
// 1. Chegar 3 de uma vez é `fila += 3`.
// 2. Uma pessoa a menos é `fila--`. Uma a mais é `fila++`.
// 3. Ponha um `console.log(fila)` logo depois de cada linha que muda o valor.
// 4. Confira: tem que aparecer 8, 7 e 8.
//
// Escreva sua resposta abaixo:

let fila = 5
fila += 3
console.log(fila)
fila--
console.log(fila)
fila++
console.log(fila)

// Execute com:
// tsx ~/LPPOO/15102026/0009-atribuicao/E018.ts
