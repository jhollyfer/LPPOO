// A072 · O mesmo relatório numa função void, com for...of

function mostrarRelatorio(notas: number[]): void {
  const media = notas.reduce((acc, n) => acc + n, 0) / notas.length
  console.log(`Média: ${media.toFixed(2)}`)

  let posicao = 1
  for (const nota of notas) {
    const situacao = nota >= 6 ? 'ok' : 'atenção'
    console.log(`Nota ${posicao}: ${nota} (${situacao})`)
    posicao++
  }
}

mostrarRelatorio([8, 5, 9])
