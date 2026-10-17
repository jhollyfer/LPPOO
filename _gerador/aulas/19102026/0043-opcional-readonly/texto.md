## 0043 · Propriedade opcional e readonly

Pensa na carteirinha da escola. A matrícula não muda nunca. O nome pode ser
corrigido. E o apelido? Nem todo mundo tem.

Duas marcas resolvem isso:

- **`?` (opcional):** `apelido?: string` quer dizer que a propriedade pode nem
  existir. Quando não existe, ela vale `undefined`.
- **`readonly` (só leitura):** `readonly matricula: string` pode ser lida, mas
  não pode ser trocada depois que o objeto foi criado.

{{ideia}}

Vamos ver na prática:

```ts
type Aluno = {
  readonly matricula: string
  nome: string
  apelido?: string
}

const ana: Aluno = { matricula: 'A01', nome: 'Ana' } // sem apelido: tudo bem
const ze: Aluno = { matricula: 'A02', nome: 'José', apelido: 'Zé' }

function chamar(a: Aluno): string {
  return a.apelido ?? a.nome // não tem apelido? usa o nome
}

console.log(chamar(ana)) // Ana
console.log(chamar(ze)) // Zé
ana.nome = 'Ana Clara' // pode: nome não é readonly
console.log(ana.nome)
```

Repara na função `chamar`. Como o apelido pode faltar, ela precisa decidir o
que fazer quando ele não vem.

É a pergunta do fluxograma:

{{fluxograma}}

> [!TIP]
> **Poder do TypeScript:** ele cobra as duas marcas. Não deixa trocar o que é
> `readonly`, e não deixa usar o opcional sem tratar o caso vazio:
>
> ```ts
> ana.matricula = 'A99'
> // erro: Cannot assign to 'matricula' because it is a read-only property.
> ana.apelido.toUpperCase()
> // erro: 'ana.apelido' is possibly 'undefined'.
> ```

> [!NOTE]
> **Pergunta para a turma:** se a Ana tiver `apelido: ''` (texto vazio), o que
> `chamar(ana)` mostra? Rode e confira. (Dica: o `??` só troca `undefined` e
> `null`.)

{{pratique}}
