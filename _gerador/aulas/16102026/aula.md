# Aula 02 · 16/10 · Revisão de lógica II

Na aula 01 cada linha rodava uma vez e cada variável guardava um valor. Hoje
isso muda: os **laços** repetem, os **arrays** guardam vários valores numa
etiqueta só e as **funções** dão nome a um pedaço de código para usar de novo.
É a base de tudo que vem depois, em POO e no frontend.

O foco continua sendo **lógica de programação**, escrita em TypeScript.

Mesmo formato da aula 01: cada assunto gira em torno de um exemplo só, contado
no texto, no **diagrama da ideia**, no código e no **fluxograma**. Nos laços, o
fluxograma ganha uma seta que **volta**.

## As cores e as formas

As mesmas da aula 01. Caixa azul é dado entrando ou saindo, roxa é o programa
fazendo alguma coisa, amarela é pergunta. Os arrays aparecem como uma fileira
de gavetas com o índice embaixo de cada uma, começando do 0.

<p align="center"><img src="legenda.svg" alt="Legenda: formas e cores do fluxograma" width="916"></p>

## Antes de começar

> [!IMPORTANT]
> Este projeto liga uma opção do TypeScript que faz `notas[i]` poder ser
> `undefined`, porque a posição `i` pode não existir. Na hora de fazer conta com
> um item do array, o editor reclama. Por isso, para percorrer arrays, prefira o
> `for...of` (seção 0026). A explicação completa fica para a
> [aula 03](../19102026/README.md).

## Os assuntos

Leia na ordem. Em cada um, depois de ler, abra a pasta e rode os exemplos.

{{indice}}

---

{{assuntos}}

---

## Prática em sala

Os enunciados estão em [`pratica/`](pratica/):

| Arquivo                                                  | O que fazer                                               |
| -------------------------------------------------------- | --------------------------------------------------------- |
| [`tabuada.ts`](pratica/tabuada.ts)                       | tabuada com `for`, e depois um `for` dentro do outro      |
| [`lista-de-compras.ts`](pratica/lista-de-compras.ts)     | adicionar, remover, buscar e listar com métodos de array  |
| [`total-com-desconto.ts`](pratica/total-com-desconto.ts) | função que soma preços com desconto opcional             |
| [`desafio-produtos.ts`](pratica/desafio-produtos.ts)     | desafio: `filter`, `map` e `reduce` encadeados            |

```bash
tsx ~/LPPOO/16102026/pratica/tabuada.ts
tsx ~/LPPOO/16102026/pratica/lista-de-compras.ts
tsx ~/LPPOO/16102026/pratica/total-com-desconto.ts
tsx ~/LPPOO/16102026/pratica/desafio-produtos.ts
```

## Exercícios que valem pontos

Ficam na pasta [`aula-02-logica-2/`](aula-02-logica-2/), aqui dentro da aula.
Cada questão tem um exemplo resolvido parecido, para consultar.

| Questão          | Conceito                                                  | Exemplo resolvido |
| ---------------- | --------------------------------------------------------- | ----------------- |
| `questao-10.ts`  | laço `while`                                              | `exemplo-10.ts`   |
| `questao-11.ts`  | laço `do...while`                                         | `exemplo-11.ts`   |
| `questao-12.ts`  | laço `for`                                                | `exemplo-12.ts`   |
| `questao-13.ts`  | arrays tipados e `for...of`                               | `exemplo-13.ts`   |
| `questao-14.ts`  | métodos de array para inserir, remover e buscar           | `exemplo-14.ts`   |
| `questao-15.ts`  | `map`, `filter`, `reduce`, `sort` e encadeamento          | `exemplo-15.ts`   |
| `questao-16.ts`  | funções tipadas, parâmetro opcional, valor padrão e `void`| `exemplo-16.ts`   |
| `questao-17.ts`  | arrow functions, callbacks e tipo de função               | `exemplo-17.ts`   |

```bash
# exemplos resolvidos
tsx ~/LPPOO/16102026/aula-02-logica-2/exemplo-10.ts
tsx ~/LPPOO/16102026/aula-02-logica-2/exemplo-11.ts
tsx ~/LPPOO/16102026/aula-02-logica-2/exemplo-12.ts
tsx ~/LPPOO/16102026/aula-02-logica-2/exemplo-13.ts
tsx ~/LPPOO/16102026/aula-02-logica-2/exemplo-14.ts
tsx ~/LPPOO/16102026/aula-02-logica-2/exemplo-15.ts
tsx ~/LPPOO/16102026/aula-02-logica-2/exemplo-16.ts
tsx ~/LPPOO/16102026/aula-02-logica-2/exemplo-17.ts

# questões: a resposta vai dentro do próprio arquivo
tsx ~/LPPOO/16102026/aula-02-logica-2/questao-10.ts
tsx ~/LPPOO/16102026/aula-02-logica-2/questao-11.ts
tsx ~/LPPOO/16102026/aula-02-logica-2/questao-12.ts
tsx ~/LPPOO/16102026/aula-02-logica-2/questao-13.ts
tsx ~/LPPOO/16102026/aula-02-logica-2/questao-14.ts
tsx ~/LPPOO/16102026/aula-02-logica-2/questao-15.ts
tsx ~/LPPOO/16102026/aula-02-logica-2/questao-16.ts
tsx ~/LPPOO/16102026/aula-02-logica-2/questao-17.ts
```

## Para ler mais

- MDN WEB DOCS. *Laços e iterações*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration>.
- MDN WEB DOCS. *Array*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array>.
- MDN WEB DOCS. *Funções*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions>.
- MDN WEB DOCS. *Arrow functions*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions>.
- MICROSOFT. *TypeScript Handbook*: More on Functions. Disponível em: <https://www.typescriptlang.org/docs/handbook/2/functions.html>.
- MICROSOFT. *TypeScript Handbook*: Everyday Types (Arrays). Disponível em: <https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays>.
- MICROSOFT. *TSConfig*: noUncheckedIndexedAccess. Disponível em: <https://www.typescriptlang.org/tsconfig/#noUncheckedIndexedAccess>.
- HAVERBEKE, M. *Eloquent JavaScript*. 3. ed. San Francisco: No Starch Press, 2018. Cap. 2 a 5. Disponível em: <https://eloquentjavascript.net>.
