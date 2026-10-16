## 0043 · interface (e type x interface)

> Todo aluno é uma pessoa, mas nem toda pessoa é aluno. O aluno tem tudo que a
> pessoa tem, e mais a matrícula.

**`interface`** é outro jeito de descrever o formato de um objeto. Para objetos
simples, ela faz o mesmo que o `type`. O que ela tem de especial é o
**`extends`**: uma interface pode **estender** outra, herdando tudo dela e
acrescentando o que faltar.

`Pessoa` tem nome. `Aluno` estende `Pessoa`: tem o nome e mais a matrícula. Por
isso, onde o código pede uma `Pessoa`, um `Aluno` também serve:

{{ideia}}

```ts
interface Pessoa {
  nome: string
}

interface Aluno extends Pessoa {
  matricula: string
}

const bia: Aluno = { nome: 'Bia', matricula: 'A27' }

function apresentar(p: Pessoa): string {
  return `Olá, ${p.nome}!`
}

console.log(apresentar(bia)) // Olá, Bia!: todo Aluno também é Pessoa
console.log(bia.matricula) // A27
```

E quando usar um ou outro? O fluxograma resume:

{{fluxograma}}

| Dá para fazer com...                 | `type` | `interface` |
| ------------------------------------ | :----: | :---------: |
| formato de objeto                    | sim    | sim         |
| estender outro formato               | com `&` | com `extends` |
| união (`'manhã' \| 'tarde'`)         | sim    | não         |
| tupla, função, tipo primitivo        | sim    | não         |
| ser seguida por uma classe (aula 11) | sim    | sim, o mais comum |

> [!TIP]
> **Poder do TypeScript:** quem estende herda as obrigações. Esqueceu o nome
> num `Aluno`? O TypeScript cobra:
>
> ```ts
> const ze: Aluno = { matricula: 'A30' }
> // erro: Property 'nome' is missing in type '{ matricula: string; }'
> //       but required in type 'Aluno'.
> ```

{{pratique}}
