// Aula 02 · Exemplo 13 · Arrays tipados e for...of
// Quantas letras tem cada fruta, e qual tem mais?

const frutas: string[] = ['açaí', 'cupuaçu', 'tucumã', 'buriti']

let maior = ''
for (const fruta of frutas) {
  console.log(`${fruta}: ${fruta.length} letras`)
  if (fruta.length > maior.length) {
    maior = fruta
  }
}

console.log(`A de nome mais comprido é ${maior}.`)
