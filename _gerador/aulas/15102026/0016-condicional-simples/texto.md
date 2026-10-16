## 0016 · Condicional simples (if)

> Você só leva o guarda-chuva se o céu estiver feio. Sol? Sai de mãos vazias.
> Seu programa também pode pensar assim.

Até agora todo programa rodava linha por linha, do começo ao fim, sem pular
nada. Com o `if` (se), ele passa a **decidir**: o bloco entre `{ }` só roda se a
condição for verdadeira. Se for falsa, o programa pula o bloco e segue a vida.

O programa pergunta "Vai chover?". Você responde `sim`, a condição dá `true` e
aparece o aviso do guarda-chuva. Depois, chovendo ou não, ele dá bom dia:

{{ideia}}

```ts
import { input } from '#core/input.ts'

const resposta = input('Vai chover? (sim/nao) ') // você digita: sim

if (resposta === 'sim') {
  console.log('Leve o guarda-chuva!') // só roda no Sim
}

console.log('Bom dia!') // roda sempre
```

No fluxograma, o `if` é o losango. Só o caminho do **Sim** tem uma tarefa a
mais; o **Não** segue reto até o "Bom dia!":

{{fluxograma}}

{{pratique}}
