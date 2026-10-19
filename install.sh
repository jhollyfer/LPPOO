#!/usr/bin/env bash
# Instala ou atualiza o ambiente da disciplina LPPOO
# CETAM Benjamin Constant.
#
# Uso:
#   curl -fsSL https://raw.githubusercontent.com/jhollyfer/LPPOO/main/install.sh | bash
#
# Etapas:
#   1. Verifica o Node.js e prepara o npm.
#   2. Baixa o projeto em ~/LPPOO.
#   3. Instala pnpm e tsx globalmente, sem sudo.
#   4. Instala as dependências do projeto.
#   5. Abre o projeto no Zed, se estiver instalado.
#
# ATENÇÃO:
# A pasta ~/LPPOO é removida antes de baixar o projeto novamente.

set -Eeuo pipefail

REPO="${LPPOO_REPO:-https://github.com/jhollyfer/LPPOO}"
PASTA="$HOME/LPPOO"
NPM_PREFIX="$HOME/.local"

passo() {
  printf '\n\033[1;36m==> %s\033[0m\n' "$1"
}

erro() {
  printf '\n\033[1;31mERRO: %s\033[0m\n' "$1" >&2
  exit 1
}

# ---------------------------------------------------------------------------
passo "1/5 Verificando Node.js e configurando npm"

command -v curl >/dev/null 2>&1 ||
  erro "curl não encontrado. Instale com: sudo pacman -S curl"

command -v git >/dev/null 2>&1 ||
  erro "git não encontrado. Instale com: sudo pacman -S git"

command -v node >/dev/null 2>&1 ||
  erro "Node.js não encontrado. Instale com: sudo pacman -S nodejs npm"

command -v npm >/dev/null 2>&1 ||
  erro "npm não encontrado. Instale com: sudo pacman -S npm"

echo "Node $(node -v)"
echo "npm $(npm -v)"

# Usa uma pasta gravável pelo usuário para pacotes globais.
mkdir -p "$NPM_PREFIX/bin" ||
  erro "Não foi possível criar $NPM_PREFIX/bin"

npm config set prefix "$NPM_PREFIX" ||
  erro "Não foi possível configurar o prefix do npm."

# Atualiza o PATH desta execução.
export PATH="$NPM_PREFIX/bin:$PATH"
hash -r

# Persiste o PATH no arquivo de configuração do shell do usuário.
# Compatível com Zsh e Bash.
adicionar_path() {
  local arquivo="$1"
  local linha='export PATH="$HOME/.local/bin:$PATH"'

  [ -n "$arquivo" ] || return 0

  touch "$arquivo" ||
    erro "Não foi possível atualizar $arquivo"

  if ! grep -qxF "$linha" "$arquivo"; then
    printf '\n# Ferramentas globais do npm\n%s\n' "$linha" >> "$arquivo"
  fi
}

adicionar_path "$HOME/.zshrc"
adicionar_path "$HOME/.bashrc"
adicionar_path "$HOME/.profile"

echo "Prefixo global do npm: $(npm config get prefix)"

# ---------------------------------------------------------------------------
passo "2/5 Baixando o projeto em $PASTA"

cd "$HOME"

if [ -e "$PASTA" ] || [ -L "$PASTA" ]; then
  echo "Apagando a versão anterior de $PASTA..."

  rm -rf -- "$PASTA" ||
    erro "Não foi possível remover $PASTA. Verifique as permissões."
fi

git clone --depth 1 "$REPO" "$PASTA" ||
  erro "Falha ao clonar o repositório."

cd "$PASTA"

# ---------------------------------------------------------------------------
passo "3/5 Instalando pnpm e tsx"

# Não usar sudo: o prefixo do npm já aponta para ~/.local.
npm install --global pnpm tsx ||
  erro "Falha ao instalar pnpm e tsx."

hash -r

# Verifica se os executáveis foram instalados.
[ -x "$NPM_PREFIX/bin/pnpm" ] ||
  erro "Executável pnpm não encontrado em $NPM_PREFIX/bin"

[ -x "$NPM_PREFIX/bin/tsx" ] ||
  erro "Executável tsx não encontrado em $NPM_PREFIX/bin"

# ---------------------------------------------------------------------------
passo "4/5 Instalando as dependências do projeto"

"$NPM_PREFIX/bin/pnpm" install ||
  erro "Falha ao instalar as dependências com pnpm."

# ---------------------------------------------------------------------------
passo "5/5 Abrindo no editor"

editor=""

for candidato in zed zeditor zededitor; do
  if command -v "$candidato" >/dev/null 2>&1; then
    editor="$candidato"
    break
  fi
done

if [ -n "$editor" ]; then
  echo "Abrindo $PASTA no $editor."
  nohup "$editor" "$PASTA" >/dev/null 2>&1 &
else
  echo "Zed não encontrado. Abra a pasta $PASTA no seu editor."
fi

# ---------------------------------------------------------------------------
printf '\n\033[1;32mTudo pronto!\033[0m\n'
echo "Node: $(node -v)"
echo "npm:  $(npm -v)"
echo "pnpm: $("$NPM_PREFIX/bin/pnpm" --version)"
echo "tsx:  $("$NPM_PREFIX/bin/tsx" --version | head -n 1)"
echo
echo "Para testar:"
echo "  $HOME/.local/bin/tsx $HOME/LPPOO/15102026/0001-input/A001.ts"
echo
echo "Se pnpm ou tsx não forem encontrados em um terminal novo,"
echo "confira se ~/.local/bin está no PATH."
