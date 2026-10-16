// A136 · typeof separa os caminhos

function formatarMatricula(m: number | string): string {
  if (typeof m === 'number') {
    return `M-${m.toString().padStart(4, '0')}`
  }
  return m.toUpperCase()
}

console.log(formatarMatricula(27))
console.log(formatarMatricula('a27'))
