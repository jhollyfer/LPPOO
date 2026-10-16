import { fileira } from '../../../tipos/ideia.mjs'

// duas fileiras: a mesma média e a mesma frequência, julgadas pelo && e pelo ||
const e = fileira(
  0,
  [
    { rotulo: 'média boa? frequência boa?', texto: ['true  e  false'], w: 520 },
    { rotulo: '&& (E): precisa dos dois', texto: ['true && false'], w: 480 },
    { rotulo: 'não passa', texto: ['false'], cor: 'vermelho', w: 300 },
  ],
  ['&&', 'dá'],
)
const ou = fileira(
  230,
  [
    { rotulo: 'média boa? frequência boa?', texto: ['true  e  false'], w: 520 },
    { rotulo: '|| (OU): basta um', texto: ['true || false'], w: 480 },
    { rotulo: 'passaria', texto: ['true'], w: 300 },
  ],
  ['||', 'dá'],
)
const renomeia = (f, sufixo) => ({
  caixas: f.caixas.map((c) => ({ ...c, id: c.id + sufixo })),
  setas: f.setas.map((s) => ({ ...s, de: s.de + sufixo, para: s.para + sufixo })),
})

export const ideia = {
  caixas: [...renomeia(e, '1').caixas, ...renomeia(ou, '2').caixas],
  setas: [...renomeia(e, '1').setas, ...renomeia(ou, '2').setas],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'proc', 'media = 7, frequencia = 60'],
    ['C', 'proc', 'aprovado = media >= 6 && frequencia >= 75'],
    ['D', 'io', 'Mostrar aprovado'],
    ['E', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
    ['D', 'E'],
  ],
}
