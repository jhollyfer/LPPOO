export const ideia = {
  caixas: [
    { id: 'joao', forma: 'pessoa', x: 110, y: 60, nome: 'João, 17 anos' },
    { id: 'seg', forma: 'pessoa', x: 580, y: 60, nome: 'o segurança' },
    { id: 'b', forma: 'balao', x: 660, y: -60, texto: 'idade >= 18 ?', cor: 'amarelo' },
    { id: 'cx', forma: 'caixinha', x: 1090, y: 40, nome: 'maiorDeIdade', valor: 'false', tipo: 'boolean' },
  ],
  setas: [
    { de: 'joao', para: 'seg', rotulo: 'idade = 17' },
    { de: 'seg', para: 'cx', rotulo: 'responde' },
  ],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'io', 'Ler idade'],
    ['C', 'proc', 'maiorDeIdade = idade >= 18'],
    ['D', 'io', 'Mostrar maiorDeIdade'],
    ['E', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
    ['D', 'E'],
  ],
}
