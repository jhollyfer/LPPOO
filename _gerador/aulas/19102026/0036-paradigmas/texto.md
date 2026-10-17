## 0036 · Paradigmas de programação

Imagina ensinar o caminho até a escola. Dá para falar de três jeitos: "vira à
direita, anda duas quadras", "pega a rua da praça" ou "segue a van da escola".
O destino é o mesmo.

Na programação também é assim. **Paradigma** é um jeito de organizar o
pensamento na hora de programar.

O problema é o mesmo. O que muda é como você quebra ele em partes.

Os três que mais aparecem:

- **Imperativo:** você dá as ordens passo a passo e vai mudando variáveis.
  É o que você fez nas aulas 01 e 02, com `let`, `if` e `for`.
- **Funcional:** você monta o resultado com funções que recebem valores e
  devolvem valores novos, sem mudar nada no caminho. É o `map`, o `filter` e o
  `reduce` da aula 02.
- **Orientado a objetos (POO):** você cria **objetos** que juntam dados e as
  ações sobre eles. É o jeito que você vai usar daqui em diante.

Vamos ver na prática. A média da turma, nos três estilos, dá o mesmo 8:

{{ideia}}

```ts
const notas: number[] = [8, 7, 9]

// imperativo: passo a passo, mudando a variável soma
let soma = 0
for (const nota of notas) soma += nota
console.log(soma / notas.length) // 8

// funcional: uma função que recebe e devolve, sem mudar nada fora dela
const media = (valores: number[]): number => valores.reduce((a, b) => a + b, 0) / valores.length
console.log(media(notas)) // 8

// orientado a objetos: a turma guarda as notas e sabe calcular a média
class Turma {
  private notas: number[]
  constructor(notas: number[]) {
    this.notas = notas
  }
  media(): number {
    return this.notas.reduce((a, b) => a + b, 0) / this.notas.length
  }
}
console.log(new Turma(notas).media()) // 8
```

O TypeScript aceita os três. E programas de verdade misturam: repara que a
`Turma` usa `reduce` lá dentro.

O fluxograma ajuda a escolher o estilo que combina com cada pedaço:

{{fluxograma}}

> [!NOTE]
> Não se preocupe ainda com `class`, `constructor` e `this`: você aprende cada um na
> aula 04. Por agora, basta saber que esse terceiro jeito existe.

> [!TIP]
> **Poder do TypeScript:** na POO, um objeto pode esconder os próprios dados. O
> `private` faz o TypeScript barrar quem tenta mexer nas notas por fora da
> turma:
>
> ```ts
> const turma = new Turma([8, 7, 9])
> console.log(turma.notas)
> // erro: Property 'notas' is private and only accessible within class 'Turma'.
> ```

> [!NOTE]
> **Pergunta para a turma:** troque as notas para `[10, 6]` e rode. Os três
> estilos continuam dando o mesmo resultado? Quanto dá?

{{pratique}}
