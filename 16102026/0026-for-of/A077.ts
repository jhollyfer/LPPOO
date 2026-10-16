// A077 · Somar as notas

const notas: number[] = [8, 6, 9]
let soma = 0

for (const nota of notas) {
  soma += nota
}

console.log(`Soma: ${soma}`) // 23
console.log(`Média: ${(soma / notas.length).toFixed(1)}`) // 7.7
