## 0045 · Narrowing: estreitando o tipo

Pensa num pacote que pode ser roupa ou livro. Antes de abrir, você olha a
etiqueta. Depois de olhar, já sabe o que tem dentro.

Com união é igual. Se o valor é `number | string`, o TypeScript só deixa fazer
o que serve **para os dois**.

Quer usar algo que só texto tem? Então você precisa **provar** que é texto.

Toda vez que você faz essa pergunta, o TypeScript **estreita** o tipo lá
dentro. Isso tem nome: **narrowing**.

No exemplo, a matrícula pode chegar como número (`27`) ou como texto
(`'a27'`). Um `typeof` separa os dois caminhos. Em cada um, o tipo já é um só:

{{ideia}}

```ts
function formatarMatricula(m: number | string): string {
  if (typeof m === 'number') {
    return `M-${m.toString().padStart(4, '0')}` // aqui m é number
  }
  return m.toUpperCase() // aqui só sobrou string
}

console.log(formatarMatricula(27)) // M-0026
console.log(formatarMatricula('a27')) // A27
```

Repara: depois do `if`, só sobrou `string`. O TypeScript percebeu sozinho.

O fluxograma mostra a pergunta que divide o tipo:

{{fluxograma}}

Essas são as perguntas que estreitam o tipo:

| Pergunta                   | Exemplo                            |
| -------------------------- | ---------------------------------- |
| `typeof`                   | `typeof m === 'number'`            |
| igualdade                  | `turno === 'noite'`                |
| verdadeiro ou falso        | `if (apelido)` tira o `undefined`  |
| `in`                       | `'nota' in aluno`                  |
| `instanceof`               | `erro instanceof Error`            |
| `Array.isArray`            | `Array.isArray(valor)`             |

> [!TIP]
> **Poder do TypeScript:** antes da pergunta, ele não deixa usar o que não
> serve para os dois tipos:
>
> ```ts
> function formatar(m: number | string): string {
>   return m.toFixed(0)
>   // erro: Property 'toFixed' does not exist on type 'string | number'.
> }
> ```

> [!NOTE]
> **Pergunta para a turma:** o que aparece com `formatarMatricula(12345)`? O
> número é cortado para caber em 4 dígitos? Rode e descubra.

{{pratique}}
