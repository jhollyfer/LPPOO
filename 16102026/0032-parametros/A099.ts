// A099 · Função void que só desenha

function linha(tamanho: number = 20, simbolo: string = '-'): void {
  console.log(simbolo.repeat(tamanho))
}

linha()
console.log('  CANTINA DO CETAM')
linha(20, '=')
