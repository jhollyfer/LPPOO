// A077 · O placar do futsal

const time = 'Onças' // infere o tipo literal 'Onças'
const golsPorTempo = [2, 1] // infere: number[]
let total = 0 // infere: number
for (const gols of golsPorTempo) total += gols

const artilheiros: string[] = [] // array vazio: escreva o tipo
artilheiros.push('Caio', 'Lia')

// o parâmetro precisa de tipo; o retorno (string) ele descobre sozinho
function placar(nosso: number, deles: number) {
  return `${nosso} x ${deles}`
}

let resultado: string // ainda sem valor: escreva o tipo
if (total > 2) resultado = 'vitória'
else resultado = 'empate ou derrota'

console.log(`${time} ${placar(total, 2)}: ${resultado}`) // Onças 3 x 2: vitória
console.log(artilheiros) // [ 'Caio', 'Lia' ]
