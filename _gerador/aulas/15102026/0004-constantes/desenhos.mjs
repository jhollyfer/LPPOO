import { fileira } from '../../../tipos/ideia.mjs'

export const ideia = fileira(
  0,
  [
    { rotulo: '1 · cria', texto: ['const NOME_ESCOLA =', "'CETAM'"] },
    { rotulo: '2 · tenta trocar', texto: ['NOME_ESCOLA =', "'Outra escola'"], cor: 'amarelo' },
    { rotulo: '3 · o TypeScript avisa', texto: ['Não pode,', 'é constante!'], cor: 'vermelho' },
  ],
  ['depois...', 'erro'],
)

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
