## 0052 · Type guards (x is T) e satisfies

No assunto 0046, o `if` com `typeof` e `in` já estreitava o tipo.

Mas e quando a conferência fica comprida? Você coloca ela numa função.

Só que tem um detalhe. Para o TypeScript entender que a função é uma
conferência, o retorno precisa ser **`p is Aluno`**, e não `boolean`.

Essa função se chama **type guard**. Pensa no porteiro que confere a
carteirinha. Passou na conferência, lá dentro todo mundo sabe que você é
aluno.

Aqui é igual: se a função devolve `true`, dentro do `if` o `p` é `Aluno`.

{{ideia}}

```ts
type Aluno = { nome: string; matricula: string }
type Visitante = { nome: string; motivo: string }

function ehAluno(p: Aluno | Visitante): p is Aluno {
  return 'matricula' in p
}

function entrada(p: Aluno | Visitante): string {
  if (ehAluno(p)) return `${p.nome}, matrícula ${p.matricula}` // aqui p é Aluno
  return `${p.nome}, visitante: ${p.motivo}` // aqui p é Visitante
}

console.log(entrada({ nome: 'Bia', matricula: 'A27' })) // Bia, matrícula A27
console.log(entrada({ nome: 'Seu João', motivo: 'reunião' })) // Seu João, visitante: reunião
```

{{fluxograma}}

Agora o **`satisfies`**. Ele também é uma conferência, mas de valor.

`valor satisfies Tipo` confere se o valor cabe no tipo, **sem trocar** o tipo
que o TypeScript descobriu sozinho.

Compare os dois:

```ts
const precos1: Record<string, number> = { acai: 15, tapioca: 8 }
precos1.acai // number | undefined: com a anotação, ele esquece quais chaves existem

const precos2 = { acai: 15, tapioca: 8 } satisfies Record<string, number>
precos2.acai // number: conferiu e lembrou das chaves
```

> [!TIP]
> **Poder do TypeScript:** o `satisfies` pega erro de digitação no nome da
> propriedade e ainda sugere o certo:
>
> ```ts
> type Configuracao = { escola: string; vagas: number }
> const config = { escola: 'CETAM', vagass: 30 } satisfies Configuracao
> // erro: Object literal may only specify known properties, but 'vagass'
> //       does not exist in type 'Configuracao'. Did you mean to write 'vagas'?
> ```

> [!NOTE]
> **Pergunta para a turma:** troque o retorno `p is Aluno` por `boolean`. O
> `p.matricula` dentro do `if` continua funcionando? Faça a troca e veja o que
> o editor diz.

{{pratique}}
