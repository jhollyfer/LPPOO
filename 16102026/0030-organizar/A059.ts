// A059 · Ordenar uma cópia

const notas: number[] = [8, 10, 6, 9]

const copia = notas.slice()
copia.sort((a, b) => a - b)
copia.reverse()

console.log(copia.join(' | ')) // 10 | 9 | 8 | 6
console.log(notas.concat([7])) // [ 8, 10, 6, 9, 7 ]
console.log(notas) // [ 8, 10, 6, 9 ]
