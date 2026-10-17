## 0027 · Funções

Pensa na calculadora do celular. Você não precisa saber o que acontece lá
dentro. Digita os números, aperta o botão e recebe a resposta.

Função é isso: um pedaço de código com **nome**, que recebe valores, faz o
trabalho e devolve uma resposta. Você escreve uma vez e **chama** quantas vezes
quiser.

Vamos ver na prática. A função `calcularMedia` recebe duas notas, `8` e `6`.
Ela soma, divide por 2 e devolve `7`:

{{ideia}}

```ts
function calcularMedia(nota1: number, nota2: number): number {
  return (nota1 + nota2) / 2
}

const media = calcularMedia(8, 6) // nota1 recebe 8, nota2 recebe 6
console.log(media) // 7
```

Vamos ler a primeira linha juntos:

- `function` avisa que ali começa uma função.
- `calcularMedia` é o nome dela.
- `nota1` e `nota2` são os **parâmetros**: caixinhas que recebem os valores da
  chamada. O `: number` de cada um diz que só entra número.
- o `: number` depois dos parênteses é o **tipo do retorno**: ela devolve um
  número.

Dentro das `{ }`, o `return` é a resposta. Ele devolve o valor para quem chamou
e encerra a função na hora.

Guarda isso: escrever a função não roda nada. Ela só trabalha quando alguém
**chama**, com `calcularMedia(8, 6)`.

No fluxograma, a chamada entra, a função faz a conta e o `return` devolve o
`7`, que vai para a caixinha `media`:

{{fluxograma}}

> [!NOTE]
> **Pergunta para a turma:** acrescente `console.log(calcularMedia(10, 5))` no
> final. O que aparece? Rode e confira. (Dica: a média nem sempre dá um número
> inteiro.)

{{pratique}}
