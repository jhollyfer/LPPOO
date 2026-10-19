// 0019 · Estrutura de escolha (switch)
// Exercício E037
//
// Peça a posição de chegada na corrida dos jogos escolares (1 a 3) e mostre
// `Ouro`, `Prata` ou `Bronze`. Para qualquer outro número mostre `Sem medalha,
// mas valeu a participação`.
//
// Dicas:
// 1. Converta a posição com `Number`, porque o `case 1` compara com número.
// 2. Cada `case` termina com `break`.
// 3. A mensagem de quem não ganhou medalha vai no `default`.
//
// Para ler dados do teclado use:
// import { input } from '#core/input.ts'
//
// Escreva sua resposta abaixo:

import { input } from '#core/input.ts'

const posicao = Number(input('Posição de chegada: '))

switch (posicao) {
  case 1:
    console.log('Ouro')
    break
  case 2:
    console.log('Prata')
    break
  case 3:
    console.log('Bronze')
    break
  default:
    console.log('Sem medalha, mas valeu a participação')
}

// Execute com:
// tsx ~/LPPOO/15102026/0019-escolha/E037.ts
