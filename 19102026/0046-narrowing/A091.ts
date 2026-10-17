// A091 · Preço em número ou em texto

function paraReais(preco: number | string): string {
  if (typeof preco === 'string') {
    // aqui preco é string: veio escrito com vírgula, como '3,50'
    return `R$ ${Number(preco.replace(',', '.')).toFixed(2)}`
  }
  return `R$ ${preco.toFixed(2)}` // aqui só sobrou number
}

const etiquetasDaFeira: (number | string)[] = [5, '3,50', 12]
for (const preco of etiquetasDaFeira) console.log(paraReais(preco))
// R$ 5.00
// R$ 3.50
// R$ 12.00

// Antes do typeof, não dá para usar replace: número não tem replace.
// preco.replace(',', '.')
// erro: Property 'replace' does not exist on type 'string | number'.
