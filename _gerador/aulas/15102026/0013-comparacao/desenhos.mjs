import { fileira } from '../../../tipos/ideia.mjs'

export const ideia = {
  ...fileira(
    0,
    [
      { rotulo: 'você digita', texto: ["'cetam2026'"] },
      { rotulo: 'compara', texto: ['digitada === SENHA'] },
      { rotulo: 'acertou', texto: ['true'] },
    ],
    ['===', 'responde'],
  ),
  notas: [
    { x: 110, y: 230, texto: "Digitou 'cetam2025'? Uma letra diferente e já dá false.", cor: 'vermelho' },
  ],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'proc', "SENHA = 'cetam2026'"],
    ['C', 'io', 'Ler digitada'],
    ['D', 'proc', 'acertou = digitada === SENHA'],
    ['E', 'io', 'Mostrar acertou'],
    ['F', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
    ['D', 'E'],
    ['E', 'F'],
  ],
}

export const memoria = {
  passos: [
    { codigo: "const SENHA = 'cetam2026'", grava: [['SENHA', "'cetam2026'", { const: true }]] },
    {
      codigo: "const digitada = input('Senha do Wi-Fi: ')",
      grava: [['digitada', "'cetam2026'", { const: true }]],
      sai: 'Senha do Wi-Fi: cetam2026',
    },
    {
      codigo: 'const acertou = digitada === SENHA',
      conta: ['digitada === SENHA', 'true'],
      grava: [['acertou', 'true', { const: true }]],
    },
    { codigo: 'console.log(acertou)', sai: 'true' },
  ],
}
