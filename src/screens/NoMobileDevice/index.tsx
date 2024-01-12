import { useState } from "react";
import {
  NoMobileContainer,
  NoMobileContent,
  NoMobileLogo,
  NoMobileQRCodeSection,
  NoMobileText,
  NoMobileTitle,
  QRCodeImage,
  QRCodeText
} from "./styles";
import { TextTheme } from "@/types";
import { getTextTheme } from "./themeTitle";
import { useEffectOnce } from "usehooks-ts";
import qrCode from "@/assets/Images/qrcode_fcservices.pixelsquad.tech.png";

const NoMobileDevice = () => {
  const [theme, setTheme] = useState<TextTheme>({} as TextTheme);
  useEffectOnce(() => {
    const { titulo, texto } = getTextTheme();
    setTheme({ titulo: titulo, texto: texto });
  });

  return (
    <NoMobileContainer>
      <NoMobileLogo
        width={100}
        height={100}
        alt="Services logo"
        src="/android-chrome-512x512.png"
        priority
      />
      <NoMobileContent>
        <NoMobileTitle>{theme?.titulo}</NoMobileTitle>
        <NoMobileText>{theme?.texto}</NoMobileText>
      </NoMobileContent>
      <NoMobileQRCodeSection>
        <QRCodeText>
          Escaneie o QR Code para acessar o Services pelo seu celular
        </QRCodeText>
        <QRCodeImage
          src={qrCode}
          alt="QR Code"
          width={160}
          height={160}
          priority
        />
      </NoMobileQRCodeSection>
    </NoMobileContainer>
  );
};

export { NoMobileDevice };
