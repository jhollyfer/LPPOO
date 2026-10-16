export const ideia = {
  caixas: [
    { id: 'voce', forma: 'pessoa', x: 110, y: 90, nome: 'você' },
    { id: 'b', forma: 'balao', x: 190, y: -20, texto: 'sim', cor: 'azul' },
    { id: 'cmp', x: 520, y: 120, w: 400, cor: 'roxo', rotulo: 'compara', texto: ["resposta === 'sim'"] },
    {
      id: 'cx',
      forma: 'caixinha',
      x: 1110,
      y: 66,
      nome: 'temAula',
      valor: 'true',
      tipo: 'boolean',
      cor: 'verde',
    },
  ],
  setas: [
    { de: 'voce', para: 'cmp', rotulo: "'sim'" },
    { de: 'cmp', para: 'cx', rotulo: 'guarda' },
  ],
  notas: [{ x: 520, y: 340, texto: 'Digitou outra coisa? A comparação dá false.', cor: 'vermelho' }],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'io', 'Ler resposta (sim/nao)'],
    ['C', 'proc', "temAula = resposta === 'sim'"],
    ['D', 'io', 'Mostrar temAula'],
    ['E', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
    ['D', 'E'],
  ],
}
