## 0032 · Parâmetro opcional, valor padrão e void

> Pedido de açaí: o tamanho você tem que dizer. A granola é opcional. E o copo,
> se você não falar nada, vem o de sempre.

Nem todo parâmetro precisa ser informado em toda chamada:

- **Obrigatório**: `precos: number[]`. Sem ele, a função não tem com o que
  trabalhar.
- **Com valor padrão**: `desconto: number = 0`. Se a chamada não mandar, vale
  `0`.
- **Opcional**: `moeda?: string`. Pode ficar de fora, e aí dentro da função ele
  vale `undefined`.

E tem função que não devolve nada, só faz alguma coisa, como mostrar na tela. O
tipo do retorno dela é **`void`** (vazio).

{{ideia}}

```ts
function totalComDesconto(precos: number[], desconto: number = 0): number {
  const total = precos.reduce((acc, p) => acc + p, 0)
  return total - total * desconto
}

function mostrarTotal(total: number, moeda?: string): void {
  console.log(`${moeda ?? 'R$'} ${total.toFixed(2)}`)
}

mostrarTotal(totalComDesconto([10, 20])) // R$ 30.00
mostrarTotal(totalComDesconto([10, 20], 0.1)) // R$ 27.00
mostrarTotal(5, 'US$') // US$ 5.00
```

O fluxograma mostra o que o `totalComDesconto` decide sozinho. Na primeira
chamada não veio desconto, então vale o padrão:

{{fluxograma}}

> [!NOTE]
> Parâmetros opcionais e com valor padrão vêm **depois** dos obrigatórios.

> [!TIP]
> **Poder do TypeScript:** ele confere se você mandou o que é obrigatório e
> conta até o que é opcional:
>
> ```ts
> totalComDesconto()
> // erro: Expected 1-2 arguments, but got 0.
> ```

{{pratique}}
