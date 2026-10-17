## 0043 · interface (e type x interface)

A **`interface`** é outro jeito de descrever o formato de um objeto. Para
objeto simples, ela faz a mesma coisa que o `type`.

Então por que existe? Por causa do **`extends`**. Uma interface pode
**estender** outra: pega tudo o que a outra tem e acrescenta o que faltar.

Pensa assim: todo aluno é uma pessoa, mas nem toda pessoa é aluno.

`Pessoa` tem nome. `Aluno` estende `Pessoa`: tem o nome e mais a matrícula.

Por isso, onde o código pede uma `Pessoa`, um `Aluno` também serve:

{{ideia}}

Vamos ver na prática:

```ts
interface Pessoa {
  nome: string
}

interface Aluno extends Pessoa {
  matricula: string
}

const bia: Aluno = { nome: 'Bia', matricula: 'A27' }
const apresentar = (p: Pessoa): string => `Olá, ${p.nome}!`

console.log(apresentar(bia)) // Olá, Bia! (todo Aluno também é Pessoa)
console.log(bia.matricula) // A27
```

Repara: a função pede `Pessoa`, e a Bia entra numa boa.

E aí, quando usar `type` e quando usar `interface`? O fluxograma resume:

{{fluxograma}}

| Dá para fazer com...                       | `type`               | `interface`         |
| ------------------------------------------ | :------------------: | :-----------------: |
| formato de objeto                          | sim                  | sim                 |
| estender outro formato                     | sim, com `&` (0048)  | sim, com `extends`  |
| dar nome a outro tipo: `type Idade = number` | sim                | não                 |

> [!TIP]
> **Poder do TypeScript:** quem estende leva as obrigações junto. Esqueceu o
> nome num `Aluno`? O TypeScript cobra:
>
> ```ts
> const ze: Aluno = { matricula: 'A30' }
> // erro: Property 'nome' is missing in type '{ matricula: string; }'
> //       but required in type 'Aluno'.
> ```

> [!NOTE]
> **Pergunta para a turma:** dá para chamar `apresentar({ nome: 'Zé' })`, só
> com o nome e sem matrícula? Rode e veja. (Dica: o que a função pede é uma
> `Pessoa`.)

{{pratique}}
