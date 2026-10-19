// 0019 · Estrutura de escolha (switch)
// Exercício E038
//
// Faça uma calculadora com menu de 4 operações (+, -, *, /). Peça a operação e
// dois números e mostre o resultado.
//
// Dicas:
// 1. O `switch` é sobre a operação digitada, que é texto: `case '+'`.
// 2. Converta os dois números com `Number` antes das contas.
// 3. Coloque um `default` para operação inválida.
// 4. Teste a divisão por zero e veja o que aparece.
//
// Para ler dados do teclado use:
// import { input } from '#core/input.ts'
//
// Escreva sua resposta abaixo:

import { input } from '#core/input.ts'

const operacao = input('Operação (+, -, *, /): ')
const a = Number(input('Digite o primeiro número: '))
const b = Number(input('Digite o segundo número: '))

switch (operacao) {
  case '+':
    console.log(a + b)
    break
  case '-':
    console.log(a - b)
    break
  case '*':
    console.log(a * b)
    break
  case '/':
    console.log(a / b)
    break
  default:
    console.log('Operação inválida')
}

// Execute com:
// tsx ~/LPPOO/15102026/0019-escolha/E038.ts
