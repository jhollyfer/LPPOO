// A108 · Turno pelo teclado, com type guard

import { input } from '#core/input.ts'

const TURNOS = ['manhã', 'tarde', 'noite'] as const
type Turno = (typeof TURNOS)[number]

function ehTurno(texto: string): texto is Turno {
  return TURNOS.some((t) => t === texto)
}

const turno = input('Turno (manhã, tarde ou noite): ')
if (ehTurno(turno)) console.log(`Matrícula feita no turno da ${turno}`) // aqui turno é Turno
else console.log(`Turno "${turno}" não existe.`)
