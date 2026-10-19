#!/usr/bin/env bash
# LPPOO — Instalador do ambiente da disciplina
# CETAM Benjamin Constant — Arch Linux, Zsh e outros shells.
#
# Uso:
#   curl -fsSL https://raw.githubusercontent.com/jhollyfer/LPPOO/main/install.sh | bash
#
# ATENÇÃO:
# Este instalador remove ~/LPPOO antes de clonar novamente.
# Faça backup dos seus arquivos pessoais antes de executar.

set -Eeuo pipefail

REPO="${LPPOO_REPO:-https://github.com/jhollyfer/LPPOO}"
PASTA="$HOME/LPPOO"
NPM_PREFIX="$HOME/.local"
PNPM_HOME="${PNPM_HOME:-$HOME/.local/share/pnpm}"
PNPM_VERSION="12.6.0"

passo() {
  printf '\n\033[1;36m==> %s\033[0m\n' "$1"
}

erro() {
  printf '\n\033[1;31mERRO: %s\033[0m\n' "$1" >&2
  exit 1
}

# ---------------------------------------------------------------------------
passo "1/5 Verificando Node.js e configurando o ambiente"

for comando in curl git; do
  command -v "$comando" >/dev/null 2>&1 ||
    erro "$comando não encontrado."
done

command -v node >/dev/null 2>&1 ||
  erro "Node.js não encontrado. No Arch Linux, instale com: sudo pacman -S nodejs npm"

command -v npm >/dev/null 2>&1 ||
  erro "npm não encontrado. Instale com: sudo pacman -S npm"

echo "Node: $(node -v)"
echo "npm:  $(npm -v)"

mkdir -p "$NPM_PREFIX/bin" "$NPM_PREFIX/lib" "$PNPM_HOME"

# Configura o npm para instalar pacotes globais na pasta do usuário.
export NPM_CONFIG_PREFIX="$NPM_PREFIX"
npm config set prefix "$NPM_PREFIX" --location=user

# Persiste o PATH para Zsh e Bash.
PATH_LINE='export PATH="$HOME/.local/bin:$HOME/.local/share/pnpm:$PATH"'

for arquivo in "$HOME/.zshrc" "$HOME/.bashrc"; do
  touch "$arquivo"
  if ! grep -qxF "$PATH_LINE" "$arquivo"; then
    printf '\n# Ferramentas da disciplina LPPOO\n%s\n' \
      "$PATH_LINE" >> "$arquivo"
  fi
done

export PATH="$NPM_PREFIX/bin:$PNPM_HOME:$PATH"
hash -r

PREFIX_ATIVO="$(npm config get prefix)"
[ "$PREFIX_ATIVO" = "$NPM_PREFIX" ] ||
  erro "Prefixo do npm incorreto: $PREFIX_ATIVO"

echo "Prefixo global do npm: $PREFIX_ATIVO"

# ---------------------------------------------------------------------------
passo "2/5 Baixando o projeto em $PASTA"

cd "$HOME"

if [ -e "$PASTA" ] || [ -L "$PASTA" ]; then
  echo "Removendo a versão anterior de $PASTA..."
  rm -rf -- "$PASTA" ||
    erro "Não foi possível remover $PASTA. Verifique as permissões."
fi

git clone --depth 1 "$REPO" "$PASTA" ||
  erro "Falha ao clonar o repositório."

cd "$PASTA"

# ---------------------------------------------------------------------------
passo "3/5 Instalando pnpm e tsx"

# Instala o pnpm pelo instalador oficial, evitando npm install pnpm.
echo "Instalando pnpm $PNPM_VERSION..."

curl -fsSL https://get.pnpm.io/install.sh |
  env PNPM_VERSION="$PNPM_VERSION" SHELL="$(command -v zsh || command -v bash)" sh - ||
  erro "Falha ao instalar pnpm."

# O instalador pode atualizar arquivos de configuração do shell.
export PNPM_HOME
export PATH="$PNPM_HOME:$NPM_PREFIX/bin:$PATH"
hash -r

# Confere se o pnpm foi instalado.
if ! command -v pnpm >/dev/null 2>&1; then
  if [ -x "$PNPM_HOME/pnpm" ]; then
    export PATH="$PNPM_HOME:$PATH"
  else
    erro "pnpm não encontrado após a instalação."
  fi
fi

echo "pnpm instalado: $(pnpm --version)"

# Instala somente tsx via npm, com prefixo explícito do usuário.
echo "Instalando tsx..."

NPM_CONFIG_PREFIX="$NPM_PREFIX" \
  npm install --global --prefix "$NPM_PREFIX" tsx ||
  erro "Falha ao instalar tsx."

export PATH="$NPM_PREFIX/bin:$PNPM_HOME:$PATH"
hash -r

command -v tsx >/dev/null 2>&1 ||
  erro "tsx não foi encontrado em $NPM_PREFIX/bin."

echo "tsx instalado: $(tsx --version | head -n 1)"

# ---------------------------------------------------------------------------
passo "4/5 Instalando as dependências do projeto"

# O pnpm é o gerenciador de pacotes deste projeto.
pnpm install ||
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
echo "pnpm: $(pnpm --version)"
echo "tsx:  $(tsx --version | head -n 1)"
echo
echo "Para testar:"
echo "  tsx ~/LPPOO/15102026/0001-input/A001.ts"
echo
echo "Abra um novo terminal para carregar o PATH atualizado."
