// Aula 02 · Exemplo 15 · map, filter, reduce, sort e encadeamento
// As notas de recuperação valem o dobro, mas o máximo é 10.

const notas: number[] = [3, 7, 4.5, 9, 2]

const recuperadas = notas
  .filter((n) => n < 6) // [3, 4.5, 2]
  .map((n) => Math.min(n * 2, 10)) // [6, 9, 4]
  .sort((a, b) => b - a) // [9, 6, 4]

const soma = recuperadas.reduce((acc, n) => acc + n, 0)

console.log(`Notas recuperadas: ${recuperadas.join(', ')}`) // 9, 6, 4
console.log(`Média delas: ${(soma / recuperadas.length).toFixed(1)}`) // 6.3
console.log(`Original: ${notas.join(', ')}`) // 3, 7, 4.5, 9, 2
