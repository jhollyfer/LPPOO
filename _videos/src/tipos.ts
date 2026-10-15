export type TipoNo = "terminal" | "io" | "proc" | "dec";

export type No = { id: string; tipo: TipoNo; texto: string };
export type Seta = { de: string; para: string; rotulo: string | null };
export type Grafo = { titulo: string; nos: No[]; setas: Seta[] };

// Um passo da execução: o programa chega no nó `no`.
export type Passo = {
  no: string;
  entrada?: string; // o que o usuário digitou (nós de leitura)
  saida?: string; // o que aparece no terminal (nós de saída)
  vars?: Record<string, string>; // variáveis que mudaram neste passo
  teste?: string; // conta da decisão, ex.: "5 >= 6"
  resultado?: boolean; // resultado da decisão
};

export type Execucao = { titulo: string; passos: Passo[] };
