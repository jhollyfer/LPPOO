// A060 · Uma função sua que chama o callback para cada nota

function paraCadaNota(notas: number[], acao: (nota: number) => void): void {
  for (const nota of notas) {
    acao(nota) // chama a função que você entregou
  }
}

const mostrar = (nota: number): void => console.log(`Nota: ${nota}`)

paraCadaNota([7, 9], mostrar) // Nota: 7 / Nota: 9
paraCadaNota([7, 9], (nota: number): void => console.log(nota * 10)) // 70 / 90
