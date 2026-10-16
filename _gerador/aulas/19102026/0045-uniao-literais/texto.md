## 0045 · União (|) e tipos literais

> Os turnos do CETAM são três: manhã, tarde e noite. "Madrugada" não existe,
> por mais que alguém digite.

A **união**, escrita com `|`, quer dizer "**um ou outro**". `number | string`
é um valor que pode ser número ou texto.

E o tipo pode ser um **valor exato**, o tipo **literal**. Juntando os dois, dá
para escrever a lista de valores permitidos:
`type Turno = 'manhã' | 'tarde' | 'noite'`. Qualquer outro texto é recusado:

{{ideia}}

```ts
type Turno = 'manhã' | 'tarde' | 'noite'
type Matricula = number | string

function horario(turno: Turno): string {
  if (turno === 'manhã') return '7h às 11h'
  if (turno === 'tarde') return '13h às 17h'
  return '19h às 22h'
}

const meuTurno: Turno = 'noite'
const matricula: Matricula = 'A27' // ou 27: as duas servem

console.log(horario(meuTurno)) // 19h às 22h
console.log(matricula) // A27
```

O fluxograma é a conferência que o TypeScript faz antes de rodar:

{{fluxograma}}

> [!NOTE]
> Bônus: escreva `horario('` no editor e ele sugere as três opções. A lista de
> valores vira autocompletar.

> [!TIP]
> **Poder do TypeScript:** texto fora da lista não passa:
>
> ```ts
> const turno: Turno = 'madrugada'
> // erro: Type '"madrugada"' is not assignable to type 'Turno'.
> ```

{{pratique}}
