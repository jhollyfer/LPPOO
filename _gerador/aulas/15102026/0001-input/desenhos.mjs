export const ideia = {
  caixas: [
    { id: 'prog', forma: 'arquivo', x: 110, y: 170, w: 260, h: 130, nome: 'o programa', cor: 'azul' },
    { id: 'perg', forma: 'balao', x: 140, y: 30, texto: 'Seu nome:', cor: 'azul' },
    { id: 'ana', forma: 'pessoa', x: 600, y: 110, nome: 'Ana' },
    { id: 'resp', forma: 'balao', x: 470, y: 0, texto: 'Ana', ponta: 'dir', cor: 'verde' },
    {
      id: 'nome',
      forma: 'caixinha',
      x: 1000,
      y: 120,
      nome: 'nome',
      valor: "'Ana'",
      tipo: 'string',
      cor: 'verde',
    },
  ],
  setas: [{ de: 'ana', para: 'nome', rotulo: 'input devolve' }],
}
export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'io', 'Ler nome'],
    ['C', 'io', 'Mostrar nome'],
    ['D', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
  ],
}
