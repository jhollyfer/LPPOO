// A085 · Todo ônibus é um veículo

interface Veiculo { placa: string }
interface Onibus extends Veiculo { linha: string }

const circular: Onibus = { placa: 'PHX-2B19', linha: 'Centro-Colônia' }
const moto: Veiculo = { placa: 'QZA-7C21' }
const vistoria = (v: Veiculo): string => `Placa ${v.placa} conferida`

console.log(vistoria(circular)) // Placa PHX-2B19 conferida (todo Onibus é Veiculo)
console.log(vistoria(moto)) // Placa QZA-7C21 conferida

// O contrário não vale: nem todo Veiculo tem linha.
// console.log(moto.linha)
// erro: Property 'linha' does not exist on type 'Veiculo'.
