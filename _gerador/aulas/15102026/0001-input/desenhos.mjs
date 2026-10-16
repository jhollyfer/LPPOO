import { fileira } from '../../../tipos/ideia.mjs'

export const ideia = fileira(
  0,
  [
    { rotulo: '1 · pergunta', texto: ["input('Seu nome: ')"] },
    { rotulo: '2 · a Ana digita', texto: ['Ana', 'e aperta Enter'] },
    { rotulo: '3 · guarda', texto: ["nome = 'Ana'"] },
  ],
  ['espera', 'devolve'],
)

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'io', 'Ler nome'],
    ['C', 'io', 'Mostrar nome'],
    ['D', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
  ],
}

export const memoria = {
  passos: [
    {
      codigo: "const nome = input('Seu nome: ')",
      grava: [['nome', "'Ana'", { const: true }]],
      sai: 'Seu nome: Ana',
    },
    { codigo: 'console.log(nome)', sai: 'Ana' },
  ],
}
