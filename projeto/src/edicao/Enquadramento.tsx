import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

// Largura útil do vídeo de origem (exibido em pé: 576 × 1024 px).
const LARGURA_ORIGEM = 576;

// [tempo no original (s), centro do apresentador no original (px), zoom]
export type PontoEnquadramento = readonly [number, number, number];

type Props = {
  readonly pontos: ReadonlyArray<PontoEnquadramento>;
  readonly children: React.ReactNode;
};

// Aplica zoom e desloca a imagem para aproximar o apresentador do centro,
// sem nunca mostrar borda vazia.
export const Enquadramento: React.FC<Props> = ({ pontos, children }) => {
  const frame = useCurrentFrame(); // dentro do trecho = quadro do original
  const { fps, width } = useVideoConfig();
  const t = frame / fps;
  const opcoes = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
  const tempos = pontos.map((p) => p[0]);
  const centro = interpolate(t, tempos, pontos.map((p) => p[1]), opcoes);
  const zoom = interpolate(t, tempos, pontos.map((p) => p[2]), opcoes);
  const escala = width / LARGURA_ORIGEM;
  const limite = ((zoom - 1) / zoom) * (width / 2);
  const deslocamento = Math.max(
    -limite,
    Math.min(limite, (LARGURA_ORIGEM / 2 - centro) * escala),
  );
  return (
    <AbsoluteFill
      style={{ transform: `scale(${zoom}) translateX(${deslocamento}px)` }}
    >
      {children}
    </AbsoluteFill>
  );
};
