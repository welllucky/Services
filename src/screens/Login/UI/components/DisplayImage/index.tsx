import Image from "next/image";
import Logo from "public/Icon.png";

import { LogoContainer } from "./styles";

const DisplayImage = () => (
  <LogoContainer>
    <Image
      src={Logo}
      width={160}
      height={160}
      alt="Services"
      priority
    />
  </LogoContainer>
);

export default DisplayImage;
