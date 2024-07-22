import { CheckedVermelho } from "./components/CheckedVermelho";
import { Comentario } from "./components/Comentario";
import { Reticencias } from "./components/Reticencias";
import { IconeDeStatusContainer } from "./styles";

export const IconeDeStatus = () => (
  <IconeDeStatusContainer>
    <CheckedVermelho />
    <Comentario />
    <Reticencias />
  </IconeDeStatusContainer>
  );
