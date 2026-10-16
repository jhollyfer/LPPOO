export const ideia = {
  caixas: [
    {
      id: 'a',
      forma: 'caixinha',
      x: 110,
      y: 0,
      nome: 'gols',
      valor: '0',
      tipo: 'começo do jogo',
      cor: 'azul',
    },
    { id: 'b', forma: 'caixinha', x: 610, y: 0, nome: 'gols', valor: '1', tipo: 'gol!', cor: 'roxo' },
    { id: 'c', forma: 'caixinha', x: 1110, y: 0, nome: 'gols', valor: '2', tipo: 'outro gol!', cor: 'verde' },
  ],
  setas: [
    { de: 'a', para: 'b', rotulo: 'gols = 1' },
    { de: 'b', para: 'c', rotulo: 'gols = 2' },
  ],
  notas: [{ x: 110, y: 250, texto: 'É sempre a mesma caixa. Só o que tem dentro muda.', cor: 'roxo' }],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'proc', 'gols = 0'],
    ['C', 'proc', 'gols = 1'],
    ['D', 'proc', 'gols = 2'],
    ['E', 'io', 'Mostrar gols'],
    ['F', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
    ['D', 'E'],
    ['E', 'F'],
  ],
}
