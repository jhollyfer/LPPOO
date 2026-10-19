// 0010 · Operadores aritméticos
// Exercício E019
//
// Calculadora de bolso: peça dois números e mostre a soma, a subtração, a
// multiplicação e a divisão, uma por linha.
//
// Dicas:
// 1. O `input` devolve texto: converta cada número com `Number(...)`.
// 2. Guarde os dois números em constantes antes de fazer as contas.
// 3. Os operadores são `+`, `-`, `*` e `/`.
// 4. Teste com 10 e 4: a divisão tem que dar 2.5.
//
// Para ler dados do teclado use:
// import { input } from '#core/input.ts'
//
// Escreva sua resposta abaixo:

import { input } from '#core/input.ts'

const a = Number(input('Digite o primeiro número: '))
const b = Number(input('Digite o segundo número: '))

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)

// Execute com:
// tsx ~/LPPOO/15102026/0010-aritmetica/E019.ts
