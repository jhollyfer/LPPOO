## 0017 · Condicional composta (if / else)

> Ou você está no porto às 6h e embarca no recreio para Tabatinga, ou fica em
> terra. Não tem meio termo.

O `if` sozinho só sabe fazer uma coisa a mais. Com o `else` (senão), o programa
ganha um **plano B**: se a condição for verdadeira, roda o bloco do `if`; se for
falsa, roda o bloco do `else`. Sempre um dos dois, nunca os dois juntos.

Você chegou ao porto às 5h. `5 <= 6` é `true`, então o caminho é o do `if`:
embarcou!

{{ideia}}

```ts
import { input } from '#core/input.ts'

const hora = Number(input('Que horas você chegou ao porto? ')) // você digita: 5

if (hora <= 6) {
  console.log('Embarcou para Tabatinga!')
} else {
  console.log('O recreio já saiu.')
}
```

No fluxograma, os dois caminhos saem do mesmo losango e se encontram de novo no
fim. O programa passa por **exatamente um** deles:

{{fluxograma}}

{{pratique}}
