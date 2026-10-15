import { Composition } from "remotion";
import { execucoes } from "./execucoes";
import { ALTURA, Fluxograma, LARGURA } from "./Fluxograma";
import { grafos } from "./grafos";
import { montarLinha } from "./timeline";

// Uma composição por pasta da aula. O id é o nome da pasta.
export const RemotionRoot: React.FC = () => {
  return (
    <>
      {Object.keys(grafos).map((pasta) => (
        <Composition
          key={pasta}
          id={pasta}
          component={Fluxograma}
          durationInFrames={montarLinha(grafos[pasta], execucoes[pasta]).duracao}
          fps={30}
          width={LARGURA}
          height={ALTURA}
          defaultProps={{ pasta }}
        />
      ))}
    </>
  );
};
