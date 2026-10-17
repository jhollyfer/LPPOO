## 0023 · Laço for

A tabuada do 7 tem dez linhas quase iguais. Só um número muda de uma linha
para a outra. Escrever dez `console.log` na mão? Não precisa.

Quando você já sabe **quantas vezes** vai repetir, o `for` é o laço mais
organizado.

Ele junta numa linha só as três coisas que todo laço com contador precisa:

- onde o contador começa;
- até quando repete;
- quanto ele anda a cada volta.

Vamos ver na prática. Na tabuada do 7, o contador `i` começa em 1. O laço roda
enquanto `i <= 10`. Depois de cada linha mostrada, `i` anda mais um. Quando
`i` chega a 11, a pergunta dá `false` e o laço acaba:

{{ideia}}

```ts
const numero = 7

for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`)
}
// 7 x 1 = 7
// 7 x 2 = 14
// ...
// 7 x 10 = 70
```

Olha só: o fluxograma é o mesmo de um `while`. O `for` só deixa as três partes
juntas, num lugar que dá para ler de uma vez:

{{fluxograma}}

> [!NOTE]
> O nome `i` é tradição (vem de *índice*), mas pode ser qualquer um. E o passo
> não precisa ser `i++`: `i += 2` anda de dois em dois, `i--` conta para trás.

> [!NOTE]
> **Pergunta para a turma:** troque o `i++` por `i += 2`. Quais linhas da
> tabuada aparecem agora? Rode e confira.

{{pratique}}
