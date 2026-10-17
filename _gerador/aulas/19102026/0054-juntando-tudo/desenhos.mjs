import { fileira } from '../../../tipos/ideia.mjs'

const f = fileira(
  0,
  [
    { rotulo: 'AlunoNovo (entrada)', texto: ["nome: 'Ana'", 'nota: 8', "turno: 'manhã'"] },
    { rotulo: 'cadastrar()', texto: ['gera a', 'matrícula A01'] },
    { rotulo: 'Situacao (saída)', texto: ["status: 'aprovado'", 'media: 8'] },
  ],
  ['entra', 'situacao()'],
)

export const ideia = {
  ...f,
  notas: [
    {
      x: 110,
      y: 300,
      texto: 'Omit na entrada, interface no meio, união discriminada na saída.',
      cor: 'roxo',
    },
  ],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'dados do aluno'],
    ['B', 'proc', 'cadastrar: gera matrícula'],
    ['C', 'dec', 'nota >= 7?'],
    ['D', 'io', 'aprovado, com a média'],
    ['E', 'io', 'recuperação, com quanto falta'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D', 'Sim'],
    ['C', 'E', 'Não'],
  ],
  caminho: ['A', 'B', 'C', 'D'],
}
