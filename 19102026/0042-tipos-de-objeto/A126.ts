// A126 · Uma função que recebe e devolve objetos

type Aluno = { nome: string; idade: number }

function fazerAniversario(aluno: Aluno): Aluno {
  // ...aluno copia todas as propriedades; depois a idade é trocada
  return { ...aluno, idade: aluno.idade + 1 }
}

const ana: Aluno = { nome: 'Ana', idade: 17 }
const anaMaisVelha = fazerAniversario(ana)

console.log(ana.idade) // 17: o original não mudou
console.log(anaMaisVelha.idade) // 18
