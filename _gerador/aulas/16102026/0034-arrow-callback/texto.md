## 0034 · Arrow functions e callbacks

Até agora, toda função começou com a palavra `function`. Tem um jeito mais
curto de escrever: a **arrow function** (função seta).

Olha só. As duas abaixo são funções, cada uma escrita de um jeito:

```ts
function dobrar(n: number): number {
  return n * 2
}
const triplicar = (n: number): number => n * 3 // arrow function
```

Quando a arrow tem uma linha só, o que vem depois da `=>` já é o `return`.

Agora outra novidade: dá para **passar uma função para outra função**.

A função que você passa se chama **callback**. A outra função vai chamar a sua
depois, na hora certa.

Pensa assim: você entrega a receita e outra pessoa cozinha. No `map`, ele é o
cozinheiro e a sua função é a receita. O mesmo vale para o `filter` e o `find`:
você entrega a regra e o método chama a regra para cada item:

{{ideia}}

```ts
const notas: number[] = [4, 5]

console.log(notas.map(dobrar)) // [ 8, 10 ]
console.log(notas.map(triplicar)) // [ 12, 15 ]
console.log(notas.map((n) => n + 1)) // [ 5, 6 ]: arrow escrita ali mesmo
```

Repara: é `notas.map(dobrar)`, sem parênteses depois de `dobrar`. Você está
entregando a função, e não chamando.

Quem chama é o `map`, uma vez para cada nota:

{{fluxograma}}

> [!NOTE]
> **Pergunta para a turma:** quantas vezes o `map` chama a `dobrar` neste
> exemplo? Coloque um `console.log(n)` dentro da `dobrar` e rode para conferir.

{{pratique}}
