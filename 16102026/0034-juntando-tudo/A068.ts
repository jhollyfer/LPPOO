// A068 · Os gastos da semana, numa função void com for...of

function mostrarGastos(gastos: number[]): void {
  for (const gasto of gastos) {
    const aviso = gasto > 20 ? 'passou do limite' : 'ok'
    console.log(`R$ ${gasto.toFixed(2)} (${aviso})`)
  }
  const total = gastos.reduce((acc, g) => acc + g, 0)
  console.log(`Total: R$ ${total.toFixed(2)}`)
}

mostrarGastos([12, 25, 8.5])
// R$ 12.00 (ok) / R$ 25.00 (passou do limite) / R$ 8.50 (ok) / Total: R$ 45.50
