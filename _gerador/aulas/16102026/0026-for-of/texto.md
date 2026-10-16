## 0026 · Laço for...of

> Na chamada, o professor passa por cada nome da lista, um por um, do primeiro
> ao último. Não precisa contar: a lista mesmo diz quando acaba.

O `for...of` é o laço feito para arrays. A cada volta, ele pega o **próximo
item** e coloca numa variável. Não tem contador, não tem `i`, não tem risco de
passar do fim.

A lista tem três nomes. Na primeira volta, `nome` é `'Ana'`; na segunda,
`'Bia'`; na terceira, `'Caio'`. Acabaram os nomes, acabou o laço:

{{ideia}}

```ts
const nomes: string[] = ['Ana', 'Bia', 'Caio']

for (const nome of nomes) {
  console.log(`Presente, ${nome}!`)
}
// Presente, Ana!
// Presente, Bia!
// Presente, Caio!
```

Dá para fazer o mesmo com o `for` clássico, usando o índice:
`for (let i = 0; i < nomes.length; i++)` e `nomes[i]` lá dentro. Quando você não
precisa do número da posição, o `for...of` é mais curto e mais difícil de errar.

{{fluxograma}}

{{pratique}}
