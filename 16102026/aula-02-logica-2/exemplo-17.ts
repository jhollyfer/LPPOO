// Aula 02 · Exemplo 17 · Arrow functions, callbacks e tipo de função
// Tabela de qualquer operação.

type Operacao = (a: number, b: number) => number

const somar: Operacao = (a, b) => a + b
const multiplicar: Operacao = (a, b) => a * b

function tabela(numero: number, op: Operacao, simbolo: string): void {
  for (let i = 1; i <= 5; i++) {
    console.log(`${numero} ${simbolo} ${i} = ${op(numero, i)}`)
  }
}

tabela(3, somar, '+')
tabela(3, multiplicar, 'x')
tabela(3, (a, b) => a ** b, '^') // arrow escrita na hora: potência
