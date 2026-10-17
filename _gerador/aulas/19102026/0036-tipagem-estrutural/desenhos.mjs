export const ideia = {
  caixas: [
    { id: 'a', x: 110, y: 0, w: 440, cor: 'verde', rotulo: 'ana', texto: ["nome: 'Ana', idade: 17"] },
    {
      id: 'v',
      x: 110,
      y: 190,
      w: 440,
      cor: 'verde',
      rotulo: 'visitante',
      texto: ["nome: 'Zé', idade: 40", "cidade: 'BC' (sobra)"],
    },
    { id: 's', x: 110, y: 420, w: 440, cor: 'vermelho', rotulo: 'sem idade', texto: ["nome: 'Bia'"] },
    {
      id: 't',
      x: 960,
      y: 180,
      w: 500,
      h: 190,
      cor: 'amarelo',
      rotulo: 'type Aluno (o formato)',
      texto: ['nome: string', 'idade: number'],
    },
    { forma: 'marca', tipo: 'certo', x: 720, y: 60, tamanho: 44 },
    { forma: 'marca', tipo: 'certo', x: 720, y: 240, tamanho: 44 },
    { forma: 'marca', tipo: 'errado', x: 720, y: 450, tamanho: 44 },
  ],
  setas: [
    { de: 'a', para: 't', cor: 'verde' },
    { de: 'v', para: 't', cor: 'verde' },
    { de: 's', para: 't', cor: 'vermelho' },
  ],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'apresentar(visitante)'],
    ['B', 'dec', 'tem nome e idade?'],
    ['C', 'dec', 'nome é string e idade é number?'],
    ['D', 'proc', 'aceita (a cidade que sobra não atrapalha)'],
    ['E', 'io', 'erro: falta propriedade'],
    ['F', 'io', 'erro: tipo errado'],
    ['G', 'inicio', 'Roda'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C', 'Sim'],
    ['B', 'E', 'Não'],
    ['C', 'D', 'Sim'],
    ['C', 'F', 'Não'],
    ['D', 'G'],
  ],
  caminho: ['A', 'B', 'C', 'D', 'G'],
}
