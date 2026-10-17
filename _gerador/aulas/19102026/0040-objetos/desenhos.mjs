export const ideia = {
  caixas: [
    {
      id: 'c',
      forma: 'cardapio',
      x: 110,
      y: 0,
      w: 500,
      titulo: 'aluna',
      itens: [
        ['nome', "'Bia'"],
        ['idade', '16 → 17'],
        ['turno', "'noite'"],
      ],
      destaque: 1,
    },
    { id: 't', forma: 'terminal', x: 900, y: 40, w: 520, texto: ['Bia', 'Bia estuda à noite', '17'] },
  ],
  setas: [{ de: 'c', para: 't', rotulo: 'aluna.nome' }],
  notas: [{ x: 110, y: 330, texto: 'Uma carteirinha, três propriedades: cada uma com seu nome.', cor: 'roxo' }],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'cria o objeto aluna'],
    ['B', 'io', 'mostra aluna.nome'],
    ['C', 'proc', 'aluna.idade = 17'],
    ['D', 'io', 'mostra aluna.idade'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
  ],
}
