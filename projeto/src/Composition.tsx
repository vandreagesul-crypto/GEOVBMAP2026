import { AbsoluteFill, CalculateMetadataFunction, Composition } from "remotion";

// Formato vertical padrão (Reels, Shorts, TikTok, Stories)
export const VERTICAL = {
  width: 1080,
  height: 1920,
  fps: 30,
} as const;

type Props = {};

const calculateMetadata: CalculateMetadataFunction<Props> = () => {
  return {};
};

export const MyComposition = () => {
  return (
    <Composition
      id="Vertical"
      component={MyComponent}
      durationInFrames={VERTICAL.fps * 5}
      fps={VERTICAL.fps}
      width={VERTICAL.width}
      height={VERTICAL.height}
      calculateMetadata={calculateMetadata}
    />
  );
};

// Tela base vazia: a edição ainda não foi criada.
export const MyComponent: React.FC<Props> = () => {
  return <AbsoluteFill style={{ backgroundColor: "black" }} />;
};
