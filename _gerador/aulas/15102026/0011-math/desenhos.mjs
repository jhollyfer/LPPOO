export const ideia = {
  caixas: [
    { id: 'e', x: 110, y: 20, w: 300, cor: 'azul', rotulo: 'a excursão', texto: ['32 alunos', '15 por van'] },
    { id: 'v1', x: 620, y: 40, w: 250, h: 150, cor: 'verde', rotulo: 'van 1', texto: ['15 alunos'] },
    { id: 'v2', x: 900, y: 40, w: 250, h: 150, cor: 'verde', rotulo: 'van 2', texto: ['15 alunos'] },
    { id: 'v3', x: 1180, y: 40, w: 250, h: 150, cor: 'verde', rotulo: 'van 3', texto: ['2 alunos'] },
  ],
  setas: [{ de: 'e', para: 'v1', rotulo: 'Math.ceil' }],
  notas: [
    { x: 620, y: 250, texto: '32 / 15 dá 2.13. Com 2 vans, sobram 2 alunos na escola.', cor: 'vermelho' },
    { x: 620, y: 292, texto: 'Math.ceil(2.13) arredonda para cima: 3 vans.', cor: 'verde' },
  ],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'proc', 'alunos = 32, porVan = 15'],
    ['C', 'proc', 'vans = Math.ceil(alunos / porVan)'],
    ['D', 'io', 'Mostrar vans'],
    ['E', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
    ['D', 'E'],
  ],
}
