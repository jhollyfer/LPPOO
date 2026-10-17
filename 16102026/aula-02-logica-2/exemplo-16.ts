// Aula 02 · Exemplo 16 · Funções tipadas, opcional, padrão e void
// Boletim com situação.

function situacao(media: number): string {
  return media >= 6 ? 'aprovada' : 'em recuperação'
}

function mostrarBoletim(nome: string, media: number, casas: number = 1, recado?: string): void {
  console.log(`${nome}: média ${media.toFixed(casas)}, ${situacao(media)}`)
  if (recado !== undefined) console.log(`  Recado: ${recado}`) // o recado é opcional
}

mostrarBoletim('Ana', 8) // Ana: média 8.0, aprovada
mostrarBoletim('Bia', 5.5, 2, 'Faltou entregar a lista 3') // Bia: média 5.50, em recuperação
