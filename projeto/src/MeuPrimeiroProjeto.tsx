import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

// Título com entrada suave (fade + subida) — único componente que depende do quadro.
const Titulo: React.FC<{ readonly texto: string }> = ({ texto }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrada = interpolate(frame, [0, 1 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <Interactive.Div
      name="Título"
      style={{
        opacity: entrada,
        translate: `0 ${interpolate(entrada, [0, 1], [60, 0])}px`,
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: 110,
        fontWeight: 700,
        lineHeight: 1.1,
        color: "#ffffff",
        textAlign: "center",
      }}
    >
      {texto}
    </Interactive.Div>
  );
};

export const MeuPrimeiroProjeto: React.FC<{ readonly texto: string }> = ({
  texto,
}) => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0f172a",
        justifyContent: "center",
        alignItems: "center",
        // Área de segurança: 80 px nas laterais, 100 px em cima e embaixo
        padding: "100px 80px",
      }}
    >
      <Titulo texto={texto} />
    </AbsoluteFill>
  );
};
