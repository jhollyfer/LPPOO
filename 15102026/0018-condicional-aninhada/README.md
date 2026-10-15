# 0018 · Condicional aninhada (else if e if dentro de if)

> No boletim não existe só "passou" ou "não passou". Tem a tal da recuperação no
> meio. Como o programa lida com três saídas?

## O conceito

Quando há mais de dois caminhos, as seleções são encadeadas: um `if` dentro do
`else` de outro, que no TypeScript se escreve `else if`. Forbellone e
Eberspächer (2005) chamam isso de seleção encadeada e mostram que a ordem dos
testes importa, porque o programa para no primeiro que der verdadeiro. Também é
possível aninhar, colocando um `if` dentro do bloco de outro, quando uma
pergunta só faz sentido depois da anterior. Ascencio e Campos (2012) trazem
vários exercícios de faixa de valores, como notas e IMC, que são o uso mais
comum dessa estrutura.

Para ler mais:

- FORBELLONE, A. L. V.; EBERSPÄCHER, H. F. *Lógica de programação: a construção de algoritmos e estruturas de dados*. 3. ed. São Paulo: Pearson Prentice Hall, 2005.
- ASCENCIO, A. F. G.; CAMPOS, E. A. V. *Fundamentos da programação de computadores: algoritmos, Pascal, C/C++ e Java*. 3. ed. São Paulo: Pearson, 2012.
- MDN WEB DOCS. *if...else*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else>.

## A ideia

Quando tem mais de dois caminhos, entra o `else if` (senão se). O programa testa
as condições de cima para baixo e para na primeira que for verdadeira. O `else`
do final pega quem sobrou.

É fila de cantina com placa: "lanche natural, lado esquerdo; salgado, no meio;
o resto, no caixa". Você entra na primeira placa que serve para você e não olha
as outras.

Também dá para colocar um `if` dentro de outro. Isso faz sentido quando uma
pergunta só importa depois da primeira resposta. Não adianta perguntar se tem
habilitação para quem tem 12 anos.

## Fluxograma

Testes em sequência. O primeiro "Sim" decide e o resto nem é olhado.

![Fluxograma animado: a bolinha amarela percorre o caminho que o programa faz](fluxograma.gif)

A bolinha amarela é o programa rodando. No painel da direita aparecem as variáveis e o terminal.

## Exercícios

Os enunciados e as dicas estão nos comentários de `exercicio-1.ts` e `exercicio-2.ts`, aqui nesta pasta. Responda dentro do próprio arquivo.
