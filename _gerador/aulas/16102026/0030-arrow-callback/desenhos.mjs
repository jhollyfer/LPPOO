export const ideia = {
  caixas: [
    { id: 'v', forma: 'caixinha', x: 110, y: 0, nome: 'valor', valor: '10', tipo: 'number' },
    {
      id: 'r',
      forma: 'arquivo',
      x: 110,
      y: 260,
      w: 330,
      h: 130,
      nome: 'a receita (callback)',
      texto: ['dobrar: n * 2'],
      cor: 'roxo',
    },
    { id: 'a', forma: 'pessoa', x: 640, y: 90, nome: 'aplicar' },
    { id: 'res', forma: 'caixinha', x: 1060, y: 110, nome: 'resultado', valor: '20', tipo: 'number', cor: 'verde' },
  ],
  setas: [
    { de: 'v', para: 'a', rotulo: 'o valor' },
    { de: 'r', para: 'a', rotulo: 'a função' },
    { de: 'a', para: 'res', rotulo: 'return' },
  ],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'proc', 'Chamar aplicar(10, dobrar)'],
    ['C', 'proc', 'valor = 10, regra = dobrar'],
    ['D', 'proc', 'aplicar chama regra(10)'],
    ['E', 'proc', 'dobrar devolve 10 * 2 = 20'],
    ['F', 'proc', 'aplicar devolve 20'],
    ['G', 'io', 'Mostrar 20'],
    ['H', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
    ['D', 'E'],
    ['E', 'F'],
    ['F', 'G'],
    ['G', 'H'],
  ],
  caminho: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
}
