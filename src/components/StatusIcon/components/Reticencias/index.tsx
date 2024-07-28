import Image from "next/image";
import reticencias from "../svg/reticencias.svg";
import { ReticenciasContainer } from "./styles";

export const Reticencias = () => (
  <ReticenciasContainer>
    <Image
      src={reticencias}
      alt="Icone de reticências"
      width={50}
      height={50}
    />
  </ReticenciasContainer>
);
