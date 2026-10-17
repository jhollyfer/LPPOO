// A085 · Todo ônibus é um veículo

interface Veiculo {
  placa: string
}

interface Onibus extends Veiculo {
  linha: string
  lugares: number
}

const circular: Onibus = { placa: 'PHX-2B19', linha: 'Centro-Colônia', lugares: 40 }
const moto: Veiculo = { placa: 'QZA-7C21' }

function vistoria(v: Veiculo): string {
  return `Placa ${v.placa} conferida`
}

console.log(vistoria(circular)) // Placa PHX-2B19 conferida: todo Onibus também é Veiculo
console.log(vistoria(moto)) // Placa QZA-7C21 conferida
console.log(`${circular.linha}: ${circular.lugares} lugares`) // Centro-Colônia: 40 lugares

// O contrário não vale: nem todo Veiculo tem linha.
// console.log(moto.linha)
// erro: Property 'linha' does not exist on type 'Veiculo'.
