import { bifurcacao } from '../../../tipos/ideia.mjs'

export const ideia = bifurcacao({
  inicio: { rotulo: 'a média do Lucas', texto: ['media = 8'] },
  pergunta: ['media >= 6 ?'],
  sim: { rotulo: 'depois do ?', texto: ["situacao = 'Aprovado'"] },
  nao: { rotulo: 'depois do :', texto: ["situacao = 'Reprovado'"], cor: 'cinza' },
})

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'proc', 'media = 8'],
    ['C', 'dec', 'media >= 6?'],
    ['D', 'proc', "situacao = 'Aprovado'"],
    ['E', 'proc', "situacao = 'Reprovado'"],
    ['F', 'io', 'Mostrar situacao'],
    ['G', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D', 'Sim'],
    ['C', 'E', 'Não'],
    ['D', 'F'],
    ['E', 'F'],
    ['F', 'G'],
  ],
  // o caminho do exemplo do texto
  caminho: ['A', 'B', 'C', 'D', 'F', 'G'],
}

export const memoria = {
  passos: [
    { codigo: 'const media = 8', grava: [['media', '8', { const: true }]] },
    {
      codigo: "const situacao = media >= 6 ? 'Aprovado' : 'Reprovado'",
      conta: ['8 >= 6', 'true'],
      grava: [['situacao', "'Aprovado'", { const: true }]],
    },
    { codigo: 'console.log(situacao)', sai: 'Aprovado' },
  ],
}
