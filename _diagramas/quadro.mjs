// O "quadro" onde todo diagrama é desenhado: traço à mão (rough.js), fonte do
// Excalidraw, título com a barrinha roxa e setas. Cada tipo de diagrama
// (tipos/*.mjs) usa estas peças.
import { readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import rough from 'roughjs'

const FONTE = readFileSync(
  join(dirname(fileURLToPath(import.meta.url)), 'fonte/Excalifont-Regular.woff2'),
).toString('base64')

export const LARGURA = 1600
export const MARGEM = 110
export const ESCURO = '#1e1e1e'

// cor da borda, do preenchimento e do rótulo de cada caixa
export const CORES = {
  azul: { borda: '#1971c2', fundo: '#d0ebff', texto: '#1864ab' },
  roxo: { borda: '#9c36b5', fundo: '#e5dbff', texto: '#862e9c' },
  verde: { borda: '#2f9e44', fundo: '#d3f9d8', texto: '#2b8a3e' },
  amarelo: { borda: '#e8590c', fundo: '#ffec99', texto: '#d9480f' },
  vermelho: { borda: '#e03131', fundo: '#ffc9c9', texto: '#c92a2a' },
  cinza: { borda: '#868e96', fundo: '#f1f3f5', texto: '#495057' },
}
export const TINTA = {
  roxo: '#9c36b5',
  verde: '#2f9e44',
  vermelho: '#e03131',
  azul: '#1971c2',
  cinza: '#868e96',
}

const escapar = (s) =>
  String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')

// largura aproximada de um texto na Excalifont
export const medir = (s, tam) => String(s).length * tam * 0.55

export function novoQuadro() {
  const gen = rough.generator()
  let semente = 1
  const partes = []
  const opcoes = (extra) => ({ roughness: 1.1, bowing: 1, strokeWidth: 2.5, seed: semente++, ...extra })

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

  const solido = (cor) => opcoes({ stroke: cor.borda, fill: cor.fundo, fillStyle: 'solid' })

  // caixa de cantos arredondados; r grande vira pílula
  const caixa = (x, y, w, h, cor, r = 22) => {
    r = Math.min(r, h / 2, w / 2)
    const d = `M ${x + r} ${y} L ${x + w - r} ${y} Q ${x + w} ${y} ${x + w} ${y + r} L ${x + w} ${y + h - r} Q ${x + w} ${y + h} ${x + w - r} ${y + h} L ${x + r} ${y + h} Q ${x} ${y + h} ${x} ${y + h - r} L ${x} ${y + r} Q ${x} ${y} ${x + r} ${y} Z`
    forma(gen.path(d, solido(cor)))
  }
  const poligono = (pontos, cor) => forma(gen.polygon(pontos, solido(cor)))

  // título + subtítulo; devolve onde o cabeçalho termina
  const cabecalho = (titulo, subtitulo) => {
    const linhas = [].concat(subtitulo ?? [])
    const fim = 140 + linhas.length * 42
    forma(gen.line(80, 70, 80, fim - 20, opcoes({ stroke: '#b197fc', strokeWidth: 4, roughness: 0.6 })))
    texto(MARGEM, 120, titulo, { tam: Math.min(54, (LARGURA - 2 * MARGEM) / (titulo.length * 0.55)) })
    linhas.forEach((l, i) => texto(MARGEM, 175 + i * 42, l, { tam: 30, cor: '#495057' }))
    return fim
  }

  // seta passando pelos pontos; o rótulo fica no trecho mais comprido
  const seta = (pontos, { cor = TINTA.roxo, rotulo, dx = 0, dy } = {}) => {
    forma(gen.linearPath(pontos, opcoes({ stroke: cor, roughness: 0.8 })))
    const [px, py] = pontos.at(-1)
    const [ux, uy] = pontos.at(-2)
    const ang = Math.atan2(py - uy, px - ux)
    for (const abre of [0.45, -0.45]) {
      const ponta = [px - 22 * Math.cos(ang + abre), py - 22 * Math.sin(ang + abre)]
      forma(gen.line(px, py, ...ponta, opcoes({ stroke: cor, roughness: 0.6 })))
    }
    if (!rotulo) return
    const tamanho = (k) => Math.hypot(pontos[k + 1][0] - pontos[k][0], pontos[k + 1][1] - pontos[k][1])
    let i = 0
    for (let k = 1; k < pontos.length - 1; k++) if (tamanho(k) > tamanho(i)) i = k
    const [qx, qy] = pontos[i]
    const [rx, ry] = pontos[i + 1]
    const deitada = Math.abs(qy - ry) < 4
    const mx = (qx + rx) / 2 + dx
    const my = (qy + ry) / 2 + (dy ?? (deitada ? -14 : 0))
    texto(deitada ? mx : mx + 14, my, rotulo, { tam: 24, cor, ancora: deitada ? 'middle' : 'start' })
  }

  // frase final em roxo; devolve a altura total do quadro
  const rodape = (fundo, frase) => {
    if (!frase) return fundo + 70
    const linhas = [].concat(frase)
    const y0 = fundo + 90
    linhas.forEach((l, i) => texto(MARGEM, y0 + i * 40, l, { tam: 30, cor: '#862e9c' }))
    return y0 + (linhas.length - 1) * 40 + 60
  }

  // o grupo vem antes do svg final, para dar para escalar o conteúdo
  const svg = (
    titulo,
    altura,
    largura = LARGURA,
  ) => `<svg xmlns="http://www.w3.org/2000/svg" width="${largura}" height="${altura}" viewBox="0 0 ${largura} ${altura}">
<title>${escapar(titulo)}</title>
<style>@font-face{font-family:Excalifont;src:url(data:font/woff2;base64,${FONTE}) format('woff2')}text{font-family:Excalifont,'Comic Sans MS',cursive;white-space:pre}</style>
<rect width="100%" height="100%" fill="#ffffff"/>
${partes.join('\n')}
</svg>
`

  return { gen, opcoes, forma, texto, caixa, poligono, cabecalho, seta, rodape, svg, partes }
}
