## 0021 · Laço do...while

O professor pede a nota, você digita 15 e ele diz: "de 0 a 10, por favor". Ele
pede pelo menos uma vez. Pedir de novo, só se precisar.

O `do...while` é o `while` de cabeça para baixo: primeiro **faz**, depois
**pergunta**. Por isso o bloco roda pelo menos uma vez.

Ele é ótimo para conferir o que a pessoa digita. Afinal, você só sabe se a
resposta está certa depois de pedir.

Vamos ver na prática. Você digita 15. O programa confere: 15 está fora de 0 a
10? Sim, então pede de novo. Agora você digita 8. Está fora? Não. O laço acaba
e a nota fica guardada:

{{ideia}}

```ts
import { input } from '#core/input.ts'

let nota // a caixa nasce vazia: o do pede a nota antes de conferir

do {
  nota = Number(input('Nota (0 a 10): ')) // você digita 15, depois 8
} while (nota < 0 || nota > 10)

console.log(`Nota registrada: ${nota}`) // Nota registrada: 8
```

Repara no fluxograma: o losango vem **depois** da leitura. No `while`, a
pergunta vinha antes:

{{fluxograma}}

> [!NOTE]
> **Pergunta para a turma:** e se você digitar exatamente `10`? O programa
> aceita ou pede de novo? Rode e confira. (Dica: leia a condição com calma,
> `nota > 10`.)

{{pratique}}
