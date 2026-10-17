export const ideia = {
  caixas: [
    { id: 'n', forma: 'array', x: 110, y: 20, itens: [8, 10, 6], indices: false },
    { id: 's', forma: 'array', x: 110, y: 330, itens: ["'Ana'", "'Bia'"], indices: false },
    { id: 'f', x: 640, y: 150, w: 300, cor: 'roxo', rotulo: 'função', texto: 'primeiro<T>' },
    { id: 'a', forma: 'caixinha', x: 1120, y: 0, nome: 'nota', valor: 8, tipo: 'number' },
    { id: 'b', forma: 'caixinha', x: 1120, y: 290, nome: 'nome', valor: "'Ana'", tipo: 'string' },
  ],
  setas: [
    { de: 'n', para: 'f', rotulo: 'T = number' },
    { de: 's', para: 'f', rotulo: 'T = string' },
    { de: 'f', para: 'a', cor: 'verde' },
    { de: 'f', para: 'b', cor: 'verde' },
  ],
  notas: [{ x: 110, y: 540, texto: 'A mesma função: o T vira o tipo de quem chamou.', cor: 'roxo' }],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'primeiro([8, 10, 6])'],
    ['B', 'proc', 'TS descobre T = number'],
    ['C', 'proc', 'devolve lista[0]'],
    ['D', 'io', 'nota: number | undefined'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
  ],
}
