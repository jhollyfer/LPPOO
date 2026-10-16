export const ideia = {
  caixas: [
    { id: 'n', forma: 'caixinha', x: 110, y: 0, nome: 'nome', valor: "'  maria  '", tipo: 'string' },
    {
      id: 'l',
      forma: 'caixinha',
      x: 640,
      y: 0,
      nome: 'limpo',
      valor: "'maria'",
      tipo: 'string',
      cor: 'roxo',
    },
    { id: 't', forma: 'terminal', x: 1180, y: 60, w: 300, texto: ['MARIA'] },
  ],
  setas: [
    { de: 'n', para: 'l', rotulo: '.trim()' },
    { de: 'l', para: 't', rotulo: '.toUpperCase()' },
  ],
  notas: [
    {
      x: 110,
      y: 250,
      texto: 'A caixa nome continua com os espaços: o .trim() cria um texto novo.',
      cor: 'roxo',
    },
  ],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'io', 'Ler nome'],
    ['C', 'proc', 'limpo = nome.trim()'],
    ['D', 'io', 'Mostrar limpo.toUpperCase()'],
    ['E', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
    ['D', 'E'],
  ],
}
