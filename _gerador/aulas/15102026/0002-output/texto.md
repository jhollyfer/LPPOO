## 0002 · Saída de dados (output)

Na aula passada, o programa perguntou e esperou. Agora é a vez dele responder.

Saída é o programa mostrando alguma coisa para você. No terminal, quem faz isso
é o `console.log`. O que estiver entre os parênteses aparece na tela.

Olha só o exemplo. A média já está guardada: `media` vale `7.5`. A gente quer
mostrar uma frase inteira, com o número encaixado no meio.

Para isso existe a **template string**. É um texto entre crases, com um espaço
`${ }` onde o valor entra:

{{ideia}}

```ts
const media = 7.5
console.log(`Sua média é ${media}`) // Sua média é 7.5
```

Repara no fluxograma. Guardar a média é o programa fazendo algo, então vira
retângulo roxo. Mostrar a frase é saída: paralelogramo azul.

{{fluxograma}}

> [!TIP]
> A crase (`` ` ``) fica perto do Enter na maioria dos teclados, às vezes junto
> com o til. Procura ela agora no seu teclado, porque você vai usar muito.

> [!NOTE]
> **Pergunta para a turma:** e se você trocar as crases por aspas simples
> (`'`)? O que aparece na tela? Rode e confira. (Dica: o `${media}` só
> funciona entre crases.)

{{pratique}}
