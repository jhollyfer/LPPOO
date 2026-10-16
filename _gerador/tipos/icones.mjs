// Desenhos do conceito para o diagrama da ideia: caixinha com etiqueta, balão
// de fala, pessoa, terminal, cardápio, arquivo e marca de certo/errado.
// Cada função desenha a partir de (x, y) e devolve as caixas que as setas podem
// usar: { [id]: { x, y, w, h } }.
import { CORES, TINTA, medir } from '../quadro.mjs'

const cinzaTexto = '#495057'
// largura de um texto na letra de mão; maiúscula ocupa mais espaço
const largura = (s, tam) => [...String(s)].reduce((t, c) => t + (/[A-ZÀ-Ý_]/.test(c) ? 0.74 : 0.55) * tam, 0)

// caixinha com etiqueta: a variável. O nome fica na etiqueta, o valor dentro.
function caixinha(q, c) {
  const cor = CORES[c.cor ?? 'azul']
  const valor = String(c.valor ?? '')
  const wEtiqueta = largura(c.nome ?? '', 26) + 44
  const w = c.w ?? Math.max(230, largura(valor, 36) + 70, wEtiqueta + (c.cadeado ? 90 : 40))
  const h = 140
  const yCaixa = c.y + 54
  // etiqueta pendurada
  q.poligono(
    [
      [c.x + 16, c.y + 4],
      [c.x + 16 + wEtiqueta - 16, c.y + 4],
      [c.x + 16 + wEtiqueta, c.y + 24],
      [c.x + 16 + wEtiqueta - 16, c.y + 44],
      [c.x + 16, c.y + 44],
    ],
    { borda: cor.borda, fundo: '#ffffff' },
  )
  q.texto(c.x + 30, c.y + 33, c.nome ?? '', { tam: 26, cor: cor.texto })
  q.forma(q.gen.line(c.x + 40, c.y + 44, c.x + 50, yCaixa, q.opcoes({ stroke: cor.borda, strokeWidth: 2 })))
  // a caixa, com a tampa
  q.caixa(c.x, yCaixa, w, h, cor, 12)
  q.forma(
    q.gen.line(
      c.x + 8,
      yCaixa + 30,
      c.x + w - 8,
      yCaixa + 30,
      q.opcoes({ stroke: cor.borda, strokeWidth: 1.5 }),
    ),
  )
  q.texto(c.x + w / 2, yCaixa + 88, valor, { tam: 36, ancora: 'middle' })
  if (c.tipo) q.texto(c.x + w / 2, yCaixa + h - 12, c.tipo, { tam: 20, cor: cinzaTexto, ancora: 'middle' })
  if (c.cadeado) cadeado(q, c.x + w - 40, yCaixa - 26)
  return { [c.id]: { x: c.x, y: yCaixa, w, h } }
}

function cadeado(q, x, y) {
  const cor = { borda: '#495057', fundo: '#ced4da' }
  q.forma(
    q.gen.arc(
      x + 20,
      y + 22,
      26,
      34,
      Math.PI,
      2 * Math.PI,
      false,
      q.opcoes({ stroke: '#495057', strokeWidth: 3 }),
    ),
  )
  q.caixa(x, y + 20, 40, 32, cor, 5)
  q.forma(
    q.gen.circle(x + 20, y + 34, 7, q.opcoes({ stroke: '#495057', fill: '#495057', fillStyle: 'solid' })),
  )
}

// balão de fala; a ponta aponta para quem fala
function balao(q, c) {
  const cor = CORES[c.cor ?? 'cinza']
  const linhas = [].concat(c.texto)
  const w = c.w ?? Math.max(...linhas.map((l) => medir(l, 30))) + 60
  const h = c.h ?? linhas.length * 40 + 40
  const { x, y } = c
  const ponta = c.ponta ?? 'esq'
  const pontas = {
    esq: [
      [x + 30, y + h - 4],
      [x - 10, y + h + 34],
      [x + 66, y + h - 4],
    ],
    dir: [
      [x + w - 66, y + h - 4],
      [x + w + 10, y + h + 34],
      [x + w - 30, y + h - 4],
    ],
  }
  q.poligono(pontas[ponta], cor)
  q.caixa(x, y, w, h, cor, 26)
  // cobre a emenda entre a ponta e o balão
  const [a, , b] = pontas[ponta]
  q.partes.push(
    `<rect x="${a[0] + 4}" y="${y + h - 14}" width="${b[0] - a[0] - 8}" height="12" fill="${cor.fundo}"/>`,
  )
  const y0 = y + h / 2 - ((linhas.length - 1) * 40) / 2 + 10
  linhas.forEach((l, i) => q.texto(x + w / 2, y0 + i * 40, l, { tam: 30, ancora: 'middle' }))
  return { [c.id]: { x, y, w, h } }
}

