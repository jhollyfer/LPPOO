// Gera os desenhos de cada pasta da aula, no estilo Excalidraw:
//   ideia.svg       o diagrama da ideia (conteudo/ideias.mjs)
//   fluxograma.svg  o caminho do programa (conteudo/fluxogramas.mjs)
//
//   npm run gerar          todas as pastas
//   npm run gerar -- 0017  só as pastas que contêm "0017"
//
// Para um tipo novo de diagrama (casos de uso, sequência, classes...), crie o
// desenho em tipos/, o conteúdo em conteudo/ e acrescente na lista abaixo.
import { writeFileSync, readdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { ideias } from './conteudo/ideias.mjs'
import { fluxogramas, frases } from './conteudo/fluxogramas.mjs'
import { desenharIdeia } from './tipos/ideia.mjs'
import { desenharFluxograma } from './tipos/fluxograma.mjs'

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..')

const tipos = [
  { arquivo: 'ideia.svg', itens: ideias.map((d) => [d.pasta, () => desenharIdeia(d)]) },
  {
    arquivo: 'fluxograma.svg',
    itens: Object.entries(fluxogramas).map(([pasta, g]) => [
      pasta,
      () => desenharFluxograma(pasta, g, frases[pasta]),
    ]),
  },
]

const filtro = process.argv[2] ?? ''
const aulas = readdirSync(RAIZ).filter((n) => /^\d{8}$/.test(n))
let gerados = 0
for (const { arquivo, itens } of tipos) {
  for (const [pasta, desenhar] of itens) {
    if (!pasta.includes(filtro)) continue
    const aula = aulas.find((a) => existsSync(join(RAIZ, a, pasta)))
    if (!aula) throw new Error(`pasta ${pasta} não encontrada`)
    writeFileSync(join(RAIZ, aula, pasta, arquivo), desenhar())
    console.log(`ok  ${aula}/${pasta}/${arquivo}`)
    gerados++
  }
}
if (!gerados) console.log(`nada encontrado com "${filtro}"`)
