// A067 · type Pontuacao para os modos do jogo

type Pontuacao = (acertos: number) => number

const modoFacil: Pontuacao = (acertos) => acertos * 10
const modoDificil: Pontuacao = (acertos) => acertos * 25

function mostrarPontos(acertos: number, modo: Pontuacao): void {
  console.log(`${acertos} acertos: ${modo(acertos)} pontos`)
}

mostrarPontos(4, modoFacil) // 4 acertos: 40 pontos
mostrarPontos(4, modoDificil) // 4 acertos: 100 pontos
