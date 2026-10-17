## 0007 · Booleano (boolean), typeof, null e undefined

Está chovendo? Tem aula hoje? Pergunta de sim ou não tem um tipo só para ela.

O **boolean** tem só dois valores: `true` (verdadeiro) e `false` (falso).
Pensa num interruptor de luz: ou está ligado, ou está desligado.

Vamos ver na prática. O programa pergunta "Tem aula hoje?". Você digita `sim`.
A comparação `resposta === 'sim'` vira `true`. E é esse `true` que fica
guardado em `temAula`:

{{ideia}}

```ts
import { input } from '#core/input.ts'

const resposta = input('Tem aula hoje? (sim/nao) ') // você digita: sim
const temAula = resposta === 'sim' // true

let recado // undefined: a gaveta existe, mas está vazia
recado = null // null: "nada", colocado de propósito
```

Repara que ainda não tem losango no fluxograma. A comparação só gera o `true`
ou o `false` e guarda.

Escolher um caminho com ele é trabalho do `if`, lá na
[0015](#0015--condicional-simples-if).

{{fluxograma}}

> [!TIP]
> O `typeof` diz o tipo de um valor: `typeof temAula` dá `'boolean'`.

E tem dois valores especiais que querem dizer "nada":

- `undefined`: a caixa existe, mas ninguém colocou nada nela ainda. É a cadeira
  reservada de um aluno que ainda não chegou.
- `null`: alguém colocou "nada" de propósito. É o aluno avisando "pode marcar
  que eu não vou".

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
tipo sozinho. Mas guarda esse jeito de escrever. Na aula 02 ele aparece nas
listas (`number[]`) e nas funções.

> [!NOTE]
> **Pergunta para a turma:** coloque um `console.log(temAula)` no fim e rode
> digitando `nao`. O que aparece? E se digitar `SIM`, tudo maiúsculo?

{{pratique}}
