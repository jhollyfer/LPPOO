## 0054 · Juntando tudo: cadastro de alunos tipado

Hora de juntar as peças num programa só: um pequeno cadastro de alunos, como
a ficha da secretaria.

Repara que cada parte usa um assunto da aula:

- `Turno`: **união de literais** (0045);
- `Aluno`: **interface** com **readonly** (0043, 0044);
- `AlunoNovo`: **Omit** (0051), porque a matrícula quem gera é o cadastro;
- `Situacao`: **união discriminada** (0047). Aprovado tem média, recuperação
  tem quanto falta.

{{ideia}}

Vamos ver tudo junto:

```ts
type Turno = 'manhã' | 'tarde' | 'noite'
interface Aluno { readonly matricula: string; nome: string; nota: number; turno: Turno }
type AlunoNovo = Omit<Aluno, 'matricula'>
type Situacao = { status: 'aprovado'; media: number } | { status: 'recuperação'; falta: number }

let contador = 0
function cadastrar(dados: AlunoNovo): Aluno {
  contador++
  return { matricula: `A${contador}`, ...dados }
}

function situacao(a: Aluno): Situacao {
  if (a.nota >= 7) return { status: 'aprovado', media: a.nota }
  return { status: 'recuperação', falta: 7 - a.nota }
}

const ana = cadastrar({ nome: 'Ana', nota: 8, turno: 'manhã' })
console.log(ana.matricula, situacao(ana)) // A1 { status: 'aprovado', media: 8 }
```

Olha o caminho de um aluno pelo cadastro:

{{fluxograma}}

> [!TIP]
> Faça o teste: tente `ana.matricula = 'X'`, `turno: 'madrugada'` ou
> `situacao(ana).media` sem conferir o `status`. Cada peça barra um erro
> diferente. Foi para isso que você aprendeu cada uma.

> [!NOTE]
> **Pergunta para a turma:** cadastre o José com nota 5 e mostre a situação
> dele. Qual matrícula ele recebe? E o que aparece? Rode e confira. (Dica: o
> `contador` não volta a zero.)

{{pratique}}
