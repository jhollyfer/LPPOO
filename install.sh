#!/usr/bin/env bash
# LPPOO — Instalador para Arch Linux
# CETAM Benjamin Constant
#
# Uso:
#   curl -fsSL https://raw.githubusercontent.com/jhollyfer/LPPOO/main/install.sh | bash
#
# Etapas:
#   1. Verifica Node.js e configura npm.
#   2. Baixa o projeto em ~/LPPOO.
#   3. Instala pnpm e tsx em ~/.local.
#   4. Instala as dependências.
#   5. Abre o projeto no Zed, se disponível.
#
# ATENÇÃO: ~/LPPOO é removida antes do clone.

set -Eeuo pipefail

REPO="${LPPOO_REPO:-https://github.com/jhollyfer/LPPOO}"
PASTA="$HOME/LPPOO"
NPM_PREFIX="$HOME/.local"
NPMRC="$HOME/.npmrc"

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
  erro "Node.js não encontrado. Instale com: sudo pacman -S nodejs npm"

command -v npm >/dev/null 2>&1 ||
  erro "npm não encontrado. Instale com: sudo pacman -S npm"

echo "Node: $(node -v)"
echo "npm:  $(npm -v)"

# Usa sempre o prefixo do usuário, independentemente da configuração
# global do sistema ou do diretório de onde o script foi iniciado.
mkdir -p "$NPM_PREFIX/bin" "$NPM_PREFIX/lib"

# Define o prefixo no arquivo do usuário.
# Também será reforçado pela variável NPM_CONFIG_PREFIX abaixo.
if [ -f "$NPMRC" ]; then
  sed '/^[[:space:]]*prefix[[:space:]]*=/d' "$NPMRC" > "$NPMRC.tmp"
  printf 'prefix=%s\n' "$NPM_PREFIX" >> "$NPMRC.tmp"
  mv "$NPMRC.tmp" "$NPMRC"
else
  printf 'prefix=%s\n' "$NPM_PREFIX" > "$NPMRC"
fi

export NPM_CONFIG_PREFIX="$NPM_PREFIX"
export PATH="$NPM_PREFIX/bin:$PATH"
hash -r

PREFIX_ATIVO="$(npm config get prefix)"

echo "Prefixo global do npm: $PREFIX_ATIVO"

# Não continua se o npm ainda apontar para /usr ou outro diretório.
if [ "$PREFIX_ATIVO" != "$NPM_PREFIX" ]; then
  erro "O npm continua usando '$PREFIX_ATIVO', em vez de '$NPM_PREFIX'."
fi

# Confirma que a pasta de instalação é gravável.
if [ ! -w "$NPM_PREFIX" ] || [ ! -w "$NPM_PREFIX/bin" ]; then
  erro "Sem permissão de escrita em $NPM_PREFIX."
fi

# ---------------------------------------------------------------------------
passo "2/5 Baixando o projeto em $PASTA"

cd "$HOME"

if [ -e "$PASTA" ] || [ -L "$PASTA" ]; then
  echo "Apagando a versão antiga de $PASTA..."

  rm -rf -- "$PASTA" ||
    erro "Não foi possível remover $PASTA. Verifique as permissões."
fi

git clone --depth 1 "$REPO" "$PASTA" ||
  erro "Não foi possível clonar o repositório."

cd "$PASTA"

# ---------------------------------------------------------------------------
passo "3/5 Instalando pnpm e tsx"

# A variável de ambiente tem prioridade sobre a configuração do sistema.
# A verificação impede que a instalação volte para /usr/lib/node_modules.
export NPM_CONFIG_PREFIX="$NPM_PREFIX"

PREFIX_ATIVO="$(npm config get prefix)"
[ "$PREFIX_ATIVO" = "$NPM_PREFIX" ] ||
  erro "Prefixo inesperado antes da instalação: $PREFIX_ATIVO"

npm install --global pnpm tsx ||
  erro "Falha ao instalar pnpm e tsx em $NPM_PREFIX."

hash -r

[ -x "$NPM_PREFIX/bin/pnpm" ] ||
  erro "pnpm não foi encontrado em $NPM_PREFIX/bin."

[ -x "$NPM_PREFIX/bin/tsx" ] ||
  erro "tsx não foi encontrado em $NPM_PREFIX/bin."

echo "pnpm: $("$NPM_PREFIX/bin/pnpm" --version)"
echo "tsx:  $("$NPM_PREFIX/bin/tsx" --version | head -n 1)"

# ---------------------------------------------------------------------------
passo "4/5 Instalando as dependências do projeto"

"$NPM_PREFIX/bin/pnpm" install ||
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
echo "pnpm: $("$NPM_PREFIX/bin/pnpm" --version)"
echo "tsx:  $("$NPM_PREFIX/bin/tsx" --version | head -n 1)"
echo
echo "Para testar:"
echo "  $NPM_PREFIX/bin/tsx $PASTA/15102026/0001-input/A001.ts"
echo
echo "Os executáveis globais ficam em: $NPM_PREFIX/bin"
echo "Se necessário, adicione ~/.local/bin ao PATH do seu shell."