// bonequinho com o nome embaixo
function pessoa(q, c) {
  const { x, y } = c
  const cor = CORES[c.cor ?? 'cinza']
  const o = (extra) => q.opcoes({ stroke: cor.borda, strokeWidth: 3, ...extra })
  q.forma(q.gen.circle(x + 50, y + 34, 56, o({ fill: cor.fundo, fillStyle: 'solid' })))
  q.forma(q.gen.line(x + 50, y + 62, x + 50, y + 130, o()))
  q.forma(q.gen.line(x + 50, y + 84, x + 14, y + 112, o()))
  q.forma(q.gen.line(x + 50, y + 84, x + 86, y + 112, o()))
  q.forma(q.gen.line(x + 50, y + 130, x + 22, y + 176, o()))
  q.forma(q.gen.line(x + 50, y + 130, x + 78, y + 176, o()))
  if (c.nome) q.texto(x + 50, y + 214, c.nome, { tam: 28, ancora: 'middle' })
  return { [c.id]: { x, y, w: 100, h: 220 } }
}

// janela de terminal com o que o programa mostrou
function terminal(q, c) {
  const linhas = [].concat(c.texto)
  const w = c.w ?? Math.max(300, ...linhas.map((l) => medir(l, 30) + 60))
  const h = linhas.length * 42 + 76
  const { x, y } = c
  q.caixa(x, y, w, h, { borda: '#343a40', fundo: '#343a40' }, 14)
  ;['#ff6b6b', '#ffd43b', '#69db7c'].forEach((f, i) =>
    q.forma(
      q.gen.circle(
        x + 26 + i * 24,
        y + 22,
        13,
        q.opcoes({ stroke: f, fill: f, fillStyle: 'solid', roughness: 0.4 }),
      ),
    ),
  )
  q.texto(x + w - 18, y + 30, 'terminal', { tam: 20, cor: '#adb5bd', ancora: 'end' })
  linhas.forEach((l, i) => q.texto(x + 24, y + 80 + i * 42, l, { tam: 30, cor: '#f8f9fa' }))
  return { [c.id]: { x, y, w, h } }
}

// cardápio: uma lista de opções, com a escolhida em destaque
function cardapio(q, c) {
  const { x, y } = c
  const w = c.w ?? 420
  const alt = 56
  const h = 84 + c.itens.length * alt
  q.caixa(x, y, w, h, { borda: '#868e96', fundo: '#fff9db' }, 8)
  q.texto(x + w / 2, y + 48, c.titulo ?? 'CARDÁPIO', { tam: 28, cor: CORES.amarelo.texto, ancora: 'middle' })
  q.forma(q.gen.line(x + 30, y + 64, x + w - 30, y + 64, q.opcoes({ stroke: '#ced4da', strokeWidth: 2 })))
  const registro = { [c.id]: { x, y, w, h } }
  c.itens.forEach(([chave, texto], i) => {
    const yi = y + 76 + i * alt
    if (i === c.destaque) q.caixa(x + 14, yi, w - 28, alt - 8, CORES.verde, 10)
    q.texto(x + 34, yi + 34, chave, { tam: 28, cor: CORES.roxo.texto })
    q.texto(x + 34 + Math.max(110, medir(chave, 28) + 30), yi + 34, texto, { tam: 28 })
    registro[`${c.id}:${i}`] = { x: x + 14, y: yi, w: w - 28, h: alt - 8 }
  })
  return registro
}

// arquivo com o canto dobrado e o nome em cima
function arquivo(q, c) {
  const cor = CORES[c.cor ?? 'cinza']
  const linhas = [].concat(c.texto ?? [])
  const w = c.w ?? Math.max(260, ...linhas.map((l) => medir(l, 28) + 60))
  const h = c.h ?? linhas.length * 40 + 90
  const { x, y } = c
  const dobra = 34
  q.poligono(
    [
      [x, y],
      [x + w - dobra, y],
      [x + w, y + dobra],
      [x + w, y + h],
      [x, y + h],
    ],
    cor,
  )
  q.forma(
    q.gen.linearPath(
      [
        [x + w - dobra, y],
        [x + w - dobra, y + dobra],
        [x + w, y + dobra],
      ],
      q.opcoes({ stroke: cor.borda, strokeWidth: 2 }),
    ),
  )
  q.texto(x + 22, y + 40, c.nome ?? '', { tam: 26, cor: cor.texto })
  linhas.forEach((l, i) => q.texto(x + 22, y + 86 + i * 40, l, { tam: 28 }))
  return { [c.id]: { x, y, w, h } }
}

// marca de certo (✓) ou errado (✗), desenhada à mão
function marca(q, c) {
  const { x, y } = c
  const t = c.tamanho ?? 60
  const o = (cor) => q.opcoes({ stroke: cor, strokeWidth: 6, roughness: 0.8 })
  if (c.tipo === 'certo') {
    q.forma(
      q.gen.linearPath(
        [
          [x, y + t * 0.55],
          [x + t * 0.38, y + t],
          [x + t, y],
        ],
        o(TINTA.verde),
      ),
    )
  } else {
    q.forma(q.gen.line(x, y, x + t, y + t, o(TINTA.vermelho)))
    q.forma(q.gen.line(x + t, y, x, y + t, o(TINTA.vermelho)))
  }
  return { [c.id]: { x, y, w: t, h: t } }
}

export const ICONES = { caixinha, balao, pessoa, terminal, cardapio, arquivo, marca }
