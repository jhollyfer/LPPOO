// A104 · noImplicitReturns e noFallthroughCasesInSwitch

function situacao(nota: number): string {
  if (nota >= 7) return 'aprovado'
  if (nota >= 5) return 'recuperação'
  return 'reprovado' // apague esta linha e rode pnpm tsc para ver o erro
}

function turno(codigo: number): string {
  switch (codigo) {
    case 1:
      return 'manhã'
    case 2:
      return 'tarde' // sem o return, o case 2 cairia no 3: o tsc reclama
    case 3:
      return 'noite'
    default:
      return 'desconhecido'
  }
}

console.log(situacao(6), turno(2))
