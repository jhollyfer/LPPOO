// A012 · const também guarda o que o usuário digitou

import { input } from '#core/input.ts'

const CIDADE = 'Benjamin Constant'
const nome = input('Seu nome: ')

console.log(`${nome} mora em ${CIDADE}`)
