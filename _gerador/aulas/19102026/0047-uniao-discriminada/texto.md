## 0047 · União discriminada

> Na cantina, o pagamento pode ser no Pix, no cartão ou em dinheiro. Cada um
> pede informações diferentes: o Pix tem chave, o cartão tem parcelas, o
> dinheiro tem troco.

Quando cada opção de uma união tem formato diferente, a saída é colocar em
todas uma propriedade com o **mesmo nome** e um **valor literal diferente**,
como `tipo: 'pix'`. Essa propriedade é o **discriminante**: olhando para ela,
o TypeScript sabe qual formato é. Isso é a **união discriminada**.

O `switch` no `tipo` funciona como o cardápio da aula 01: cada `case` já
recebe o formato certo, com as propriedades certas:

{{ideia}}

```ts
type Pagamento =
  | { tipo: 'pix'; chave: string }
  | { tipo: 'cartao'; parcelas: number }
  | { tipo: 'dinheiro'; recebido: number; total: number }

function descrever(p: Pagamento): string {
  switch (p.tipo) {
    case 'pix':
      return `Pix para ${p.chave}` // aqui p tem chave
    case 'cartao':
      return `Cartão em ${p.parcelas}x` // aqui p tem parcelas
    case 'dinheiro':
      return `Troco: R$ ${(p.recebido - p.total).toFixed(2)}`
  }
}

console.log(descrever({ tipo: 'pix', chave: 'cantina@cetam' })) // Pix para cantina@cetam
console.log(descrever({ tipo: 'cartao', parcelas: 3 })) // Cartão em 3x
console.log(descrever({ tipo: 'dinheiro', recebido: 20, total: 15 })) // Troco: R$ 5.00
```

{{fluxograma}}

> [!TIP]
> **Poder do TypeScript:** com um `default` que guarda o valor num `never`, o
> TypeScript avisa quando alguém cria um tipo novo de pagamento e esquece de
> tratar:
>
> ```ts
> // acrescentaram | { tipo: 'boleto' } no Pagamento...
> default: {
>   const esquecido: never = p
>   // erro: Type '{ tipo: "boleto"; }' is not assignable to type 'never'.
> }
> ```

{{pratique}}
