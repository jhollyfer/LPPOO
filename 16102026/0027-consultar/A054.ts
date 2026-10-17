// A054 · Está na lista?

import { input } from '#core/input.ts'

const turma: string[] = ['Ana', 'Bia', 'Caio']
const nome = input('Nome: ')

if (turma.includes(nome)) {
  console.log(`${nome} está na posição ${turma.indexOf(nome)}`)
} else {
  console.log(`${nome} não está na turma`)
}
