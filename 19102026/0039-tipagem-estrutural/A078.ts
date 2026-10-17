// A078 · Dois tipos com nomes diferentes e o mesmo formato

type Ponto = { x: number; y: number }
type Coordenada = { x: number; y: number }

function distanciaDaOrigem(p: Ponto): number {
  return Math.sqrt(p.x ** 2 + p.y ** 2)
}

const escola: Coordenada = { x: 3, y: 4 }
console.log(distanciaDaOrigem(escola)) // 5: Coordenada serve onde pede Ponto
