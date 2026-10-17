export const ideia = {
  caixas: [
    {
      id: 'c',
      forma: 'arquivo',
      x: 110,
      y: 0,
      nome: 'tsconfig.json',
      texto: ['"strict": true', '"noUnusedLocals": true', '"noImplicitReturns": true'],
    },
    { id: 't', x: 680, y: 60, w: 280, cor: 'roxo', rotulo: 'confere', texto: 'pnpm tsc' },
    {
      id: 'r',
      forma: 'terminal',
      x: 1080,
      y: 20,
      w: 420,
      texto: ['E105.ts:3', "'x' is declared but its", 'value is never read.'],
    },
    { id: 'x', x: 680, y: 330, w: 280, cor: 'cinza', rotulo: 'só roda', texto: 'tsx' },
  ],
  setas: [
    { de: 'c', para: 't', rotulo: 'regras' },
    { de: 't', para: 'r', cor: 'vermelho' },
  ],
  notas: [
    { x: 110, y: 520, texto: 'O tsx não olha os tipos: quem cobra o regulamento é o tsc.', cor: 'roxo' },
  ],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'escrevi o código'],
    ['B', 'proc', 'pnpm tsc'],
    ['C', 'dec', 'achou erro?'],
    ['D', 'proc', 'corrijo a linha apontada'],
    ['E', 'proc', 'tsx roda o arquivo'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D', 'Sim'],
    ['D', 'B'],
    ['C', 'E', 'Não'],
  ],
}
