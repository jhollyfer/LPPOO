// A045 · Acesso opcional com ?.

import { input } from '#core/input.ts'

// se a pessoa só apertar Enter, o texto vazio vira undefined
const apelido: string | undefined = input('Apelido (Enter para pular): ') || undefined

console.log(apelido?.toUpperCase()) // undefined se ficou vazio, e sem erro
