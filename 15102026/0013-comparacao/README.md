# 0013 · Comparação de igualdade

> Você digita a senha do Wi-Fi da escola e o celular diz "senha incorreta".
> Faltou uma letra maiúscula. Para o computador, "Cetam" e "cetam" são coisas
> diferentes.

## O conceito

O JavaScript tem dois jeitos de comparar igualdade. O `==` converte os tipos
antes de comparar, e por isso `5 == '5'` dá `true`. O `===` compara valor e tipo
juntos, sem conversão. A especificação ECMA-262 descreve os dois algoritmos, e a
MDN tem uma página só sobre essa diferença. Crockford (2008) colocou o `==` na
lista das partes ruins da linguagem e recomendou usar sempre `===` e `!==`,
conselho que virou regra em praticamente todo guia de estilo. O TypeScript vai
além: avisa quando você compara dois valores que nunca poderiam ser iguais.

Para ler mais:

- CROCKFORD, D. *JavaScript: the good parts*. Sebastopol: O'Reilly, 2008.
- ECMA INTERNATIONAL. *ECMA-262: ECMAScript language specification*. Disponível em: <https://tc39.es/ecma262/>.
- MDN WEB DOCS. *Comparações de igualdade e uniformidade*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Equality_comparisons_and_sameness>.

## A ideia

Para perguntar se dois valores são iguais ou diferentes usamos dois operadores:

| Operador | Pergunta          | Exemplo        | Resultado |
| -------- | ----------------- | -------------- | --------- |
| `===`    | é igual?          | `5 === 5`      | `true`    |
| `!==`    | é diferente?      | `5 !== 5`      | `false`   |

Por que três sinais de igual? Porque existe um primo mais velho, o `==`, que é
bonzinho demais. Ele tenta converter os tipos antes de comparar, então no
JavaScript `5 == '5'` dá `true`. Parece útil, mas esconde erro. O `===` é
exigente: compara o valor e o tipo. `5 === '5'` dá `false`, e o TypeScript ainda
reclama antes de rodar. Aqui na disciplina é sempre `===` e `!==`.

Para não misturar:

- `=` guarda um valor ("a nota agora é 7")
- `===` pergunta ("a nota é 7?")

## Fluxograma

O sistema de login mais simples do mundo: compara o que foi digitado com a
senha guardada.

![Fluxograma animado: a bolinha amarela percorre o caminho que o programa faz](fluxograma.gif)

A bolinha amarela é o programa rodando. No painel da direita aparecem as variáveis e o terminal.

## Exercícios

Os enunciados e as dicas estão nos comentários de `exercicio-1.ts` e `exercicio-2.ts`, aqui nesta pasta. Responda dentro do próprio arquivo.
