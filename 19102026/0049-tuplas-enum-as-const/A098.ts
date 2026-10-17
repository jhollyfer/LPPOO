// A098 · enum Nivel: o nível do curso de inglês

enum Nivel {
  Basico = 'básico',
  Avancado = 'avançado',
}

function aulasPorSemana(n: Nivel): number {
  return n === Nivel.Basico ? 3 : 1
}

console.log(`Nível ${Nivel.Avancado}: ${aulasPorSemana(Nivel.Avancado)} aula por semana`) // Nível avançado: 1 aula por semana
