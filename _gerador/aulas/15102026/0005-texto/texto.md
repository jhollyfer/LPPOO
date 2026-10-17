## 0005 · Texto (string)

Seu nome, a senha do Wi-Fi, a legenda daquela foto. Para o computador, tudo
isso é a mesma coisa: texto.

No TypeScript, texto se chama **string**. É uma sequência de letras entre
aspas.

E toda string já vem com ferramentas prontas, como um canivete. É só puxar a
que você precisa.

Vamos ver na prática. A Maria digitou o nome com uns espaços sobrando:
`'  maria  '`. O `.trim()` tira os espaços das pontas. O `.toUpperCase()` deixa
tudo em maiúsculas:

{{ideia}}

```ts
import { input } from '#core/input.ts'

const nome = input('Seu nome: ') // a Maria digita: '  maria  '
const limpo = nome.trim() // 'maria'
console.log(limpo.toUpperCase()) // MARIA
```

Repara: cada ferramenta devolve um texto novo. A variável `nome` continua com
os espaços. Quem está limpo é o `limpo`.

No fluxograma, usar uma ferramenta é o programa fazendo algo. Então vira passo
roxo:

{{fluxograma}}

> [!WARNING]
> Cuidado: com texto, o `+` cola em vez de somar. `'5' + 3` vira `'53'`.

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

> [!NOTE]
> **Pergunta para a turma:** quanto dá `nome.length`? E `limpo.length`?
> Mostre os dois com `console.log` e compare. (Dica: espaço também conta.)

{{pratique}}
