## 0031 · Consultar: indexOf, includes, find, findIndex, some, every

Você chega na cantina e olha a lista de preços do dia: R$ 6, R$ 25 e R$ 9. Na
cabeça, você faz perguntas. Tem lanche de R$ 9? Em que lugar da lista ele está?
Qual é o primeiro que passa de R$ 20?

Até agora, a gente mexia no array: colocava e tirava itens. Hoje a gente só
**pergunta**. Estes métodos olham o array e respondem, sem mudar nada nele:

{{ideia}}

```ts
const precos: number[] = [6, 25, 9]

console.log(precos.includes(9)) // true: tem lanche de R$ 9
console.log(precos.indexOf(9)) // 2: ele está na posição 2
console.log(precos.find((p) => p > 20)) // 25: o primeiro acima de R$ 20
console.log(precos.some((p) => p > 20)) // true: algum passa de R$ 20
```

O `includes` e o `indexOf` procuram um valor exato. Se o valor não está na
lista, o `indexOf` responde `-1`.

O `find` e o `some` recebem uma **regra**: `(p) => p > 20`. Lembra da arrow da
[0030](#0030--arrow-functions-e-callbacks)? É ela, passada como callback. O
método chama a regra para cada preço e vê se dá `true`.

Repara que o `p` ficou sem o `: number`. Nem precisa: como `precos` é
`number[]`, o TypeScript já sabe que cada preço é um número.

Tem mais dois da mesma família:

- `findIndex(regra)`: igual ao `find`, mas devolve a **posição**.
  `precos.findIndex((p) => p > 20)` dá `1`.
- `every(regra)`: **todos** passam? `precos.every((p) => p > 5)` dá `true`.

No fluxograma, olha o `find` por dentro. Ele olha preço por preço e para no
primeiro que passa na regra. O 6 não passa, o 25 passa, e o 9 nem é olhado:

{{fluxograma}}

> [!NOTE]
> **Pergunta para a turma:** o que o `find` devolve quando nenhum preço passa
> na regra? Troque o `p > 20` por `p > 100` e rode. (Dica: é a caixa vazia da
> 0007.)

{{pratique}}
