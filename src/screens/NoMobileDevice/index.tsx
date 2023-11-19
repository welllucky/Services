import { useState } from "react";
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
import { TextTheme } from "@/types";
import { getTextTheme } from "./themeTitle";
import { useEffectOnce } from "usehooks-ts";
import fcRedLogo from "@/assets/Images/fcLogoRed.svg";
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
				src={fcRedLogo}
				alt="FC Logo"
				width={80}
				height={80}
        priority
			/>
			<NoMobileContent>
				<NoMobileTitle>{theme?.titulo}</NoMobileTitle>
				<NoMobileText>{theme?.texto}</NoMobileText>
			</NoMobileContent>
			<NoMobileQRCodeSection>
				<QRCodeText>Escaneie o QR Code para acessar o FC Services pelo seu celular</QRCodeText>
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
