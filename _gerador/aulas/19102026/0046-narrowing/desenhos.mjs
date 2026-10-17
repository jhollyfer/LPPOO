import { bifurcacao } from '../../../tipos/ideia.mjs'

export const ideia = bifurcacao({
  inicio: { forma: 'caixinha', y: 340, nome: 'm', valor: "'a27'", tipo: 'number | string', w: 300 },
  pergunta: ['typeof m', "=== 'number' ?"],
  sim: { rotulo: 'aqui m é number', texto: ["'A' + m"], cor: 'cinza' },
  nao: { rotulo: 'aqui m é string', texto: ['m.toUpperCase()'], cor: 'verde' },
})

export const fluxograma = {
  nos: [
    ['A', 'inicio', "formatarMatricula('a27')"],
    ['B', 'dec', "typeof m === 'number'?"],
    ['C', 'io', "devolve 'A' + m"],
    ['D', 'io', 'devolve A27'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C', 'Sim'],
    ['B', 'D', 'Não'],
  ],
  caminho: ['A', 'B', 'D'],
}
