// A100 · Record: uma chave para cada turno

type Turno = 'manhã' | 'tarde' | 'noite'

const vagas: Record<Turno, number> = { manhã: 30, tarde: 25, noite: 40 }
const inscritos: Record<Turno, number> = { manhã: 28, tarde: 25, noite: 12 }

const turnos: Turno[] = ['manhã', 'tarde', 'noite']
for (const t of turnos) {
  const sobra = vagas[t] - inscritos[t]
  console.log(`${t.padEnd(6)} sobram ${sobra} vagas`)
}
