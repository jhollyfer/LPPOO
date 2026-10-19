#!/usr/bin/env bash
# LPPOO — Instalador da disciplina
# CETAM Benjamin Constant
#
# Uso:
#   curl -fsSL https://raw.githubusercontent.com/jhollyfer/LPPOO/main/install.sh | bash
#
# Requisitos: Node.js, curl e git.
# O pnpm e o tsx são instalados sem npm install.
#
# ATENÇÃO: ~/LPPOO é removida antes de clonar novamente.

set -Eeuo pipefail

REPO="${LPPOO_REPO:-https://github.com/jhollyfer/LPPOO}"
PASTA="$HOME/LPPOO"
PNPM_VERSION="12.6.0"
PNPM_HOME="$HOME/.local/share/pnpm"

passo() {
  printf '\n\033[1;36m==> %s\033[0m\n' "$1"
}

erro() {
  printf '\n\033[1;31mERRO: %s\033[0m\n' "$1" >&2
  exit 1
}

# ---------------------------------------------------------------------------
passo "1/5 Verificando o ambiente"

for comando in curl git node; do
  command -v "$comando" >/dev/null 2>&1 ||
    erro "$comando não encontrado."
done

echo "Sistema: $(uname -s)"
echo "Node: $(node -v)"

mkdir -p "$PNPM_HOME"

# ---------------------------------------------------------------------------
passo "2/5 Instalando pnpm $PNPM_VERSION"

# Instalação oficial do pnpm.
# Não usa npm install --global pnpm.
curl -fsSL https://get.pnpm.io/install.sh |
  env PNPM_VERSION="$PNPM_VERSION" \
      PNPM_HOME="$PNPM_HOME" \
      sh - ||
  erro "Não foi possível instalar o pnpm."

export PNPM_HOME
export PATH="$PNPM_HOME:$HOME/.local/bin:$PATH"
hash -r

if [ ! -x "$PNPM_HOME/pnpm" ]; then
  erro "pnpm não encontrado em $PNPM_HOME/pnpm."
fi

PNPM="$PNPM_HOME/pnpm"

echo "pnpm instalado: $("$PNPM" --version)"

# Configura o diretório de executáveis globais do pnpm.
"$PNPM" config set global-bin-dir "$PNPM_HOME" ||
  erro "Não foi possível configurar global-bin-dir."

# ---------------------------------------------------------------------------
passo "3/5 Instalando tsx"

# O pnpm instala o tsx. O npm não é usado para instalar pacotes.
"$PNPM" add --global tsx ||
  erro "Não foi possível instalar tsx pelo pnpm."

[ -x "$PNPM_HOME/tsx" ] ||
  erro "tsx não encontrado em $PNPM_HOME/tsx."

echo "tsx instalado: $("$PNPM_HOME/tsx" --version | head -n 1)"

# Persiste o PATH para os próximos terminais Zsh e Bash.
PATH_LINE='export PNPM_HOME="$HOME/.local/share/pnpm"; export PATH="$PNPM_HOME:$HOME/.local/bin:$PATH"'

for arquivo in "$HOME/.zshrc" "$HOME/.bashrc"; do
  touch "$arquivo"

  if ! grep -qxF "$PATH_LINE" "$arquivo"; then
    printf '\n# Ferramentas da disciplina LPPOO\n%s\n' \
      "$PATH_LINE" >> "$arquivo"
  fi
done

# ---------------------------------------------------------------------------
passo "4/5 Baixando o projeto e instalando dependências"

cd "$HOME"

if [ -e "$PASTA" ] || [ -L "$PASTA" ]; then
  echo "Removendo a versão anterior de $PASTA..."

  rm -rf -- "$PASTA" ||
    erro "Não foi possível remover $PASTA."
fi

git clone --depth 1 "$REPO" "$PASTA" ||
  erro "Falha ao clonar o repositório."

cd "$PASTA"

# O projeto usa pnpm, conforme a configuração de devEngines.
"$PNPM" install ||
  erro "Falha ao instalar as dependências do projeto."

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
  echo "Zed não encontrado. Abra $PASTA no seu editor."
fi

# ---------------------------------------------------------------------------
printf '\n\033[1;32mTudo pronto!\033[0m\n'
echo "Node: $(node -v)"
echo "pnpm: $("$PNPM" --version)"
echo "tsx:  $("$PNPM_HOME/tsx" --version | head -n 1)"
echo
echo "Teste:"
echo "  $PNPM_HOME/tsx $PASTA/15102026/0001-input/A001.ts"
echo
echo "Se necessário, abra um novo terminal para carregar o PATH."
