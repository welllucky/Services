import { CheckedVermelho } from "./components/CheckedVermelho";
import { Comentario } from "./components/Comentario";
import { Reticencias } from "./components/Reticencias";
import { IconeDeStatusContainer } from "./styles";

export function IconeDeStatus() {
  return (
    <IconeDeStatusContainer>
      <CheckedVermelho />
      <Comentario />
      <Reticencias />
    </IconeDeStatusContainer>
  );
}
