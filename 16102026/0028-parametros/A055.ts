// A055 · A conta do restaurante (valor padrão)

function calcularConta(valor: number, gorjeta: number = 10): number {
  return valor + (valor * gorjeta) / 100 // gorjeta em porcentagem
}

console.log(calcularConta(50)) // 55 (não mandou gorjeta: vale 10)
console.log(calcularConta(50, 20)) // 60
console.log(calcularConta(50, 0)) // 50
