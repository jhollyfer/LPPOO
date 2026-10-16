// O conteúdo do diagrama de cada pasta.
//
// caixas: { id, x, y, w?, h?, cor?, rotulo?, texto, forma?: 'losango' }
//   cores: azul, roxo, verde, amarelo, vermelho, cinza
// setas:  { de, para, rotulo?, cor?, lados?: 'de' (lado de saída + chegada:
//           d = direita, e = esquerda, c = cima, b = baixo), cotovelo? }
// notas:  { x, y, texto, cor? } texto solto
// rodape: a frase final, embaixo de tudo

// três caixas lado a lado, ligadas por setas
const fileira = (y, [a, b, c], [s1, s2] = []) => {
  const linhas = Math.max(...[a, b, c].map((x) => [].concat(x.texto).length))
  const h = 150 + (linhas - 1) * 40
  return {
    caixas: [
      { id: 'a', x: 110, y, w: 360, h, cor: 'azul', ...a },
      { id: 'b', x: 620, y, w: 360, h, cor: 'roxo', ...b },
      { id: 'c', x: 1130, y, w: 360, h, cor: 'verde', ...c },
    ],
    setas: [
      { de: 'a', para: 'b', rotulo: s1 },
      { de: 'b', para: 'c', rotulo: s2 },
    ],
  }
}

// uma pergunta (losango) que abre dois caminhos
const bifurcacao = ({ inicio, pergunta, sim, nao, rotuloSim = 'Sim', rotuloNao = 'Não' }) => ({
  caixas: [
    { id: 'ini', x: 110, y: 380, w: 320, cor: 'azul', ...inicio },
    { id: 'p', x: 540, y: 355, w: 340, h: 200, forma: 'losango', cor: 'amarelo', texto: pergunta },
    { id: 'sim', x: 1060, y: 250, w: 430, cor: 'verde', ...sim },
    { id: 'nao', x: 1060, y: 510, w: 430, cor: 'vermelho', ...nao },
  ],
  setas: [
    { de: 'ini', para: 'p' },
    { de: 'p', para: 'sim', lados: 'ce', cotovelo: true, rotulo: rotuloSim, cor: 'verde' },
    { de: 'p', para: 'nao', lados: 'be', cotovelo: true, rotulo: rotuloNao, cor: 'vermelho' },
  ],
})

