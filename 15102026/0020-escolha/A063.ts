// A063 · Vários case com a mesma resposta

const fruta: string = 'açaí'

switch (fruta) {
  case 'açaí':
  case 'cupuaçu':
  case 'buriti':
    console.log('Fruta da Amazônia!')
    break
  default:
    console.log('Outra fruta')
}
