## 0007 · Booleano (boolean), typeof, null e undefined

> Está chovendo? Tem aula hoje? O recreio já saiu? Pergunta de sim ou não tem um
> tipo só para ela.

O **boolean** tem só dois valores: `true` (verdadeiro) e `false` (falso). É um
interruptor de luz: ou está ligado, ou está desligado.

O programa pergunta "Tem aula hoje?". Você digita `sim`. A comparação
`resposta === 'sim'` vira `true`, e é esse `true` que fica guardado em `temAula`:

{{ideia}}

```ts
import { input } from '#core/input.ts'

const resposta = input('Tem aula hoje? (sim/nao) ') // você digita: sim
const temAula = resposta === 'sim' // true

let recado // undefined: a gaveta existe, mas está vazia
recado = null // null: "nada", colocado de propósito
```

Ainda não tem losango no fluxograma. A comparação só gera o `true` ou o `false`
e guarda. Escolher um caminho com ele é trabalho do `if`, na
[0016](#0016--condicional-simples-if).

{{fluxograma}}

> [!TIP]
> O `typeof` conta o tipo de um valor: `typeof temAula` dá `'boolean'`.

E tem dois valores especiais que querem dizer "nada":

- `undefined`: a caixa existe, mas ninguém colocou nada nela ainda. É a cadeira
  reservada de um aluno que ainda não chegou.
- `null`: alguém colocou "nada" de propósito. É o aluno avisando "pode marcar
  que eu não vou".

> [!TIP]
> **Poder do TypeScript:** Com `string | null` você avisa que a caixa pode estar vazia. Aí o TypeScript
> não deixa usar o valor sem conferir antes:
>
> ```ts
> let recado: string | null = null
> console.log(recado.length)
> // erro: 'recado' is possibly 'null'.
> ```

{{pratique}}
