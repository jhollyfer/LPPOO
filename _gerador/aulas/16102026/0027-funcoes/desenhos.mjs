export const ideia = {
  caixas: [
    { id: 'n1', forma: 'caixinha', x: 110, y: 0, nome: 'nota1', valor: '8', tipo: 'number' },
    { id: 'n2', forma: 'caixinha', x: 110, y: 230, nome: 'nota2', valor: '6', tipo: 'number' },
    {
      id: 'f',
      x: 520,
      y: 145,
      w: 400,
      cor: 'roxo',
      rotulo: 'calcularMedia()',
      texto: ['soma: 8 + 6 = 14', 'divide por 2'],
    },
    { id: 'r', forma: 'caixinha', x: 1100, y: 116, nome: 'media', valor: '7', tipo: 'number', cor: 'verde' },
  ],
  setas: [
    { de: 'n1', para: 'f', rotulo: 'parâmetro' },
    { de: 'n2', para: 'f', rotulo: 'parâmetro' },
    { de: 'f', para: 'r', rotulo: 'return' },
  ],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'proc', 'Chamar calcularMedia(8, 6)'],
    ['C', 'proc', 'nota1 = 8, nota2 = 6'],
    ['D', 'proc', 'return (8 + 6) / 2'],
    ['E', 'proc', 'media = 7'],
    ['F', 'io', 'Mostrar 7'],
    ['G', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
    ['D', 'E'],
    ['E', 'F'],
    ['F', 'G'],
  ],
  caminho: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
}
