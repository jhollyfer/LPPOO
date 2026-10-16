export const ideia = {
  caixas: [
    { id: 'ini', x: 110, y: 130, w: 320, cor: 'azul', rotulo: 'você digita', texto: ["'sim'"] },
    {
      id: 'p',
      x: 540,
      y: 105,
      w: 360,
      h: 200,
      forma: 'losango',
      cor: 'amarelo',
      texto: ['resposta', "=== 'sim' ?"],
    },
    {
      id: 'sim',
      x: 1060,
      y: 0,
      w: 430,
      cor: 'verde',
      rotulo: 'bloco do if',
      texto: ["'Leve o guarda-chuva!'"],
    },
    { id: 'fim', x: 1060, y: 270, w: 430, cor: 'cinza', rotulo: 'depois do if', texto: ["'Bom dia!'"] },
  ],
  setas: [
    { de: 'ini', para: 'p' },
    { de: 'p', para: 'sim', lados: 'ce', cotovelo: true, rotulo: 'Sim', cor: 'verde' },
    { de: 'p', para: 'fim', lados: 'be', cotovelo: true, rotulo: 'Não', cor: 'vermelho' },
    { de: 'sim', para: 'fim', lados: 'bc', cor: 'cinza' },
  ],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'io', 'Ler resposta'],
    ['C', 'dec', "resposta === 'sim'?"],
    ['D', 'io', 'Mostrar "Leve o guarda-chuva!"'],
    ['E', 'io', 'Mostrar "Bom dia!"'],
    ['F', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D', 'Sim'],
    ['C', 'E', 'Não'],
    ['D', 'E'],
    ['E', 'F'],
  ],
  // o caminho do exemplo do texto
  caminho: ['A', 'B', 'C', 'D', 'E', 'F'],
}
