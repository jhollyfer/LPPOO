// A092 · Igualdade e verdadeiro/falso também estreitam

function chamar(nome: string, apelido?: string): string {
  if (apelido) return apelido // aqui apelido é string: o undefined ficou de fora
  return nome
}

type Turno = 'manhã' | 'tarde' | 'noite'
function temIntervalo(turno: Turno): boolean {
  if (turno === 'noite') return false // aqui turno é 'noite'
  return true // aqui sobrou 'manhã' | 'tarde'
}

console.log(chamar('José', 'Zé'), chamar('Ana'), temIntervalo('noite')) // Zé Ana false
