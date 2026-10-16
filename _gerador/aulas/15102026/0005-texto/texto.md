## 0005 · Texto (string)

> Seu nome, sua senha do Wi-Fi, a legenda daquela foto no rio. Para o computador
> tudo isso é a mesma coisa: texto.

Texto, no TypeScript, se chama **string**: uma sequência de letras entre aspas.
E toda string já vem com ferramentas prontas, como um canivete: é só puxar.

A Maria digitou o nome com uns espaços sobrando: `'  maria  '`. O `.trim()` tira
os espaços das pontas e o `.toUpperCase()` deixa tudo em maiúsculas:

{{ideia}}

```ts
import { input } from '#core/input.ts'

const nome = input('Seu nome: ') // a Maria digita: '  maria  '
const limpo = nome.trim() // 'maria'
console.log(limpo.toUpperCase()) // MARIA
```

Cada ferramenta devolve um texto novo. A variável `nome` continua com os
espaços; quem está limpo é o `limpo`. Usar uma ferramenta é o programa fazendo
algo, então vira passo roxo:

{{fluxograma}}

> [!WARNING]
> Com texto, o `+` cola em vez de somar: `'5' + 3` vira `'53'`.

<details>
<summary>As ferramentas que mais aparecem</summary>

| Uso                   | O que faz                          | Com `'maria'`        |
| --------------------- | ---------------------------------- | -------------------- |
| `texto.length`        | quantidade de letras               | `5`                  |
| `texto.toUpperCase()` | tudo em MAIÚSCULAS                 | `'MARIA'`            |
| `texto.toLowerCase()` | tudo em minúsculas                 | `'maria'`            |
| `texto.trim()`        | tira os espaços das pontas         | `'maria'`            |
| `texto.includes('ar')`| `true` se o texto contém `'ar'`    | `true`               |
| `texto.split('')`     | quebra o texto em pedaços          | `['m','a','r','i','a']` |

</details>

{{pratique}}
