## 0052 · Type guards (x is T) e satisfies

> O porteiro confere a carteirinha na entrada. Passou na conferência, lá dentro
> todo mundo sabe que você é aluno.

No assunto 0046 o `if` com `typeof` e `in` já estreitava o tipo. Quando a
conferência é mais comprida, dá para colocar ela numa função. Só que, para o
TypeScript entender que a função é uma conferência, o retorno precisa ser
**`p is Aluno`** em vez de `boolean`. Essa função é um **type guard**: se ela
devolve `true`, dentro do `if` o `p` é `Aluno`.

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

O **`satisfies`** é outra conferência, mas de valor. `valor satisfies Tipo`
confere se o valor cabe no tipo **sem trocar** o tipo que o TypeScript
descobriu sozinho. Compare:

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

{{pratique}}
