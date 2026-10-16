export const ideia = {
  caixas: [
    {
      id: 'ts',
      forma: 'arquivo',
      x: 110,
      y: 0,
      w: 380,
      nome: 'preco.ts',
      texto: ['const preco: number', '  = 12.5'],
      cor: 'azul',
    },
    {
      id: 'js',
      forma: 'arquivo',
      x: 650,
      y: 0,
      w: 360,
      nome: 'preco.js',
      texto: ['const preco = 12.5'],
      cor: 'roxo',
    },
    { id: 't', forma: 'terminal', x: 1230, y: 20, w: 260, texto: ['12.50'] },
  ],
  setas: [
    { de: 'ts', para: 'js', rotulo: 'confere e apaga' },
    { de: 'js', para: 't', rotulo: 'Node roda' },
  ],
  notas: [
    {
      x: 110,
      y: 250,
      texto: 'Os tipos servem para conferir. Na hora de rodar, eles já não existem.',
      cor: 'roxo',
    },
  ],
}

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
