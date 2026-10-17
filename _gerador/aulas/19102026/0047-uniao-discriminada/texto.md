## 0047 · União discriminada

Pensa na cantina. O pagamento pode ser no Pix ou no cartão. E cada um pede
uma informação diferente: o Pix tem chave, o cartão tem parcelas.

Quando cada opção da união tem um formato diferente, faz assim: coloca em
todas uma propriedade com o **mesmo nome** e um **valor literal diferente**.
Por exemplo, `tipo: 'pix'`.

Essa propriedade é o **discriminante**. Olhando para ela, o TypeScript já sabe
qual é o formato.

Isso é a **união discriminada**.

Na prática, quem olha o discriminante é um `switch (p.tipo)`. É o cardápio
da aula 01: cada `case` é uma opção, e dentro dele o `p` já tem as
propriedades certas:

{{ideia}}

```ts
type Pagamento = { tipo: 'pix'; chave: string } | { tipo: 'cartao'; parcelas: number }

function descrever(p: Pagamento): string {
  switch (p.tipo) {
    case 'pix':
      return `Pix para ${p.chave}` // aqui p tem chave
    case 'cartao':
      return `Cartão em ${p.parcelas}x` // aqui p tem parcelas
  }
}

console.log(descrever({ tipo: 'pix', chave: 'cantina@cetam' })) // Pix para cantina@cetam
```

No fluxograma, o `switch` abre um caminho para cada tipo. O exemplo do Pix
segue o caminho marcado:

{{fluxograma}}

> [!TIP]
> **Poder do TypeScript:** coloque um `default` que guarda o valor num
> `never` (o tipo do "isso nunca acontece", do assunto 0036). Se alguém criar
> um tipo novo de pagamento e esquecer de tratar, o TypeScript avisa:
>
> ```ts
> // acrescentaram | { tipo: 'boleto' } no Pagamento...
> default: {
>   const esquecido: never = p
>   // erro: Type '{ tipo: "boleto"; }' is not assignable to type 'never'.
> }
> ```

> [!NOTE]
> **Pergunta para a turma:** no `case 'pix'`, troque `p.chave` por
> `p.parcelas`. O editor deixa? Leia a mensagem. (Dica: Pix não tem parcelas.)

{{pratique}}
