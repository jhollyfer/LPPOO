// A093 · Pagamento da cantina

type Pagamento =
  | { tipo: 'pix'; chave: string }
  | { tipo: 'cartao'; parcelas: number }
  | { tipo: 'dinheiro'; recebido: number; total: number }

function descrever(p: Pagamento): string {
  switch (p.tipo) {
    case 'pix':
      return `Pix para ${p.chave}`
    case 'cartao':
      return `Cartão em ${p.parcelas}x`
    case 'dinheiro':
      return `Troco: R$ ${(p.recebido - p.total).toFixed(2)}`
  }
}

console.log(descrever({ tipo: 'pix', chave: 'cantina@cetam' }))
console.log(descrever({ tipo: 'cartao', parcelas: 3 }))
console.log(descrever({ tipo: 'dinheiro', recebido: 20, total: 15 }))
