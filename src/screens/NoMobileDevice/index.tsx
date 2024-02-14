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
import qrCode from "@/assets/Images/qrcode_fcservices.pixelsquad.tech.png";
import { getTextTheme } from "./themeTitle";
import { useEffect, useState } from "react";
import { TextTheme } from "@/assets";

const NoMobileDevicePage = () => {
  const [theme, setTheme] = useState<TextTheme>({} as unknown as TextTheme);
  const { title, text } = theme;
  useEffect(() => {
    setTheme({ ...getTextTheme() });
  }, []);

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
        <NoMobileTitle>{title}</NoMobileTitle>
        <NoMobileText>{text}</NoMobileText>
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

export { NoMobileDevicePage };
