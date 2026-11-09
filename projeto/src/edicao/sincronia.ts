import transcricao from "../../dados/transcricao.json";
import plano from "../../dados/plano_cortes.json";
import plano90 from "../../dados/plano_cortes_90s.json";

// Sincroniza inserções pela fala real: localiza palavras na transcrição
// (tempos do original) e converte para o tempo da edição (após os cortes).

type Palavra = { readonly w: string; readonly s: number; readonly e: number };

const PALAVRAS: ReadonlyArray<Palavra> = (
  transcricao as ReadonlyArray<{ words: ReadonlyArray<Palavra> }>
).flatMap((seg) => seg.words);

export type Trechos = ReadonlyArray<readonly [number, number]>;
export const TRECHOS_V01 = plano.trechos as unknown as Trechos;
export const TRECHOS_90S = plano90.trechos as unknown as Trechos;

const normalizar = (texto: string) =>
  texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9 ]/g, " ")
    .split(/\s+/)
    .filter(Boolean);

// Encontra a n-ésima ocorrência (1 = primeira) de uma frase falada.
export const localizarFala = (frase: string, ocorrencia = 1) => {
  const alvo = normalizar(frase);
  const tokens = PALAVRAS.map((p) => normalizar(p.w).join(""));
  let achadas = 0;
  for (let i = 0; i + alvo.length <= tokens.length; i++) {
    if (alvo.every((t, k) => tokens[i + k] === t) && ++achadas === ocorrencia) {
      return { inicio: PALAVRAS[i].s, fim: PALAVRAS[i + alvo.length - 1].e };
    }
  }
  throw new Error(`Fala não encontrada na transcrição: "${frase}" (${ocorrencia}ª)`);
};

// Converte um tempo do original (s) para o quadro correspondente na edição.
export const quadroNaEdicao = (tOriginal: number, fps: number, trechos: Trechos) => {
  let acumulado = 0;
  for (const [a, b] of trechos) {
    const fa = Math.round(a * fps);
    const fb = Math.round(b * fps);
    const f = Math.round(tOriginal * fps);
    if (f < fa) return acumulado; // caiu num corte: vai para o início do próximo trecho
    if (f <= fb) return acumulado + (f - fa);
    acumulado += fb - fa;
  }
  return acumulado;
};