export const ideias = [
  {
    pasta: '0001-input',
    titulo: 'O que é entrada de dados?',
    subtitulo: 'O programa faz uma pergunta, espera você digitar e guarda a resposta.',
    ...fileira(
      290,
      [
        { rotulo: '1 · pergunta', texto: ["input('Seu nome: ')"] },
        { rotulo: '2 · você digita', texto: ['Ana', 'e aperta Enter'] },
        { rotulo: '3 · guarda', texto: ["nome = 'Ana'"] },
      ],
      ['espera', 'devolve'],
    ),
    rodape: "O input sempre devolve texto: digitou 17, ele guarda '17'.",
  },
  {
    pasta: '0002-output',
    titulo: 'O que é saída de dados?',
    subtitulo: 'O console.log mostra no terminal o que estiver entre os parênteses.',
    ...fileira(
      290,
      [
        { rotulo: 'o valor', texto: ["nome = 'Ana'"] },
        { rotulo: 'template string', texto: ['`Olá, ${nome}!`'] },
        { rotulo: 'terminal', texto: ['Olá, Ana!'] },
      ],
      ['encaixa', 'console.log'],
    ),
    rodape: 'Crase por fora e ${ } por dentro: é assim que texto e valor se misturam.',
  },
  {
    pasta: '0003-variaveis',
    titulo: 'O que é variável?',
    subtitulo: 'Uma caixinha com nome. Com let, o valor dentro dela pode mudar.',
    ...fileira(
      290,
      [
        { rotulo: 'começo do jogo', texto: ['let gols = 0'] },
        { rotulo: 'gol!', texto: ['gols = 1'] },
        { rotulo: 'outro gol!', texto: ['gols = 2'] },
      ],
      ['troca', 'troca'],
    ),
    rodape: 'O let aparece uma vez só, quando a caixa nasce. Depois é só o nome.',
  },
  {
    pasta: '0004-constantes',
    titulo: 'O que é constante?',
    subtitulo: 'Uma caixa lacrada: colocou o valor, ele não muda mais.',
    ...fileira(
      290,
      [
        { rotulo: '1 · cria', texto: ['const CIDADE =', "'Benjamin Constant'"] },
        { rotulo: '2 · tenta trocar', texto: ["CIDADE = 'Manaus'"], cor: 'amarelo' },
        { rotulo: '3 · o TypeScript avisa', texto: ['Não pode,', 'é constante!'], cor: 'vermelho' },
      ],
      ['depois...', 'erro'],
    ),
    rodape: 'Na dúvida, comece com const. Precisou mudar? Troque para let.',
  },
  {
    pasta: '0005-texto',
    titulo: 'O que é string?',
    subtitulo: 'Texto entre aspas. E toda string já vem com ferramentas prontas.',
    ...fileira(
      290,
      [
        { rotulo: 'digitou', texto: ["'  ana  '"] },
        { rotulo: '.trim()', texto: ["'ana'"] },
        { rotulo: '.toUpperCase()', texto: ["'ANA'"] },
      ],
      ['limpa', 'aumenta'],
    ),
    rodape: "Cuidado: com texto o + não soma, ele cola. '5' + 3 vira '53'.",
  },
  {
    pasta: '0006-numero',
    titulo: 'O que é number?',
    subtitulo: 'Inteiro ou decimal, tudo é number. E o decimal usa ponto: 12.5',
    ...fileira(
      290,
      [
        { rotulo: 'preço', texto: ['preco = 12.5'] },
        { rotulo: '.toFixed(2)', texto: ["'12.50'"] },
        { rotulo: 'terminal', texto: ['Total: R$ 12.50'] },
      ],
      ['2 casas', 'mostra'],
    ),
    rodape: "Conta que não faz sentido vira NaN: Number('abc') dá NaN.",
  },
  {
    pasta: '0007-booleano',
    titulo: 'O que é boolean?',
    subtitulo: 'Só dois valores: true (verdadeiro) ou false (falso). Um interruptor.',
    ...bifurcacao({
      inicio: { rotulo: 'pergunta', texto: ['Matriculado?', '(sim/nao)'] },
      pergunta: ['resposta', "=== 'sim'"],
      sim: { rotulo: 'digitou sim', texto: ['matriculado = true'] },
      nao: { rotulo: 'digitou outra coisa', texto: ['matriculado = false'] },
      rotuloSim: 'true',
      rotuloNao: 'false',
    }),
    rodape: ['undefined: ninguém colocou nada ainda.', "null: alguém colocou 'nada' de propósito."],
  },
  {
    pasta: '0008-conversao',
    titulo: 'O que é conversão?',
    subtitulo: 'O input devolve texto. Para fazer conta, transforme em número antes.',
    ...fileira(
      290,
      [
        { rotulo: 'texto', texto: ["'17'"], cor: 'amarelo' },
        { rotulo: 'converte', texto: ["Number('17')"] },
        { rotulo: 'número', texto: ['17'] },
      ],
      ['entra', 'sai'],
    ),
    notas: [
      { x: 130, y: 500, texto: "'17' + 1  vira  '171'", cor: 'vermelho' },
      { x: 1130, y: 500, texto: '17 + 1  vira  18', cor: 'verde' },
    ],
    rodape: 'Não deu para converter? O resultado é NaN.',
  },
  {
    pasta: '0009-atribuicao',
    titulo: 'O que é atribuição?',
    subtitulo: 'O = guarda um valor na variável. O += soma com o que já tinha lá.',
    ...fileira(
      290,
      [
        { rotulo: 'tinha', texto: ['saldo = 100'] },
        { rotulo: 'faz', texto: ['saldo += 50'] },
        { rotulo: 'ficou', texto: ['saldo = 150'] },
      ],
      ['antes', 'depois'],
    ),
    rodape: 'saldo += 50 é o atalho de saldo = saldo + 50.',
  },
  {
    pasta: '0010-aritmetica',
    titulo: 'Contas no código',
    subtitulo: 'As contas da escola. Multiplicar é *, dividir é / e o % dá o resto.',
    ...fileira(
      290,
      [
        { rotulo: 'média sem parênteses', texto: ['8 + 6 / 2'], cor: 'vermelho' },
        { rotulo: 'média com parênteses', texto: ['(8 + 6) / 2'] },
        { rotulo: 'resultado', texto: ['7'] },
      ],
      ['corrige', 'calcula'],
    ),
    notas: [{ x: 130, y: 500, texto: 'dá 11: a divisão vem antes!', cor: 'vermelho' }],
    rodape: 'Primeiro ** , depois * / % , por último + -. Quer outra ordem? Parênteses.',
  },
  {
    pasta: '0011-math',
    titulo: 'O que é Math?',
    subtitulo: 'Uma caixa de ferramentas pronta: arredondar, maior, menor, sortear.',
    ...fileira(
      290,
      [
        { rotulo: 'passeio', texto: ['32 alunos', '15 por van'] },
        { rotulo: 'conta', texto: ['32 / 15 = 2.13'] },
        { rotulo: 'Math.ceil', texto: ['3 vans'] },
      ],
      ['divide', 'para cima'],
    ),
    rodape: 'floor é chão (arredonda para baixo). ceil é teto (arredonda para cima).',
  },
  {
    pasta: '0012-relacional',
    titulo: 'Comparar valores',
    subtitulo: 'Os operadores > < >= <= comparam dois valores e respondem true ou false.',
    ...fileira(
      290,
      [
        { rotulo: 'valor', texto: ['media = 8'] },
        { rotulo: 'pergunta', texto: ['media >= 6'] },
        { rotulo: 'resposta', texto: ['true'] },
      ],
      ['compara', 'responde'],
    ),
    rodape: 'A boca aberta do > fica virada para o maior, igual a um jacaré.',
  },
  {
    pasta: '0013-comparacao',
    titulo: 'Igual ou diferente?',
    subtitulo: 'O === pergunta se dois valores são iguais. O !== pergunta se são diferentes.',
    ...bifurcacao({
      inicio: { rotulo: 'digitou', texto: ['a senha'] },
      pergunta: ['digitada', '=== SENHA ?'],
      sim: { rotulo: 'igual', texto: ['Bem-vindo!'] },
      nao: { rotulo: 'diferente', texto: ['Senha errada'] },
    }),
    rodape: 'O = guarda um valor. O === pergunta se é igual.',
  },
  {
    pasta: '0014-logico',
    titulo: 'E, OU e NÃO',
    subtitulo: 'Juntam várias respostas true ou false numa só.',
    caixas: [
      { id: 'a', x: 110, y: 260, w: 400, cor: 'azul', rotulo: 'média boa?', texto: ['media >= 6', 'true'] },
      {
        id: 'b',
        x: 110,
        y: 470,
        w: 400,
        cor: 'azul',
        rotulo: 'frequência boa?',
        texto: ['frequencia >= 75', 'false'],
      },
      {
        id: 'e',
        x: 1010,
        y: 260,
        w: 480,
        cor: 'vermelho',
        rotulo: '&& (E)',
        texto: ['false', 'precisa dos dois'],
      },
      { id: 'ou', x: 1010, y: 470, w: 480, cor: 'verde', rotulo: '|| (OU)', texto: ['true', 'basta um'] },
    ],
    setas: [
      { de: 'a', para: 'e' },
      { de: 'b', para: 'e' },
      { de: 'a', para: 'ou' },
      { de: 'b', para: 'ou' },
    ],
    rodape: 'E o ! inverte a resposta: !true é false.',
  },
  {
    pasta: '0015-truthy-falsy',
    titulo: 'Tem valor ou não tem?',
    subtitulo: 'O ?? coloca um valor padrão quando a variável está vazia (null ou undefined).',
    ...bifurcacao({
      inicio: { rotulo: 'apelido', texto: ['undefined'] },
      pergunta: ['tem valor?'],
      sim: { rotulo: 'usa o apelido', texto: ['apelido'] },
      nao: { rotulo: 'usa o padrão', texto: ["'sem apelido'"], cor: 'amarelo' },
    }),
    rodape: [
      "Contam como falso: false, 0, '', null, undefined e NaN.",
      'Todo o resto conta como verdadeiro.',
    ],
  },
  {
    pasta: '0016-condicional-simples',
    titulo: 'O que é if?',
    subtitulo: 'O bloco só roda se a condição for verdadeira. Se não for, ele é pulado.',
    caixas: [
      { id: 'ini', x: 110, y: 380, w: 320, cor: 'azul', rotulo: 'valor', texto: ['media = 7'] },
      { id: 'p', x: 540, y: 355, w: 340, h: 200, forma: 'losango', cor: 'amarelo', texto: ['media >= 6 ?'] },
      { id: 'sim', x: 1060, y: 230, w: 430, cor: 'verde', rotulo: 'bloco do if', texto: ["'Aprovado!'"] },
      {
        id: 'fim',
        x: 1060,
        y: 520,
        w: 430,
        cor: 'cinza',
        rotulo: 'depois do if',
        texto: ['o programa segue'],
      },
    ],
    setas: [
      { de: 'ini', para: 'p' },
      { de: 'p', para: 'sim', lados: 'ce', cotovelo: true, rotulo: 'Sim', cor: 'verde' },
      { de: 'p', para: 'fim', lados: 'be', cotovelo: true, rotulo: 'Não', cor: 'vermelho' },
      { de: 'sim', para: 'fim', lados: 'bc', cor: 'cinza' },
    ],
    rodape: 'Só o caminho do Sim ganha uma tarefa a mais. O Não segue reto.',
  },
  {
    pasta: '0017-condicional-composta',
    titulo: 'O que é if / else?',
    subtitulo: 'Com o else o programa ganha um plano B: sempre um dos dois caminhos roda.',
    ...bifurcacao({
      inicio: { rotulo: 'valor', texto: ['media = 5'] },
      pergunta: ['media >= 6 ?'],
      sim: { rotulo: 'bloco do if', texto: ["'Aprovado!'"] },
      nao: { rotulo: 'bloco do else', texto: ["'Reprovado'"] },
    }),
    rodape: 'Sempre um dos dois. Nunca os dois juntos, nunca nenhum.',
  },
  {
    pasta: '0018-condicional-aninhada',
    titulo: 'Mais de dois caminhos',
    subtitulo: 'O else if testa de cima para baixo e para no primeiro Sim.',
    caixas: [
      { id: 'ini', x: 110, y: 470, w: 260, cor: 'azul', rotulo: 'valor', texto: ['media = 5'] },
      { id: 'p1', x: 450, y: 445, w: 300, h: 200, forma: 'losango', cor: 'amarelo', texto: ['media >= 6 ?'] },
      { id: 'p2', x: 850, y: 445, w: 300, h: 200, forma: 'losango', cor: 'amarelo', texto: ['media >= 4 ?'] },
      { id: 'apr', x: 450, y: 250, w: 300, h: 120, cor: 'verde', texto: ["'Aprovado'"] },
      { id: 'rec', x: 850, y: 250, w: 300, h: 120, cor: 'amarelo', texto: ["'Recuperação'"] },
      { id: 'rep', x: 1240, y: 485, w: 250, h: 120, cor: 'vermelho', texto: ["'Reprovado'"] },
    ],
    setas: [
      { de: 'ini', para: 'p1' },
      { de: 'p1', para: 'apr', rotulo: 'Sim', cor: 'verde' },
      { de: 'p1', para: 'p2', rotulo: 'Não', cor: 'vermelho' },
      { de: 'p2', para: 'rec', rotulo: 'Sim', cor: 'verde' },
      { de: 'p2', para: 'rep', rotulo: 'Não', cor: 'vermelho' },
    ],
    rodape: 'O primeiro Sim decide. O resto nem é olhado. O else final pega quem sobrou.',
  },
  {
    pasta: '0019-ternario',
    titulo: 'O que é ternário?',
    subtitulo: ['O if / else de bolso: faz uma pergunta e devolve um de dois valores.'],
    ...bifurcacao({
      inicio: { rotulo: 'valor', texto: ['media = 8'] },
      pergunta: ['media >= 6 ?'],
      sim: { rotulo: 'depois do ?', texto: ["'Aprovado'"] },
      nao: { rotulo: 'depois do :', texto: ["'Reprovado'"] },
    }),
    rodape: "const situacao = media >= 6 ? 'Aprovado' : 'Reprovado'",
  },
  {
    pasta: '0020-escolha',
    titulo: 'O que é switch?',
    subtitulo: 'Pega um valor e procura a opção igual numa lista, como o cardápio da lanchonete.',
    caixas: [
      { id: 'ini', x: 110, y: 400, w: 300, cor: 'azul', rotulo: 'digitou', texto: ['dia = 1'] },
      { id: 'sw', x: 520, y: 400, w: 340, cor: 'roxo', rotulo: 'compara', texto: ['switch (dia)'] },
      { id: 'c1', x: 1060, y: 230, w: 430, h: 130, cor: 'verde', rotulo: 'case 1', texto: ["'Domingo'"] },
      { id: 'c7', x: 1060, y: 410, w: 430, h: 130, cor: 'cinza', rotulo: 'case 7', texto: ["'Sábado'"] },
      { id: 'df', x: 1060, y: 590, w: 430, h: 130, cor: 'amarelo', rotulo: 'default', texto: ["'Dia útil'"] },
    ],
    setas: [
      { de: 'ini', para: 'sw' },
      { de: 'sw', para: 'c1', rotulo: '=== 1', cor: 'verde', dx: -90, dy: -10 },
      { de: 'sw', para: 'c7', cor: 'cinza' },
      { de: 'sw', para: 'df', rotulo: 'nenhum bateu', cor: 'cinza', dx: -150, dy: 20 },
    ],
    rodape: 'Cada case termina com break. Sem ele, o programa desce para o próximo case.',
  },
]
