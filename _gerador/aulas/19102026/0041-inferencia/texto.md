## 0041 · Inferência x anotação: quando escrever o tipo

> Ninguém escreve "isto é uma cadeira" numa cadeira. Mas numa caixa fechada,
> a etiqueta faz falta.

O TypeScript descobre sozinho o tipo de muita coisa, olhando o valor. Isso é a
**inferência**. Escrever o tipo na mão é a **anotação**. A regra prática:

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

Repare no `turno`: com `const`, o tipo não é `string`, é exatamente `'noite'`,
porque uma constante nunca vai mudar. Com `let`, seria `string`.

O fluxograma é a regra prática em forma de perguntas:

{{fluxograma}}

> [!NOTE]
> Escrever o tipo do retorno é opcional, mas ajuda em funções importantes: se
> você errar o `return`, o erro aparece na própria função, e não lá na frente,
> em quem usa ela.

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

{{pratique}}
