## 0034 · Tipo de função e tipagem contextual

Variável tem tipo. E função? Também tem.

O tipo de uma função diz **o que ela recebe e o que ela devolve**. E dá para
dar um nome para ele com `type`:

```ts
type Operacao = (a: number, b: number) => number
```

Lê assim: "uma `Operacao` é qualquer função que recebe dois números e devolve
um número".

Pensa numa tomada de três pinos. Ela aceita qualquer aparelho, desde que o
plugue seja do formato certo.

O `Operacao` é a tomada. `somar` e `multiplicar` têm o plugue certo e encaixam.
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

Repara em `(a, b) => a + b`. Não tem tipo nenhum escrito no `a` nem no `b`. E
mesmo assim o TypeScript sabe que são números.

Ele tira essa informação do `Operacao`. Isso se chama **tipagem contextual**. É
a mesma coisa que faz o `n` do `map` ser `number` sozinho.

{{fluxograma}}

> [!NOTE]
> **Pergunta para a turma:** crie `const subtrair: Operacao = (a, b) => a - b`.
> Quanto dá `calcular(6, 7, subtrair)`? Rode e confira. (Dica: pode dar número
> negativo.)

{{pratique}}
