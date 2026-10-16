import { fileira } from '../../../tipos/ideia.mjs'

export const ideia = fileira(
  0,
  [
    { rotulo: 'você escreve preco.ts', texto: ['const preco: number', '  = 12.5'] },
    { rotulo: 'TypeScript confere e apaga', texto: ['const preco = 12.5'] },
    { rotulo: 'o Node roda', texto: ['12.50'] },
  ],
  ['tipos ok', 'só JS'],
)

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'io', 'Escrever preco.ts'],
    ['C', 'dec', 'os tipos batem?'],
    ['D', 'proc', 'editor sublinha em vermelho'],
    ['E', 'proc', 'apagar os tipos (vira .js)'],
    ['F', 'io', 'Node roda e mostra 12.50'],
    ['G', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'E', 'Sim'],
    ['C', 'D', 'Não'],
    ['D', 'B'],
    ['E', 'F'],
    ['F', 'G'],
  ],
  // o caminho do exemplo do texto
  caminho: ['A', 'B', 'C', 'E', 'F', 'G'],
}

export const memoria = {
  passos: [
    { codigo: 'const preco: number = 12.5', grava: [['preco', '12.5', { const: true }]] },
    { codigo: 'console.log(preco.toFixed(2))', conta: ['preco.toFixed(2)', "'12.50'"], sai: '12.50' },
    {
      codigo: "const troco: number = 'dez reais'",
      erro: ['troco', 'O TypeScript barra antes de rodar: texto não é number.'],
    },
  ],
}
