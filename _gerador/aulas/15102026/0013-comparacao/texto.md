## 0013 · Comparação de igualdade

Você digita a senha do Wi-Fi da escola e o celular diz "senha incorreta". Por
trás disso, alguém comparou o que você digitou com a senha certa.

Para perguntar se dois valores são iguais, o TypeScript usa `===`. Para
perguntar se são diferentes, usa `!==`.

A resposta, de novo, é `true` ou `false`.

Olha só o exemplo. A senha do Wi-Fi é `'cetam2026'`. Você digitou certinho,
então `digitada === SENHA` dá `true`:

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
> Por que três sinais? Existe também o `==`, que converte os tipos antes de
> comparar. Com ele, `5 == '5'` dá `true` e o erro passa batido.
> O `===` compara o valor e o tipo, então `5 === '5'` dá `false`.
> Guarda isso: aqui é sempre `===` e `!==`.

> [!TIP]
> `=` guarda um valor ("a senha agora é essa"). `===` pergunta ("a senha é
> essa?").

> [!NOTE]
> **Pergunta para a turma:** digite a senha certinha, mas com um espaço no fim.
> O que aparece? Rode e descubra. (Dica: espaço também é letra para o `===`.)

{{pratique}}
