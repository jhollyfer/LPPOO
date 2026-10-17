# Aula 01 · 15/10 · Revisão de lógica I

Olha só: quase todo programa faz as mesmas cinco coisas. Lê o que a pessoa
digita, guarda, faz conta, compara e decide.

Hoje você vai praticar cada uma delas, escrevendo em TypeScript.

## O que você vai aprender

- ler dados do teclado e mostrar o resultado na tela
- guardar valores em variáveis e constantes
- trabalhar com texto, número e verdadeiro ou falso
- fazer contas e comparar valores
- escolher o caminho do programa com `if`, ternário e `switch`

## Como a gente vai estudar cada assunto

1. Primeiro, o texto e o **diagrama da ideia**: é o exemplo desenhado.
2. Depois, o código. Repara que é o mesmo exemplo, com os mesmos valores.
3. Aí você segue o **fluxograma** com o dedo: é o caminho que o programa faz.
4. Hora de rodar os exemplos da pasta. Mude alguma coisa e rode de novo.
5. Por fim, os exercícios. Travou? As dicas estão no próprio arquivo.

No meio de cada assunto tem uma **Pergunta para a turma**. Tente responder
antes de rodar o código.

Guarda isso: cada assunto conta **um exemplo só**. Se a Bia tem média 5 no
texto, ela tem média 5 no desenho, no código e no fluxograma.

## As cores e as formas

Os dois desenhos usam as mesmas cores. Caixa azul é dado entrando ou saindo.
Roxa é o programa fazendo alguma coisa. Amarela é pergunta.

<p align="center"><img src="legenda.svg" alt="Legenda: formas e cores do fluxograma" width="916"></p>

No diagrama da ideia, o caminho que o exemplo segue aparece em verde, e os
outros ficam cinza. Erro é vermelho. No fluxograma vale a mesma regra: o
caminho do exemplo fica colorido e o resto fica apagado.

## Os assuntos

São 19 assuntos curtos, e cada um usa o anterior. Leia na ordem.

{{indice}}

---

{{assuntos}}

## Prática em sala

Os enunciados ficam em [`pratica/`](pratica/). Cada um junta vários assuntos da
aula num programa só.

| Arquivo                                                    | O que fazer                                          |
| ---------------------------------------------------------- | ---------------------------------------------------- |
| [`ficha-de-cadastro.ts`](pratica/ficha-de-cadastro.ts)     | ler dados, converter e mostrar com template string   |
| [`boletim.ts`](pratica/boletim.ts)                         | média com duas casas e situação com `else if`        |
| [`cantina.ts`](pratica/cantina.ts)                         | cardápio com `switch` e total em reais               |
| [`desafio-ingresso.ts`](pratica/desafio-ingresso.ts)       | desafio: `&&`, `\|\|`, ternário e valor padrão        |

```bash
tsx ~/LPPOO/15102026/pratica/ficha-de-cadastro.ts
tsx ~/LPPOO/15102026/pratica/boletim.ts
tsx ~/LPPOO/15102026/pratica/cantina.ts
tsx ~/LPPOO/15102026/pratica/desafio-ingresso.ts
```

## Exercícios que valem pontos

Ficam na pasta [`aula-01-logica-1/`](aula-01-logica-1/), aqui dentro da aula.
Cada questão tem um exemplo resolvido parecido, para consultar.

| Questão          | Conceito                                                        | Exemplo resolvido |
| ---------------- | --------------------------------------------------------------- | ----------------- |
| `questao-01.ts`  | entrada com `input` e saída com `console.log` e template string | `exemplo-01.ts`   |
| `questao-02.ts`  | variáveis (`let`) e constantes (`const`)                        | `exemplo-02.ts`   |
| `questao-03.ts`  | texto: `length`, `trim`, `toUpperCase` e `includes`             | `exemplo-03.ts`   |
| `questao-04.ts`  | número, booleano, `typeof`, `Number` e `toFixed`                | `exemplo-04.ts`   |
| `questao-05.ts`  | operadores de atribuição e aritméticos, com `%`                 | `exemplo-05.ts`   |
| `questao-06.ts`  | objeto `Math`: `ceil`, `floor` e `random`                       | `exemplo-06.ts`   |
| `questao-07.ts`  | comparação, `===` e operadores lógicos `&&` e `\|\|`            | `exemplo-07.ts`   |
| `questao-08.ts`  | condicionais `if`, `else` e `else if`                           | `exemplo-08.ts`   |
| `questao-09.ts`  | operador ternário e `switch`                                    | `exemplo-09.ts`   |

