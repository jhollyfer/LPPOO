## 0013 · Comparação de igualdade

> Você digita a senha do Wi-Fi da escola e o celular diz "senha incorreta".
> Alguém comparou o que você digitou com a senha certa.

Para perguntar se dois valores são iguais, o TypeScript usa `===`. Para
perguntar se são diferentes, `!==`. A resposta, de novo, é `true` ou
`false`.

A senha do Wi-Fi é `'cetam2026'`. Você digitou certinho, então
`digitada === SENHA` dá `true`:

{{ideia}}

```ts
import { input } from '#core/input.ts'

const SENHA = 'cetam2026'
const digitada = input('Senha do Wi-Fi: ') // você digita: cetam2026
const acertou = digitada === SENHA // true
console.log(acertou) // true
```

{{fluxograma}}

> [!IMPORTANT]
> Por que três sinais? Existe o `==`, que converte os tipos antes de comparar:
> `5 == '5'` dá `true` e o erro passa batido. O `===` compara o valor e o
> tipo, então `5 === '5'` dá `false`. Aqui é sempre `===` e `!==`.

> [!TIP]
> `=` guarda um valor ("a senha agora é essa"). `===` pergunta ("a senha é
> essa?").

{{pratique}}
