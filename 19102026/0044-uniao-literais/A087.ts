// A087 · A dificuldade do jogo

type Dificuldade = 'fácil' | 'médio' | 'difícil'
type Jogador = string | number // o apelido ou o número da camisa

function vidas(nivel: Dificuldade): number {
  if (nivel === 'fácil') return 5
  if (nivel === 'médio') return 3
  return 1
}

const escolhida: Dificuldade = 'médio'
const jogador1: Jogador = 'Boto'
const jogador2: Jogador = 10

console.log(`${jogador1} começa com ${vidas(escolhida)} vidas`) // Boto começa com 3 vidas
console.log(`Jogador ${jogador2} começa com ${vidas('difícil')} vida`) // Jogador 10 começa com 1 vida

// vidas('impossível')
// erro: Argument of type '"impossível"' is not assignable
//       to parameter of type 'Dificuldade'.
