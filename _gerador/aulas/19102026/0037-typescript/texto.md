## 0037 · Como o TypeScript funciona (e por que ele)

> O JavaScript deixa você errar à vontade e só reclama com o programa rodando,
> às vezes já na mão de quem está usando. O TypeScript reclama antes.

TypeScript é **JavaScript com tipos**. Você escreve o mesmo JavaScript de
sempre e, quando quiser, diz o tipo de cada coisa: `const preco: number = 12.5`
quer dizer "preço é um número".

Só que o Node e o navegador não entendem `: number`. Eles só leem JavaScript.
Então todo arquivo `.ts` passa por duas etapas antes de rodar: o TypeScript
confere se os tipos batem e depois apaga os tipos, deixando JavaScript puro
para o Node.

{{ideia}}

```ts
const preco: number = 12.5
console.log(preco.toFixed(2)) // 12.50

// const troco: number = 'dez reais'
// erro: Type 'string' is not assignable to type 'number'.
```

Quando os tipos não batem, o caminho volta para você: o editor sublinha em
vermelho, você corrige e tenta de novo. Só código conferido segue para o Node.

{{fluxograma}}

Na hora de rodar, os tipos já foram apagados: o Node recebe `const preco = 12.5`
e mais nada. Toda a proteção do TypeScript acontece antes, enquanto você
escreve.

> [!IMPORTANT]
> O `tsx`, que a gente usa para rodar os arquivos, **não confere tipos**.
> Ele apaga os tipos e roda. Com `const total: number = '10' + 5`, ele mostra
> `105` sem reclamar. Quem confere é o editor, enquanto você digita, e o
> `pnpm -C ~/LPPOO tsc`, que olha o projeto inteiro. Na dúvida, rode ele antes de
> entregar um exercício.

### Por que TypeScript nesta disciplina?

A orientação a objetos é a mesma em Java, C# ou TypeScript: classe, objeto,
herança, interface. O que muda é a escrita. São quatro motivos para usar o
TypeScript:

- **É a língua do próximo semestre.** A disciplina seguinte é Web/Frontend, com
  React e Vite, e o back-end com Node também é JavaScript. Você aprende POO
  agora e chega lá falando a mesma língua.
- **Avisa o erro antes de rodar.** Errou o nome de um método ou colocou texto
  onde era número? O editor mostra na hora, sem precisar rodar o programa.
- **Tem tudo que a POO precisa.** Classes, `interface`, `private`, `abstract`
  e *generics* existem no TypeScript, e você vai usar todos eles.
- **O editor vira um ajudante.** Como ele sabe o tipo de cada coisa, o Zed
  sugere os métodos certos: escreva `preco.` e ele mostra o que um número sabe
  fazer.

{{pratique}}
