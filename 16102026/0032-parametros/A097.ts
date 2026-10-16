// A097 · Desconto com valor padrão e moeda opcional

function totalComDesconto(precos: number[], desconto: number = 0): number {
  const total = precos.reduce((acc, p) => acc + p, 0)
  return total - total * desconto
}

function mostrarTotal(total: number, moeda?: string): void {
  console.log(`${moeda ?? 'R$'} ${total.toFixed(2)}`)
}

mostrarTotal(totalComDesconto([10, 20])) // R$ 30.00
mostrarTotal(totalComDesconto([10, 20], 0.1)) // R$ 27.00
mostrarTotal(5, 'US$') // US$ 5.00
