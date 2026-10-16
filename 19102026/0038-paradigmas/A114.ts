// A114 · Um objeto que guarda o próprio estado

class Contador {
  private valor = 0

  somar(): void {
    this.valor++
  }

  mostrar(): string {
    return `Contei ${this.valor} vezes`
  }
}

const catraca = new Contador()
catraca.somar()
catraca.somar()
catraca.somar()
console.log(catraca.mostrar()) // Contei 3 vezes
