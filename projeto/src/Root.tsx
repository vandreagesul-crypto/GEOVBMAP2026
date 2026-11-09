import { Composition } from "remotion";
import { MyComposition } from "./Composition";
import { MeuPrimeiroProjeto } from "./MeuPrimeiroProjeto";
import { DURACAO_EDICAO, EdicaoVertical } from "./edicao/EdicaoVertical";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <MyComposition />
      <Composition
        id="MeuPrimeiroProjeto"
        component={MeuPrimeiroProjeto}
        durationInFrames={150}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{ texto: "Meu primeiro projeto" }}
      />
      <Composition
        id="EdicaoVertical"
        component={EdicaoVertical}
        durationInFrames={DURACAO_EDICAO}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
