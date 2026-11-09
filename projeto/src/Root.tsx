import { Composition } from "remotion";
import { MyComposition } from "./Composition";
import { MeuPrimeiroProjeto } from "./MeuPrimeiroProjeto";
import { DURACAO_EDICAO, EdicaoVertical } from "./edicao/EdicaoVertical";
import { DURACAO_EDICAO as DURACAO_90S } from "./edicao/EdicaoInstagram90";
import { CriptoV01Base } from "./cripto/CriptoV01Base";

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
      <Composition
        id="cripto-V01-base"
        component={CriptoV01Base}
        durationInFrames={DURACAO_EDICAO}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{ versao: "base" as const }}
      />
      <Composition
        id="cripto-V01-instagram-90s"
        component={CriptoV01Base}
        durationInFrames={DURACAO_90S}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{ versao: "90s" as const }}
      />
    </>
  );
};
