# 0003 · Variáveis

> O placar do jogo muda a cada gol. Onde o programa guarda esse número enquanto
> ele vai mudando?

## O conceito

Forbellone e Eberspächer (2005) definem variável como um espaço na memória,
identificado por um nome, cujo conteúdo pode mudar durante a execução.
Haverbeke (2018) prefere outra imagem: em vez de caixas, pense em tentáculos
que agarram valores, porque duas variáveis podem segurar o mesmo valor. No
TypeScript, a variável que muda é criada com `let`. O tipo dela pode ser escrito
por você (anotação) ou descoberto pelo compilador a partir do valor
(inferência), como mostra o capítulo *Everyday Types* do TypeScript Handbook.
O `var`, forma antiga de declarar, tem regras de escopo que confundem até gente
experiente, e a MDN recomenda trocar por `let` e `const`.

Para ler mais:

- FORBELLONE, A. L. V.; EBERSPÄCHER, H. F. *Lógica de programação: a construção de algoritmos e estruturas de dados*. 3. ed. São Paulo: Pearson Prentice Hall, 2005.
- HAVERBEKE, M. *Eloquent JavaScript*. 3. ed. San Francisco: No Starch Press, 2018. Disponível em: <https://eloquentjavascript.net>.
- MICROSOFT. *TypeScript Handbook*: Everyday Types. Disponível em: <https://www.typescriptlang.org/docs/handbook/2/everyday-types.html>.
- MDN WEB DOCS. *let*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/let>.

## A ideia

Pense numa caixinha com etiqueta. A etiqueta é o nome, e dentro fica um valor
guardado na memória. Com `let`, dá para tirar o valor e colocar outro quantas
vezes precisar. É assim que o placar sai de 0 para 1 e de 1 para 2.

Para trocar o valor, você escreve só o nome e o novo valor: `gols = 2`. O `let`
aparece uma vez só, quando a caixa é criada.

O TypeScript quer saber o que cabe em cada caixa. Você pode dizer
(`let idade: number = 17`, isso é **anotação de tipo**) ou deixar ele descobrir
pelo valor (`let idade = 17`, isso é **inferência**). Nos dois casos ele não
deixa colocar texto numa caixa de número.

E o `var`? É o jeito antigo. A gente não usa, porque ele se comporta de um jeito
estranho e causa bug difícil de achar.

Nome de variável vai em `camelCase`: `nomeCompleto`, `notaFinal`, `golsBrasil`.

## Fluxograma

O valor de `gols` vai sendo trocado no meio do caminho.

![Fluxograma animado: a bolinha amarela percorre o caminho que o programa faz](fluxograma.gif)

A bolinha amarela é o programa rodando. No painel da direita aparecem as variáveis e o terminal.

## Exercícios

Os enunciados e as dicas estão nos comentários de `exercicio-1.ts` e `exercicio-2.ts`, aqui nesta pasta. Responda dentro do próprio arquivo.
