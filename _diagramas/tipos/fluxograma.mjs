// Fluxograma: o caminho que o programa faz, com as formas de sempre
// (início/fim, entrada/saída, processo, decisão). A posição de cada forma é
// calculada pelo dagre. O conteúdo fica em conteudo/fluxogramas.mjs.
import dagre from '@dagrejs/dagre'
import { novoQuadro, CORES, TINTA, LARGURA, MARGEM, medir } from '../quadro.mjs'

const TAM = 28
const ESTILO = {
  terminal: CORES.roxo,
  io: CORES.azul,
  proc: CORES.verde,
  dec: CORES.amarelo,
}

// textos compridos quebram em duas linhas, perto do meio
const quebrar = (texto) => {
  if (texto.length <= 22) return [texto]
  const espacos = [...texto.matchAll(/ /g)].map((m) => m.index)
  if (!espacos.length) return [texto]
  const meio = espacos.reduce((a, b) =>
    Math.abs(b - texto.length / 2) < Math.abs(a - texto.length / 2) ? b : a,
  )
  return [texto.slice(0, meio), texto.slice(meio + 1)]
}

const tamanho = (tipo, linhas) => {
  const w = Math.max(...linhas.map((l) => medir(l, TAM)))
  const extra = (linhas.length - 1) * 36
  if (tipo === 'dec') return { width: w * 1.5 + 90, height: 150 + extra }
  if (tipo === 'terminal') return { width: Math.max(150, w + 70), height: 76 }
  if (tipo === 'io') return { width: Math.max(190, w + 110), height: 90 + extra }
  return { width: Math.max(190, w + 60), height: 90 + extra }
}

// desenha uma forma com o centro em (x, y)
function forma(q, tipo, x, y, w, h, linhas) {
  const cor = ESTILO[tipo]
  const esq = x - w / 2
  const topo = y - h / 2
  if (tipo === 'terminal') q.caixa(esq, topo, w, h, cor, h / 2)
  else if (tipo === 'proc') q.caixa(esq, topo, w, h, cor, 10)
  else if (tipo === 'io') {
    const inc = 26
    q.poligono(
      [
        [esq + inc, topo],
        [esq + w, topo],
        [esq + w - inc, topo + h],
        [esq, topo + h],
      ],
      cor,
    )
  } else {
    q.poligono(
      [
        [x, topo],
        [esq + w, y],
        [x, topo + h],
        [esq, y],
      ],
      cor,
    )
  }
  const y0 = y - ((linhas.length - 1) * 36) / 2 + 10
  linhas.forEach((l, i) => q.texto(x, y0 + i * 36, l, { tam: TAM, ancora: 'middle' }))
}

// quebra a frase do subtítulo em linhas de até ~80 letras
const linhasDe = (frase) => {
  const linhas = ['']
  for (const p of frase.split(' ')) {
    if ((linhas.at(-1) + ' ' + p).length > 80) linhas.push(p)
    else linhas[linhas.length - 1] = (linhas.at(-1) + ' ' + p).trim()
  }
  return linhas
}

export function desenharFluxograma(pasta, grafo, frase) {
  const g = new dagre.graphlib.Graph()
  // sem decisão, o caminho é uma linha só e fica deitado; com decisão, em pé
  const deitado = !grafo.nos.some((n) => n.tipo === 'dec')
  g.setGraph({
    rankdir: deitado ? 'LR' : 'TB',
    nodesep: 60,
    ranksep: deitado ? 70 : 60,
    marginx: 0,
    marginy: 0,
  })
  g.setDefaultEdgeLabel(() => ({}))
  const linhas = {}
  for (const no of grafo.nos) {
    linhas[no.id] = quebrar(no.texto)
    g.setNode(no.id, tamanho(no.tipo, linhas[no.id]))
  }
  for (const s of grafo.setas) {
    if (!g.hasNode(s.de) || !g.hasNode(s.para)) throw new Error(`${pasta}: seta ${s.de} -> ${s.para} sem nó`)
    g.setEdge(s.de, s.para, s.rotulo ? { width: medir(s.rotulo, 24) + 20, height: 30, labelpos: 'c' } : {})
  }
  dagre.layout(g)

  const q = novoQuadro()
  const assunto = grafo.titulo.replace(/^\d+ · /, '')
  const topo = q.cabecalho(`Fluxograma · ${assunto}`, frase ? linhasDe(frase) : []) + 70

  // o desenho é encolhido se não couber na largura
  const { width: gw, height: gh } = g.graph()
  const escala = Math.min(1, (LARGURA - 2 * MARGEM) / gw)
  const x0 = (LARGURA - gw * escala) / 2
  const inicio = q.partes.length

  for (const no of grafo.nos) {
    const n = g.node(no.id)
    forma(q, no.tipo, n.x, n.y, n.width, n.height, linhas[no.id])
  }
  for (const s of grafo.setas) {
    const e = g.edge(s.de, s.para)
    const pontos = e.points.map((p) => [p.x, p.y])
    const cor = s.rotulo === 'Sim' ? TINTA.verde : s.rotulo === 'Não' ? TINTA.vermelho : TINTA.cinza
    q.seta(pontos, { cor })
    if (s.rotulo) q.texto(e.x, e.y + 8, s.rotulo, { tam: 24, cor, ancora: 'middle' })
  }
  const desenho = q.partes.splice(inicio)
  q.partes.push(`<g transform="translate(${x0} ${topo}) scale(${escala})">`, ...desenho, '</g>')

  // legenda das formas
  const yl = topo + gh * escala + 80
  const itens = [
    ['terminal', 'início / fim'],
    ['io', 'entrada / saída'],
    ['proc', 'processo'],
    ['dec', 'decisão'],
  ]
  let xl = MARGEM
  for (const [tipo, nome] of itens) {
    const w = tipo === 'dec' ? 70 : 80
    forma(q, tipo, xl + w / 2, yl, w, tipo === 'dec' ? 46 : 36, [])
    q.texto(xl + w + 16, yl + 9, nome, { tam: 24, cor: '#495057' })
    xl += w + 40 + medir(nome, 24) + 40
  }
  return q.svg(`Fluxograma: ${assunto}`, yl + 60)
}
