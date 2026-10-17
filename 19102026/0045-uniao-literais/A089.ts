// A089 · A dificuldade do jogo

type Dificuldade = 'fácil' | 'médio' | 'difícil'

function vidas(nivel: Dificuldade): number {
  if (nivel === 'fácil') return 5
  if (nivel === 'médio') return 3
  return 1
}

console.log(`No médio, você começa com ${vidas('médio')} vidas`) // No médio, você começa com 3 vidas

// vidas('impossível')
// erro: Argument of type '"impossível"' is not assignable to parameter of type 'Dificuldade'.
