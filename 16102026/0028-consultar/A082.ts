// A082 · Perguntas para o array

const precos: number[] = [6, 25, 9]

console.log(precos.includes(25)) // true
console.log(precos.indexOf(9)) // 2
console.log(precos.indexOf(100)) // -1
console.log(precos.find((p) => p > 20)) // 25
console.log(precos.findIndex((p) => p > 20)) // 1
console.log(precos.some((p) => p > 20)) // true
console.log(precos.every((p) => p > 5)) // true
