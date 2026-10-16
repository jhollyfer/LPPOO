// Gera o diagrama.svg de cada pasta da aula, no estilo Excalidraw.
//
//   npm run gerar          todas as pastas
//   npm run gerar -- 0017  só as pastas que contêm "0017"
//
// O conteúdo de cada diagrama fica em diagramas.mjs.
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import rough from 'roughjs'
import { diagramas } from './diagramas.mjs'

const AQUI = dirname(fileURLToPath(import.meta.url))
const RAIZ = join(AQUI, '..')
const FONTE = readFileSync(join(AQUI, 'fonte/Excalifont-Regular.woff2')).toString('base64')

const LARGURA = 1600
const MARGEM = 110

// cor da borda, do preenchimento e do rótulo de cada caixa
const CORES = {
  azul: { borda: '#1971c2', fundo: '#d0ebff', texto: '#1864ab' },
  roxo: { borda: '#9c36b5', fundo: '#e5dbff', texto: '#862e9c' },
  verde: { borda: '#2f9e44', fundo: '#d3f9d8', texto: '#2b8a3e' },
  amarelo: { borda: '#e8590c', fundo: '#ffec99', texto: '#d9480f' },
  vermelho: { borda: '#e03131', fundo: '#ffc9c9', texto: '#c92a2a' },
  cinza: { borda: '#868e96', fundo: '#f1f3f5', texto: '#495057' },
}
const ESCURO = '#1e1e1e'
const SETA = { roxo: '#9c36b5', verde: '#2f9e44', vermelho: '#e03131', azul: '#1971c2', cinza: '#868e96' }

const escapar = (s) =>
  String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')

