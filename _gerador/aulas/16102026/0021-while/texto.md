## 0021 · Laço while

> R$ 20 no cartão do ônibus e a passagem custa R$ 4,50. Quantas vezes dá para
> passar na catraca?

Até agora, cada linha do programa rodava uma vez só. O `while` (enquanto) faz um
bloco **repetir**: ele pergunta, e enquanto a resposta for `true`, roda o bloco
e pergunta de novo. Quando a resposta vira `false`, o programa segue em frente.

No cartão tem R$ 20. A cada volta, o laço confere se ainda dá para pagar uma
passagem, desconta R$ 4,50 e conta uma viagem. Na quinta pergunta sobram só
R$ 2, a resposta é `false` e o laço acaba:

{{ideia}}

```ts
let saldo = 20
let viagens = 0

while (saldo >= 4.5) {
  saldo -= 4.5 // paga a passagem
  viagens++ // conta mais uma viagem
}

console.log(`Deu para ${viagens} viagens. Sobrou R$ ${saldo.toFixed(2)}`)
// Deu para 4 viagens. Sobrou R$ 2.00
```

No fluxograma, o laço é uma seta que **volta** para o losango. O caminho dá
quatro voltas antes de sair pelo Não:

{{fluxograma}}

> [!WARNING]
> Se nada dentro do bloco mudar a resposta da pergunta, o laço nunca acaba. É o
> famoso **loop infinito**. Esqueceu o `saldo -= 4.5`? O programa fica rodando
> para sempre. Para sair, aperte `Ctrl + C`.

> [!TIP]
> **Poder do TypeScript:** a variável que muda a cada volta precisa ser `let`.
> Se você usar `const` sem querer, o TypeScript avisa antes de rodar:
>
> ```ts
> const viagens = 0
> viagens++
> // erro: Cannot assign to 'viagens' because it is a constant.
> ```

{{pratique}}
