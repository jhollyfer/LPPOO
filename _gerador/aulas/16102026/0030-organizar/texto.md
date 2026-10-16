## 0030 · Organizar: sort, reverse, slice, join, concat

> Arrumar a fila do recreio por altura muda a fila. Tirar uma foto da fila e
> arrumar a foto deixa a fila do jeito que estava.

Estes métodos organizam e recortam arrays:

- `sort(regra)`: **ordena**.
- `reverse()`: **inverte** a ordem.
- `slice(início, fim)`: **copia** um pedaço (ou tudo, sem argumentos).
- `join(separador)`: **junta** tudo num texto só.
- `concat(outro)`: **emenda** dois arrays num novo.

O mais importante desta seção é uma diferença: alguns métodos **mudam o array
original** e outros **devolvem um novo**, deixando o original como estava. No
desenho, o `sort` arruma a própria fila; o `slice` tira uma foto e quem muda é a
foto:

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

| Mudam o original                                  | Devolvem um novo                     |
| ------------------------------------------------- | ------------------------------------ |
| `push`, `pop`, `shift`, `unshift`, `splice`, `sort`, `reverse` | `map`, `filter`, `slice`, `concat`, `join` |

{{fluxograma}}

> [!WARNING]
> O `sort` sem regra compara tudo **como texto**. Aí `[8, 10, 6, 9].sort()` dá
> `[10, 6, 8, 9]`, porque o texto `'10'` vem antes de `'6'`. Para números, passe
> sempre a regra `(a, b) => a - b` (do menor para o maior) ou `(a, b) => b - a`
> (do maior para o menor).

{{pratique}}
