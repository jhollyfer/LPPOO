## 0037 · Tipos primitivos, any, unknown e never

Pensa numa mudança. Toda caixa tem etiqueta: "pratos", "livros". Uma caixa sem
etiqueta pode ter qualquer coisa, e você só descobre quando abre.

Os **tipos primitivos** são os valores simples que você já usou: `string`,
`number`, `boolean`, `null` e `undefined`.

Além deles, o TypeScript tem três tipos especiais:

- **`any`:** "qualquer coisa, e não confere nada". Desliga o TypeScript naquele
  valor. É a caixa sem etiqueta e sem fiscal.
- **`unknown`:** "qualquer coisa, mas confere antes de usar". Aceita qualquer
  valor, só que obriga você a descobrir o tipo antes de mexer nele. É a caixa
  lacrada.
- **`never`:** "isso nunca acontece". É o tipo de uma função que nunca termina
  normalmente, como uma que sempre lança erro.

{{ideia}}

```ts
const nome: string = 'Ana'
const idade: number = 17
const matriculado: boolean = true

function tamanho(valor: unknown): number {
  if (typeof valor === 'string') return valor.length // aqui ele é string
  if (typeof valor === 'number') return valor.toString().length // aqui, number
  return 0
}

function falhar(mensagem: string): never {
  throw new Error(mensagem) // para o programa: nunca devolve nada
}

if (idade < 0) falhar('Idade inválida')
console.log(nome, idade, matriculado) // Ana 17 true
console.log(tamanho('Benjamin')) // 8
console.log(tamanho(2026)) // 4
```

Repara no `unknown`. Antes de usar o valor, ele obriga você a fazer as
perguntas que o fluxograma mostra:

{{fluxograma}}

> [!WARNING]
> Fuja do `any`. Com ele, o TypeScript deixa passar qualquer coisa, e o erro só
> aparece com o programa rodando. Neste projeto, o lint barra o `any` escrito na
> mão: `Unexpected any. Specify a different type.`

> [!TIP]
> **Poder do TypeScript:** com `unknown`, ele não deixa você usar o valor sem
> conferir o tipo antes:
>
> ```ts
> function gritar(valor: unknown): string {
>   return valor.toUpperCase()
>   // erro: 'valor' is of type 'unknown'.
> }
> ```

> [!NOTE]
> **Pergunta para a turma:** quanto dá `tamanho(true)`? Acrescente a linha e
> rode. (Dica: `true` não é texto nem número.)

{{pratique}}
