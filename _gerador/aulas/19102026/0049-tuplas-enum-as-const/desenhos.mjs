export const ideia = {
  caixas: [
    {
      id: 't',
      forma: 'array',
      x: 110,
      y: 20,
      nome: 'nota: [string, number]',
      itens: ["'Ana'", 8],
      celula: 170,
    },
    {
      id: 'e',
      forma: 'cardapio',
      x: 700,
      y: 0,
      w: 560,
      titulo: 'enum Turno',
      itens: [
        ['Manha', "'manhã'"],
        ['Tarde', "'tarde'"],
        ['Noite', "'noite'"],
      ],
      destaque: 2,
    },
    {
      id: 'd',
      forma: 'array',
      x: 110,
      y: 420,
      nome: 'DIAS (as const)',
      itens: ["'seg'", "'ter'", "'qua'"],
      celula: 130,
      indices: false,
    },
    { id: 'u', x: 820, y: 460, w: 440, cor: 'roxo', rotulo: 'type Dia', texto: ["'seg' | 'ter' | 'qua'"] },
  ],
  setas: [{ de: 'd', para: 'u', rotulo: '(typeof DIAS)[number]' }],
  notas: [
    { x: 110, y: 270, texto: 'posição 0: string', cor: 'azul' },
    { x: 110, y: 310, texto: 'posição 1: number', cor: 'azul' },
    { x: 700, y: 330, texto: "Turno.Noite vale 'noite'", cor: 'roxo' },
  ],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'tenho algo fixo'],
    ['B', 'dec', 'são valores em ordem, um de cada tipo?'],
    ['C', 'proc', 'tupla [string, number]'],
    ['D', 'dec', 'preciso percorrer as opções?'],
    ['E', 'proc', 'array com as const'],
    ['F', 'proc', 'união de literais ou enum'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C', 'Sim'],
    ['B', 'D', 'Não'],
    ['D', 'E', 'Sim'],
    ['D', 'F', 'Não'],
  ],
}
