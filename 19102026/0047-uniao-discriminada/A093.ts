// A093 · Como cada aluno chega à escola

type Trajeto = { meio: 'ônibus'; linha: string } | { meio: 'barco'; horas: number }

function contar(t: Trajeto): string {
  switch (t.meio) {
    case 'ônibus':
      return `Pega o ônibus ${t.linha}` // aqui t tem linha
    case 'barco':
      return `Vem de barco: ${t.horas}h de rio` // aqui t tem horas
  }
}

console.log(contar({ meio: 'barco', horas: 2 })) // Vem de barco: 2h de rio
