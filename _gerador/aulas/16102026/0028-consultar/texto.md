## 0028 · Consultar: indexOf, includes, find, findIndex, some, every

> Tem açaí na lista? Em que posição? Algum produto passa de R$ 20? Todos
> custam mais de R$ 5?

Estes métodos **fazem perguntas** para o array e não mudam nada nele:

- `includes(x)`: tem o `x`? Responde `true` ou `false`.
- `indexOf(x)`: em que posição está o `x`? Responde o índice, ou `-1` se não tem.
- `find(regra)`: devolve o **primeiro item** que passa na regra.
- `findIndex(regra)`: devolve a **posição** desse primeiro item.
- `some(regra)`: **algum** item passa? `true` ou `false`.
- `every(regra)`: **todos** passam? `true` ou `false`.

Os quatro últimos recebem uma **regra** escrita assim: `(p) => p > 20`. Por
enquanto, leia como "para cada preço `p`, pergunte: `p > 20`?". Na
[0034](#0034--arrow-functions-e-callbacks) a gente vê o que essa setinha é.

{{ideia}}

```ts
const precos: number[] = [6, 25, 9]

console.log(precos.includes(25)) // true
console.log(precos.indexOf(9)) // 2
console.log(precos.indexOf(100)) // -1: não tem
console.log(precos.find((p) => p > 20)) // 25
console.log(precos.findIndex((p) => p > 20)) // 1
console.log(precos.some((p) => p > 20)) // true
console.log(precos.every((p) => p > 5)) // true
```

O fluxograma mostra o que o `find` faz por dentro: olha item por item e para no
primeiro que passa na regra. O 6 não passa, o 25 passa, e o 9 nem é olhado:

{{fluxograma}}

{{pratique}}
