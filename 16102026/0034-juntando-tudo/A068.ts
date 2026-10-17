// A068 · Os gastos da semana, numa função void com for...of

function mostrarGastos(gastos: number[]): void {
  let dia = 1
  for (const gasto of gastos) {
    const aviso = gasto > 20 ? 'passou do limite' : 'ok'
    console.log(`Dia ${dia}: R$ ${gasto.toFixed(2)} (${aviso})`)
    dia++
  }

  const total = gastos.reduce((acc, g) => acc + g, 0)
  console.log(`Total: R$ ${total.toFixed(2)}`)
}

mostrarGastos([12, 25, 8.5])
// Dia 1: R$ 12.00 (ok)
// Dia 2: R$ 25.00 (passou do limite)
// Dia 3: R$ 8.50 (ok)
// Total: R$ 45.50
