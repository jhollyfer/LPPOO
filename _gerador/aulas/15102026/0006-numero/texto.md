## 0006 · Número (number)

> Quanto custa o açaí? Quantos km até Tabatinga? Qual sua nota? Tudo isso é
> número, e o programa precisa saber fazer conta com eles.

Número, no TypeScript, se chama **number**. Não tem um tipo para inteiro e outro
para decimal: `17`, `-3` e `12.5` são todos `number`. E o decimal usa ponto,
igual à calculadora do celular: `12.5`, não `12,5`.

O açaí custa `12.5`. Para mostrar como dinheiro, com dois números depois do
ponto, o `.toFixed(2)` transforma `12.5` em `'12.50'`:

{{ideia}}

```ts
const preco = 12.5
const texto = preco.toFixed(2) // '12.50'
console.log(`Açaí: R$ ${texto}`) // Açaí: R$ 12.50
```

{{fluxograma}}

> [!NOTE]
> O `.toFixed` devolve texto, pronto para mostrar. Para fazer mais contas,
> continue usando o `preco`.

> [!WARNING]
> Conta que não faz sentido vira `NaN` ("Not a Number"). Por exemplo,
> `Number('abc')` dá `NaN`.

{{pratique}}
