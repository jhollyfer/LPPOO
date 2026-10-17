export const ideia = {
  caixas: [
    { id: 'v', forma: 'array', x: 110, y: 20, nome: 'valores', itens: [8, 6, 10], celula: 100 },
    {
      id: 'f',
      x: 600,
      y: 54,
      w: 440,
      cor: 'roxo',
      rotulo: 'calcularMedia()',
      texto: ['soma: 24', 'divide por 3'],
    },
    { id: 'r', forma: 'caixinha', x: 1200, y: 20, nome: 'retorno', valor: '8', tipo: 'number', cor: 'verde' },
  ],
  setas: [
    { de: 'v', para: 'f', rotulo: 'parâmetro' },
    { de: 'f', para: 'r', rotulo: 'return' },
  ],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Chamada'],
    ['B', 'proc', 'valores = [8, 6, 10]'],
    ['C', 'proc', 'soma = 24'],
    ['D', 'proc', 'return 24 / 3'],
    ['E', 'io', 'Mostrar 8'],
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
