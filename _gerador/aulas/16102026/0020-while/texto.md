## 0020 · Laço while

Até agora, cada linha do programa rodava uma vez só. Hoje isso muda: o
programa vai **repetir**.

Quem repete é o `while` (em português, "enquanto"). Ele faz uma pergunta. Se a
resposta for `true`, roda o bloco e pergunta de novo. Quando a resposta vira
`false`, o programa segue em frente.

Vamos ver na prática. Você tem R$ 20 no cartão do ônibus e a passagem custa
R$ 4,50. Quantas vezes dá para passar na catraca?

A cada volta, o laço confere se ainda dá para pagar uma passagem, desconta
R$ 4,50 e conta uma viagem. Na quinta pergunta sobram só R$ 2. A resposta é
`false` e o laço acaba:

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

Repara no fluxograma: o laço é uma seta que **volta** para o losango. O caminho
dá quatro voltas antes de sair pelo Não:

{{fluxograma}}

> [!WARNING]
> Se nada dentro do bloco mudar a resposta da pergunta, o laço nunca acaba. É o
> famoso **loop infinito**. Esqueceu o `saldo -= 4.5`? O programa fica rodando
> para sempre. Para sair, aperte `Ctrl + C`.

> [!NOTE]
> **Pergunta para a turma:** se a passagem subir para R$ 5, quantas viagens dá
> e quanto sobra? Troque o `4.5` por `5` nas duas linhas e rode.

{{pratique}}
