# Aula 03 · 19/10 · TypeScript

Até aqui você escreveu TypeScript pensando na lógica. Hoje o assunto são os
**tipos**.

Tipo é o jeito de dizer ao TypeScript que formato cada dado tem. Com isso, ele
avisa o erro antes de o programa rodar.

## O que você vai aprender

- como o TypeScript funciona e por que ele foi escolhido
- quais valores contam como verdadeiro ou falso, e os atalhos `??` e `?.`
- descrever objetos com `type` e `interface`
- dizer "isto ou aquilo" com uniões e "isto e aquilo" com interseções
- escrever funções que servem para qualquer tipo, com generics
- criar variações de um tipo com os tipos utilitários
- ler as regras do `tsconfig.json` e conferir o projeto com o `tsc`

Quem entende os tipos lê o erro do editor e já sabe o que corrigir. E vai
precisar disso: em POO as classes seguem interfaces, e no frontend os
componentes recebem dados tipados.

## Como a gente vai estudar cada assunto

1. Primeiro, o texto e o **diagrama da ideia**: é o exemplo desenhado.
2. Depois, o código. Repara que é o mesmo exemplo, com os mesmos valores.
3. Aí você segue o **fluxograma** com o dedo: é o caminho que o programa faz.
4. Hora de rodar os exemplos da pasta. Mude alguma coisa e rode de novo.
5. Por fim, os exercícios. Travou? As dicas estão no próprio arquivo.

No meio de cada assunto tem uma **Pergunta para a turma**. Tente responder
antes de rodar o código.

## As cores e as formas

Caixa azul é dado entrando ou saindo, roxa é o
programa fazendo alguma coisa, amarela é pergunta. Os tipos de objeto aparecem
como uma **ficha**, com o nome da propriedade à esquerda e o tipo à direita.

<p align="center"><img src="legenda.svg" alt="Legenda: formas e cores do fluxograma" width="916"></p>

## Antes de começar

> [!IMPORTANT]
> O `tsx` **roda** o arquivo, mas **não confere os tipos**. Quem confere é o
> editor (o sublinhado vermelho) e o comando `pnpm -C ~/LPPOO tsc`. Rode o
> `tsc` sempre que terminar um exercício. O assunto 0053 explica.

> [!TIP]
> Os quadros **Poder do TypeScript** mostram o erro que o TypeScript dá quando
> alguém usa o tipo errado. Copie o código do quadro para um exercício, veja o
> erro aparecer no editor e leia a mensagem com calma: ela quase sempre diz o
> que está faltando.

## Os assuntos

Leia na ordem: cada um usa o anterior.

{{indice}}

---

{{assuntos}}

---

## Prática em sala

Os enunciados estão em [`pratica/`](pratica/):

| Arquivo | O que fazer |
| --- | --- |
| [`modelar-cantina.ts`](pratica/modelar-cantina.ts) | modelar a cantina só com tipos: união, interface, opcional, readonly |
| [`turnos.ts`](pratica/turnos.ts) | turnos com união de literais e `Record` |
| [`pagamento.ts`](pratica/pagamento.ts) | pagamento com união discriminada e `never` |
| [`desafio-funcao-generica.ts`](pratica/desafio-funcao-generica.ts) | desafio: `agrupar<T>` devolvendo um `Record` |

```bash
tsx ~/LPPOO/19102026/pratica/modelar-cantina.ts
tsx ~/LPPOO/19102026/pratica/turnos.ts
tsx ~/LPPOO/19102026/pratica/pagamento.ts
tsx ~/LPPOO/19102026/pratica/desafio-funcao-generica.ts
```

## Exercícios que valem pontos

Ficam na pasta [`aula-03-typescript/`](aula-03-typescript/), aqui dentro da
aula. Cada questão tem um exemplo resolvido parecido, para consultar. Além de
rodar, a questão precisa **passar no `tsc` sem erros**.

| Questão | Conceito | Exemplo resolvido |
| --- | --- | --- |
| `questao-18.ts` | type e interface | `exemplo-18.ts` |
| `questao-19.ts` | propriedade opcional e readonly | `exemplo-19.ts` |
| `questao-20.ts` | união, literais e narrowing | `exemplo-20.ts` |
| `questao-21.ts` | união discriminada | `exemplo-21.ts` |
| `questao-22.ts` | interseção, tuplas e as const | `exemplo-22.ts` |
| `questao-23.ts` | generics | `exemplo-23.ts` |
| `questao-24.ts` | tipos utilitários | `exemplo-24.ts` |
| `questao-25.ts` | type guards e satisfies | `exemplo-25.ts` |

```bash
# exemplos resolvidos
tsx ~/LPPOO/19102026/aula-03-typescript/exemplo-18.ts
tsx ~/LPPOO/19102026/aula-03-typescript/exemplo-19.ts
tsx ~/LPPOO/19102026/aula-03-typescript/exemplo-20.ts
tsx ~/LPPOO/19102026/aula-03-typescript/exemplo-21.ts
tsx ~/LPPOO/19102026/aula-03-typescript/exemplo-22.ts
tsx ~/LPPOO/19102026/aula-03-typescript/exemplo-23.ts
tsx ~/LPPOO/19102026/aula-03-typescript/exemplo-24.ts
tsx ~/LPPOO/19102026/aula-03-typescript/exemplo-25.ts

# questões: a resposta vai dentro do próprio arquivo
tsx ~/LPPOO/19102026/aula-03-typescript/questao-18.ts
tsx ~/LPPOO/19102026/aula-03-typescript/questao-19.ts
tsx ~/LPPOO/19102026/aula-03-typescript/questao-20.ts
tsx ~/LPPOO/19102026/aula-03-typescript/questao-21.ts
tsx ~/LPPOO/19102026/aula-03-typescript/questao-22.ts
tsx ~/LPPOO/19102026/aula-03-typescript/questao-23.ts
tsx ~/LPPOO/19102026/aula-03-typescript/questao-24.ts
tsx ~/LPPOO/19102026/aula-03-typescript/questao-25.ts

# conferir os tipos do projeto inteiro
pnpm -C ~/LPPOO tsc
```

## Para ler mais

- MICROSOFT. *TypeScript Handbook*. Disponível em: <https://www.typescriptlang.org/docs/handbook/intro.html>.
- MICROSOFT. *TypeScript Handbook*: Everyday Types. Disponível em: <https://www.typescriptlang.org/docs/handbook/2/everyday-types.html>.
- MDN WEB DOCS. *Falsy*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Glossary/Falsy>.
- MDN WEB DOCS. *Operador de coalescência nula (??)*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing>.
- MICROSOFT. *TypeScript Handbook*: Narrowing. Disponível em: <https://www.typescriptlang.org/docs/handbook/2/narrowing.html>.
- MICROSOFT. *TypeScript Handbook*: Object Types. Disponível em: <https://www.typescriptlang.org/docs/handbook/2/objects.html>.
- MICROSOFT. *TypeScript Handbook*: Generics. Disponível em: <https://www.typescriptlang.org/docs/handbook/2/generics.html>.
- MICROSOFT. *Utility Types*. Disponível em: <https://www.typescriptlang.org/docs/handbook/utility-types.html>.
- MICROSOFT. *TSConfig Reference*. Disponível em: <https://www.typescriptlang.org/tsconfig/>.
- BASARAT, A. S. *TypeScript Deep Dive*. Disponível em: <https://basarat.gitbook.io/typescript/>.
