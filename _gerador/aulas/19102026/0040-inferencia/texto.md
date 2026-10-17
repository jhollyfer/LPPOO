## 0040 · Inferência x anotação: quando escrever o tipo

Ninguém escreve "isto é uma cadeira" numa cadeira. Dá para ver. Mas numa caixa
fechada, a etiqueta faz falta.

Com tipo é igual. O TypeScript descobre sozinho o tipo de muita coisa, só
olhando o valor. Isso é a **inferência**.

Escrever o tipo na mão é a **anotação**.

E quando escrever? Guarda essa regra prática:

- **Deixe o TypeScript descobrir** quando a variável já começa com um valor:
  `let idade = 17` já é `number`.
- **Escreva o tipo** quando ele não tem como adivinhar: nos **parâmetros** de
  função, em **array vazio** e em variável que nasce **sem valor**.

{{ideia}}

```ts
let idade = 17 // infere: number
const turno = 'noite' // infere o tipo literal 'noite'
const notas = [8, 6, 9] // infere: number[]

const nomes: string[] = [] // array vazio: escreva o tipo
let apelido: string // sem valor ainda: escreva o tipo
if (idade >= 18) apelido = 'Sr. Zé'
else apelido = 'Zé'

// parâmetro: sempre escreva; o retorno (number) ele infere
function dobrar(n: number) {
  return n * 2
}

idade++
nomes.push('Ana')
console.log(idade, turno, notas, nomes, apelido, dobrar(4))
```

Repara no `turno`. Com `const`, o tipo é exatamente `'noite'`, e não `string`.
Uma constante nunca vai mudar, então o TypeScript guarda o valor exato. Com
`let`, seria `string`.

O fluxograma é a regra prática em forma de perguntas:

{{fluxograma}}

> [!NOTE]
> Escrever o tipo do retorno é opcional, mas ajuda nas funções que você mais
> usa. Se você errar o `return`, o erro aparece na própria função, e não lá na
> frente, em quem usa ela.

> [!TIP]
> **Poder do TypeScript:** parâmetro sem tipo vira `any` escondido, e este
> projeto (com `strict`) não deixa:
>
> ```ts
> function dobrar(n) {
>   return n * 2
> }
> // erro: Parameter 'n' implicitly has an 'any' type.
> ```

> [!NOTE]
> **Pergunta para a turma:** no editor, pare o mouse em cima do `turno`. Que
> tipo aparece? E se você trocar o `const` por `let`? Teste os dois.

{{pratique}}
