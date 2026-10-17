// A042 · Senha com do...while

import { input } from '#core/input.ts'

let senha // a caixa nasce vazia: o do pede a senha antes de conferir

do {
  senha = input('Senha do Wi-Fi: ')
} while (senha !== 'cetam2026')

console.log('Conectado!')
