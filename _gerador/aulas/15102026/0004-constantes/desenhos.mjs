export const ideia = {
  caixas: [
    {
      id: 'cx',
      forma: 'caixinha',
      x: 110,
      y: 20,
      nome: 'NOME_ESCOLA',
      valor: "'CETAM'",
      tipo: 'string',
      cadeado: true,
    },
    {
      id: 'tenta',
      x: 900,
      y: 74,
      w: 560,
      cor: 'amarelo',
      rotulo: 'tenta trocar',
      texto: ["NOME_ESCOLA = 'Outra escola'"],
    },
    { forma: 'marca', x: 640, y: 132, tamanho: 56 },
  ],
  setas: [{ de: 'tenta', para: 'cx', cor: 'vermelho', rotulo: 'barrado', dy: -30 }],
  notas: [{ x: 110, y: 290, texto: 'A caixa tem cadeado: o TypeScript não deixa trocar.', cor: 'vermelho' }],
}
export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'proc', "NOME_ESCOLA = 'CETAM'"],
    ['C', 'io', 'Ler nome'],
    ['D', 'io', 'Mostrar "Ana estuda no CETAM"'],
    ['E', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
    ['D', 'E'],
  ],
}
