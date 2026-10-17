## 0040 · Objetos

Pensa na carteirinha da escola. Num cartão só, tem o nome, a idade e o turno
do aluno. Cada informação tem um rótulo.

Até agora, cada caixinha guardou um valor só, ou uma lista. O **objeto** junta
várias informações sobre a mesma coisa, cada uma com o seu nome.

Esses nomes se chamam **propriedades**. O objeto é escrito entre chaves, com
`nome: valor` separados por vírgula.

Vamos ver na prática. A carteirinha da Bia tem nome, idade e turno:

{{ideia}}

```ts
const aluna = { nome: 'Bia', idade: 16, turno: 'noite' }

console.log(aluna.nome) // Bia
console.log(`${aluna.nome} estuda à ${aluna.turno}`) // Bia estuda à noite

aluna.idade = 17 // fez aniversário
console.log(aluna.idade) // 17
```

Para ler uma propriedade, use o **ponto**: `aluna.nome`. Para trocar, é igual
a uma variável: `aluna.idade = 17`.

Repara: `aluna` é `const` e mesmo assim a idade mudou. É a mesma coisa do array
na aula 02: o `const` trava a etiqueta, não o que tem dentro.

O fluxograma mostra o caminho: cria, lê, troca e lê de novo:

{{fluxograma}}

> [!NOTE]
> Objeto é coisa do JavaScript, e não tem nada a ver com classe. É só um jeito
> de agrupar informações. O que o TypeScript faz é **conferir** o objeto.

> [!TIP]
> **Poder do TypeScript:** você não escreveu tipo nenhum, mas ele já sabe que
> `idade` é número e que não existe `email` na carteirinha:
>
> ```ts
> aluna.idade = 'dezessete'
> // erro: Type 'string' is not assignable to type 'number'.
> console.log(aluna.email)
> // erro: Property 'email' does not exist on type
> //       '{ nome: string; idade: number; turno: string; }'.
> ```

> [!NOTE]
> **Pergunta para a turma:** o que aparece com `console.log(aluna)`, assim, sem
> ponto nenhum? Rode e confira.

{{pratique}}
