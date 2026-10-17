// A049 · Quantos dias choveu

const chuvaMm: number[] = [0, 12, 30, 0, 5] // milímetros de segunda a sexta
let diasComChuva = 0

for (const mm of chuvaMm) {
  if (mm > 0) {
    diasComChuva++
  }
}

console.log(`Choveu em ${diasComChuva} dias`) // Choveu em 3 dias
