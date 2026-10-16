import { bifurcacao } from '../../../tipos/ideia.mjs'

export const ideia = bifurcacao({
  inicio: { rotulo: 'o aluno digita', texto: ["apelido = ''"] },
  pergunta: ['tem texto?'],
  sim: { rotulo: 'truthy: usa o apelido', texto: ['chamar = apelido'], cor: 'cinza' },
  nao: { rotulo: 'falsy: usa o padrão', texto: ["chamar = 'sem apelido'"], cor: 'verde' },
})

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'io', 'Ler apelido'],
    ['C', 'dec', 'apelido tem texto?'],
    ['D', 'proc', 'chamar = apelido'],
    ['E', 'proc', "chamar = 'sem apelido'"],
    ['F', 'io', 'Mostrar "Oi, chamar!"'],
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
  caminho: ['A', 'B', 'C', 'E', 'F', 'G'],
}

export const memoria = {
  passos: [
    {
      codigo: "const apelido = input('Seu apelido: ')",
      grava: [['apelido', "''", { const: true }]],
      sai: 'Seu apelido: ',
    },
    {
      codigo: "const chamar = apelido || 'sem apelido'",
      conta: ["'' || 'sem apelido'", "'sem apelido'"],
      grava: [['chamar', "'sem apelido'", { const: true }]],
    },
    { codigo: 'console.log(`Oi, ${chamar}!`)', sai: 'Oi, sem apelido!' },
  ],
}
