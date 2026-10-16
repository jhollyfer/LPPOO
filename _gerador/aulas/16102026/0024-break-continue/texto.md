## 0024 · break e continue

> Procurando a chave na mochila: achou, para de procurar. Pegou um caderno?
> Deixa de lado e olha o próximo item.

Às vezes você quer mexer no laço por dentro:

- `continue` pula **o resto desta volta** e vai direto para a próxima;
- `break` **para o laço inteiro** na hora, mesmo que a condição ainda seja
  `true`.

O laço abaixo conta de 1 a 10. Número par? `continue`: pula sem mostrar.
Passou de 7? `break`: acabou. No fim, só aparecem 1, 3, 5 e 7:

{{ideia}}

```ts
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue // par: pula para a próxima volta
  if (i > 7) break // passou de 7: para tudo
  console.log(i)
}
// 1, 3, 5, 7
```

No fluxograma, o `continue` é um atalho de volta para o `i++`, e o `break` é uma
saída direto para o fim:

{{fluxograma}}

> [!NOTE]
> Use com moderação. Um laço cheio de `break` e `continue` fica difícil de
> seguir. Quando der, coloque a regra na própria condição do laço.

> [!TIP]
> **Poder do TypeScript:** `break` fora de um laço (ou de um `switch`) não faz
> sentido, e o editor sublinha na hora:
>
> ```ts
> if (nota > 6) {
>   break
> }
> // erro: A 'break' statement can only be used within an enclosing
> //       iteration or switch statement.
> ```

{{pratique}}
