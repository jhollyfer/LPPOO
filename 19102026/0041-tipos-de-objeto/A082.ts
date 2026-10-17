// A082 · Objeto dentro de objeto

type Endereco = { cidade: string; bairro: string }
type Escola = { nome: string; endereco: Endereco }

const cetam: Escola = {
  nome: 'CETAM',
  endereco: { cidade: 'Benjamin Constant', bairro: 'Centro' },
}

console.log(`${cetam.nome} fica em ${cetam.endereco.cidade}`) // CETAM fica em Benjamin Constant
