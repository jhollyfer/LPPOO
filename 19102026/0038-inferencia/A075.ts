// A075 · O placar do futsal

const time = 'Onças' // infere o tipo literal 'Onças'
const gols = [2, 1] // infere: number[]
const artilheiros: string[] = [] // array vazio: escreva o tipo
artilheiros.push('Caio', 'Lia')

// o parâmetro precisa de tipo; o retorno (number) ele descobre sozinho
function somar(lista: number[]) {
  return lista.reduce((a, b) => a + b, 0)
}

console.log(`${time}: ${somar(gols)} gols de ${artilheiros.join(' e ')}`)
// Onças: 3 gols de Caio e Lia
