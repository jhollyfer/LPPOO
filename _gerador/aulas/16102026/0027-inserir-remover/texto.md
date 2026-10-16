## 0027 · Inserir e remover: push, pop, unshift, shift, splice

> A lista de compras na porta da geladeira: alguém acrescenta no fim, alguém
> risca o primeiro item, alguém troca um do meio.

Um array não tem tamanho fixo. Cinco métodos colocam e tiram itens:

| Método    | Onde mexe   | O que faz                         |
| --------- | ----------- | --------------------------------- |
| `push`    | no fim      | coloca um item                    |
| `pop`     | no fim      | tira o último e devolve ele       |
| `unshift` | no começo   | coloca um item                    |
| `shift`   | no começo   | tira o primeiro e devolve ele     |
| `splice`  | no meio     | tira e/ou coloca a partir de uma posição |

No desenho, cada ponta da lista tem uma entrada e uma saída. O `splice` é o
único que mexe no meio:

{{ideia}}

```ts
const compras: string[] = ['arroz', 'feijão']

compras.push('farinha') // [arroz, feijão, farinha]
compras.unshift('café') // [café, arroz, feijão, farinha]
compras.pop() // tira farinha: [café, arroz, feijão]
compras.shift() // tira café: [arroz, feijão]
compras.splice(1, 1, 'açaí') // na posição 1, tira 1 e põe açaí

console.log(compras) // [ 'arroz', 'açaí' ]
```

Os cinco **mudam o array original**. Por isso a lista vai mudando a cada linha,
sem precisar de `=`:

{{fluxograma}}

> [!NOTE]
> O `splice(posição, quantosTirar, ...oQueColocar)` é o canivete: `splice(1, 1)`
> só tira, `splice(1, 0, 'pão')` só coloca, e `splice(1, 1, 'açaí')` troca.

> [!TIP]
> **Poder do TypeScript:** o `pop` devolve o item tirado, mas e se a lista
> estiver vazia? O TypeScript lembra disso: o tipo do que volta é
> `string | undefined`.
>
> ```ts
> const ultimo = compras.pop()
> ultimo.toUpperCase()
> // erro: 'ultimo' is possibly 'undefined'.
> ```

{{pratique}}
