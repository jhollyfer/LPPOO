// A088 · Número ou texto

function mostrarNota(nota: number | string): string {
  return `Nota: ${nota}`
}

console.log(mostrarNota(8)) // Nota: 8
console.log(mostrarNota('A')) // Nota: A
