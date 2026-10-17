// A098 · enum Nivel: o nível do curso de inglês

enum Nivel {
  Basico = 'básico',
  Intermediario = 'intermediário',
  Avancado = 'avançado',
}

function aulasPorSemana(n: Nivel): number {
  switch (n) {
    case Nivel.Basico:
      return 3
    case Nivel.Intermediario:
      return 2
    case Nivel.Avancado:
      return 1
  }
}

const nivelDaBia: Nivel = Nivel.Intermediario
console.log(`Nível ${nivelDaBia}: ${aulasPorSemana(nivelDaBia)} aulas por semana`)
// Nível intermediário: 2 aulas por semana
