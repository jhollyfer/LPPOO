## 0046 · Narrowing: estreitando o tipo

> Chega um pacote que pode ser roupa ou livro. Antes de abrir, você olha a
> etiqueta. Depois de olhar, já sabe o que tem dentro.

Quando um valor é uma união, como `number | string`, o TypeScript só deixa
fazer o que serve **para os dois**. Para usar algo só de texto, você precisa
**provar** que é texto. Toda vez que você faz uma pergunta dessas, o
TypeScript **estreita** o tipo lá dentro. Isso é o **narrowing**.

A matrícula pode chegar como número (`27`) ou como texto (`'a27'`). Um
`typeof` separa os dois caminhos, e em cada um o tipo já é um só:

{{ideia}}

```ts
function formatarMatricula(m: number | string): string {
  if (typeof m === 'number') {
    return `M-${m.toString().padStart(4, '0')}` // aqui m é number
  }
  return m.toUpperCase() // aqui só sobrou string
}

console.log(formatarMatricula(27)) // M-0027
console.log(formatarMatricula('a27')) // A27
```

O fluxograma mostra a pergunta que divide o tipo:

{{fluxograma}}

As perguntas que estreitam o tipo:

| Pergunta                   | Exemplo                            |
| -------------------------- | ---------------------------------- |
| `typeof`                   | `typeof m === 'number'`            |
| igualdade                  | `turno === 'noite'`                |
| verdadeiro ou falso        | `if (apelido)` tira o `undefined`  |
| `in`                       | `'nota' in aluno`                  |
| `instanceof`               | `erro instanceof Error`            |
| `Array.isArray`            | `Array.isArray(valor)`             |

> [!TIP]
> **Poder do TypeScript:** antes da pergunta, ele não deixa usar o que não serve
> para os dois tipos:
>
> ```ts
> function formatar(m: number | string): string {
>   return m.toFixed(0)
>   // erro: Property 'toFixed' does not exist on type 'string | number'.
> }
> ```

{{pratique}}
