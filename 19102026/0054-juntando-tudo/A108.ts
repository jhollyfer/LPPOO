// A108 · Cadastro pelo teclado, com type guard no turno

import { input } from '#core/input.ts'

const TURNOS = ['manhã', 'tarde', 'noite'] as const
type Turno = (typeof TURNOS)[number]

function ehTurno(texto: string): texto is Turno {
  return (TURNOS as readonly string[]).includes(texto)
}

const nome = input('Nome: ')
const nota = Number(input('Nota: '))
const turnoDigitado = input('Turno (manhã, tarde ou noite): ')

if (!ehTurno(turnoDigitado)) {
  console.log(`Turno "${turnoDigitado}" não existe.`)
} else if (Number.isNaN(nota)) {
  console.log('A nota precisa ser um número.')
} else {
  const situacao = nota >= 7 ? 'aprovado' : 'recuperação'
  console.log(`${nome}, turno da ${turnoDigitado}: ${situacao}`)
}
