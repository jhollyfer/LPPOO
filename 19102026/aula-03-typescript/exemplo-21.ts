// Aula 03 · Exemplo 21 · União discriminada
// Notificação do aplicativo da escola: cada tipo traz informações diferentes.

type Notificacao = { tipo: 'nota'; valor: number } | { tipo: 'falta'; data: string }

function mostrar(n: Notificacao): string {
  switch (n.tipo) {
    case 'nota':
      return `Nova nota: ${n.valor}` // aqui n tem valor
    case 'falta':
      return `Falta registrada em ${n.data}` // aqui n tem data
  }
}

console.log(mostrar({ tipo: 'falta', data: '19/10' })) // Falta registrada em 19/10
