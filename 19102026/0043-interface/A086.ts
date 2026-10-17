// A086 · Interface com método

interface Lampada {
  ligada: boolean
  alternar(): void
}

const lampadaDaSala: Lampada = {
  ligada: false,
  alternar() {
    this.ligada = !this.ligada
  },
}

lampadaDaSala.alternar()
console.log(lampadaDaSala.ligada) // true
