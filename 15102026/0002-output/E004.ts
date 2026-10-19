// 0002 · Saída de dados (output)
// Exercício E004
//
// Pergunte o nome da pessoa e dê as boas-vindas: `Seja bem-vindo(a), NOME!`.
//
// Dicas:
// 1. Pergunte o nome e guarde numa variável.
// 2. A frase usa crases, não aspas: `` `Seja bem-vindo(a), ${...}!` ``.
// 3. Confira se a exclamação ficou dentro da template string.
//
// Para ler dados do teclado use:
// import { input } from '#core/input.ts'
//
// Escreva sua resposta abaixo:
const nome = input("Qual o seu nome? ")
console.log(`Seja bem-vindo(a) ${nome}`)

// Execute com:
// tsx ~/LPPOO/15102026/0002-output/E003.ts
