## 0042 · Tipos de objeto e type

> A ficha de matrícula tem os mesmos campos para todo mundo: nome, idade,
> notas. Cada aluno preenche a sua.

Até agora as variáveis guardavam um valor simples. Um **objeto** junta vários
valores com nome numa coisa só: `{ nome: 'Ana', idade: 17 }`. Cada valor é uma
**propriedade**, e você chega nela com ponto: `ana.nome`.

Para dizer que formato um objeto tem, use **`type`**. Ele é a ficha em branco:
diz quais campos existem e o tipo de cada um. Cada aluno é uma ficha
preenchida:

{{ideia}}

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

Com o `type`, o array `turma` vira `Aluno[]`, uma lista de fichas. O
fluxograma percorre a turma e calcula a média de cada um:

{{fluxograma}}

> [!NOTE]
> O nome do `type` começa com letra maiúscula (`Aluno`, `Produto`). É
> combinado, não obrigação, mas todo projeto TypeScript segue.

> [!TIP]
> **Poder do TypeScript:** escreva `ana.` e o editor lista as propriedades da
> ficha. Errou uma letra? Ele avisa na hora:
>
> ```ts
> console.log(ana.nmoe)
> // erro: Property 'nmoe' does not exist on type 'Aluno'.
> ```

{{pratique}}
