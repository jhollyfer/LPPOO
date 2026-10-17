## 0030 · Arrow functions e callbacks

Até agora, toda função começou com a palavra `function`. Tem um jeito mais
curto de escrever: a **arrow function** (função seta), por causa da `=>`.

Esta você já sabe escrever:

```ts
function dobrar(n: number): number {
  return n * 2
}
```

Esta é a mesma função, escrita como arrow:

```ts
const dobrar = (n: number): number => n * 2
```

Os parâmetros continuam entre `( )`, com os tipos. Depois vem a `=>`, e o que
vem depois dela já é o `return`. A função fica guardada numa `const`, e você
chama do mesmo jeito: `dobrar(10)` dá `20`.

Agora a novidade grande: uma função pode **receber outra função** como
parâmetro. A função que você entrega se chama **callback**.

Pensa na receita de bolo. Você entrega a receita, e outra pessoa cozinha na
hora certa. Aqui, a `aplicar` é quem cozinha e a `dobrar` é a receita. Você
entrega o `10` e a `dobrar`, e volta o `20`:

{{ideia}}

```ts
const dobrar = (n: number): number => n * 2

function aplicar(valor: number, regra: (n: number) => number): number {
  return regra(valor) // aqui dentro, a aplicar chama a sua função
}

console.log(aplicar(10, dobrar)) // 20
```

O tipo do parâmetro `regra` é `(n: number) => number`. Quer dizer: "uma função
que recebe um número e devolve um número".

Repara: é `aplicar(10, dobrar)`, sem parênteses depois de `dobrar`. Você está
**entregando** a função, e não chamando. Quem chama é a `aplicar`, lá dentro:

{{fluxograma}}

Guarda isso: nos próximos assuntos, os métodos de array (`find`, `map`,
`filter`...) funcionam exatamente assim. Você entrega uma função, e o método
chama ela para cada item do array.

> [!NOTE]
> **Pergunta para a turma:** dá para escrever a arrow direto na chamada, sem
> dar nome. O que aparece com `aplicar(10, (n: number): number => n + 1)`?
> Acrescente a linha e rode.

{{pratique}}
