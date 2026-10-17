import { bifurcacao } from '../../../tipos/ideia.mjs'

const desenho = bifurcacao({
  inicio: { forma: 'caixinha', y: 340, nome: 'hora', valor: '5', tipo: 'chegou às 5h', w: 270 },
  pergunta: ['hora <= 6 ?'],
  sim: { rotulo: 'bloco do if', texto: ["'Embarcou para Tabatinga!'"] },
  nao: { rotulo: 'bloco do else', texto: ["'O recreio já saiu.'"], cor: 'cinza' },
})
// a seta do Não fica cinza: o exemplo não passa por ela
desenho.setas[2].cor = 'cinza'
export const ideia = desenho

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'io', 'Ler hora'],
    ['C', 'dec', 'hora <= 6?'],
    ['D', 'io', 'Mostrar "Embarcou para Tabatinga!"'],
    ['E', 'io', 'Mostrar "O recreio já saiu."'],
    ['F', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D', 'Sim'],
    ['C', 'E', 'Não'],
    ['D', 'F'],
    ['E', 'F'],
  ],
  // o caminho do exemplo do texto
  caminho: ['A', 'B', 'C', 'D', 'F'],
}
