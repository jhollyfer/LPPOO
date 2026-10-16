// A090 · As 3 maiores notas

const notas: number[] = [7, 10, 5, 9, 8]

const top3 = notas
  .slice()
  .sort((a, b) => b - a) // do maior para o menor
  .slice(0, 3) // pega da posição 0 até antes da 3

console.log(`Pódio: ${top3.join(', ')}`) // 10, 9, 8
