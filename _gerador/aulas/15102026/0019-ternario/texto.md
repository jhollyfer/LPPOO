## 0019 · Operador ternário

Dá para escrever um if/else inteiro numa linha só? Dá. É o ternário.

Pensa nele como o if/else de bolso. Ele faz uma pergunta e devolve um de dois
valores:

```ts
condição ? valorSeSim : valorSeNão
```

Lê assim: "a condição é verdadeira? Então isso. Senão, aquilo."

Vamos ver na prática. A média do Lucas é 8. `media >= 6` dá `true`, então o
ternário devolve `'Aprovado'`:

{{ideia}}

```ts
const media = 8
const situacao = media >= 6 ? 'Aprovado' : 'Reprovado'
console.log(situacao) // Aprovado
```

O fluxograma é o mesmo desenho do if/else da
[0017](#0017--condicional-composta-if--else).

Repara na diferença: os dois caminhos não mostram nada. Eles só guardam um
valor em `situacao`. Quem mostra é o fim do programa:

{{fluxograma}}

> [!TIP]
> Use o ternário para escolhas pequenas: singular ou plural, par ou ímpar,
> aprovado ou reprovado. Se a decisão tem várias etapas, volte para o `if`.

> [!NOTE]
> **Pergunta para a turma:** troque a média do Lucas para 6. Aparece
> `Aprovado` ou `Reprovado`? E com 5,9 (no código, `5.9`)? Rode e confira.

{{pratique}}
