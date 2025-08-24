import Image from "next/image";

import checkedVermelho from "../svg/checkedVermelho.svg";
import { CheckedVermelhoContainer } from "./styles";

export const CheckedVermelho = () => (
  <CheckedVermelhoContainer>
    <Image
      src={checkedVermelho}
      alt="Icone Checked"
      width={40}
      height={40}
    />
  </CheckedVermelhoContainer>
);
