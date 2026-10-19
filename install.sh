#!/usr/bin/env bash
# LPPOO — Instalador do ambiente da disciplina
# CETAM Benjamin Constant
#
# Uso:
# curl -fsSL https://raw.githubusercontent.com/jhollyfer/LPPOO/main/install.sh | bash
#
# ATENÇÃO: ~/LPPOO é removida antes de baixar o projeto novamente.

set -Eeuo pipefail

REPO="${LPPOO_REPO:-https://github.com/jhollyfer/LPPOO}"
PASTA="$HOME/LPPOO"
NPM_PREFIX="$HOME/.local"
PNPM_HOME="$HOME/.local/share/pnpm"
PNPM_VERSION="12.6.0"

passo() {
  printf '\n\033[1;36m==> %s\033[0m\n' "$1"
}

erro() {
  printf '\n\033[1;31mERRO: %s\033[0m\n' "$1" >&2
  exit 1
}

# ---------------------------------------------------------------------------
passo "1/5 Verificando Node.js e configurando npm"

for comando in curl git; do
  command -v "$comando" >/dev/null 2>&1 ||
    erro "$comando não encontrado."
done

command -v node >/dev/null 2>&1 ||
  erro "Node.js não encontrado. No Arch Linux: sudo pacman -S nodejs npm"

command -v npm >/dev/null 2>&1 ||
  erro "npm não encontrado. Instale com: sudo pacman -S npm"

echo "Node: $(node -v)"
echo "npm:  $(npm -v)"

mkdir -p "$NPM_PREFIX/bin" "$NPM_PREFIX/lib" "$PNPM_HOME"

# Configura os pacotes globais para a pasta do usuário.
export NPM_CONFIG_PREFIX="$NPM_PREFIX"
npm config set prefix "$NPM_PREFIX" --location=user

export PNPM_HOME
export PATH="$PNPM_HOME:$NPM_PREFIX/bin:$PATH"
hash -r

PREFIX_ATIVO="$(npm config get prefix)"
[ "$PREFIX_ATIVO" = "$NPM_PREFIX" ] ||
  erro "Prefixo inesperado do npm: $PREFIX_ATIVO"

echo "Prefixo global do npm: $PREFIX_ATIVO"

# ---------------------------------------------------------------------------
passo "2/5 Baixando o projeto em $PASTA"

cd "$HOME"

if [ -e "$PASTA" ] || [ -L "$PASTA" ]; then
  echo "Removendo a versão anterior de $PASTA..."
  rm -rf -- "$PASTA" ||
    erro "Não foi possível remover $PASTA."
fi

git clone --depth 1 "$REPO" "$PASTA" ||
  erro "Falha ao clonar o repositório."

# ---------------------------------------------------------------------------
passo "3/5 Instalando pnpm e tsx"

# IMPORTANTE:
# Instala ferramentas fora da pasta do projeto.
# Isso impede que o npm avalie o package.json do LPPOO e rejeite
# a instalação por causa de devEngines.packageManager.

cd "$HOME"

echo "Instalando pnpm $PNPM_VERSION..."

curl -fsSL https://get.pnpm.io/install.sh |
  env PNPM_VERSION="$PNPM_VERSION" \
      PNPM_HOME="$PNPM_HOME" \
      SHELL="${SHELL:-/bin/bash}" \
      sh - ||
  erro "Falha ao instalar pnpm."

export PATH="$PNPM_HOME:$NPM_PREFIX/bin:$PATH"
hash -r

# Confere o pnpm instalado.
if [ ! -x "$PNPM_HOME/pnpm" ]; then
  erro "Executável não encontrado: $PNPM_HOME/pnpm"
fi

echo "pnpm: $("$PNPM_HOME/pnpm" --version)"

# O npm executa esta instalação a partir de HOME, não de ~/LPPOO.
# O prefixo explícito evita escrever em /usr/lib/node_modules.
echo "Instalando tsx..."

(
  cd "$HOME"
  NPM_CONFIG_PREFIX="$NPM_PREFIX" \
    npm install --global --prefix "$NPM_PREFIX" tsx
) || erro "Falha ao instalar tsx."

[ -x "$NPM_PREFIX/bin/tsx" ] ||
  erro "Executável não encontrado: $NPM_PREFIX/bin/tsx"

export PATH="$NPM_PREFIX/bin:$PNPM_HOME:$PATH"
hash -r

echo "tsx: $("$NPM_PREFIX/bin/tsx" --version | head -n 1)"

# ---------------------------------------------------------------------------
passo "4/5 Instalando as dependências do projeto"

cd "$PASTA"

"$PNPM_HOME/pnpm" install ||
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
echo "npm:  $(npm -v)"
echo "pnpm: $("$PNPM_HOME/pnpm" --version)"
echo "tsx:  $("$NPM_PREFIX/bin/tsx" --version | head -n 1)"
echo
echo "Para testar:"
echo "  $NPM_PREFIX/bin/tsx $PASTA/15102026/0001-input/A001.ts"
echo
echo "Abra um novo terminal para carregar as configurações do PATH."
