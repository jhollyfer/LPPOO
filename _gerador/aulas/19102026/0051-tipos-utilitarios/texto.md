## 0051 · Tipos utilitários: Partial, Pick, Omit, Record, Readonly

Pensa numa receita de bolo. Com ela você faz o bolo sem cobertura, só a
cobertura ou meia receita. A receita é uma só.

O TypeScript já vem com alguns **tipos utilitários** que fazem isso com
tipos. Eles pegam um tipo que já existe e criam uma **variação** dele. Você não
copia nada.

E repara: todos são generics (assunto 0050).

| Utilitário            | O que faz                                   |
| --------------------- | ------------------------------------------- |
| `Partial<Aluno>`      | todas as propriedades viram opcionais       |
| `Pick<Aluno, 'nome'>` | fica só com as propriedades escolhidas      |
| `Omit<Aluno, 'id'>`   | fica com todas, menos as escolhidas         |
| `Readonly<Aluno>`     | todas viram só leitura                      |
| `Record<Turno, number>` | um objeto com uma chave para cada turno   |

{{ideia}}

Vamos ver na prática:

```ts
type Turno = 'manhã' | 'tarde' | 'noite'
type Aluno = { matricula: string; nome: string; idade: number }

const novo: Omit<Aluno, 'matricula'> = { nome: 'Bia', idade: 16 } // a escola gera a matrícula
const mudanca: Partial<Aluno> = { idade: 17 } // pode mudar qualquer coisa, ou nada
const bia: Aluno = { matricula: 'A27', ...novo, ...mudanca }
const ficha: Pick<Aluno, 'nome'> = { nome: bia.nome } // só o nome
const vagas: Record<Turno, number> = { manhã: 30, tarde: 25, noite: 40 }

console.log(bia) // { matricula: 'A27', nome: 'Bia', idade: 17 }
console.log(ficha.nome, vagas.noite) // Bia 40
```

Repara nos três pontinhos: `...novo` copia as propriedades do `novo` para
dentro do objeto da Bia. Se a mesma propriedade aparece duas vezes, vale a
última. Por isso a idade ficou 17, a da `mudanca`.

Para escolher o utilitário, pergunte: o que eu quero guardar do tipo
original?

{{fluxograma}}

> [!TIP]
> **Poder do TypeScript:** `Record<Turno, number>` exige **uma chave para cada
> turno**. Esqueceu a noite? Ele lembra você:
>
> ```ts
> const vagas: Record<Turno, number> = { manhã: 30, tarde: 25 }
> // erro: Property 'noite' is missing in type '{ manhã: number; tarde: number; }'
> //       but required in type 'Record<Turno, number>'.
> ```

> [!NOTE]
> **Pergunta para a turma:** se a `mudanca` for `{}`, vazia, o TypeScript
> aceita? E qual idade a Bia fica? Mude e rode. (Dica: no `Partial`, tudo é
> opcional.)

{{pratique}}
