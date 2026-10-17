## 0003 · Variáveis

Pensa no placar do jogo. Ele muda a cada gol. O programa precisa guardar esse
número em algum lugar enquanto o jogo rola.

Esse lugar é a **variável**. Pensa numa caixinha com nome: o nome fica na
etiqueta e o valor fica dentro.

Com `let`, você pode tirar o valor e colocar outro quantas vezes precisar.

Vamos ver na prática. O jogo começa 0 a 0. Saiu gol: a caixa `gols` passa a
guardar 1. Outro gol: 2. A caixa é sempre a mesma, só o que tem dentro muda:

{{ideia}}

```ts
let gols = 0 // o let aparece uma vez só, quando a caixa nasce
gols = 1 // gol!
gols = 2 // outro gol!
console.log(gols) // 2
```

No fluxograma, cada troca de valor vira um retângulo roxo, um embaixo do outro:

{{fluxograma}}

Guarda isso: nome de variável vai em `camelCase`. Por exemplo: `nomeCompleto`,
`notaFinal`, `golsBrasil`.

E o `var`? É o jeito antigo, e causa bug difícil de achar. Aqui a gente não usa.

> [!NOTE]
> **Pergunta para a turma:** se você apagar a linha `gols = 2`, o que aparece
> na tela? Rode e confira.

{{pratique}}
