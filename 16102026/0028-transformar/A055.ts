// A055 · Os pontos da gincana

const pontos: number[] = [30, 15, 40, 10] // uma equipe em cada posição

const comBonus = pontos.map((p) => p + 5)
const passaram = pontos.filter((p) => p >= 20)
const total = pontos.reduce((acc, p) => acc + p, 0)

console.log(comBonus) // [ 35, 20, 45, 15 ]
console.log(passaram) // [ 30, 40 ]
console.log(total) // 95
passaram.forEach((p) => console.log(`Equipe com ${p} pontos vai para a final`))
