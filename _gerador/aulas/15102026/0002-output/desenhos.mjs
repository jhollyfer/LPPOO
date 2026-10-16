export const ideia = {
  caixas: [
    { id: 'm', forma: 'caixinha', x: 110, y: 0, nome: 'media', valor: '7.5', tipo: 'number' },
    {
      id: 'tpl',
      x: 520,
      y: 60,
      w: 440,
      cor: 'roxo',
      rotulo: 'template string',
      texto: ['`Sua média é ${media}`'],
    },
    { id: 't', forma: 'terminal', x: 1120, y: 50, w: 360, texto: ['Sua média é 7.5'] },
  ],
  setas: [
    { de: 'm', para: 'tpl', rotulo: 'encaixa' },
    { de: 'tpl', para: 't', rotulo: 'console.log' },
  ],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'proc', 'media = 7.5'],
    ['C', 'io', 'Mostrar "Sua média é 7.5"'],
    ['D', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
  ],
}
