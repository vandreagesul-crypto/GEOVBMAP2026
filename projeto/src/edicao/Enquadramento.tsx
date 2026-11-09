import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

// Largura útil do vídeo de origem (exibido em pé: 576 × 1024 px).
const LARGURA_ORIGEM = 576;

type Props = {
  readonly zoom: number;
  // [tempo no original (s), centro do apresentador no original (px)]
  readonly pontos: ReadonlyArray<readonly [number, number]>;
  readonly children: React.ReactNode;
};

// Aplica zoom e desloca a imagem para manter o apresentador no centro,
// sem nunca mostrar borda vazia.
export const Enquadramento: React.FC<Props> = ({ zoom, pontos, children }) => {
  const frame = useCurrentFrame(); // dentro do trecho = quadro do original
  const { fps, width } = useVideoConfig();
  const t = frame / fps;
  const centro = interpolate(
    t,
    pontos.map((p) => p[0]),
    pontos.map((p) => p[1]),
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
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
