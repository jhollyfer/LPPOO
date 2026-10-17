// A044 · Senha com do...while

import { input } from '#core/input.ts'

let senha: string

do {
  senha = input('Senha do Wi-Fi: ')
} while (senha !== 'cetam2026')

console.log('Conectado!')
