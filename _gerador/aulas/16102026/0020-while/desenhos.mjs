export const ideia = {
  caixas: [
    { id: 's', forma: 'caixinha', x: 110, y: 60, nome: 'saldo', valor: '20', tipo: 'number' },
    { id: 'p', x: 470, y: 84, w: 320, h: 200, forma: 'losango', cor: 'amarelo', texto: ['saldo >= 4.5 ?'] },
    {
      id: 'c',
      x: 940,
      y: 0,
      w: 520,
      cor: 'roxo',
      rotulo: 'corpo do laço',
      texto: ['paga: saldo -= 4.5', 'conta: viagens++'],
    },
    { id: 't', forma: 'terminal', x: 940, y: 300, w: 520, texto: ['Deu para 4 viagens.', 'Sobrou R$ 2.00'] },
  ],
  setas: [
    { de: 's', para: 'p' },
    { de: 'p', para: 'c', rotulo: 'Sim', cor: 'verde' },
    { de: 'p', para: 't', lados: 'be', cotovelo: true, rotulo: 'Não', cor: 'vermelho' },
    {
      pontos: [
        [1200, -16],
        [1200, -44],
        [630, -44],
        [630, 68],
      ],
      rotulo: 'volta e pergunta de novo',
    },
  ],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'proc', 'saldo = 20, viagens = 0'],
    ['C', 'dec', 'saldo >= 4.5?'],
    ['D', 'proc', 'saldo -= 4.5, viagens++'],
    ['E', 'io', 'Mostrar viagens e saldo'],
    ['F', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D', 'Sim'],
    ['D', 'C'],
    ['C', 'E', 'Não'],
    ['E', 'F'],
  ],
}
