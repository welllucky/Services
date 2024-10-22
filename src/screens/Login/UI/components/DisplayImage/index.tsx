import Image from "next/image";
import Logo from "public/Icon.png";
import { LogoContainer } from "./styles";

export const DisplayImage = () => (
  <LogoContainer>
    <Image
      src={Logo}
      width={80}
      height={80}
      alt="Services"
    />
  </LogoContainer>
);
