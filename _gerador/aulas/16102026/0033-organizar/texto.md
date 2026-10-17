## 0033 · Organizar: sort, reverse, slice, join, concat

No diário do professor, as notas estão na ordem da chamada: 8, 10, 6 e 9. Você
quer ver as notas da menor para a maior, mas sem bagunçar o diário.

O jeito é tirar uma **foto** do diário e arrumar a foto. Quem tira a foto é o
`slice`. Quem arruma é o `sort`. E o `join` junta tudo num texto só, para
mostrar:

{{ideia}}

```ts
const notas: number[] = [8, 10, 6, 9] // o diário

const copia = notas.slice() // tira a foto: um array novo
copia.sort((a, b) => a - b) // arruma a foto: [6, 8, 9, 10]

console.log(copia.join(' | ')) // 6 | 8 | 9 | 10
console.log(notas) // [ 8, 10, 6, 9 ]: o diário não mudou
```

A regra do `sort` é uma arrow com dois números, `a` e `b`. Lembra da
[0030](#0030--arrow-functions-e-callbacks)? O `a - b` deixa do menor para o
maior. O `b - a` deixa do maior para o menor.

O `slice` também tira foto de um **pedaço**: `notas.slice(0, 2)` dá `[8, 10]`.
Ele começa na posição 0 e para antes da posição 2.

Tem mais dois da mesma família:

- `reverse()`: **inverte** a ordem. `copia.reverse()` deixa `[10, 9, 8, 6]`.
- `concat(outro)`: **emenda** dois arrays num novo. `notas.concat([7])` dá
  `[8, 10, 6, 9, 7]`.

Guarda essa tabela. Ela separa quem mexe no original de quem devolve um novo:

| Mudam o original                         | Devolvem um novo                  |
| ---------------------------------------- | --------------------------------- |
| `push`, `pop`, `shift`, `unshift`, `splice`, `sort`, `reverse` | `map`, `filter`, `slice`, `concat` |

No fluxograma, repara que o `sort` mexe só na `copia`:

{{fluxograma}}

> [!WARNING]
> Cuidado: o `sort` sem regra compara tudo **como texto**. Aí
> `[8, 10, 6, 9].sort()` dá `[10, 6, 8, 9]`, porque o texto `'10'` vem antes de
> `'6'`. Para números, passe sempre a regra.

> [!NOTE]
> **Pergunta para a turma:** troque `notas.slice()` por só `notas` na linha da
> `copia`. O que aparece no último `console.log`? Troque e rode. (Dica: sem o
> `slice`, não tem foto.)

{{pratique}}
