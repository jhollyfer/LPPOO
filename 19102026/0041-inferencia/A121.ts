// A121 · Inferir ou escrever

let idade = 17
const turno = 'noite'
const notas = [8, 6, 9]

const nomes: string[] = []
let apelido: string
if (idade >= 18) apelido = 'Sr. Zé'
else apelido = 'Zé'

function dobrar(n: number) {
  return n * 2
}

idade++
nomes.push('Ana')
console.log(idade, turno, notas, nomes, apelido, dobrar(4))
