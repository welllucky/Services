import { useEffect, useState } from "react";
import {
	ButtonAction,
	ButtonActionContainer,
	FileContainer,
	IconCloseContent,
	ImageMapContainer,
	ImageTypeFileContent,
	Title,
	TypeFile,
} from "./styles";
// import iconFileImage from "./svg/background.svg";
import iconRestart from "./svg/Restart.svg";
import iconTrash from "./svg/Trash.svg";
import close from "./svg/Close.svg";
import iconTypeImage from "./svg/image.png";
import iconTypeVideo from "./svg/video.png";

interface ImageMapComponentProps {
	img: File;
}

export const ImageMapComponent = ({ img }: ImageMapComponentProps) => {
	const [openImage, setOpenImage] = useState<boolean>(false);

	useEffect(() => {
		const escDown = (event: KeyboardEvent) => {
			if (event.keyCode === 27) setOpenImage(false);
		};

		const handleClickTouch = () => {
			setOpenImage(false);
		};
		window.addEventListener("touchend", handleClickTouch);
		window.addEventListener("keyup", escDown);
	}, [setOpenImage]);

	const image = URL.createObjectURL(img as unknown as Blob);

	return (
		<ImageMapContainer>
			<FileContainer onClick={() => setOpenImage(true)}>
				<TypeFile showImage={openImage}>
					<IconCloseContent onClick={() => setOpenImage(false)}>
						<img
							src={close}
							alt="Fechar imagem"
						/>
					</IconCloseContent>
					{img.type === "image" ? (
						<img
							src={image}
							width={350}
							height={170}
							alt="Pegar arquivo"
						/>
					) : (
						<video
							width={350}
							height={170}
							controls>
							<source
								src={image}
								type="video/mp4"
							/>
							<track
								kind="subtitles"
								srcLang="pt-br"
								label="Português"
							/>
						</video>
					)}
				</TypeFile>
				<ImageTypeFileContent>
					{img.type === "image" ? (
						<img
							src={iconTypeImage}
							alt="Tipo de arquivo"
						/>
					) : (
						<img
							src={iconTypeVideo}
							alt="Tipo de arquivo"
						/>
					)}
				</ImageTypeFileContent>
			</FileContainer>
			<Title>{img.name}</Title>
			<ButtonActionContainer>
				<ButtonAction radiusRightTop="10px">
					<img
						src={iconRestart}
						alt="Botão para atualizar"
					/>
				</ButtonAction>
				<ButtonAction
					radiusRightBottom="10px"
					borderTop="#000"
					alignItems="flex-end"
					onClick={() => img.slice()}>
					<img
						src={iconTrash}
						alt="Botão para Excluir"
					/>
				</ButtonAction>
			</ButtonActionContainer>
		</ImageMapContainer>
	);
};
