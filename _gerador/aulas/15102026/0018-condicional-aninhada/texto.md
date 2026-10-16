## 0018 · Condicional aninhada (else if e if dentro de if)

> No boletim não existe só "passou" ou "não passou". Tem a tal da recuperação no
> meio do caminho.

Quando tem mais de dois caminhos, entra o `else if` (senão se). O programa testa
as condições de cima para baixo e para na primeira que for verdadeira. O
`else` do final pega quem sobrou.

A média da Bia é 5. Primeira pergunta: `5 >= 6`? Não. Segunda: `5 >= 4`? Sim:
recuperação. A terceira opção nem chega a ser olhada:

{{ideia}}

```ts
const media = 5

if (media >= 6) {
  console.log('Aprovado')
} else if (media >= 4) {
  console.log('Recuperação') // a Bia cai aqui
} else {
  console.log('Reprovado')
}
```

Cada `else if` é mais um losango, pendurado no Não do anterior:

{{fluxograma}}

> [!TIP]
> Também dá para colocar um `if` dentro de outro, quando uma pergunta só faz
> sentido depois da primeira. Não adianta perguntar se tem habilitação para
> quem tem 12 anos.

{{pratique}}
