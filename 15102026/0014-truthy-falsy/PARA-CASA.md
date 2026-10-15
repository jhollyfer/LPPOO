# 0014 · Truthy, falsy, ?? e ?.: para casa

Crie `seunome-casa-NN.ts` nesta pasta (troque `NN` pelo número do exercício) e
rode com `pnpm tsx`. Sem copiar do colega, combinado?

1. **Os seis suspeitos.** Liste em comentários os 6 valores falsy e teste cada
   um com `Boolean()`.
2. **Texto que engana.** Mostre `Boolean('false')`. O resultado é `true`.
   Explique em um comentário por quê.
3. **Turma perdida.** Crie `let turma: string | undefined` e mostre `Turma: X`
   usando `??` com o padrão `'sem turma'`. Teste sem valor e com valor.
4. **Zero vale alguma coisa?** Mostre `0 ?? 10` e `0 || 10`. Explique em
   comentários por que os resultados são diferentes.
5. **Boas-vindas na portaria.** Peça o apelido com `input` (a pessoa pode só
   apertar Enter). Mostre `Olá, APELIDO!` em maiúsculas e, se vier vazio, mostre
   `Olá, VISITANTE!`. Dica: `apelido || 'visitante'` e depois `toUpperCase()`.
