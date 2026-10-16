// A087 · forEach também entrega a posição

const nomes: string[] = ['Ana', 'Bia', 'Caio']

nomes.forEach((nome, i) => {
  console.log(`${i + 1}. ${nome}`)
})
