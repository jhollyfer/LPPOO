## 0019 · Operador ternário

> Dá para escrever um if/else inteiro numa linha só? Dá.

O ternário é o if/else de bolso. Ele faz uma pergunta e devolve um de dois
valores:

```ts
condição ? valorSeSim : valorSeNão
```

Lê assim: "a condição é verdadeira? então isso, senão aquilo". A média do Lucas
é 8, então `media >= 6` é `true` e o ternário devolve `'Aprovado'`:

{{ideia}}

```ts
const media = 8
const situacao = media >= 6 ? 'Aprovado' : 'Reprovado'
console.log(situacao) // Aprovado
```

O fluxograma é o mesmo desenho do if/else da
[0017](#0017--condicional-composta-if--else). A diferença é que os dois
caminhos não mostram nada. Eles guardam um valor em `situacao`, e só no fim
o programa mostra:

{{fluxograma}}

Na memória aparece a diferença para o `if`: o ternário vira um valor, e esse
valor ganha gaveta:

{{memoria}}

> [!TIP]
> Use o ternário para escolhas pequenas: singular ou plural, par ou ímpar,
> aprovado ou reprovado. Se a decisão tem várias etapas, volte para o `if`.

{{pratique}}
