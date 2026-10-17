// A091 · Como cada aluno chega à escola

type Trajeto =
  | { meio: 'ônibus'; linha: string }
  | { meio: 'barco'; horas: number }
  | { meio: 'a pé'; minutos: number }

function contar(t: Trajeto): string {
  switch (t.meio) {
    case 'ônibus':
      return `Pega o ônibus ${t.linha}` // aqui t tem linha
    case 'barco':
      return `Vem de barco: ${t.horas}h de rio` // aqui t tem horas
    case 'a pé':
      return `Caminha ${t.minutos} min` // aqui t tem minutos
  }
}

const turma: Trajeto[] = [
  { meio: 'ônibus', linha: '021' },
  { meio: 'barco', horas: 2 },
  { meio: 'a pé', minutos: 15 },
]
for (const t of turma) console.log(contar(t))
// Pega o ônibus 021
// Vem de barco: 2h de rio
// Caminha 15 min
