## 0008 · Conversão de tipos

> Você digitou 17, pediu para somar 1 e o programa respondeu 171. Hoje a gente
> descobre por quê.

Lembra que o `input` sempre devolve texto? Você digitou `17`, mas o programa
guardou `'17'`. E com texto o `+` cola: `'17' + 1` vira `'171'`.

O jeito é converter: transformar o texto em número antes da conta. O
`Number('17')` faz isso e devolve `17`, um número de verdade:

{{ideia}}

```ts
import { input } from '#core/input.ts'

const texto = input('Sua idade: ') // você digita: 17
const idade = Number(texto) // 17
console.log(idade + 1) // 18
```

Na prática a gente faz tudo numa linha só: `Number(input('Sua idade: '))`. O
fluxograma separa em passos para dar para ver: chega texto, vira número, aí sim
faz a conta.

{{fluxograma}}

> [!WARNING]
> Não deu para converter? O resultado é `NaN`: `Number('dezessete')` dá `NaN`.

<details>
<summary>Outras formas de converter</summary>

| Função              | O que faz                                   |
| ------------------- | ------------------------------------------- |
| `Number('7.5')`     | texto para número (aceita decimais)         |
| `parseInt('7.9')`   | texto para número inteiro (corta: dá `7`)   |
| `parseFloat('7.5')` | texto para número decimal                   |
| `String(10)`        | número para texto                           |

</details>

> [!TIP]
> **Poder do TypeScript:** Esqueceu de converter? O TypeScript percebe que o `input` devolve texto e não
> deixa guardar numa variável de número:
>
> ```ts
> const idade: number = input('Sua idade: ')
> // erro: Type 'string' is not assignable to type 'number'.
> ```

{{pratique}}
