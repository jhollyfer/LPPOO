## 0045 · União (|) e tipos literais

A **união** se escreve com `|` e quer dizer "**um ou outro**".

`number | string` é um valor que pode ser número ou texto. Um dos dois.

Agora olha só: o tipo também pode ser um **valor exato**. Esse é o tipo
**literal**. O tipo `'noite'` só aceita o texto `'noite'`.

Junta os dois e você escreve a lista do que é permitido:
`type Turno = 'manhã' | 'tarde' | 'noite'`. São três turnos. "Madrugada" não
existe, por mais que alguém digite.

Qualquer texto fora da lista é recusado:

{{ideia}}

Vamos ver na prática:

```ts
type Turno = 'manhã' | 'tarde' | 'noite'
type Matricula = number | string

function horario(turno: Turno): string {
  if (turno === 'manhã') return '7h às 11h'
  if (turno === 'tarde') return '13h às 17h'
  return '19h às 22h'
}

const matricula: Matricula = 'A27' // ou 27: as duas servem
console.log(horario('noite'), matricula) // 19h às 22h A27
```

Bônus: escreva `horario('` no editor e ele sugere as três opções. A lista
vira autocompletar.

O fluxograma mostra a conferência que o TypeScript faz antes de rodar:

{{fluxograma}}

> [!TIP]
> **Poder do TypeScript:** texto fora da lista não passa:
>
> ```ts
> const turno: Turno = 'madrugada'
> // erro: Type '"madrugada"' is not assignable to type 'Turno'.
> ```

> [!NOTE]
> **Pergunta para a turma:** a `matricula` aceita `27`, sem aspas? E `true`?
> Troque o valor e veja o que o editor diz.

{{pratique}}
