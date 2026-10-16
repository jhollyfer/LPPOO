// A161 · Relatório por turno com Record e generic

type Turno = 'manhã' | 'tarde' | 'noite'
type Aluno = { nome: string; turno: Turno }

function agrupar<T>(lista: T[], chave: (item: T) => Turno): Record<Turno, T[]> {
  const grupos: Record<Turno, T[]> = { manhã: [], tarde: [], noite: [] }
  for (const item of lista) grupos[chave(item)].push(item)
  return grupos
}

const turma: Aluno[] = [
  { nome: 'Ana', turno: 'manhã' },
  { nome: 'Bia', turno: 'noite' },
  { nome: 'Caio', turno: 'manhã' },
]

const porTurno = agrupar(turma, (a) => a.turno)
const vagas: Record<Turno, number> = { manhã: 30, tarde: 25, noite: 40 }

const turnos: Turno[] = ['manhã', 'tarde', 'noite']
for (const t of turnos) {
  const nomes = porTurno[t].map((a) => a.nome).join(', ') || '-'
  console.log(`${t.padEnd(6)} ${porTurno[t].length}/${vagas[t]}  ${nomes}`)
}
