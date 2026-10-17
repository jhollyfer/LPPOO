## 0008 · Conversão de tipos

Você digita 17, pede para somar 1, e o programa responde 171. Estranho, né?
Vamos entender por quê.

Lembra que o `input` sempre devolve texto? Você digitou `17`, mas o programa
guardou `'17'`.

E com texto o `+` cola. Então `'17' + 1` vira `'171'`.

O jeito é converter: transformar o texto em número antes da conta. O
`Number('17')` faz isso e devolve `17`, um número de verdade:

{{ideia}}

```ts
import { input } from '#core/input.ts'

const texto = input('Sua idade: ') // você digita: 17
const idade = Number(texto) // 17
console.log(idade + 1) // 18
```

No dia a dia, a gente faz tudo numa linha só: `Number(input('Sua idade: '))`.

O fluxograma separa em passos para você enxergar melhor: chega texto, vira
número, e aí sim faz a conta.

{{fluxograma}}

> [!WARNING]
> Não deu para converter? O resultado é `NaN`. Por exemplo,
> `Number('dezessete')` dá `NaN`.

<details>
<summary>Outras formas de converter</summary>

| Função              | O que faz                                   |
| ------------------- | ------------------------------------------- |
| `Number('7.5')`     | texto para número (aceita decimais)         |
| `parseInt('7.9')`   | texto para número inteiro (corta: dá `7`)   |
| `parseFloat('7.5')` | texto para número decimal                   |
| `String(10)`        | número para texto                           |

</details>

> [!NOTE]
> **Pergunta para a turma:** troque `idade + 1` por `texto + 1` e digite `17`.
> O que aparece na tela? Rode e confira.

{{pratique}}
