## 0029 · Organizar: sort, reverse, slice, join, concat

Agora a gente vai arrumar e recortar arrays. São estes métodos:

- `sort(regra)`: **ordena**.
- `reverse()`: **inverte** a ordem.
- `slice(início, fim)`: **copia** um pedaço (ou tudo, sem argumentos).
- `join(separador)`: **junta** tudo num texto só.
- `concat(outro)`: **emenda** dois arrays num novo.

Repara numa diferença aqui. Alguns métodos **mudam o array original**. Outros
**devolvem um novo** e deixam o original do jeito que estava.

Pensa na fila do recreio. O `sort` arruma a própria fila. O `slice` tira uma
foto da fila, e quem você arruma é a foto:

{{ideia}}

```ts
const notas: number[] = [8, 10, 6, 9]

const copia = notas.slice() // cópia: um array novo
copia.sort((a, b) => a - b) // [6, 8, 9, 10]: o sort muda a cópia
copia.reverse() // [10, 9, 8, 6]

console.log(copia.join(' | ')) // 10 | 9 | 8 | 6
console.log(notas.concat([7])) // [ 8, 10, 6, 9, 7 ]: array novo
console.log(notas) // [ 8, 10, 6, 9 ]: o original não mudou
```

Guarda essa tabela. Ela separa quem mexe no original de quem devolve um novo:

| Mudam o original                                  | Devolvem um novo                     |
| ------------------------------------------------- | ------------------------------------ |
| `push`, `pop`, `shift`, `unshift`, `splice`, `sort`, `reverse` | `map`, `filter`, `slice`, `concat`, `join` |

{{fluxograma}}

> [!WARNING]
> Cuidado: o `sort` sem regra compara tudo **como texto**. Aí
> `[8, 10, 6, 9].sort()` dá `[10, 6, 8, 9]`, porque o texto `'10'` vem antes de
> `'6'`. Para números, passe sempre a regra `(a, b) => a - b` (do menor para o
> maior) ou `(a, b) => b - a` (do maior para o menor).

> [!NOTE]
> **Pergunta para a turma:** se você trocar `notas.slice()` por só `notas` na
> linha da `copia`, o que aparece no último `console.log`? Troque e rode.
> (Dica: sem o `slice`, não tem foto.)

{{pratique}}
