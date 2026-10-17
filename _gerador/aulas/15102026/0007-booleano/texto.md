## 0007 · Booleano (boolean), typeof, null e undefined

Está chovendo? Tem aula hoje? Pergunta de sim ou não tem um tipo só para ela.

O **boolean** tem só dois valores: `true` (verdadeiro) e `false` (falso).
Pensa num interruptor de luz: ou está ligado, ou está desligado.

Lembra das ferramentas da string? Uma delas responde sim ou não: o
`.includes`. Ele diz se um texto tem outro dentro dele.

Vamos ver na prática. Todo e-mail tem `@`. A Ana digita `ana@gmail.com`. A
pergunta `email.includes('@')` responde `true`, e esse `true` fica guardado em
`temArroba`:

{{ideia}}

```ts
import { input } from '#core/input.ts'

const email = input('Seu e-mail: ') // a Ana digita: ana@gmail.com
const temArroba = email.includes('@') // true
console.log(temArroba) // true
```

Repara que ainda não tem losango no fluxograma. O programa só guarda o `true`
e mostra.

Escolher um caminho com ele é trabalho do `if`, lá na
[0015](#0015--condicional-simples-if).

{{fluxograma}}

> [!TIP]
> O `typeof` diz o tipo de um valor: `typeof temArroba` dá `'boolean'`.

E tem dois valores especiais que querem dizer "nada":

- `undefined`: a caixa existe, mas ninguém colocou nada nela ainda. É a cadeira
  reservada de um aluno que ainda não chegou.
- `null`: alguém colocou "nada" de propósito. É o aluno avisando "pode marcar
  que eu não vou".

```ts
let recado
console.log(recado) // undefined
recado = null
console.log(recado) // null
```

### Cada valor tem um tipo

Junta os três últimos assuntos: texto é `string`, número é `number` e sim ou
não é `boolean`. São esses nomes que o `typeof` mostra.

Dá para escrever o tipo junto da variável, depois de dois-pontos:

```ts
const nome: string = 'Ana'
const idade: number = 17
const matriculada: boolean = true
```

Nesta aula você não precisa escrever: o TypeScript olha o valor e descobre o
tipo sozinho. Mas guarda esse jeito de escrever, porque na aula 02 ele aparece
bastante.

> [!NOTE]
> **Pergunta para a turma:** rode e digite só `@`, mais nada. Aparece `true` ou
> `false`? E `@` sozinho é um e-mail de verdade?

{{pratique}}
