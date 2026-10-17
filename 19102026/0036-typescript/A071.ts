// A071 · O erro aparece no editor, não no ônibus

const passagem: number = 4.5
const viagensNaSemana: number = 10
console.log(`Gasto: R$ ${(passagem * viagensNaSemana).toFixed(2)}`) // Gasto: R$ 45.00

const linha: string = 'Centro'
console.log(linha.toUpperCase()) // CENTRO

// Tire o // de uma das linhas abaixo e veja o editor sublinhar em vermelho.
// Guardar texto onde se prometeu número:
// const lotacao: number = 'cheio'
// erro: Type 'string' is not assignable to type 'number'.

// Usar método de número num texto:
// console.log(linha.toFixed(2))
// erro: Property 'toFixed' does not exist on type 'string'. Did you mean 'fixed'?
