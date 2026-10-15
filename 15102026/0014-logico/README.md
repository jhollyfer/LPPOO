# 0014 · Operadores lógicos

> Para passar de ano não basta tirar nota boa. Também precisa ter frequência.
> Uma coisa E a outra. No código, esse E se escreve `&&`.

## O conceito

`&&` (E), `||` (OU) e `!` (NÃO) juntam respostas verdadeiro ou falso, a álgebra
de Boole (1854). A tabela-verdade mostra o resultado de cada combinação.

Para ler mais:

- BOOLE, G. *An investigation of the laws of thought*. London: Walton and Maberly, 1854.
- FORBELLONE, A. L. V.; EBERSPÄCHER, H. F. *Lógica de programação: a construção de algoritmos e estruturas de dados*. 3. ed. São Paulo: Pearson Prentice Hall, 2005.
- MDN WEB DOCS. *Operador AND lógico (&&)*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Logical_AND>.

## A ideia

Os relacionais respondem uma pergunta de cada vez. Os lógicos juntam várias
respostas numa só, ou invertem uma resposta.

| Operador | Nome | Dá `true` quando...                  |
| -------- | ---- | ------------------------------------ |
| `&&`     | E    | os **dois** lados são `true`         |
| `\|\|`   | OU   | **pelo menos um** lado é `true`      |
| `!`      | NÃO  | inverte: `!true` é `false`           |

A mãe diz: "só sai se arrumar o quarto E lavar a louça". Precisa dos dois: é o
`&&`. A avó diz: "sai se arrumar o quarto OU lavar a louça". Basta um: é o `||`.
E o `!` é o irmão do contra, que sempre diz o oposto.

A tabela verdade mostra todas as combinações possíveis:

| A       | B       | A && B  | A \|\| B |
| ------- | ------- | ------- | -------- |
| `true`  | `true`  | `true`  | `true`   |
| `true`  | `false` | `false` | `true`   |
| `false` | `true`  | `false` | `true`   |
| `false` | `false` | `false` | `false`  |

## Fluxograma

A aprovação com `&&`: são duas portas e o aluno precisa passar pelas duas.

![Fluxograma animado: a bolinha amarela percorre o caminho que o programa faz](fluxograma.gif)

A bolinha amarela é o programa rodando. No painel da direita aparecem as variáveis e o terminal.

## Exercícios

Os enunciados e as dicas estão nos comentários de `exercicio-1.ts` e `exercicio-2.ts`, aqui nesta pasta. Responda dentro do próprio arquivo.
