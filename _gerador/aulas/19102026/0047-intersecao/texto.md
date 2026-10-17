## 0047 · Interseção (&)

Lembra da união (`|`), do assunto 0044? Ela quer dizer "**um ou outro**".

A **interseção** (`&`) é o contrário: quer dizer "**os dois ao mesmo
tempo**". `A & B` tem tudo que `A` tem e tudo que `B` tem.

Pensa no crachá de um evento. Tem o seu nome e a sua idade, como na
identidade, e mais o número da inscrição.

Assim você monta um tipo grande juntando pedaços pequenos. `Aluno` tem nome e
idade. `ComId` tem só o id. E `Aluno & ComId` precisa das três coisas:

{{ideia}}

```ts
type Aluno = { nome: string; idade: number }
type ComId = { id: number }

type AlunoComId = Aluno & ComId

const bia: AlunoComId = { id: 1, nome: 'Bia', idade: 16 }

console.log(`#${bia.id} ${bia.nome}, ${bia.idade} anos`) // #1 Bia, 16 anos
```

Na hora de aceitar o objeto, o TypeScript confere as duas partes. Faltou
qualquer pedaço, não passa:

{{fluxograma}}

> [!NOTE]
> Com objetos, o `&` faz o mesmo papel do `extends` da interface (assunto
> 0042). `interface AlunoComId extends Aluno, ComId {}` dá no mesmo. Use o que
> combinar com o resto do código.

> [!TIP]
> **Poder do TypeScript:** esqueceu o id? O erro mostra que o objeto não serve
> para a interseção:
>
> ```ts
> const ze: Aluno & ComId = { nome: 'Zé', idade: 17 }
> // erro: Type '{ nome: string; idade: number; }' is not assignable
> //       to type 'Aluno & ComId'.
> ```

> [!NOTE]
> **Pergunta para a turma:** e se você escrever `id: '1'`, com aspas? O
> TypeScript aceita? Troque no exemplo e leia o erro.

{{pratique}}
