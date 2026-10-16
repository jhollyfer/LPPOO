## 0031 · Funções

> Receita de bolo: você escreve uma vez e usa sempre que quiser, com os
> ingredientes que tiver na hora.

Uma **função** é um pedaço de código com nome, que você escreve uma vez e
**chama** quantas vezes quiser. Ela recebe valores (os **parâmetros**), faz o
trabalho e devolve um resultado com `return`.

`calcularMedia` recebe um array de notas, soma tudo e divide pela quantidade.
Chamada com `[8, 6, 10]`, ela devolve `8`:

{{ideia}}

```ts
function calcularMedia(valores: number[]): number {
  const soma = valores.reduce((acc, v) => acc + v, 0)
  return soma / valores.length
}

console.log(calcularMedia([8, 6, 10])) // 8
console.log(calcularMedia([5, 7])) // 6
```

Lendo a primeira linha: `function` cria a função, `calcularMedia` é o nome,
`valores: number[]` é o parâmetro com o tipo, e o `: number` depois dos
parênteses é o **tipo do retorno**, o que ela devolve.

No fluxograma, a chamada `calcularMedia([8, 6, 10])` entra, a função faz as
contas e devolve o `8`:

{{fluxograma}}

> [!NOTE]
> O `return` encerra a função na hora. O que vier depois dele, dentro da
> função, não roda.

> [!TIP]
> **Poder do TypeScript:** mesmo sem escrever o tipo do retorno, o TypeScript
> descobre olhando o `return`. Isso é **inferência do retorno**:
>
> ```ts
> function somar(a: number, b: number) {
>   return a + b // o TypeScript conclui: devolve number
> }
> const resultado: string = somar(1, 2)
> // erro: Type 'number' is not assignable to type 'string'.
> ```

{{pratique}}
