// Aula 02 · Exemplo 16 · Funções tipadas, opcional, padrão e void
// Boletim com conceito.

function media(notas: number[]): number {
  return notas.reduce((acc, n) => acc + n, 0) / notas.length
}

function conceito(nota: number): string {
  if (nota >= 9) return 'A'
  if (nota >= 7) return 'B'
  if (nota >= 6) return 'C'
  return 'D'
}

function mostrarBoletim(nome: string, notas: number[], casas: number = 1, recado?: string): void {
  const m = media(notas)
  console.log(`${nome}: média ${m.toFixed(casas)}, conceito ${conceito(m)}`)
  if (recado !== undefined) console.log(`  Recado: ${recado}`) // o recado é opcional
}

mostrarBoletim('Ana', [9, 10, 8.5]) // Ana: média 9.2, conceito A
mostrarBoletim('Bia', [6, 5, 7.5], 2, 'Faltou entregar a lista 3') // Bia: média 6.17, conceito C
