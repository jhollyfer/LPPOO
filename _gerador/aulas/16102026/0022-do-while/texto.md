## 0022 · Laço do...while

> O professor pede a nota, você digita 15 e ele diz: "de 0 a 10, por favor".
> Pedir pelo menos uma vez é garantido. Repetir, só se precisar.

O `do...while` é o `while` de cabeça para baixo: primeiro **faz**, depois
**pergunta**. Por isso o bloco roda pelo menos uma vez. Ele é perfeito para
validar o que a pessoa digita: você só sabe se a resposta está certa depois de
pedir.

Você digita 15. O programa confere: 15 está fora de 0 a 10? Sim, então pede de
novo. Agora você digita 8. Está fora? Não. O laço acaba e a nota fica guardada:

{{ideia}}

```ts
import { input } from '#core/input.ts'

let nota: number

do {
  nota = Number(input('Nota (0 a 10): ')) // você digita 15, depois 8
} while (nota < 0 || nota > 10)

console.log(`Nota registrada: ${nota}`) // Nota registrada: 8
```

No fluxograma, o losango vem **depois** da leitura. Compare com o `while`, em
que a pergunta vem antes:

{{fluxograma}}

{{pratique}}
