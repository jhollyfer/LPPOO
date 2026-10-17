// A091 · Preço em número ou em texto

function paraReais(preco: number | string): string {
  if (typeof preco === 'string') {
    // aqui preco é string: veio digitado, às vezes com espaço, como ' 3.50 '
    return `R$ ${Number(preco.trim()).toFixed(2)}`
  }
  return `R$ ${preco.toFixed(2)}` // aqui só sobrou number
}

const etiquetasDaFeira: (number | string)[] = [5, ' 3.50 ', 12]
for (const preco of etiquetasDaFeira) console.log(paraReais(preco))
// R$ 5.00
// R$ 3.50
// R$ 12.00

// Antes do typeof, não dá para usar trim: número não tem trim.
// preco.trim()
// erro: Property 'trim' does not exist on type 'string | number'.
