import {
	ContainerDeMediaPreview,
	FileContainer,
	IconCloseContent,
	ImageTypeFileContent,
	MediaPreviewContainer,
	MediaPreviewDiv,
	MediaPreviewText,
	TypeFile,
} from "./styles";
// import MediaPreviewPhoto from "../../Images/MidiaPhoto.png";
// import MediaPreviewVideo from "../../Images/MidiaVideo.png";

import { useEffect, useState } from "react";
import close from "./svg/Close.svg";
import Image from "next/image";

interface MediaPreviewProps {
	file?: File;
	fileInString?: string;
	typeFile?: string;
	titlePage?: string;
}

export const MediaPreview = ({
	file,
	titlePage = "",
	fileInString,
	typeFile,
}: MediaPreviewProps) => {
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

	return (
		<MediaPreviewContainer>
			<MediaPreviewText>{titlePage}</MediaPreviewText>
			<MediaPreviewDiv>
				<FileContainer onClick={() => setOpenImage(true)}>
					<TypeFile showImage={openImage}>
						{/* <ContainerDeMediaPreview>
							<IconCloseContent onClick={() => setOpenImage(false)}>
								<Image
									src={close}
									alt="Fechar imagem"
								/>
							</IconCloseContent>
							{file?.type === "image/jpeg" ||
							file?.type === "image/png" ||
							typeFile === "Foto" ? (
								<Image
									src={typeFileOrString}
									width={250}
									height={150}
									alt="Pegar arquivo"
								/>
							) : (
								<video
									width={250}
									height={150}
									controls>
									<source
										src={typeFileOrString}
										type="video"
									/>
									<track
										kind="subtitles"
										srcLang="pt-br"
										label="Português"
									/>
								</video>
							)}
						</ContainerDeMediaPreview> */}
					</TypeFile>
					{/* <ImageTypeFileContent>
						{file?.type === "image/jpeg" ||
						file?.type === "image/png" ||
						typeFile === "Foto" ? (
							<Image
								src={MediaPreviewPhoto}
								alt="Tipo de arquivo"
							/>
						) : (
							<Image
								src={MediaPreviewVideo}
								alt="Tipo de arquivo"
							/>
						)}
					</ImageTypeFileContent> */}
				</FileContainer>
			</MediaPreviewDiv>
		</MediaPreviewContainer>
	);
};
