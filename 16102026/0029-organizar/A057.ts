// A057 · A chamada em ordem alfabética

const alunos: string[] = ['Davi', 'Ana', 'Gabi', 'Caio']

const ordem = alunos.slice() // foto da lista
ordem.sort() // com texto, o sort sem regra funciona
console.log(ordem.join(', ')) // Ana, Caio, Davi, Gabi
console.log(ordem.reverse().join(', ')) // Gabi, Davi, Caio, Ana

const turmaNova = alunos.concat(['Bia', 'Enzo'])
console.log(turmaNova.length) // 6
console.log(alunos) // [ 'Davi', 'Ana', 'Gabi', 'Caio' ]: o original não mudou
