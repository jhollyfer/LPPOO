// A106 · noFallthroughCasesInSwitch: o break esquecido

function avisar(codigo: number): void {
  switch (codigo) {
    case 1:
      console.log('Turno da manhã')
      break // apague este break e rode pnpm tsc: Fallthrough case in switch.
    case 2:
      console.log('Turno da tarde')
  }
}

avisar(1) // Turno da manhã
