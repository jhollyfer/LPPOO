// A107 · A biblioteca da escola

type Genero = 'romance' | 'poesia' | 'quadrinhos'

interface Livro {
  readonly codigo: string
  titulo: string
  genero: Genero
  dias?: number // só existe se o livro estiver com um aluno
}

type Situacao = { tipo: 'na estante' } | { tipo: 'emprestado'; dias: number } | { tipo: 'atrasado'; multa: number }

function situacao(l: Livro): Situacao {
  if (l.dias === undefined) return { tipo: 'na estante' }
  if (l.dias <= 7) return { tipo: 'emprestado', dias: l.dias }
  return { tipo: 'atrasado', multa: (l.dias - 7) * 0.5 }
}

const acervo: Livro[] = [
  { codigo: 'L01', titulo: 'O Guarani', genero: 'romance' },
  { codigo: 'L02', titulo: 'Turma da Mônica', genero: 'quadrinhos', dias: 3 },
  { codigo: 'L03', titulo: 'Poemas do Rio', genero: 'poesia', dias: 11 },
]

for (const l of acervo) {
  const s = situacao(l)
  if (s.tipo === 'atrasado') console.log(`${l.codigo} ${l.titulo}: multa de R$ ${s.multa.toFixed(2)}`)
  else if (s.tipo === 'emprestado') console.log(`${l.codigo} ${l.titulo}: volta em ${7 - s.dias} dias`)
  else console.log(`${l.codigo} ${l.titulo}: disponível na estante de ${l.genero}`)
}
// L01 O Guarani: disponível na estante de romance
// L02 Turma da Mônica: volta em 4 dias
// L03 Poemas do Rio: multa de R$ 2.00
