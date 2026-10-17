// A073 · A catraca só olha o saldo

type Cartao = { saldo: number }

function passar(c: Cartao): string {
  return c.saldo >= 4.5 ? 'Catraca liberada' : 'Saldo insuficiente'
}

const estudante = { saldo: 10, nome: 'Caio', escola: 'CETAM' }
const visitante = { saldo: 2, nome: 'Pedro', cidade: 'Tabatinga' }

console.log(passar(estudante)) // Catraca liberada: tem saldo, o resto não importa
console.log(passar(visitante)) // Saldo insuficiente

// Quem não tem saldo não tem o formato de Cartao:
// const turista = { nome: 'Lia' }
// passar(turista)
// erro: Argument of type '{ nome: string; }' is not assignable to parameter of type 'Cartao'.
//       Property 'saldo' is missing in type '{ nome: string; }'
//       but required in type 'Cartao'.
