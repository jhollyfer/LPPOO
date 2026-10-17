// A053 · Quanto custa o mototáxi

function precoCorrida(km: number): number {
  return 5 + km * 2 // R$ 5 para sair + R$ 2 por km
}

console.log(precoCorrida(3)) // 11
console.log(precoCorrida(10)) // 25
console.log(`Ida e volta: R$ ${precoCorrida(3) * 2}`) // Ida e volta: R$ 22
