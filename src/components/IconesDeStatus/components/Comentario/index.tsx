import { ComentarioContainer } from "./styles";
import comentario from "../svg/comentario.svg";

export function Comentario() {
  return (
    <ComentarioContainer>
      <img src={comentario} alt="Icone de comentário" width={40} height={40} />
    </ComentarioContainer>
  );
}
