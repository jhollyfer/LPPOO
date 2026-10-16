## 0035 · Tipo de função e tipagem contextual

> A tomada de três pinos aceita qualquer aparelho, desde que o plugue seja do
> formato certo.

Funções também têm tipo. O tipo de uma função diz **o que ela recebe e o que
ela devolve**, e dá para dar um nome para ele com `type`:

```ts
type Operacao = (a: number, b: number) => number
```

Lê assim: "uma `Operacao` é qualquer função que recebe dois números e devolve
um número". É a tomada. `somar` e `multiplicar` têm o plugue certo e encaixam.
Uma função que junta textos não encaixa:

{{ideia}}

```ts
type Operacao = (a: number, b: number) => number

const somar: Operacao = (a, b) => a + b
const multiplicar: Operacao = (a, b) => a * b

function calcular(a: number, b: number, op: Operacao): number {
  return op(a, b)
}

console.log(calcular(6, 7, somar)) // 13
console.log(calcular(6, 7, multiplicar)) // 42
```

Repare em `(a, b) => a + b`: não tem tipo nenhum escrito no `a` nem no `b`, e
mesmo assim o TypeScript sabe que são números. Ele tira do `Operacao`. Isso é a
**tipagem contextual**, a mesma que faz o `n` do `map` ser `number` sozinho.

{{fluxograma}}

> [!TIP]
> **Poder do TypeScript:** o `type` vira uma regra que o editor confere. Plugue
> errado não entra:
>
> ```ts
> const juntar: Operacao = (a: string, b: string) => a + b
> // erro: Type '(a: string, b: string) => string' is not assignable
> //       to type 'Operacao'.
> ```

{{pratique}}
