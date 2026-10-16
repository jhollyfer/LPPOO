// Memória: o programa rodando linha por linha. À esquerda, a linha de código; à
// direita, as gavetas da memória RAM depois dessa linha. Cada variável ganha uma
// gaveta com etiqueta (o nome), endereço, valor e tipo.
//
// passos: [{
//   codigo: 'let saldo = 100' (ou várias linhas em lista),
//   grava?: [[nome, valor, { const? }]]  cria ou troca o valor de uma gaveta
//   conta?: [expressao, resultado]       valor que o processador calcula e não guarda
//   erro?:  [nome, mensagem]             a linha não roda; a gaveta fica vermelha
//   sai?:   'texto'                      o que aparece no terminal
// }]
import { novoQuadro, CORES, TINTA, medir, medirCodigo } from '../quadro.mjs'

const X_CODIGO = 110
const W_CODIGO = 560
const X_RAM = 780
const W_RAM = 760
const W_GAVETA = 170
const VAO = 14

const tipoDe = (valor) => {
  if (/^['"`]/.test(valor)) return 'string'
  if (valor === 'true' || valor === 'false') return 'boolean'
  if (valor === 'undefined') return 'undefined'
  if (valor === 'null') return 'null'
  if (/^-?\d/.test(valor) || valor === 'NaN') return 'number'
  return ''
}

// largura da etiqueta: letra maiúscula ocupa mais espaço na letra de mão
const medirNome = (nome) => [...nome].reduce((t, c) => t + (/[A-Z_]/.test(c) ? 0.78 : 0.6) * 22, 0)

// cadeado das constantes
function cadeado(q, x, y) {
  q.caixa(x, y + 9, 22, 17, CORES.cinza, 3)
  q.forma(
    q.gen.arc(
      x + 11,
      y + 9,
      14,
      16,
      Math.PI,
      2 * Math.PI,
      false,
      q.opcoes({ stroke: '#495057', roughness: 0.4 }),
    ),
  )
}

export function desenharMemoria(titulo, { passos }) {
  const q = novoQuadro()
  const gavetas = [] // { nome, valor, const, endereco }
  let y = 0

  q.texto(X_CODIGO, y - 30, 'o programa roda...', { tam: 24, cor: '#868e96' })
  q.texto(X_RAM, y - 30, 'e a memória RAM fica assim', { tam: 24, cor: '#868e96' })

  passos.forEach((p, i) => {
    const mudou = new Map() // nome -> valor anterior (ou null se é nova)
    for (const [nome, valor, opcoes = {}] of p.grava ?? []) {
      const g = gavetas.find((g) => g.nome === nome)
      if (g) {
        mudou.set(nome, g.valor)
        g.valor = valor
      } else {
        mudou.set(nome, null)
        gavetas.push({ nome, valor, const: opcoes.const, endereco: 1000 + gavetas.length * 8 })
      }
    }

    const linhas = [].concat(p.codigo)
    const temConta = Boolean(p.conta)
    const alturaRam = 170
    const alturaCodigo = Math.max(alturaRam, linhas.length * 38 + (p.sai ? 70 : 40))
    const alt = Math.max(alturaCodigo, alturaRam)

    // número do passo
    q.forma(
      q.gen.circle(70, y + 34, 40, q.opcoes({ stroke: '#868e96', fill: '#f1f3f5', fillStyle: 'solid' })),
    )
    q.texto(70, y + 43, String(i + 1), { tam: 24, cor: '#495057', ancora: 'middle' })

    // a linha de código
    q.caixa(X_CODIGO, y, W_CODIGO, alt, CORES.cinza, 14)
    // linha comprida encolhe a letra para caber na caixa
    const tamCodigo = Math.min(24, ...linhas.map((l) => (W_CODIGO - 44) / (l.length * 0.6)))
    linhas.forEach((l, k) => q.texto(X_CODIGO + 22, y + 46 + k * 38, l, { tam: tamCodigo, codigo: true }))
    if (p.sai) {
      const saida = `terminal › ${p.sai}`
      const tamSaida = Math.min(24, (W_CODIGO - 44) / (saida.length * 0.55))
      q.texto(X_CODIGO + 22, y + alt - 24, saida, { tam: tamSaida, cor: TINTA.azul })
    }
    q.seta(
      [
        [X_CODIGO + W_CODIGO + 14, y + alt / 2],
        [X_RAM - 16, y + alt / 2],
      ],
      { cor: TINTA.roxo },
    )

    // a memória
    q.forma(
      q.gen.rectangle(
        X_RAM,
        y,
        W_RAM,
        alt,
        q.opcoes({ stroke: '#adb5bd', strokeWidth: 2, roughness: 0.6, strokeLineDash: [10, 8] }),
      ),
    )
    // as gavetas são desenhadas a partir do x = 0 e depois encaixadas na memória,
    // encolhendo se não couberem
    const inicio = q.partes.length
    let xg = 0
    const yg = y + 52
    const hg = alt - 72
    for (const g of gavetas) {
      const nova = mudou.has(g.nome)
      const comErro = p.erro?.[0] === g.nome
      const cor = comErro ? CORES.vermelho : nova ? CORES.verde : { borda: '#868e96', fundo: '#ffffff' }
      const etiqueta = medirNome(g.nome) + (g.const ? 34 : 0)
      const w = Math.max(W_GAVETA, medirCodigo(g.valor, 26) + 36, etiqueta + medir('#1000', 16) + 24)
      q.texto(xg + 4, yg - 14, g.nome, { tam: 22 })
      if (g.const) cadeado(q, xg + 12 + medirNome(g.nome), yg - 40)
      q.texto(xg + w - 4, yg - 14, `#${g.endereco}`, { tam: 18, cor: '#868e96', ancora: 'end' })
      q.caixa(xg, yg, w, hg, cor, 10)
      q.texto(xg + w / 2, yg + hg / 2 + 2, g.valor, { tam: 26, ancora: 'middle', codigo: true })
      const antes = mudou.get(g.nome)
      const rodape = antes != null ? `${tipoDe(g.valor)} · era ${antes}` : tipoDe(g.valor)
      q.texto(xg + w / 2, yg + hg - 12, rodape, { tam: 20, cor: '#495057', ancora: 'middle' })
      xg += w + VAO
    }
    if (temConta) {
      const [expr, res] = p.conta
      const w = Math.max(W_GAVETA, medirCodigo(expr, 22) + 40)
      q.texto(xg + 4, yg - 14, 'conta (não guarda)', { tam: 22, cor: CORES.amarelo.texto })
      q.caixa(xg, yg, w, hg, CORES.amarelo, 10)
      q.texto(xg + w / 2, yg + hg / 2 - 8, expr, { tam: 22, ancora: 'middle', codigo: true })
      q.texto(xg + w / 2, yg + hg / 2 + 26, `→ ${res}`, { tam: 26, ancora: 'middle', codigo: true })
      xg += w + VAO
    }
    const largura = xg - VAO
    const escala = Math.min(1, (W_RAM - 36) / largura)
    const gavetasDesenho = q.partes.splice(inicio)
    q.partes.push(
      `<g transform="translate(${X_RAM + 18} ${y + (1 - escala) * (alt / 2)}) scale(${escala}) translate(0 ${-y})">`,
      ...gavetasDesenho,
      '</g>',
    )
    if (!gavetas.length && !temConta) {
      q.texto(X_RAM + W_RAM / 2, y + alt / 2 + 8, '(vazia)', { tam: 24, cor: '#adb5bd', ancora: 'middle' })
    }
    if (p.erro) {
      q.texto(X_RAM + 18, y + alt + 32, p.erro[1], { tam: 24, cor: TINTA.vermelho })
      y += 44
    }
    y += alt + 36
  })

  return q.svg(titulo, { x: 20, y: -70, w: 1540, h: y + 40 })
}
