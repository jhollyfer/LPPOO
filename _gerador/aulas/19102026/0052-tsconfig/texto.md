## 0052 · tsconfig: strict e as regras do projeto

Pensa no regulamento da escola. Ele diz o que pode e o que não pode. O
coordenador não inventa regra: ele aplica o regulamento.

No projeto, o regulamento é o arquivo **`tsconfig.json`**, na raiz. Ele diz
ao TypeScript **o quanto ele deve ser exigente**.

O nosso liga as regras mais rígidas:

| Opção                         | O que ela cobra                                         |
| ----------------------------- | ------------------------------------------------------- |
| `strict`                      | o pacote principal: `null`/`undefined` tratados, nada de `any` escondido |
| `noUncheckedIndexedAccess`    | `lista[i]` pode ser `undefined` (aula 02)               |
| `noUnusedLocals`              | variável criada e nunca usada                           |
| `noUnusedParameters`          | parâmetro que a função não usa                          |
| `noImplicitReturns`           | função que esquece o `return` em algum caminho          |
| `noFallthroughCasesInSwitch`  | `case` sem `break` que cai no próximo                   |

Agora guarda isso: o **`tsx` só roda**. Ele **não confere tipos**.

Quem confere é o **`tsc`**, o compilador. Rode `pnpm -C ~/LPPOO tsc` (de
qualquer pasta) e ele lista os erros do projeto inteiro, com o arquivo e a
linha:

{{ideia}}

```ts
const notas = [8, 10, 6]

const primeira = notas[0] // number | undefined, por causa do noUncheckedIndexedAccess
if (primeira !== undefined) {
  console.log(primeira.toFixed(1)) // 8.0
}

function situacao(nota: number): string {
  if (nota >= 7) return 'aprovado'
  return 'recuperação' // sem esta linha: erro do noImplicitReturns
}

console.log(situacao(6)) // recuperação
```

O ciclo do dia a dia é este:

{{fluxograma}}

> [!IMPORTANT]
> O `tsc` confere **todos** os arquivos. Aquele exercício pela metade em outra
> pasta também aparece na lista. Então leia o caminho do arquivo no começo de
> cada erro.

> [!TIP]
> **Poder do TypeScript:** esqueceu uma variável sem usar? Vira aviso, e o
> código fica limpo:
>
> ```ts
> const naoUsada = 1
> // erro: 'naoUsada' is declared but its value is never read.
> ```

> [!NOTE]
> **Pergunta para a turma:** apague a linha `return 'recuperação'` e rode com
> o `tsx`. O que aparece? E o `tsc`, o que ele diz? (Dica: só um dos dois
> confere tipos.)

{{pratique}}
