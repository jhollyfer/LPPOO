export const ideia = {
  caixas: [
    { id: 'a', forma: 'caixinha', x: 110, y: 0, nome: 'saldo', valor: '100', tipo: 'tinha', cor: 'azul' },
    { id: 'b', forma: 'caixinha', x: 620, y: 0, nome: 'saldo', valor: '70', tipo: 'gastou 30', cor: 'roxo' },
    {
      id: 'c',
      forma: 'caixinha',
      x: 1130,
      y: 0,
      nome: 'saldo',
      valor: '90',
      tipo: 'recarregou 20',
      cor: 'verde',
    },
  ],
  setas: [
    { de: 'a', para: 'b', rotulo: 'saldo -= 30' },
    { de: 'b', para: 'c', rotulo: 'saldo += 20' },
  ],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'proc', 'saldo = 100'],
    ['C', 'proc', 'saldo -= 30'],
    ['D', 'proc', 'saldo += 20'],
    ['E', 'io', 'Mostrar saldo'],
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
