# Aula 03 · 19/10 · TypeScript

Nas aulas 01 e 02 o TypeScript estava lá, mas a gente olhou para a lógica. Hoje
ele é o assunto. Você vai ver **como ele funciona**, **por que escolhemos ele**
e as ferramentas que ele dá para descrever os dados: tipos de objeto,
interfaces, uniões, generics, tipos utilitários e as regras do `tsconfig.json`.

Tudo aqui prepara as próximas aulas. Em POO, as classes seguem interfaces; no
frontend, os componentes recebem dados com tipos. Quem entende os tipos lê o
erro do editor e já sabe o que corrigir.

Mesmo formato das aulas anteriores: cada assunto gira em torno de um exemplo
só, contado no texto, no **diagrama da ideia**, no código e no **fluxograma**.
Nesta aula os diagramas mostram mais **formatos** (as fichas com as
propriedades de cada tipo) e menos contas.

## As cores e as formas

As mesmas das aulas 01 e 02. Caixa azul é dado entrando ou saindo, roxa é o
programa fazendo alguma coisa, amarela é pergunta. Os tipos de objeto aparecem
como uma **ficha**, com o nome da propriedade à esquerda e o tipo à direita.

<p align="center"><img src="legenda.svg" alt="Legenda: formas e cores do fluxograma" width="916"></p>

## Antes de começar

> [!IMPORTANT]
> O `tsx` **roda** o arquivo, mas **não confere os tipos**. Quem confere é o
> editor (o sublinhado vermelho) e o comando `pnpm -C ~/LPPOO tsc`. Nesta aula,
> rode o `tsc` sempre que terminar um exercício. O assunto 0053 explica.

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
- MICROSOFT. *TypeScript Handbook*: Narrowing. Disponível em: <https://www.typescriptlang.org/docs/handbook/2/narrowing.html>.
- MICROSOFT. *TypeScript Handbook*: Object Types. Disponível em: <https://www.typescriptlang.org/docs/handbook/2/objects.html>.
- MICROSOFT. *TypeScript Handbook*: Generics. Disponível em: <https://www.typescriptlang.org/docs/handbook/2/generics.html>.
- MICROSOFT. *Utility Types*. Disponível em: <https://www.typescriptlang.org/docs/handbook/utility-types.html>.
- MICROSOFT. *TSConfig Reference*. Disponível em: <https://www.typescriptlang.org/tsconfig/>.
- BASARAT, A. S. *TypeScript Deep Dive*. Disponível em: <https://basarat.gitbook.io/typescript/>.
