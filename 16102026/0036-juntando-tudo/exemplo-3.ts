// Exemplo 3 - Maior, menor e notas em ordem

const notas: number[] = [8, 5, 9, 7]

const ordenadas = notas.slice().sort((a, b) => a - b)

console.log(`Menor: ${ordenadas[0]}`) // 5
console.log(`Maior: ${ordenadas[ordenadas.length - 1]}`) // 9
console.log(`Em ordem: ${ordenadas.join(' < ')}`) // 5 < 7 < 8 < 9
console.log(`Original: ${notas.join(', ')}`) // 8, 5, 9, 7
