## 0042 · Como o TypeScript pensa: tipos estruturais

Pensa no porteiro do show. Ele não pergunta seu nome. Ele olha se você tem
pulseira e se ela é da cor certa.

O TypeScript é esse porteiro. Ele olha o **formato**: se o objeto tem as
propriedades que o tipo pede, com os tipos certos, o objeto serve.

Isso se chama **tipagem estrutural**.

Olha só. A `apresentar` pede um `Aluno`: algo com `nome` texto e `idade`
número.

A `ana` tem esse formato. O `visitante` também tem, e ainda sobra uma
`cidade`: serve mesmo assim. Já a Bia, sem `idade`, não tem o formato e é
barrada:

{{ideia}}

```ts
type Aluno = { nome: string; idade: number }

function apresentar(a: Aluno): string {
  return `${a.nome}, ${a.idade} anos`
}

const ana = { nome: 'Ana', idade: 17 }
const visitante = { nome: 'Zé', idade: 40, cidade: 'Benjamin Constant' }

console.log(apresentar(ana)) // Ana, 17 anos
console.log(apresentar(visitante)) // Zé, 40 anos (a cidade sobra, e tudo bem)
```

Repara: nem a `ana` nem o `visitante` foram declarados como `Aluno`. O
TypeScript compara o formato na hora da chamada, assim:

{{fluxograma}}

> [!TIP]
> **Poder do TypeScript:** sobrar propriedade numa variável tudo bem. Mas num
> objeto escrito ali mesmo, na chamada, o TypeScript desconfia de erro de
> digitação e avisa:
>
> ```ts
> apresentar({ nome: 'Ana', idade: 17, turma: 'DS' })
> // erro: Object literal may only specify known properties, and 'turma'
> //       does not exist in type 'Aluno'.
> ```

> [!NOTE]
> **Pergunta para a turma:** e se o `visitante` tiver `idade: '40'`, com aspas?
> Ele ainda passa pelo porteiro? Mude e veja o que o editor diz. (Dica: o
> formato inclui o tipo de cada propriedade.)

{{pratique}}
