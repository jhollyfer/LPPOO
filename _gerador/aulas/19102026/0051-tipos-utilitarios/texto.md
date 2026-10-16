## 0051 · Tipos utilitários: Partial, Pick, Omit, Record, Readonly

> Com a mesma receita de bolo dá para fazer o bolo sem cobertura, só a
> cobertura ou meia receita. A receita é uma só.

O TypeScript já vem com alguns **tipos utilitários**: eles pegam um tipo que
existe e criam uma **variação** dele, sem você copiar nada. Todos são generics
(assunto 0050):

| Utilitário            | O que faz                                   |
| --------------------- | ------------------------------------------- |
| `Partial<Aluno>`      | todas as propriedades viram opcionais       |
| `Pick<Aluno, 'nome'>` | fica só com as propriedades escolhidas      |
| `Omit<Aluno, 'id'>`   | fica com todas, menos as escolhidas         |
| `Readonly<Aluno>`     | todas viram só leitura                      |
| `Record<Turno, number>` | um objeto com uma chave para cada turno   |

{{ideia}}

```ts
type Turno = 'manhã' | 'tarde' | 'noite'
type Aluno = { matricula: string; nome: string; idade: number }

type AlunoNovo = Omit<Aluno, 'matricula'> // a escola é que gera a matrícula
type Ficha = Pick<Aluno, 'nome'> // só o nome
type Mudanca = Partial<Aluno> // pode mudar qualquer coisa, ou nada

const novo: AlunoNovo = { nome: 'Bia', idade: 16 }
const mudanca: Mudanca = { idade: 17 }
const bia: Aluno = { matricula: 'A27', ...novo, ...mudanca }
const ficha: Ficha = { nome: bia.nome }

const vagas: Record<Turno, number> = { manhã: 30, tarde: 25, noite: 40 }

console.log(bia) // { matricula: 'A27', nome: 'Bia', idade: 17 }
console.log(ficha.nome, vagas.noite) // Bia 40
```

Para escolher o utilitário, pense no que você quer guardar do tipo original:

{{fluxograma}}

> [!TIP]
> **Poder do TypeScript:** `Record<Turno, number>` exige **uma chave para cada
> turno**. Esqueceu a noite? Ele lembra:
>
> ```ts
> const vagas: Record<Turno, number> = { manhã: 30, tarde: 25 }
> // erro: Property 'noite' is missing in type '{ manhã: number; tarde: number; }'
> //       but required in type 'Record<Turno, number>'.
> ```

{{pratique}}
