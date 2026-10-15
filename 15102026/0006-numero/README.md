# 0006 · Número (number)

> Quanto custa o açaí? Quantos km até Tabatinga? Qual sua nota? Tudo isso é
> número.

## O conceito

No JavaScript e no TypeScript existe um tipo só para números, o `number`, que
guarda inteiros e decimais no formato de ponto flutuante de 64 bits definido
pela norma IEEE 754. Esse formato representa a maioria dos decimais de forma
aproximada, e é por isso que `0.1 + 0.2` dá `0.30000000000000004`. Goldberg
(1991) explica o motivo em detalhe, num artigo que virou leitura clássica. A
mesma norma define o `NaN` ("not a number"), o resultado de uma conta que não
faz sentido, como transformar `'abc'` em número.

Para ler mais:

- GOLDBERG, D. What every computer scientist should know about floating-point arithmetic. *ACM Computing Surveys*, v. 23, n. 1, p. 5-48, 1991.
- IEEE. *IEEE standard for floating-point arithmetic*: IEEE 754-2019. New York: IEEE, 2019.
- MDN WEB DOCS. *Number*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number>.

## A ideia

`number` é o tipo para números. No TypeScript não tem um tipo para inteiro e
outro para decimal: `10`, `-3` e `7.5` são todos `number`. Uma caixa só para
todos.

Três coisas para guardar:

- O decimal usa ponto, igual à calculadora do celular: `7.5`, não `7,5`.
- `toFixed(n)` mostra o número com `n` casas depois do ponto. Bom para dinheiro.
  Ele devolve texto, pronto para mostrar.
- `NaN` quer dizer "Not a Number", não é um número. Aparece quando você pede uma
  conta que não faz sentido, tipo transformar `'abc'` em número.

## Fluxograma

Guarda o preço e mostra bonitinho, com centavos.

![Fluxograma animado: a bolinha amarela percorre o caminho que o programa faz](fluxograma.gif)

A bolinha amarela é o programa rodando. No painel da direita aparecem as variáveis e o terminal.

## Exercícios

Os enunciados e as dicas estão nos comentários de `exercicio-1.ts` e `exercicio-2.ts`, aqui nesta pasta. Responda dentro do próprio arquivo.
