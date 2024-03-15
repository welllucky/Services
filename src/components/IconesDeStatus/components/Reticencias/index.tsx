import { ReticenciasContainer } from "./styles";
import reticencias from "../svg/reticencias.svg";

export function Reticencias() {
  return (
    <ReticenciasContainer>
      <img
        src={reticencias}
        alt="Icone de reticências"
        width={50}
        height={50}
      />
    </ReticenciasContainer>
  );
}
