// A063 · Os pontos da gincana

const pontos: number[] = [30, 15, 40, 10] // uma equipe em cada posição

const naFinal = pontos.map((p) => p * 2) // na final, cada ponto vale dois
const passaram = pontos.filter((p) => p >= 20)
const total = pontos.reduce((acc, p) => acc + p, 0)

console.log(naFinal) // [ 60, 30, 80, 20 ]
console.log(passaram) // [ 30, 40 ]
console.log(total) // 95
passaram.forEach((p) => console.log(`Equipe com ${p} pontos vai para a final`))
