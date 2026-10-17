## 0042 · Tipos de objeto e type

Até agora, cada variável guardava um valor só. Um número, um texto. Hoje isso
muda.

Um **objeto** junta vários valores com nome numa coisa só:
`{ nome: 'Ana', idade: 17 }`. Cada valor desses é uma **propriedade**.

Para chegar numa propriedade, você usa o ponto: `ana.nome`.

E como dizer que formato o objeto tem? Com o **`type`**. Pensa numa ficha de
matrícula em branco: ela diz quais campos existem e o que vai em cada um.

Cada aluno é uma ficha preenchida. Olha só:

{{ideia}}

Vamos ver na prática:

```ts
type Aluno = {
  nome: string
  idade: number
  notas: number[]
}

const ana: Aluno = { nome: 'Ana', idade: 17, notas: [8, 7, 9] }
const turma: Aluno[] = [ana, { nome: 'Bia', idade: 16, notas: [6, 9] }]

console.log(ana.nome) // Ana

for (const aluno of turma) {
  const media = aluno.notas.reduce((a, b) => a + b, 0) / aluno.notas.length
  console.log(`${aluno.nome}: ${media.toFixed(1)}`)
}
// Ana: 8.0
// Bia: 7.5
```

Repara no `turma`. Ele é `Aluno[]`, uma lista de fichas.

O fluxograma passa pela turma, ficha por ficha, e calcula a média de cada um:

{{fluxograma}}

> [!NOTE]
> O nome do `type` começa com letra maiúscula: `Aluno`, `Produto`. Ninguém te
> obriga, mas todo projeto TypeScript faz assim. Então faz também.

> [!TIP]
> **Poder do TypeScript:** escreva `ana.` e o editor mostra as propriedades da
> ficha. Errou uma letra? Ele avisa na hora:
>
> ```ts
> console.log(ana.nmoe)
> // erro: Property 'nmoe' does not exist on type 'Aluno'.
> ```

> [!NOTE]
> **Pergunta para a turma:** se a Bia tirar mais um 10 (`notas: [6, 9, 10]`),
> qual vai ser a média dela? Mude o exemplo e rode.

{{pratique}}
