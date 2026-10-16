// Exemplo 3 - for...of também percorre as letras de um texto

let vogais = 0

for (const letra of 'Tabatinga') {
  if ('aeiou'.includes(letra.toLowerCase())) vogais++
}

console.log(`Vogais: ${vogais}`) // 4
