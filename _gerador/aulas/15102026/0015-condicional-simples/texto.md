## 0015 · Condicional simples (if)

Até agora, nossos programas rodaram de cima para baixo, linha por linha, sem
pular nada. Hoje isso muda: o programa vai **decidir**.

Quem decide é o `if` (em português, "se"). Funciona assim: **se** a condição
for verdadeira, o bloco entre `{ }` roda. Se for falsa, o programa pula o
bloco e segue a vida.

Vamos ver na prática. O programa pergunta "Vai chover?". Você responde `sim`,
a condição dá `true`, e aparece o aviso do guarda-chuva. Depois, chovendo ou
não, ele dá bom dia:

{{ideia}}

```ts
import { input } from '#core/input.ts'

const resposta = input('Vai chover? (sim/nao) ') // você digita: sim

if (resposta === 'sim') {
  console.log('Leve o guarda-chuva!') // só roda no Sim
}

console.log('Bom dia!') // roda sempre
```

No fluxograma, o `if` vira o losango. Olha só: o caminho do Sim tem uma tarefa
a mais, e o Não vai direto para o "Bom dia!".

{{fluxograma}}

> [!NOTE]
> **Pergunta para a turma:** e se você digitar `Sim`, com S maiúsculo? Aparece
> o aviso? Rode e descubra. (Dica: o `===` compara letra por letra.)

{{pratique}}
