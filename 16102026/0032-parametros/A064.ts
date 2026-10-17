// A064 · Saudação com valor padrão

function saudar(nome: string, saudacao: string = 'Olá'): string {
  return `${saudacao}, ${nome}!`
}

console.log(saudar('Ana')) // Olá, Ana!
console.log(saudar('Bia', 'Bom dia')) // Bom dia, Bia!
