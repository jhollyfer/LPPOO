// A083 · A catraca só olha o saldo

type Cartao = { saldo: number }

function passar(c: Cartao): string {
  return c.saldo >= 4.5 ? 'Catraca liberada' : 'Saldo insuficiente'
}

const estudante = { saldo: 10, nome: 'Caio', escola: 'CETAM' }
console.log(passar(estudante)) // Catraca liberada: tem saldo, o resto não importa

// Sem saldo, não tem o formato de Cartao. Tire o // e veja:
// const turista = { nome: 'Lia' }
// passar(turista)
// erro: Property 'saldo' is missing in type '{ nome: string; }'
//       but required in type 'Cartao'.
