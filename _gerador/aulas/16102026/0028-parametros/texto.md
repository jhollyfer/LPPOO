## 0028 · Parâmetro opcional, valor padrão e void

Até agora, toda função recebia tudo em toda chamada. Hoje isso muda: tem
parâmetro que pode ficar de fora.

Pensa no pedido de açaí. O tamanho você tem que dizer. A granola é opcional. E
o copo, se você não falar nada, vem o de sempre.

Com parâmetro é igual:

- **Obrigatório**: `precos: number[]`. Sem ele, a função não tem com o que
  trabalhar.
- **Com valor padrão**: `desconto: number = 0`. Se a chamada não mandar, vale
  `0`.
- **Opcional**: `moeda?: string`. Pode ficar de fora, e aí dentro da função ele
  vale `undefined`.

E tem função que não devolve nada. Ela só faz alguma coisa, como mostrar na
tela. O tipo do retorno dela é **`void`** (vazio).

{{ideia}}

```ts
function totalComDesconto(precos: number[], desconto: number = 0): number {
  const total = precos.reduce((acc, p) => acc + p, 0)
  return total - total * desconto
}

function mostrarTotal(total: number, moeda?: string): void {
  const simbolo = moeda === undefined ? 'R$' : moeda // não veio? usa R$
  console.log(`${simbolo} ${total.toFixed(2)}`)
}

mostrarTotal(totalComDesconto([10, 20])) // R$ 30.00
mostrarTotal(totalComDesconto([10, 20], 0.1)) // R$ 27.00
mostrarTotal(5, 'US$') // US$ 5.00
```

Repara no fluxograma o que o `totalComDesconto` decide sozinho. Na primeira
chamada não veio desconto, então vale o padrão:

{{fluxograma}}

> [!NOTE]
> Guarda isso: parâmetros opcionais e com valor padrão vêm **depois** dos
> obrigatórios.

> [!NOTE]
> **Pergunta para a turma:** o que aparece com
> `mostrarTotal(totalComDesconto([10, 20], 0.5))`? Acrescente a linha e rode.
> (Dica: `0.5` é metade.)

{{pratique}}
