// A071 · O total da feira nos três estilos

const compras: number[] = [6, 12.5, 3.5] // farinha, peixe, cheiro-verde

// imperativo: um passo de cada vez, mudando a variável total
let total = 0
for (const preco of compras) total += preco
console.log(total) // 22

// funcional: a função recebe a lista e devolve a soma, sem mexer em nada fora
const somar = (precos: number[]): number => precos.reduce((a, b) => a + b, 0)
console.log(somar(compras)) // 22

// orientado a objetos: a sacola guarda os preços e sabe somar o que tem dentro
class Sacola {
  private precos: number[] = []
  colocar(preco: number): void {
    this.precos.push(preco)
  }
  total(): number {
    return this.precos.reduce((a, b) => a + b, 0)
  }
}
const sacola = new Sacola()
for (const preco of compras) sacola.colocar(preco)
console.log(sacola.total()) // 22
