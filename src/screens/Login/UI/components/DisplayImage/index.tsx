import Image from "next/image";
import Logo from "public/Icon.png";
import { LogoContainer } from "./styles";

const DisplayImage = () => (
  <LogoContainer>
    <Image
      src={Logo}
      width={80}
      height={80}
      alt="Services"
      priority
    />
  </LogoContainer>
);

export default DisplayImage;
