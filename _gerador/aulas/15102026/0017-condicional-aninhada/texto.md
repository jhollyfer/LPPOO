## 0017 · Condicional aninhada (else if e if dentro de if)

Até agora, a gente tinha só dois caminhos: o do `if` e o do `else`. Mas no
boletim não existe só "passou" ou "não passou". Tem a recuperação no meio.

Quando tem mais de dois caminhos, entra o `else if` (em português, "senão se").

O programa testa as condições de cima para baixo e para na primeira que der
verdadeira. O `else` do final pega quem sobrou.

Olha só a média da Bia, que é 5. Primeira pergunta: `5 >= 6`? Não. Segunda:
`5 >= 4`? Sim: recuperação. A terceira opção nem chega a ser olhada:

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

No fluxograma, cada `else if` é mais um losango, pendurado no Não do anterior:

{{fluxograma}}

> [!TIP]
> Também dá para colocar um `if` dentro de outro. Você usa isso quando uma
> pergunta só faz sentido depois da primeira. Não adianta perguntar se tem
> habilitação para quem tem 12 anos.

> [!NOTE]
> **Pergunta para a turma:** se a média da Bia for exatamente 4, o que aparece?
> Troque o 5 por 4 e rode. (Dica: o `>=` também aceita o igual.)

{{pratique}}
