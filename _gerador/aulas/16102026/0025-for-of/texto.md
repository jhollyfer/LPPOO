## 0025 · Laço for...of

Na chamada, o professor passa por cada nome da lista, um por um, do primeiro
ao último. Ele não precisa contar: a própria lista diz quando acaba.

O `for...of` é o laço feito para arrays. A cada volta, ele pega o **próximo
item** e coloca numa variável.

Olha só o que ele não tem: contador, `i`, risco de passar do fim. Nada disso.

Vamos ver na prática. A lista tem três nomes. Na primeira volta, `nome` é
`'Ana'`. Na segunda, `'Bia'`. Na terceira, `'Caio'`. Acabaram os nomes, acabou
o laço:

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
`for (let i = 0; i < nomes.length; i++)` e `nomes[i]` lá dentro.

Mas quando você não precisa do número da posição, o `for...of` é mais curto e
mais difícil de errar.

No fluxograma, a pergunta de cada volta é uma só: ainda tem nome na lista?

{{fluxograma}}

> [!NOTE]
> **Pergunta para a turma:** coloque `'Davi'` no fim da lista e rode de novo.
> Precisou mexer no laço? O que aparece?

{{pratique}}
