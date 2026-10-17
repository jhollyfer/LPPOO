export const ideia = {
  caixas: [
    { id: 's', x: 110, y: 0, w: 420, cor: 'verde', rotulo: 'somar', texto: ['(a, b) => a + b'] },
    { id: 'm', x: 110, y: 190, w: 420, cor: 'verde', rotulo: 'multiplicar', texto: ['(a, b) => a * b'] },
    {
      id: 'j',
      x: 110,
      y: 380,
      w: 420,
      cor: 'vermelho',
      rotulo: 'juntar textos',
      texto: ['(a: string, b: string)', '=> a + b'],
    },
    {
      id: 't',
      x: 940,
      y: 170,
      w: 540,
      h: 190,
      cor: 'amarelo',
      rotulo: 'type Operacao (a tomada)',
      texto: ['(a: number, b: number)', '=> number'],
    },
    { forma: 'marca', tipo: 'certo', x: 700, y: 60, tamanho: 44 },
    { forma: 'marca', tipo: 'certo', x: 700, y: 214, tamanho: 44 },
    { forma: 'marca', tipo: 'errado', x: 700, y: 420, tamanho: 44 },
  ],
  setas: [
    { de: 's', para: 't', cor: 'verde' },
    { de: 'm', para: 't', cor: 'verde' },
    { de: 'j', para: 't', cor: 'vermelho' },
  ],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'io', 'Chamar calcular(6, 7, somar)'],
    ['C', 'proc', 'op = somar'],
    ['D', 'proc', 'return op(6, 7)'],
    ['E', 'io', 'Mostrar 13'],
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
