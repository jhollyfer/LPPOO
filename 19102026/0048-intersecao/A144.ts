// A144 · | (um ou outro) x & (os dois)

type Pix = { chave: string }
type Cartao = { parcelas: number }

const umOuOutro: Pix | Cartao = { chave: 'cantina@cetam' } // basta um dos formatos
const osDois: Pix & Cartao = { chave: 'cantina@cetam', parcelas: 2 } // precisa dos dois

console.log(umOuOutro)
console.log(osDois)
