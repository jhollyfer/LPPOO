## 0004 · Constantes

> O nome da escola não muda no meio da aula. A média para passar também não.

Se a variável é uma caixa que troca de conteúdo, a **constante** é uma caixa
lacrada. Colocou o valor, acabou. Ela nasce com `const`.

O nome da escola é `'CETAM'` e vai continuar sendo. Se alguém tentar trocar, o
TypeScript reclama na hora, antes mesmo de rodar:

{{ideia}}

```ts
import { input } from '#core/input.ts'

const NOME_ESCOLA = 'CETAM'
const nome = input('Seu nome: ') // a Ana digita: Ana
console.log(`${nome} estuda no ${NOME_ESCOLA}`) // Ana estuda no CETAM

// NOME_ESCOLA = 'Outra escola'
// erro: Cannot assign to 'NOME_ESCOLA' because it is a constant.
```

Repare que `nome` também é `const`: a resposta do `input` chega uma vez e não
muda mais. No fluxograma, a constante é guardada antes da pergunta:

{{fluxograma}}

> [!TIP]
> Na dúvida, comece com `const`. Precisou mudar depois? Troque para `let`.
> Valor fixo do programa vai em `UPPER_CASE` (`NOME_ESCOLA`, `MEDIA_APROVACAO`);
> o resto continua em `camelCase` (`nome`).

{{pratique}}
