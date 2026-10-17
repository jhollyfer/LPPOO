// A105 · noUncheckedIndexedAccess: o item pode não existir

const notas = [8, 10, 6]

const primeira = notas[0] // number | undefined
if (primeira !== undefined) {
  console.log(primeira.toFixed(1))
}

const decima = notas[9] // não existe: undefined
console.log(decima ?? 'sem nota na posição 9')
