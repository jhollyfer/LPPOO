export const ideia = {
  caixas: [
    { id: 'p', forma: 'pessoa', x: 110, y: 120, nome: 'professor' },
    { id: 'b', forma: 'balao', x: 190, y: 0, texto: '8, 5, 9 e n', cor: 'azul' },
    { id: 'a', forma: 'array', x: 480, y: 120, nome: 'notas', itens: [8, 5, 9], celula: 100 },
    {
      id: 't',
      forma: 'terminal',
      x: 1000,
      y: 90,
      w: 500,
      texto: ['Média: 7.33', 'Notas de 6 para cima: 8, 9'],
    },
  ],
  setas: [
    { de: 'p', para: 'a', rotulo: 'push' },
    { de: 'a', para: 't', rotulo: 'relatório' },
  ],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'io', 'Ler nota'],
    ['C', 'proc', 'notas.push(nota)'],
    ['D', 'io', 'Ler resposta (s/n)'],
    ['E', 'dec', "resposta === 's'?"],
    ['F', 'proc', 'calcularMedia e filter'],
    ['G', 'io', 'Mostrar média e aprovadas'],
    ['H', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
    ['D', 'E'],
    ['E', 'B', 'Sim'],
    ['E', 'F', 'Não'],
    ['F', 'G'],
    ['G', 'H'],
  ],
  // 8, 5 e 9: três voltas, depois o relatório
  caminho: ['A', 'B', 'C', 'D', 'E', 'B', 'C', 'D', 'E', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
}
