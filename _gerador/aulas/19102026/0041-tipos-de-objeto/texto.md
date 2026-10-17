## 0041 · Tipos de objeto e type

Na [0040](#0040--objetos) você criou objetos e o TypeScript descobriu o
formato sozinho. Agora é a sua vez de **escrever** esse formato.

Por que escrever? Para todos os alunos da turma terem a mesma ficha, com os
mesmos campos.

E como dizer que formato o objeto tem? Com o mesmo **`type`** da
[0039](#0039--tipo-de-função-e-tipagem-contextual). Lá ele deu nome a um tipo de
função. Aqui ele dá nome a um formato de objeto.

Pensa numa ficha de matrícula em branco: ela diz quais campos existem e o que
vai em cada um. Cada aluno é uma ficha preenchida:

{{ideia}}

Em código, cada campo vai numa linha, com o nome e o tipo:

```ts
type Aluno = {
  nome: string
  notas: number[]
}

const ana: Aluno = { nome: 'Ana', notas: [8, 7, 9] }
const turma: Aluno[] = [ana, { nome: 'Bia', notas: [6, 9] }]

for (const aluno of turma) {
  const media = aluno.notas.reduce((a, b) => a + b, 0) / aluno.notas.length
  console.log(`${aluno.nome}: ${media.toFixed(1)}`) // Ana: 8.0, depois Bia: 7.5
}
```

Repara no `turma`. Ele é `Aluno[]`, uma lista de fichas.

Se o `type` couber numa linha só, separe os campos com `;`:
`type Ponto = { x: number; y: number }`.

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
