// A039 · Senha

import { input } from '#core/input.ts'

const SENHA = '1234'
const digitada = input('Senha: ')

console.log(`Senha correta? ${digitada === SENHA}`)
