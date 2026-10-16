## 0034 · Arrow functions e callbacks

> Você entrega a receita e outra pessoa cozinha. No `map`, ele é o cozinheiro e
> a sua função é a receita.

Existe um jeito mais curto de escrever função: a **arrow function** (função
seta). Estas duas fazem a mesma coisa:

```ts
function dobrar(n: number): number {
  return n * 2
}
const triplicar = (n: number): number => n * 3 // arrow function
```

Quando a arrow tem uma linha só, o resultado depois da `=>` já é o `return`.

E dá para **passar uma função para outra função**. A que você passa se chama
**callback**: a outra função vai chamar a sua depois, na hora certa. É isso que
acontece no `map`, no `filter` e no `find`: você entrega a regra e o método
chama a regra para cada item:

{{ideia}}

```ts
const notas: number[] = [4, 5]

console.log(notas.map(dobrar)) // [ 8, 10 ]
console.log(notas.map(triplicar)) // [ 12, 15 ]
console.log(notas.map((n) => n + 1)) // [ 5, 6 ]: arrow escrita ali mesmo
```

Repare que é `notas.map(dobrar)`, sem parênteses depois de `dobrar`: você está
entregando a função, não chamando. Quem chama é o `map`, uma vez para cada nota:

{{fluxograma}}

> [!TIP]
> **Poder do TypeScript:** o `map` sabe que vai entregar um `number` para a sua
> regra. Se a sua regra pedir outra coisa, o TypeScript não deixa:
>
> ```ts
> notas.map((n: string) => n)
> // erro: Argument of type '(n: string) => string' is not assignable to
> //       parameter of type '(value: number, ...) => string'.
> ```

{{pratique}}
