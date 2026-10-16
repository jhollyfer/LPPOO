export const ideia = {
  caixas: [
    {
      id: 'tx',
      forma: 'caixinha',
      x: 110,
      y: 0,
      nome: 'texto',
      valor: "'17'",
      tipo: 'string',
      cor: 'amarelo',
    },
    { id: 'n', x: 560, y: 54, w: 380, cor: 'roxo', rotulo: 'converte', texto: ['Number(texto)'] },
    { id: 'i', forma: 'caixinha', x: 1150, y: 0, nome: 'idade', valor: '17', tipo: 'number', cor: 'verde' },
  ],
  setas: [
    { de: 'tx', para: 'n', rotulo: 'entra' },
    { de: 'n', para: 'i', rotulo: 'sai' },
  ],
  notas: [
    { x: 110, y: 250, texto: "'17' + 1  vira  '171'", cor: 'vermelho' },
    { x: 1150, y: 250, texto: '17 + 1  vira  18', cor: 'verde' },
  ],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'io', 'Ler texto'],
    ['C', 'proc', 'idade = Number(texto)'],
    ['D', 'io', 'Mostrar idade + 1'],
    ['E', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
    ['D', 'E'],
  ],
}
