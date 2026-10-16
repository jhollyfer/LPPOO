## 0003 · Variáveis

> O placar do jogo muda a cada gol. Onde o programa guarda esse número enquanto
> o jogo rola?

Numa **variável**: uma caixinha com nome. O nome fica na etiqueta e o valor fica
dentro. Com `let`, dá para tirar o valor e colocar outro quantas vezes precisar.

O jogo começa 0 a 0. Saiu gol: a caixa `gols` passa a guardar 1. Outro gol: 2.
A caixa é sempre a mesma, só o que tem dentro muda:

{{ideia}}

```ts
let gols = 0 // o let aparece uma vez só, quando a caixa nasce
gols = 1 // gol!
gols = 2 // outro gol!
console.log(gols) // 2
```

Cada troca de valor vira um retângulo roxo, um embaixo do outro:

{{fluxograma}}

> [!TIP]
> **Poder do TypeScript:** O TypeScript descobre que `gols` guarda número, porque começou com `0`. Isso se
> chama **inferência**. Se quiser, dá para escrever na mão: `let gols: number = 0`.
> Nos dois casos, a caixa só aceita número:
>
> ```ts
> let gols = 0
> gols = 'três'
> // erro: Type 'string' is not assignable to type 'number'.
> ```

Nome de variável vai em `camelCase`: `nomeCompleto`, `notaFinal`, `golsBrasil`.
E o `var`? É o jeito antigo, e causa bug difícil de achar. A gente não usa.

{{pratique}}
