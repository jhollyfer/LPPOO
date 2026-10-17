## 0032 · Transformar: map, filter, reduce, forEach

Pensa numa esteira de fábrica: entra fruta, sai suco. Esses quatro métodos são
esteiras para arrays.

Eles passam por **todos os itens** do array, um por um, e aplicam uma regra em
cada:

- `map(regra)`: **transforma** cada item e devolve um array novo do mesmo
  tamanho.
- `filter(regra)`: **filtra**, devolvendo um array novo só com os itens que
  passam na regra.
- `reduce(regra, inicio)`: **junta** todos os itens num valor só, como uma soma.
- `forEach(regra)`: só **faz algo** com cada item (mostrar, por exemplo). Não
  devolve nada.

Vamos ver na prática. As notas da turma são `[8, 4, 9, 5]`. O `map` dobra cada
uma, o `filter` deixa só as de 6 para cima e o `reduce` soma tudo:

{{ideia}}

```ts
const notas: number[] = [8, 4, 9, 5]

const dobradas = notas.map((n) => n * 2) // [16, 8, 18, 10]
const aprovadas = notas.filter((n) => n >= 6) // [8, 9]
const soma = notas.reduce((acc, n) => acc + n, 0) // 26

notas.forEach((n) => console.log(`Nota: ${n}`))
```

O `reduce` assusta no começo. Calma.

O `acc` (de acumulador) começa com o `0` do fim. A cada item, ele vira
`acc + n`: 0 + 8 = 8, 8 + 4 = 12, 12 + 9 = 21, 21 + 5 = 26.

Agora olha o `map` por dentro, no fluxograma. Ele monta um array novo, item por
item, e não mexe no original:

{{fluxograma}}

> [!NOTE]
> Dá para **encadear**: o resultado de um vira a entrada do próximo.
> `notas.filter((n) => n >= 6).map((n) => n * 2)` filtra e depois dobra:
> `[16, 18]`.

> [!NOTE]
> **Pergunta para a turma:** se você trocar o `0` do `reduce` por `10`, quanto
> dá a `soma`? Mude e rode. (Dica: o `acc` começa com esse valor.)

{{pratique}}
