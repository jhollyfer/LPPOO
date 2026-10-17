## 0006 · Número (number)

Quanto custa o açaí? Qual a sua nota? Tudo isso é número. E o programa precisa
saber fazer conta com eles.

No TypeScript, número se chama **number**. Não tem um tipo para inteiro e outro
para decimal: `17`, `-3` e `12.5` são todos `number`.

Guarda isso: o decimal usa ponto, igual à calculadora do celular. É `12.5`, e
não `12,5`.

Olha só o exemplo. O açaí custa `12.5`. Para mostrar como dinheiro, com dois
números depois do ponto, o `.toFixed(2)` transforma `12.5` em `'12.50'`:

{{ideia}}

```ts
const preco = 12.5
const texto = preco.toFixed(2) // '12.50'
console.log(`Açaí: R$ ${texto}`) // Açaí: R$ 12.50
```

{{fluxograma}}

> [!TIP]
> Repara: o `.toFixed` devolve texto, pronto para mostrar. Para fazer mais
> contas, continue usando o `preco`.

> [!NOTE]
> **Pergunta para a turma:** troque o `toFixed(2)` por `toFixed(0)`. Qual preço
> aparece agora? Rode e confira. (Dica: ele arredonda.)

{{pratique}}
