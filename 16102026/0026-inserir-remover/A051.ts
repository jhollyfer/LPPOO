// A051 · A playlist da festa junina

const musicas: string[] = ['toada', 'forró']

musicas.push('brega') // [toada, forró, brega]
musicas.unshift('quadrilha') // [quadrilha, toada, forró, brega]
const tirada = musicas.pop() // tira brega: [quadrilha, toada, forró]
musicas.shift() // tira quadrilha: [toada, forró]
musicas.splice(1, 0, 'carimbó') // na posição 1, não tira nada e põe carimbó

console.log(musicas) // [ 'toada', 'carimbó', 'forró' ]
console.log(`Saiu da lista: ${tirada}`) // Saiu da lista: brega
