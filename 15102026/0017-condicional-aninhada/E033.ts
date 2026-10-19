// 0017 · Condicional aninhada (else if e if dentro de if)
// Exercício E033
//
// Peça a altura de dois jogadores do time de vôlei e mostre quem é o mais alto,
// ou `Mesma altura`.
//
// Dicas:
// 1. São três resultados possíveis: o primeiro mais alto, o segundo ou empate.
// 2. Teste um caso com `>`, outro com `<` e deixe o empate para o `else`.
// 3. Altura tem ponto: `1.85`. Converta com `Number`.
//
// Para ler dados do teclado use:
// import { input } from '#core/input.ts'
//
// Escreva sua resposta abaixo:

import { input } from '#core/input.ts'

const altura1 = Number(input('Altura do jogador 1: '))
const altura2 = Number(input('Altura do jogador 2: '))

if (altura1 > altura2) {
  console.log('Jogador 1 é o mais alto')
} else if (altura1 < altura2) {
  console.log('Jogador 2 é o mais alto')
} else {
  console.log('Mesma altura')
}

// Execute com:
// tsx ~/LPPOO/15102026/0017-condicional-aninhada/E033.ts
