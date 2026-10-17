export const ideia = {
  caixas: [
    { id: 'voce', forma: 'pessoa', x: 110, y: 130, nome: 'você' },
    { id: 'b', forma: 'balao', x: 200, y: 20, texto: '2', w: 110, cor: 'verde' },
    {
      id: 'menu',
      forma: 'cardapio',
      x: 480,
      y: 30,
      w: 480,
      titulo: 'switch (opcao)',
      itens: [
        ['case 1', 'Saldo'],
        ['case 2', 'Depósito'],
        ['case 3', 'Sair'],
        ['default', 'Opção inválida'],
      ],
      destaque: 1,
    },
    { id: 't', forma: 'terminal', x: 1100, y: 130, texto: ['Depósito', 'realizado'] },
  ],
  setas: [
    { de: 'voce', para: 'menu:1', rotulo: '=== 2', cor: 'verde' },
    { de: 'menu:1', para: 't', cor: 'verde' },
  ],
}
export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'io', 'Ler opcao'],
    ['C', 'dec', 'opcao'],
    ['D', 'io', 'Mostrar saldo'],
    ['E', 'io', 'Mostrar "Depósito realizado"'],
    ['F', 'io', 'Mostrar "Até logo!"'],
    ['G', 'io', 'Mostrar "Opção inválida"'],
    ['H', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D', '1'],
    ['C', 'E', '2'],
    ['C', 'F', '3'],
    ['C', 'G', 'default'],
    ['D', 'H'],
    ['E', 'H'],
    ['F', 'H'],
    ['G', 'H'],
  ],
  // o caminho do exemplo do texto
  caminho: ['A', 'B', 'C', 'E', 'H'],
}
