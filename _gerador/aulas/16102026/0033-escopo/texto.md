## 0033 · Escopo de variáveis

Pensa no grupo da sala no celular. O que se fala lá fica lá. Quem está fora não
fica sabendo.

Variável funciona parecido. **Escopo** é o pedaço do código onde uma variável
existe.

Uma variável criada fora de tudo, solta no arquivo, é **global**: o arquivo
inteiro enxerga.

Uma variável criada dentro de uma função só existe **lá dentro**. Quando a
função termina, ela some.

A regra é de mão única: quem está dentro enxerga o que está fora, mas quem está
fora não enxerga o que está dentro.

Olha só. A função `saudar` usa a `escola`, que é global. Já a `mensagem` nasce
e morre dentro da função:

{{ideia}}

```ts
const escola = 'CETAM' // global: o arquivo inteiro enxerga

function saudar(nome: string): void {
  const mensagem = `Oi, ${nome}! Bem-vinda ao ${escola}.` // só existe aqui dentro
  console.log(mensagem)
}

saudar('Ana') // Oi, Ana! Bem-vinda ao CETAM.
// console.log(mensagem) // erro: a mensagem não existe aqui fora
```

No fluxograma, repara que `nome` e `mensagem` aparecem quando a função é
chamada e somem quando ela acaba:

{{fluxograma}}

> [!NOTE]
> Isso vale para todo bloco entre `{ }`, como o de um `if` ou de um `for`. Cada
> um tem o seu escopo para `let` e `const`. Foi por isso que o `i` do `for` não
> existia depois do laço, na [0023](#0023--laço-for).

> [!NOTE]
> **Pergunta para a turma:** o que acontece se você tirar o `//` da última
> linha e rodar? Teste. (Dica: leia a mensagem de erro com calma.)

{{pratique}}
