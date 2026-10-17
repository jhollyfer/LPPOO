## 0035 · Como o TypeScript funciona (e por que ele)

O JavaScript deixa você errar à vontade. Ele só reclama com o programa rodando,
às vezes já na mão de quem está usando. O TypeScript reclama antes.

TypeScript é **JavaScript com tipos**. Você escreve o JavaScript de sempre e,
quando quiser, diz o tipo de cada coisa. Os arquivos `.ts` das aulas 01 e 02
já eram TypeScript.

Olha só: `const preco: number = 12.5` quer dizer "preço é um número".

Só que o Node e o navegador não entendem o `: number`. Eles só leem
JavaScript.

Então o caminho de um arquivo `.ts` tem duas etapas. Primeiro, o TypeScript
confere se os tipos batem. Depois, os tipos são apagados e o Node recebe
JavaScript puro.

{{ideia}}

```ts
const preco: number = 12.5
console.log(preco.toFixed(2)) // 12.50

// const troco: number = 'dez reais'
// erro: Type 'string' is not assignable to type 'number'.
```

E quando os tipos não batem? O caminho volta para você. O editor sublinha em
vermelho, você corrige e tenta de novo. Só código conferido segue para o Node.

{{fluxograma}}

Na hora de rodar, os tipos já sumiram. O Node recebe `const preco = 12.5` e
mais nada. Toda a proteção do TypeScript acontece antes, enquanto você escreve.

> [!IMPORTANT]
> Guarda isso: o `tsx`, que a gente usa para rodar os arquivos, **não confere
> tipos**. Ele apaga os tipos e roda. Com `const total: number = '10' + 5`, ele
> mostra `105` sem reclamar.
>
> Quem confere é o editor, enquanto você digita, e o `pnpm -C ~/LPPOO tsc`, que
> olha o projeto inteiro. Rode o `tsc` antes de entregar um exercício.

### Por que TypeScript nesta disciplina?

São três motivos:

- **É a língua da web.** A disciplina seguinte é Web/Frontend, com React e
  Vite, e o back-end com Node também é JavaScript. Você chega lá falando a
  mesma língua.
- **Avisa o erro antes de rodar.** Errou o nome de uma variável ou colocou
  texto onde era número? O editor mostra na hora, sem precisar rodar o
  programa. Isso é a **tipagem estática**: o tipo é conferido enquanto você
  escreve, e não com o programa rodando.
- **O editor vira um ajudante.** Como ele sabe o tipo de cada coisa, o Zed
  sugere os métodos certos: escreva `preco.` e ele mostra o que um número sabe
  fazer.

> [!NOTE]
> **Pergunta para a turma:** tire o `//` da linha do `troco` e rode com o
> `tsx`. Aparece erro? E com o `pnpm -C ~/LPPOO tsc`? (Dica: releia o quadro
> sobre o `tsx`.)

{{pratique}}
