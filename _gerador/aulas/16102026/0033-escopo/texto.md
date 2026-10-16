## 0033 · Escopo de variáveis

> O que se fala no grupo da sala fica no grupo da sala. Quem está fora não
> fica sabendo.

**Escopo** é o pedaço do código onde uma variável existe. Uma variável criada
fora de tudo, no arquivo, é **global**: o arquivo inteiro enxerga. Uma variável
criada dentro de uma função só existe **lá dentro**, e some quando a função
termina.

A regra é de mão única: quem está dentro enxerga o que está fora, mas quem está
fora não enxerga o que está dentro. A função `saudar` usa a `escola`, que é
global. Já a `mensagem` nasce e morre dentro da função:

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

No fluxograma, `nome` e `mensagem` aparecem quando a função é chamada e somem
quando ela acaba:

{{fluxograma}}

> [!NOTE]
> Não é só função: todo bloco entre `{ }`, como o de um `if` ou de um `for`,
> tem o seu escopo para `let` e `const`. Foi por isso que o `i` do `for` não
> existia depois do laço, na [0023](#0023--laço-for).

> [!TIP]
> **Poder do TypeScript:** usar uma variável fora do escopo dela é erro na hora,
> sublinhado no editor, em vez de um susto com o programa rodando:
>
> ```ts
> console.log(mensagem)
> // erro: Cannot find name 'mensagem'.
> ```

{{pratique}}
