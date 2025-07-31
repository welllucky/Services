"use client";

import Logo from "public/Icon.png";

import { buildTestIds } from "@/utils";
import {
  NoMobileContainer,
  NoMobileContent,
  NoMobileLogo,
  NoMobileQRCodeSection,
  NoMobileText,
  NoMobileTitle,
  QRCodeImage,
  QRCodeText,
} from "./styles";
import { noMobileDeviceTestIds } from "./testObject";

export interface NoMobileDeviceProps {
  title: string;
  text: string;
}

const { logoAlt, qrCodeAlt, qrCodeTextId, textId, titleId } =
  noMobileDeviceTestIds;

const NoMobileDevicePage = ({ text, title }: NoMobileDeviceProps) => {
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(process.env.NEXT_PUBLIC_BASE_URL || "")}`;

  return (
    <NoMobileContainer>
      <NoMobileLogo
        width={100}
        height={100}
        alt={logoAlt}
        src={Logo}
        priority
      />
      <NoMobileContent>
        <NoMobileTitle {...buildTestIds(titleId)}>{title}</NoMobileTitle>
        <NoMobileText {...buildTestIds(textId)}>{text}</NoMobileText>
      </NoMobileContent>
      <NoMobileQRCodeSection>
        <QRCodeText {...buildTestIds(qrCodeTextId)}>
          Escaneie o QR Code para acessar o Services pelo seu celular
        </QRCodeText>
        <QRCodeImage
          src={qrCodeUrl}
          alt={qrCodeAlt}
          width={160}
          height={160}
          priority
        />
      </NoMobileQRCodeSection>
    </NoMobileContainer>
  );
};

export { NoMobileDevicePage, noMobileDeviceTestIds };
