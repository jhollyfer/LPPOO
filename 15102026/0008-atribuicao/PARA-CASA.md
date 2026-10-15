# 0008 · Operadores de atribuição: para casa

Crie `seunome-casa-NN.ts` nesta pasta (o `NN` é o número do exercício) e rode
com `pnpm tsx`. Sem pressa, mas sem deixar para a hora da aula.

1. **Vida extra.** Crie `let vidas = 3`. O jogador perdeu uma vida e depois
   ganhou duas. Use `--` e `+=` e mostre quantas vidas sobraram.
2. **Cofrinho.** Crie `let poupanca = 50`. Durante o mês você guardou 20, depois
   mais 35, e gastou 15 num açaí caprichado. Mostre o saldo final usando só
   atribuição composta.
3. **O que sobrou?** Crie `let numero = 17`, faça `numero %= 5` e mostre o
   resultado. Em comentário, explique de onde veio esse número.
4. **Faxina no código.** Reescreva estas linhas usando atribuição composta ou
   `++`/`--`, e confira se o resultado final continua o mesmo:

   ```ts
   let total = 10
   total = total + 1
   total = total * 3
   total = total - 4
   ```

5. **Caixa da lojinha.** Peça com `input` o saldo inicial do caixa. Depois peça
   o valor de uma venda e o valor de um troco dado. Converta tudo com `Number`,
   atualize o saldo com `+=` e `-=` e mostre o saldo depois de cada operação,
   com 2 casas decimais.
