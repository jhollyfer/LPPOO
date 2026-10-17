// A063 · Mesmo nome, caixas diferentes

const campeonato = 'Interclasse' // global: as duas funções enxergam

function placarDoPrimeiroA(): void {
  const gols = 3 // esta caixa só existe aqui dentro
  console.log(`${campeonato}: 1º A fez ${gols} gols`)
}

function placarDoPrimeiroB(): void {
  const gols = 1 // outra caixa, com o mesmo nome
  console.log(`${campeonato}: 1º B fez ${gols} gol`)
}

placarDoPrimeiroA() // Interclasse: 1º A fez 3 gols
placarDoPrimeiroB() // Interclasse: 1º B fez 1 gol
// console.log(gols) // tire o // e veja o erro: aqui fora não tem gols