function desenhar(d) {
  const gen = rough.generator()
  let semente = 1
  const opcoes = (extra) => ({ roughness: 1.1, bowing: 1, strokeWidth: 2.5, seed: semente++, ...extra })
  const partes = []

  const forma = (desenho) => {
    for (const p of gen.toPaths(desenho)) {
      partes.push(
        `<path d="${p.d}" stroke="${p.stroke}" stroke-width="${p.strokeWidth}" fill="${p.fill ?? 'none'}" stroke-linecap="round" stroke-linejoin="round"/>`,
      )
    }
  }
  const texto = (x, y, conteudo, { tam = 30, cor = ESCURO, ancora = 'start' } = {}) => {
    partes.push(
      `<text x="${x}" y="${y}" font-size="${tam}" fill="${cor}" text-anchor="${ancora}">${escapar(conteudo)}</text>`,
    )
  }

  // título com a barrinha roxa do lado
  const linhasSub = [].concat(d.subtitulo ?? [])
  const fimCabecalho = 140 + linhasSub.length * 42
  forma(
    gen.line(80, 70, 80, fimCabecalho - 20, opcoes({ stroke: '#b197fc', strokeWidth: 4, roughness: 0.6 })),
  )
  texto(MARGEM, 120, d.titulo, { tam: 54 })
  linhasSub.forEach((l, i) => texto(MARGEM, 175 + i * 42, l, { tam: 30, cor: '#495057' }))

  // caixas
  const caixas = new Map()
  let fundo = fimCabecalho
  for (const c of d.caixas) {
    const cor = CORES[c.cor ?? 'azul']
    const linhas = [].concat(c.texto ?? [])
    const losango = c.forma === 'losango'
    const w = c.w ?? (losango ? 300 : 320)
    const h = c.h ?? (losango ? 200 : 150 + Math.max(0, linhas.length - 1) * 40)
    const { x, y } = c
    caixas.set(c.id, { x, y, w, h })
    fundo = Math.max(fundo, y + h)

    if (losango) {
      forma(
        gen.polygon(
          [
            [x + w / 2, y],
            [x + w, y + h / 2],
            [x + w / 2, y + h],
            [x, y + h / 2],
          ],
          opcoes({ stroke: cor.borda, fill: cor.fundo, fillStyle: 'solid' }),
        ),
      )
      const topo = y + h / 2 - ((linhas.length - 1) * 38) / 2 + 10
      linhas.forEach((l, i) => texto(x + w / 2, topo + i * 38, l, { tam: 28, ancora: 'middle' }))
      continue
    }

    const r = 22
    const caminho = `M ${x + r} ${y} L ${x + w - r} ${y} Q ${x + w} ${y} ${x + w} ${y + r} L ${x + w} ${y + h - r} Q ${x + w} ${y + h} ${x + w - r} ${y + h} L ${x + r} ${y + h} Q ${x} ${y + h} ${x} ${y + h - r} L ${x} ${y + r} Q ${x} ${y} ${x + r} ${y} Z`
    forma(gen.path(caminho, opcoes({ stroke: cor.borda, fill: cor.fundo, fillStyle: 'solid' })))
    let ty = y + 50
    if (c.rotulo) {
      // código (.trim(), Math.ceil) fica como está; o resto vai em maiúsculas
      texto(x + 26, ty, /[.()]/.test(c.rotulo) ? c.rotulo : c.rotulo.toUpperCase(), {
        tam: 24,
        cor: cor.texto,
      })
      ty += 52
    } else {
      ty = y + h / 2 - ((linhas.length - 1) * 40) / 2 + 10
    }
    linhas.forEach((l, i) => texto(x + 26, ty + i * 40, l, { tam: 30 }))
  }

  // setas: saem do lado de uma caixa e chegam no lado da outra
  const ponto = (b, lado) =>
    ({
      d: [b.x + b.w, b.y + b.h / 2],
      e: [b.x, b.y + b.h / 2],
      c: [b.x + b.w / 2, b.y],
      b: [b.x + b.w / 2, b.y + b.h],
    })[lado]
  const ladoAuto = (a, b) => {
    const dx = b.x + b.w / 2 - (a.x + a.w / 2)
    const dy = b.y + b.h / 2 - (a.y + a.h / 2)
    if (Math.abs(dx) >= Math.abs(dy)) return dx > 0 ? ['d', 'e'] : ['e', 'd']
    return dy > 0 ? ['b', 'c'] : ['c', 'b']
  }
  for (const s of d.setas ?? []) {
    const a = caixas.get(s.de)
    const b = caixas.get(s.para)
    if (!a || !b) throw new Error(`${d.pasta}: seta ${s.de} -> ${s.para} aponta para caixa que não existe`)
    const [la, lb] = s.lados ? [...s.lados] : ladoAuto(a, b)
    const folga = 16
    const ajusta = ([px, py], lado, sinal) => {
      const [vx, vy] = { d: [1, 0], e: [-1, 0], c: [0, -1], b: [0, 1] }[lado]
      return [px + vx * folga * sinal, py + vy * folga * sinal]
    }
    let p1 = ajusta(ponto(a, la), la, 1)
    let p2 = ajusta(ponto(b, lb), lb, 1)
    // caixas lado a lado: a seta sai reta, no meio da parte em comum
    if (!s.lados && !s.cotovelo) {
      if ('de'.includes(la)) {
        const topo = Math.max(a.y, b.y)
        const base = Math.min(a.y + a.h, b.y + b.h)
        if (base - topo > 40) ((p1 = [p1[0], (topo + base) / 2]), (p2 = [p2[0], (topo + base) / 2]))
      } else {
        const esq = Math.max(a.x, b.x)
        const dir = Math.min(a.x + a.w, b.x + b.w)
        if (dir - esq > 40) ((p1 = [(esq + dir) / 2, p1[1]]), (p2 = [(esq + dir) / 2, p2[1]]))
      }
    }
    // com cotovelo: anda reto e depois vira
    const pontos = s.cotovelo
      ? la === 'd' || la === 'e'
        ? [p1, [p2[0], p1[1]], p2]
        : [p1, [p1[0], p2[1]], p2]
      : [p1, p2]
    const cor = SETA[s.cor ?? 'roxo']
    forma(gen.linearPath(pontos, opcoes({ stroke: cor, roughness: 0.8 })))
    const [ux, uy] = pontos.at(-2)
    const ang = Math.atan2(p2[1] - uy, p2[0] - ux)
    for (const abre of [0.45, -0.45]) {
      forma(
        gen.line(
          p2[0],
          p2[1],
          p2[0] - 22 * Math.cos(ang + abre),
          p2[1] - 22 * Math.sin(ang + abre),
          opcoes({ stroke: cor, roughness: 0.6 }),
        ),
      )
    }
    if (s.rotulo) {
      // o rótulo fica no trecho mais comprido da seta
      let i = 0
      const tamanho = (k) => Math.hypot(pontos[k + 1][0] - pontos[k][0], pontos[k + 1][1] - pontos[k][1])
      for (let k = 1; k < pontos.length - 1; k++) if (tamanho(k) > tamanho(i)) i = k
      const [qx, qy] = pontos[i]
      const [rx, ry] = pontos[i + 1]
      const deitada = Math.abs(qy - ry) < 4
      const mx = (qx + rx) / 2 + (s.dx ?? 0)
      const my = (qy + ry) / 2 + (s.dy ?? (deitada ? -14 : 0))
      texto(deitada ? mx : mx + 14, my, s.rotulo, { tam: 24, cor, ancora: deitada ? 'middle' : 'start' })
    }
  }

  // notas soltas (texto colorido, sem caixa)
  for (const n of d.notas ?? []) {
    const linhas = [].concat(n.texto)
    linhas.forEach((l, i) =>
      texto(n.x, n.y + i * 38, l, { tam: n.tam ?? 26, cor: SETA[n.cor ?? 'roxo'], ancora: n.ancora }),
    )
    fundo = Math.max(fundo, n.y + (linhas.length - 1) * 38)
  }

  // frase final, embaixo de tudo
  let altura = fundo + 70
  if (d.rodape) {
    const linhas = [].concat(d.rodape)
    const y0 = fundo + 90
    linhas.forEach((l, i) => texto(MARGEM, y0 + i * 40, l, { tam: 30, cor: '#862e9c' }))
    altura = y0 + (linhas.length - 1) * 40 + 60
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${LARGURA}" height="${altura}" viewBox="0 0 ${LARGURA} ${altura}">
<title>${escapar(d.titulo)}</title>
<style>@font-face{font-family:Excalifont;src:url(data:font/woff2;base64,${FONTE}) format('woff2')}text{font-family:Excalifont,'Comic Sans MS',cursive;white-space:pre}</style>
<rect width="100%" height="100%" fill="#ffffff"/>
${partes.join('\n')}
</svg>
`
}

const filtro = process.argv[2] ?? ''
const aulas = readdirSync(RAIZ).filter((n) => /^\d{8}$/.test(n))
let gerados = 0
for (const d of diagramas) {
  if (!d.pasta.includes(filtro)) continue
  const aula = aulas.find((a) => existsSync(join(RAIZ, a, d.pasta)))
  if (!aula) throw new Error(`pasta ${d.pasta} não encontrada`)
  const destino = join(RAIZ, aula, d.pasta, 'diagrama.svg')
  writeFileSync(destino, desenhar(d))
  console.log(`ok  ${aula}/${d.pasta}/diagrama.svg`)
  gerados++
}
if (!gerados) console.log(`nenhum diagrama com "${filtro}"`)
