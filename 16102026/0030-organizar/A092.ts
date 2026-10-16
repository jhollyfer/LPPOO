// A092 · O perigo do sort sem regra

const numeros: number[] = [8, 10, 6, 9]

console.log(numeros.slice().sort()) // [ 10, 6, 8, 9 ]: comparou como texto
console.log(numeros.slice().sort((a, b) => a - b)) // [ 6, 8, 9, 10 ]
