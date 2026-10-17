## 0004 · Constantes

Tem coisa que não muda no meio do programa. O nome da escola é uma delas.

Se a variável é uma caixa que troca de conteúdo, a **constante** é uma caixa
lacrada. Colocou o valor, acabou. Ela nasce com `const`.

Olha só. O nome da escola é `'CETAM'`. Se alguém tentar trocar, o TypeScript
reclama na hora, antes mesmo de o programa rodar:

{{ideia}}

```ts
import { input } from '#core/input.ts'

const NOME_ESCOLA = 'CETAM'
const nome = input('Seu nome: ') // a Ana digita: Ana
console.log(`${nome} estuda no ${NOME_ESCOLA}`) // Ana estuda no CETAM

// NOME_ESCOLA = 'Outra escola'
// erro: Cannot assign to 'NOME_ESCOLA' because it is a constant.
```

Repara que `nome` também é `const`. A resposta do `input` chega uma vez e não
muda mais.

E repara no fluxograma: a constante é guardada antes da pergunta.

{{fluxograma}}

> [!TIP]
> Na dúvida, comece com `const`. Precisou mudar depois? Troque para `let`.
> Valor fixo do programa vai em `UPPER_CASE` (`NOME_ESCOLA`, `MEDIA_APROVACAO`).
> O resto continua em `camelCase` (`nome`).

> [!NOTE]
> **Pergunta para a turma:** tire as `//` da linha `NOME_ESCOLA = 'Outra escola'`.
> O editor reclama? E quando você roda, a frase da Ana aparece antes do erro?
> Rode e descubra.

{{pratique}}
