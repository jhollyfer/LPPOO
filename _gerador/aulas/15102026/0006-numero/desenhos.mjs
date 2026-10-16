import { fileira } from '../../../tipos/ideia.mjs'

export const ideia = fileira(
  0,
  [
    { rotulo: 'preço do açaí', texto: ['preco = 12.5'] },
    { rotulo: '.toFixed(2)', texto: ["'12.50'"] },
    { rotulo: 'terminal', texto: ['Açaí: R$ 12.50'] },
  ],
  ['2 casas', 'mostra'],
)

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'proc', 'preco = 12.5'],
    ['C', 'proc', 'texto = preco.toFixed(2)'],
    ['D', 'io', 'Mostrar "Açaí: R$ 12.50"'],
    ['E', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
    ['D', 'E'],
  ],
}

export const memoria = {
  passos: [
    { codigo: 'const preco = 12.5', grava: [['preco', '12.5', { const: true }]] },
    { codigo: 'const texto = preco.toFixed(2)', grava: [['texto', "'12.50'", { const: true }]] },
    { codigo: 'console.log(`Açaí: R$ ${texto}`)', sai: 'Açaí: R$ 12.50' },
  ],
}
