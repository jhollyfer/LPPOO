## 0012 · Operadores relacionais

> Na entrada do show tem um segurança que faz uma pergunta só: "tem 18 anos ou
> mais?"

Os operadores relacionais comparam dois valores e respondem com um boolean,
`true` ou `false`. Fazem o papel do segurança.

O João tem 17 anos. A pergunta do segurança, em código, é `idade >= 18`. Como 17
não é maior nem igual a 18, a resposta é `false`:

{{ideia}}

```ts
import { input } from '#core/input.ts'

const idade = Number(input('Sua idade: ')) // o João digita: 17
const maiorDeIdade = idade >= 18 // false
console.log(maiorDeIdade) // false
```

Igual ao boolean da [0007](#0007--booleano-boolean-typeof-null-e-undefined),
ainda não tem losango: a comparação só gera o `true` ou `false` e guarda.

{{fluxograma}}

| Operador | Pergunta            | Com `idade = 17` |
| -------- | ------------------- | ---------------- |
| `>`      | é maior que?        | `idade > 18` → `false`  |
| `<`      | é menor que?        | `idade < 18` → `true`   |
| `>=`     | é maior ou igual?   | `idade >= 18` → `false` |
| `<=`     | é menor ou igual?   | `idade <= 18` → `true`  |

> [!TIP]
> A boca aberta do `>` fica virada para o maior, igual a um jacaré com fome.

{{pratique}}
