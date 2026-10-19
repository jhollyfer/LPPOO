// 0009 · Operadores de atribuição
// Exercício E017
//
// Placar do Free Fire: comece com `let pontos = 0`. Você ganhou 10 pontos,
// depois mais 5, e perdeu 3 por cair do mapa. Use `+=` e `-=` e mostre o
// placar final.
//
// Dicas:
// 1. Comece com `let`, porque `pontos` vai mudar várias vezes.
// 2. `pontos += 10` é o mesmo que `pontos = pontos + 10`.
// 3. Perder pontos é com `-=`.
// 4. Faça a conta de cabeça antes e confira: deve dar 12.
//
// Escreva sua resposta abaixo:

let pontos = 0
pontos += 10
pontos += 5
pontos -= 3
console.log(`Placar final: ${pontos}`)

// Execute com:
// tsx ~/LPPOO/15102026/0009-atribuicao/E017.ts
