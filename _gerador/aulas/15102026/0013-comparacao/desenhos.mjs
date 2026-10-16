export const ideia = {
  caixas: [
    {
      id: 's',
      forma: 'caixinha',
      x: 110,
      y: 0,
      nome: 'SENHA',
      valor: "'cetam2026'",
      tipo: 'string',
      cadeado: true,
    },
    { id: 'd', forma: 'caixinha', x: 110, y: 240, nome: 'digitada', valor: "'cetam2026'", tipo: 'string' },
    { id: 'cmp', x: 620, y: 175, w: 380, cor: 'roxo', rotulo: 'compara', texto: ['digitada === SENHA'] },
    {
      id: 'a',
      forma: 'caixinha',
      x: 1150,
      y: 120,
      nome: 'acertou',
      valor: 'true',
      tipo: 'boolean',
      cor: 'verde',
    },
  ],
  setas: [
    { de: 's', para: 'cmp' },
    { de: 'd', para: 'cmp' },
    { de: 'cmp', para: 'a', rotulo: 'iguais' },
  ],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'proc', "SENHA = 'cetam2026'"],
    ['C', 'io', 'Ler digitada'],
    ['D', 'proc', 'acertou = digitada === SENHA'],
    ['E', 'io', 'Mostrar acertou'],
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
