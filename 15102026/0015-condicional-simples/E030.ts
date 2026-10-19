// 0015 · Condicional simples (if)
// Exercício E030
//
// Peça a senha do Wi-Fi da escola e, se for igual a `cetam`, mostre
// `Conectado!`.
//
// Dicas:
// 1. Comparar texto com texto é com `===`.
// 2. Guarde a senha certa numa constante.
// 3. Teste digitando `CETAM` em maiúsculo. O que acontece?
//
// Para ler dados do teclado use:
// import { input } from '#core/input.ts'
//
// Escreva sua resposta abaixo:

import { input } from '#core/input.ts'

const senhaCerta = 'cetam'

const senha = input('Digite a senha do Wi-Fi: ')

if (senha === senhaCerta) {
  console.log('Conectado!')
}

// Execute com:
// tsx ~/LPPOO/15102026/0015-condicional-simples/E030.ts
