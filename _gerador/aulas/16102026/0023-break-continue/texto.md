## 0023 · break e continue

Pensa em você procurando a chave na mochila. Achou? Para de procurar. Pegou um
caderno? Deixa de lado e olha o próximo item.

Dentro de um laço, você também pode fazer isso:

- `continue` pula **o resto desta volta** e vai direto para a próxima;
- `break` **para o laço inteiro** na hora, mesmo que a condição ainda seja
  `true`.

Vamos ver na prática. O laço abaixo conta de 1 a 10. Número par? `continue`:
pula sem mostrar. Passou de 7? `break`: acabou. No fim, só aparecem 1, 3, 5 e
7:

{{ideia}}

```ts
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue // par: pula para a próxima volta
  if (i > 7) break // passou de 7: para tudo
  console.log(i)
}
// 1, 3, 5, 7
```

Repara no fluxograma: o `continue` é um atalho de volta para o `i++`. O `break`
é uma saída direto para o fim:

{{fluxograma}}

> [!NOTE]
> Use com moderação. Um laço cheio de `break` e `continue` fica difícil de
> seguir. Quando der, coloque a regra na própria condição do laço.

> [!NOTE]
> **Pergunta para a turma:** troque o `i > 7` por `i > 4`. Quais números
> aparecem agora? Rode e confira.

{{pratique}}
