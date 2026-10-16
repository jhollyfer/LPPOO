## 0004 · Constantes

> O nome da escola não muda no meio da aula. A média para passar também não.

Se a variável é uma caixa que troca de conteúdo, a **constante** é uma caixa
lacrada. Colocou o valor, acabou. Ela nasce com `const`.

O nome da escola é `'CETAM'`. Se alguém tentar trocar, o TypeScript reclama
na hora, antes mesmo de o programa rodar:

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
muda mais. Repare também que a constante é guardada antes da pergunta:

{{fluxograma}}

> [!NOTE]
> Na dúvida, comece com `const`. Precisou mudar depois? Troque para `let`.
> Valor fixo do programa vai em `UPPER_CASE` (`NOME_ESCOLA`, `MEDIA_APROVACAO`);
> o resto continua em `camelCase` (`nome`).

> [!TIP]
> **Poder do TypeScript:** Passe o mouse em cima de `NOME_ESCOLA`: o editor mostra
> `const NOME_ESCOLA: "CETAM"`. Como a constante nunca muda, o tipo dela é
> exatamente aquele texto, e não qualquer string.

{{pratique}}
