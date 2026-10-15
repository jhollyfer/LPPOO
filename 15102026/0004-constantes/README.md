# 0004 · Constantes

> O nome da escola não muda no meio da aula. A média para passar também não.
> Como avisar o programa de que um valor é fixo?

## O conceito

Forbellone e Eberspächer (2005) separam os dados de um algoritmo em variáveis,
que mudam durante a execução, e constantes, que ficam com o mesmo valor do
começo ao fim. No TypeScript a constante é criada com `const`: depois do
primeiro valor, qualquer tentativa de trocar dá erro antes mesmo de rodar (MDN).
Para valores fixos do programa, como a média de aprovação, o costume é escrever
o nome em letras maiúsculas com sublinhado. O guia de estilo de JavaScript do
Google chama esse formato de `CONSTANT_CASE`.

Para ler mais:

- FORBELLONE, A. L. V.; EBERSPÄCHER, H. F. *Lógica de programação: a construção de algoritmos e estruturas de dados*. 3. ed. São Paulo: Pearson Prentice Hall, 2005.
- MDN WEB DOCS. *const*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/const>.
- GOOGLE. *Google JavaScript Style Guide*. Disponível em: <https://google.github.io/styleguide/jsguide.html>.

## A ideia

Se a variável é uma caixa que troca de conteúdo, a constante é uma caixa
lacrada. Colocou o valor, acabou. Se alguém tentar trocar, o TypeScript avisa na
hora: `Cannot assign to 'NOME_ESCOLA' because it is a constant`.

Parece limitação, mas ajuda. Um valor que não pode mudar é um bug a menos para
caçar. Por isso a regra da turma é: na dúvida, comece com `const`. Se precisar
mudar depois, troque para `let`.

Sobre os nomes:

- valores fixos do programa vão em `UPPER_CASE`: `MEDIA_APROVACAO`,
  `NOME_ESCOLA`, `CIDADE`;
- uma `const` comum, como a resposta de um `input`, continua em `camelCase`:
  `const nome = input('Seu nome: ')`.

## Fluxograma

A cidade é fixa. O nome vem de quem está usando o programa.

![Fluxograma animado: a bolinha amarela percorre o caminho que o programa faz](fluxograma.gif)

A bolinha amarela é o programa rodando. No painel da direita aparecem as variáveis e o terminal.

## Exercícios

Os enunciados e as dicas estão nos comentários de `exercicio-1.ts` e `exercicio-2.ts`, aqui nesta pasta. Responda dentro do próprio arquivo.
