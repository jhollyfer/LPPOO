## 0016 · Condicional composta (if / else)

No assunto anterior, o `if` sozinho só fazia uma coisa a mais. Agora ele ganha
um plano B: o `else` (em português, "senão").

Funciona assim: **se** a condição for verdadeira, roda o bloco do `if`.
**Senão**, roda o bloco do `else`.

Guarda isso: um dos dois sempre roda. E só um.

Vamos ver na prática. O recreio para Tabatinga sai do porto às 6h. Você chegou
às 5h. `5 <= 6` dá `true`, então o caminho é o do `if`: embarcou!

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

Repara no fluxograma: os dois caminhos saem do mesmo losango e se encontram de
novo no fim. O programa passa por um deles, nunca pelos dois:

{{fluxograma}}

> [!NOTE]
> **Pergunta para a turma:** e se você chegar às 6h em ponto? Embarca ou perde
> o barco? E às 7h? Rode e confira. (Dica: olhe o sinal `<=`.)

{{pratique}}
