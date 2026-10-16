// Diagrama da ideia: caixas coloridas e setas explicando o assunto, como um
// slide do Excalidraw. O conteúdo fica em conteudo/ideias.mjs.
import { novoQuadro, CORES, TINTA } from '../quadro.mjs'

export function desenharIdeia(d) {
  const q = novoQuadro()
  let fundo = q.cabecalho(d.titulo, d.subtitulo)

  const caixas = new Map()
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
      q.poligono(
        [
          [x + w / 2, y],
          [x + w, y + h / 2],
          [x + w / 2, y + h],
          [x, y + h / 2],
        ],
        cor,
      )
      const topo = y + h / 2 - ((linhas.length - 1) * 38) / 2 + 10
      linhas.forEach((l, i) => q.texto(x + w / 2, topo + i * 38, l, { tam: 28, ancora: 'middle' }))
      continue
    }

    q.caixa(x, y, w, h, cor)
    let ty = y + 50
    if (c.rotulo) {
      // código (.trim(), Math.ceil) fica como está; o resto vai em maiúsculas
      const rotulo = /[.()]/.test(c.rotulo) ? c.rotulo : c.rotulo.toUpperCase()
      q.texto(x + 26, ty, rotulo, { tam: 24, cor: cor.texto })
      ty += 52
    } else {
      ty = y + h / 2 - ((linhas.length - 1) * 40) / 2 + 10
    }
    linhas.forEach((l, i) => q.texto(x + 26, ty + i * 40, l, { tam: 30 }))
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
  const folga = ([px, py], lado) => {
    const [vx, vy] = { d: [1, 0], e: [-1, 0], c: [0, -1], b: [0, 1] }[lado]
    return [px + vx * 16, py + vy * 16]
  }
  for (const s of d.setas ?? []) {
    const a = caixas.get(s.de)
    const b = caixas.get(s.para)
    if (!a || !b) throw new Error(`${d.pasta}: seta ${s.de} -> ${s.para} aponta para caixa que não existe`)
    const [la, lb] = s.lados ? [...s.lados] : ladoAuto(a, b)
    let p1 = folga(ponto(a, la), la)
    let p2 = folga(ponto(b, lb), lb)
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
      ? 'de'.includes(la)
        ? [p1, [p2[0], p1[1]], p2]
        : [p1, [p1[0], p2[1]], p2]
      : [p1, p2]
    q.seta(pontos, { cor: TINTA[s.cor ?? 'roxo'], rotulo: s.rotulo, dx: s.dx, dy: s.dy })
  }

  // notas soltas (texto colorido, sem caixa)
  for (const n of d.notas ?? []) {
    const linhas = [].concat(n.texto)
    linhas.forEach((l, i) =>
      q.texto(n.x, n.y + i * 38, l, { tam: n.tam ?? 26, cor: TINTA[n.cor ?? 'roxo'], ancora: n.ancora }),
    )
    fundo = Math.max(fundo, n.y + (linhas.length - 1) * 38)
  }

  return q.svg(d.titulo, q.rodape(fundo, d.rodape))
}
