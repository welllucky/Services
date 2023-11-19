import { useState, useCallback } from "react";
import { ToolsComponent } from "../../../components/ToolsComponent";
import { Button } from "../../../components/Buttons/Button";
import {
	AttachMediaContainerGeneral,
	CentralContainer,
	ContainerButton,
	InformationToAttach,
	TextContainerCentral,
	TitlePage,
} from "./styles";
import backIcon from "./svg/backIcon.svg";
import notMedia from "./svg/notMedia.svg";
import theme from "../../../styles/theme/theme";
import { ImageMapComponent } from "../../../components/ImageMapComponent";
import { Link } from "react-router-dom";

export const AttachMidia = () => {
	const [image, setImage] = useState<Array<File>>([]);

	const getImage = useCallback(
		(imageUrl: Array<File>) => {
			setImage(imageUrl);
		},
		[setImage]
	);

	return (
		<AttachMediaContainerGeneral>
			<Link to="/AbrirChamado">
				<TitlePage>
					<img
						src={backIcon}
						alt="Botão de voltar"
					/>
					O que aconteceu?
				</TitlePage>
			</Link>
			<InformationToAttach>Anexar mídia</InformationToAttach>
			{!image.length ? (
				<CentralContainer>
					<img
						src={notMedia}
						alt="sem Mídia"
					/>
					<TextContainerCentral>Não há mídias no momento</TextContainerCentral>
				</CentralContainer>
			) : (
				image.map((img) => (
					<ImageMapComponent
						img={img}
						key={`${img.name} # ${img.lastModified}`}
					/>
				))
			)}

			<ToolsComponent postImage={getImage} />

			<ContainerButton>
				<Button
					text="Próximo"
					nextPage="/ConfirmarChamado"
				/>
				<Button
					text="Cancelar"
					bg="transparent"
					color="#635F60;"
					colorBorder={theme.colors.neutral[205]}
					nextPage="/Home"
				/>
			</ContainerButton>
		</AttachMediaContainerGeneral>
	);
};
