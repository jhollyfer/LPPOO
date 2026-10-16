## 0002 · Saída de dados (output)

> Se o programa calcula a média e não mostra, calculou para quem?

Saída é o programa mostrando alguma coisa para você. No terminal, quem faz isso
é o `console.log`: o que estiver entre os parênteses aparece na tela.

A média já está guardada: `media` vale `7.5`. Agora a gente quer mostrar uma
frase inteira, com o número encaixado no meio. Para isso existe a **template
string**: um texto entre crases com um espaço `${ }` onde o valor entra.

{{ideia}}

```ts
const media = 7.5
console.log(`Sua média é ${media}`) // Sua média é 7.5
```

Guardar a média é o programa fazendo algo, então vira retângulo roxo. Mostrar a
frase é saída: paralelogramo azul.

{{fluxograma}}

Na memória só existe a gaveta `media`. A frase é montada na hora, com o valor
que está lá dentro, e vai direto para o terminal sem ganhar gaveta:

{{memoria}}

> [!TIP]
> A crase (`` ` ``) fica perto do Enter na maioria dos teclados, às vezes junto
> com o til. Ache ela agora: você vai usar muito.

{{pratique}}