```bash
# exemplos resolvidos
tsx ~/LPPOO/15102026/aula-01-logica-1/exemplo-01.ts
tsx ~/LPPOO/15102026/aula-01-logica-1/exemplo-02.ts
tsx ~/LPPOO/15102026/aula-01-logica-1/exemplo-03.ts
tsx ~/LPPOO/15102026/aula-01-logica-1/exemplo-04.ts
tsx ~/LPPOO/15102026/aula-01-logica-1/exemplo-05.ts
tsx ~/LPPOO/15102026/aula-01-logica-1/exemplo-06.ts
tsx ~/LPPOO/15102026/aula-01-logica-1/exemplo-07.ts
tsx ~/LPPOO/15102026/aula-01-logica-1/exemplo-08.ts
tsx ~/LPPOO/15102026/aula-01-logica-1/exemplo-09.ts

# questões: a resposta vai dentro do próprio arquivo
tsx ~/LPPOO/15102026/aula-01-logica-1/questao-01.ts
tsx ~/LPPOO/15102026/aula-01-logica-1/questao-02.ts
tsx ~/LPPOO/15102026/aula-01-logica-1/questao-03.ts
tsx ~/LPPOO/15102026/aula-01-logica-1/questao-04.ts
tsx ~/LPPOO/15102026/aula-01-logica-1/questao-05.ts
tsx ~/LPPOO/15102026/aula-01-logica-1/questao-06.ts
tsx ~/LPPOO/15102026/aula-01-logica-1/questao-07.ts
tsx ~/LPPOO/15102026/aula-01-logica-1/questao-08.ts
tsx ~/LPPOO/15102026/aula-01-logica-1/questao-09.ts
```

---

## Para ler mais

- FORBELLONE, A. L. V.; EBERSPÄCHER, H. F. *Lógica de programação: a construção de algoritmos e estruturas de dados*. 3. ed. São Paulo: Pearson Prentice Hall, 2005.
- ISO 5807:1985. *Information processing: documentation symbols and conventions for data, program and system flowcharts, program network charts and system resources charts*. Genebra: ISO, 1985.
- MANZANO, J. A. N. G.; OLIVEIRA, J. F. *Algoritmos: lógica para desenvolvimento de programação de computadores*. São Paulo: Érica.
- HAVERBEKE, M. *Eloquent JavaScript*. 3. ed. San Francisco: No Starch Press, 2018. Disponível em: <https://eloquentjavascript.net>.
- MDN WEB DOCS. *Template strings*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals>.
- MICROSOFT. *TypeScript Handbook*: Everyday Types. Disponível em: <https://www.typescriptlang.org/docs/handbook/2/everyday-types.html>.
- MDN WEB DOCS. *let*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/let>.
- MDN WEB DOCS. *const*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/const>.
- GOOGLE. *Google JavaScript Style Guide*. Disponível em: <https://google.github.io/styleguide/jsguide.html>.
- ECMA INTERNATIONAL. *ECMA-262: ECMAScript language specification*. Disponível em: <https://tc39.es/ecma262/>.
- MDN WEB DOCS. *String*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String>.
- GOLDBERG, D. What every computer scientist should know about floating-point arithmetic. *ACM Computing Surveys*, v. 23, n. 1, p. 5-48, 1991.
- IEEE. *IEEE standard for floating-point arithmetic*: IEEE 754-2019. New York: IEEE, 2019.
- MDN WEB DOCS. *Number*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number>.
- BOOLE, G. *An investigation of the laws of thought*. London: Walton and Maberly, 1854.
- HOARE, T. *Null references: the billion dollar mistake*. Palestra na QCon London, 2009.
- MICROSOFT. *TypeScript Handbook*: The Basics. Disponível em: <https://www.typescriptlang.org/docs/handbook/2/basic-types.html>.
- MDN WEB DOCS. *parseInt()*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt>.
- MDN WEB DOCS. *Expressões e operadores*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators>.
- ASCENCIO, A. F. G.; CAMPOS, E. A. V. *Fundamentos da programação de computadores: algoritmos, Pascal, C/C++ e Java*. 3. ed. São Paulo: Pearson, 2012.
- MDN WEB DOCS. *Precedência de operadores*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operator_precedence>.
- KNUTH, D. E. *The art of computer programming*, v. 2: Seminumerical algorithms. 3. ed. Reading: Addison-Wesley, 1997.
- MDN WEB DOCS. *Math*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math>.
- MDN WEB DOCS. *Expressões e operadores: operadores de comparação*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators>.
- CROCKFORD, D. *JavaScript: the good parts*. Sebastopol: O'Reilly, 2008.
- MDN WEB DOCS. *Comparações de igualdade e uniformidade*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Equality_comparisons_and_sameness>.
- MDN WEB DOCS. *Operador AND lógico (&&)*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Logical_AND>.
- MICROSOFT. *TypeScript Handbook*: Narrowing. Disponível em: <https://www.typescriptlang.org/docs/handbook/2/narrowing.html>.
- BÖHM, C.; JACOPINI, G. Flow diagrams, Turing machines and languages with only two formation rules. *Communications of the ACM*, v. 9, n. 5, p. 366-371, 1966.
- DIJKSTRA, E. W. Go to statement considered harmful. *Communications of the ACM*, v. 11, n. 3, p. 147-148, 1968.
- MDN WEB DOCS. *if...else*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else>.
- KERNIGHAN, B. W.; RITCHIE, D. M. *The C programming language*. 2. ed. Englewood Cliffs: Prentice Hall, 1988.
- MDN WEB DOCS. *Operador condicional (ternário)*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_operator>.
- MDN WEB DOCS. *switch*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch>.
- MICROSOFT. *TypeScript Handbook*: TSConfig noFallthroughCasesInSwitch. Disponível em: <https://www.typescriptlang.org/tsconfig#noFallthroughCasesInSwitch>.
