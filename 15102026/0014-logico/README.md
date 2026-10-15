# 0014 · Operadores lógicos

> Para passar de ano não basta tirar nota boa. Também precisa ter frequência.
> Uma coisa E a outra. No código, esse E se escreve `&&`.

## O conceito

Os operadores lógicos vêm direto da álgebra de Boole (1854): E (`&&`), OU (`||`)
e NÃO (`!`). Eles combinam respostas verdadeiro/falso, e o resultado de cada
combinação está na tabela-verdade, ferramenta que Forbellone e Eberspächer
(2005) usam para ensinar a montar condições compostas. No JavaScript, `&&` e
`||` têm avaliação em curto-circuito: se a primeira parte já decide o
resultado, a segunda nem é calculada. Em `false && qualquerCoisa`, o
`qualquerCoisa` nunca chega a rodar.

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

Pense numa mãe exigente e numa avó boazinha. A mãe diz: "só sai se arrumar o
quarto E lavar a louça". Fez só um? Fica em casa. Isso é o `&&`. A avó diz:
"pode sair se arrumar o quarto OU lavar a louça". Fez qualquer um, já pode ir.
Isso é o `||`. E o `!` é o irmão do contra: tudo o que você diz, ele diz o
oposto.

A tabela verdade mostra todas as combinações possíveis:

| A       | B       | A && B  | A \|\| B |
| ------- | ------- | ------- | -------- |
| `true`  | `true`  | `true`  | `true`   |
| `true`  | `false` | `false` | `true`   |
| `false` | `true`  | `false` | `true`   |
| `false` | `false` | `false` | `false`  |

## Fluxograma

A aprovação com `&&`: são duas portas, e o aluno precisa passar pelas duas. Se
travar em qualquer uma, cai no `false`.

![Fluxograma animado: a bolinha amarela percorre o caminho que o programa faz](fluxograma.gif)

A bolinha amarela é o programa rodando. No painel da direita aparecem as variáveis e o terminal.

## Exercícios

Os enunciados e as dicas estão nos comentários de `exercicio-1.ts` e `exercicio-2.ts`, aqui nesta pasta. Responda dentro do próprio arquivo.
