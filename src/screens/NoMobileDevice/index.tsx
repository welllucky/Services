"use client";

import Logo from "public/Icon.png";

import { buildTestIds } from "@/utils";
import qrCode from "public/qr-code.png";
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

const NoMobileDevicePage = ({ text, title }: NoMobileDeviceProps) => (
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
        src={qrCode}
        alt={qrCodeAlt}
        width={160}
        height={160}
        priority
      />
    </NoMobileQRCodeSection>
  </NoMobileContainer>
);

export { NoMobileDevicePage, noMobileDeviceTestIds };
