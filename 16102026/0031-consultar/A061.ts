// A061 · Os gols do time no interclasse

const gols: number[] = [2, 0, 3, 1] // um número por jogo

console.log(gols.includes(0)) // true: teve jogo sem gol
console.log(gols.indexOf(3)) // 2
console.log(gols.indexOf(5)) // -1
console.log(gols.find((g) => g >= 3)) // 3
console.log(gols.findIndex((g) => g >= 3)) // 2
console.log(gols.some((g) => g > 4)) // false
console.log(gols.every((g) => g < 4)) // true
