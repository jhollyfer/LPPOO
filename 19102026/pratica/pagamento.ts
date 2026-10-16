// Prática em sala · Pagamento com união discriminada
//
// Crie type Pagamento com três formatos: pix (chave), cartao (parcelas) e
// dinheiro (recebido). Escreva cobrar(total: number, p: Pagamento): string, que
// mostra a chave do Pix, o valor de cada parcela ou o troco. Use switch e o
// default com never.
//
// Dicas:
// 1. No case do cartão: (total / p.parcelas).toFixed(2).
// 2. No dinheiro, confira se o recebido dá para pagar.
//
// Escreva sua resposta abaixo:
