import Image from "next/image";
import comentario from "../svg/comentario.svg";
import { ComentarioContainer } from "./styles";

export const Comentario = () => (
  <ComentarioContainer>
    <Image
      src={comentario}
      alt="Icone de comentário"
      width={40}
      height={40}
    />
  </ComentarioContainer>
);
