## 0032 · Transformar: map, filter, reduce, forEach

As notas da turma saíram: 8, 4, 9 e 5. O professor quer três coisas. Dar 1
ponto de bônus para todo mundo, ver quem passou com 6 ou mais e somar tudo.

Para isso tem os métodos que passam por **todos os itens**, um por um, e
aplicam uma regra em cada:

- `map(regra)`: **transforma** cada item e devolve um array novo do mesmo
  tamanho.
- `filter(regra)`: **filtra** e devolve um array novo só com quem passa na
  regra.
- `reduce(regra, inicio)`: **junta** todos os itens num valor só, como uma
  soma.

Repara no desenho: o array `notas` entra nos três, e cada um entrega uma coisa
diferente:

{{ideia}}

```ts
const notas: number[] = [8, 4, 9, 5]

const comBonus = notas.map((n) => n + 1) // [9, 5, 10, 6]
const aprovadas = notas.filter((n) => n >= 6) // [8, 9]
const soma = notas.reduce((acc, n) => acc + n, 0) // 26

console.log(comBonus, aprovadas, soma) // [ 9, 5, 10, 6 ] [ 8, 9 ] 26
```

A regra de cada um é uma arrow, igual à da
[0030](#0030--arrow-functions-e-callbacks). O `map` chama a regra para cada
nota e guarda o que ela devolve.

O `reduce` assusta no começo. Calma. O `acc` (de acumulador) começa com o `0`
do fim. A cada nota, ele vira `acc + n`: 0 + 8 = 8, 8 + 4 = 12, 12 + 9 = 21,
21 + 5 = 26.

E tem o `forEach(regra)`: ele só **faz algo** com cada item e não devolve
nada. `notas.forEach((n) => console.log(n))` mostra uma nota por linha.

Agora olha o `map` por dentro, no fluxograma. Ele monta um array novo, nota por
nota, e não mexe no original:

{{fluxograma}}

Dá para **encadear**: o resultado de um vira a entrada do próximo.
`notas.filter((n) => n >= 6).map((n) => n + 1)` filtra e depois dá o bônus:
`[9, 10]`.

> [!NOTE]
> **Pergunta para a turma:** se você trocar o `0` do `reduce` por `10`, quanto
> dá a `soma`? Mude e rode. (Dica: o `acc` começa com esse valor.)

{{pratique}}
