// 0016 · Condicional composta (if / else)
// Exercício E032
//
// Peça a senha do celular e mostre `Desbloqueado` ou `Senha incorreta`.
// Invente a senha certa e guarde numa constante.
//
// Dicas:
// 1. Crie a constante com a senha antes do `input`.
// 2. Compare a senha digitada com a constante usando `===`.
// 3. O `else` cuida de todo o resto, não precisa de outra condição.
//
// Para ler dados do teclado use:
// import { input } from '#core/input.ts'
//
// Escreva sua resposta abaixo:

import { input } from '#core/input.ts'

const senhaCerta = '1234'

const senha = input('Digite a senha do celular: ')

if (senha === senhaCerta) {
  console.log('Desbloqueado')
} else {
  console.log('Senha incorreta')
}
