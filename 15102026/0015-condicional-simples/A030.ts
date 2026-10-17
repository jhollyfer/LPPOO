// A030 · Aviso de chuva

import { input } from '#core/input.ts'

const resposta = input('Está chovendo? (sim/nao) ')

if (resposta === 'sim') {
  console.log('Leve o guarda-chuva!')
}
console.log('Bom dia!')
