## 0012 · Operadores relacionais

Pensa na entrada do show. Tem um segurança na porta que faz uma pergunta só:
"tem 18 anos ou mais?"

Os operadores relacionais fazem o papel desse segurança. Eles comparam dois
valores e respondem com um boolean: `true` ou `false`.

Vamos ver na prática. O João tem 17 anos. A pergunta do segurança, em código, é
`idade >= 18`.

Como 17 não é maior nem igual a 18, a resposta é `false`:

{{ideia}}

```ts
import { input } from '#core/input.ts'

const idade = Number(input('Sua idade: ')) // o João digita: 17
const maiorDeIdade = idade >= 18 // false
console.log(maiorDeIdade) // false
```

Repara que, igual ao boolean da [0007](#0007--booleano-boolean-typeof-null-e-undefined),
ainda não tem losango. A comparação só gera o `true` ou `false` e guarda.

{{fluxograma}}

| Operador | Pergunta            | Com `idade = 17` |
| -------- | ------------------- | ---------------- |
| `>`      | é maior que?        | `idade > 18` → `false`  |
| `<`      | é menor que?        | `idade < 18` → `true`   |
| `>=`     | é maior ou igual?   | `idade >= 18` → `false` |
| `<=`     | é menor ou igual?   | `idade <= 18` → `true`  |

> [!TIP]
> A boca aberta do `>` fica virada para o maior, igual a um jacaré com fome.

> [!NOTE]
> **Pergunta para a turma:** qual é a menor idade que o João precisa digitar
> para aparecer `true`? Teste e confira.

{{pratique}}
