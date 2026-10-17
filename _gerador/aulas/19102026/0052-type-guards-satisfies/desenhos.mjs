import { bifurcacao } from '../../../tipos/ideia.mjs'

const b = bifurcacao({
  inicio: { rotulo: 'quem chegou', texto: ['p: Aluno', '| Visitante'] },
  pergunta: ['ehAluno(p)?'],
  sim: { rotulo: 'dentro do if: Aluno', texto: ['p.matricula'] },
  nao: { rotulo: 'depois do if: Visitante', texto: ['p.motivo'] },
})

export const ideia = {
  ...b,
  notas: [
    {
      x: 110,
      y: 720,
      texto: 'A função devolve p is Aluno: o TypeScript confia na conferência.',
      cor: 'roxo',
    },
  ],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'entrada(p)'],
    ['B', 'dec', 'ehAluno(p)'],
    ['C', 'io', 'nome e matrícula'],
    ['D', 'io', 'nome e motivo'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C', 'Sim'],
    ['B', 'D', 'Não'],
  ],
  caminho: ['A', 'B', 'C'],
}
