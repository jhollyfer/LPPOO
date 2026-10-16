// Aula 03 · Exemplo 21 · União discriminada
// Notificação do aplicativo da escola: cada tipo traz informações diferentes.

type Notificacao =
  | { tipo: 'nota'; disciplina: string; valor: number }
  | { tipo: 'falta'; data: string }
  | { tipo: 'aviso'; texto: string }

function mostrar(n: Notificacao): string {
  switch (n.tipo) {
    case 'nota':
      return `Nova nota em ${n.disciplina}: ${n.valor}`
    case 'falta':
      return `Falta registrada em ${n.data}`
    case 'aviso':
      return `Aviso: ${n.texto}`
    default: {
      const esquecido: never = n
      return esquecido
    }
  }
}

console.log(mostrar({ tipo: 'nota', disciplina: 'LPPOO', valor: 9 }))
console.log(mostrar({ tipo: 'falta', data: '19/10' }))
console.log(mostrar({ tipo: 'aviso', texto: 'feriado na sexta' }))
