// A061 · O pedido de açaí

function pedirAcai(ml: number, copo: string = 'copo comum', cobertura?: string): void {
  const extra = cobertura === undefined ? 'sem cobertura' : `com ${cobertura}` // não veio? sem cobertura
  console.log(`Açaí de ${ml} ml, ${extra}, no ${copo}`)
}

pedirAcai(300) // Açaí de 300 ml, sem cobertura, no copo comum
pedirAcai(500, 'pote') // Açaí de 500 ml, sem cobertura, no pote
pedirAcai(500, 'pote', 'granola') // Açaí de 500 ml, com granola, no pote
