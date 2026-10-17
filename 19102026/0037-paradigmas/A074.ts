// A074 · Função que muda o mundo lá fora x função que só devolve

let total = 0

// imperativa: muda a variável total, que está fora dela
function somarNoTotal(valor: number): void {
  total += valor
}

// funcional: não mexe em nada fora; recebe e devolve
function somar(a: number, b: number): number {
  return a + b
}

somarNoTotal(10)
somarNoTotal(5)
console.log(total) // 15
console.log(somar(10, 5)) // 15, e nada lá fora mudou
