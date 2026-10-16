// A123 · Anotar o retorno pega o erro na própria função

function situacao(media: number): 'Aprovado' | 'Reprovado' {
  return media >= 6 ? 'Aprovado' : 'Reprovado'
  // se você escrever 'aprovado' com minúscula, o erro aparece AQUI
}

console.log(situacao(7)) // Aprovado
console.log(situacao(4)) // Reprovado
