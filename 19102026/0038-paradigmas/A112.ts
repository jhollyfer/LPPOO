// A112 · A média nos três estilos

const notas: number[] = [8, 7, 9]

let soma = 0
for (const nota of notas) soma += nota
console.log(`Imperativo: ${soma / notas.length}`)

const media = (valores: number[]): number => valores.reduce((a, b) => a + b, 0) / valores.length
console.log(`Funcional: ${media(notas)}`)

class Turma {
  private notas: number[]
  constructor(notas: number[]) {
    this.notas = notas
  }
  media(): number {
    return this.notas.reduce((a, b) => a + b, 0) / this.notas.length
  }
}
console.log(`Objetos: ${new Turma(notas).media()}`)
