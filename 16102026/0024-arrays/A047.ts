// A047 · O cardápio da cantina

const lanches: string[] = ['tapioca', 'pão com ovo', 'bolo de macaxeira']
const precos: number[] = [5, 4, 3]

console.log(lanches[2]) // bolo de macaxeira
console.log(`Hoje tem ${lanches.length} lanches`) // Hoje tem 3 lanches
precos[2] = 3.5 // o bolo ficou mais caro
console.log(precos) // [ 5, 4, 3.5 ]
