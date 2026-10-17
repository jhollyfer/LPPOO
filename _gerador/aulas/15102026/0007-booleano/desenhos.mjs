export const ideia = {
  caixas: [
    { id: 'ana', forma: 'pessoa', x: 110, y: 90, nome: 'Ana' },
    { id: 'b', forma: 'balao', x: 190, y: -20, texto: 'ana@gmail.com', cor: 'azul' },
    { id: 'cmp', x: 560, y: 120, w: 420, cor: 'roxo', rotulo: 'pergunta', texto: ["email.includes('@')"] },
    {
      id: 'cx',
      forma: 'caixinha',
      x: 1140,
      y: 66,
      nome: 'temArroba',
      valor: 'true',
      tipo: 'boolean',
      cor: 'verde',
    },
  ],
  setas: [
    { de: 'ana', para: 'cmp', rotulo: 'email' },
    { de: 'cmp', para: 'cx', rotulo: 'guarda' },
  ],
  notas: [{ x: 560, y: 340, texto: 'Texto sem @? Aí a resposta é false.', cor: 'vermelho' }],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'io', 'Ler email'],
    ['C', 'proc', "temArroba = email.includes('@')"],
    ['D', 'io', 'Mostrar temArroba'],
    ['E', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
    ['D', 'E'],
  ],
}
