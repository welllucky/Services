import {
	ContainerDeMidia,
	FileContainer,
	IconCloseContent,
	ImageTypeFileContent,
	MidiaContainer,
	MidiaDiv,
	MidiaText,
	TypeFile,
} from "./styles";
import MidiaPhoto from "../../Images/MidiaPhoto.png";
import MidiaVideo from "../../Images/MidiaVideo.png";

import { useEffect, useState } from "react";
import close from "./svg/Close.svg";

interface MidiaProps {
	file?: File;
	fileInString?: string;
	typeFile?: string;
	titlePage?: string;
}

export const Midia = ({
	file,
	titlePage = "",
	fileInString,
	typeFile,
}: MidiaProps) => {
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

	const typeFileOrString = file ? URL.createObjectURL(file) : fileInString;

	return (
		<MidiaContainer>
			<MidiaText>{titlePage}</MidiaText>
			<MidiaDiv>
				<FileContainer onClick={() => setOpenImage(true)}>
					<TypeFile showImage={openImage}>
						<ContainerDeMidia>
							<IconCloseContent onClick={() => setOpenImage(false)}>
								<img
									src={close}
									alt="Fechar imagem"
								/>
							</IconCloseContent>
							{file?.type === "image/jpeg" ||
							file?.type === "image/png" ||
							typeFile === "Foto" ? (
									<img
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
						</ContainerDeMidia>
					</TypeFile>
					<ImageTypeFileContent>
						{file?.type === "image/jpeg" ||
						file?.type === "image/png" ||
						typeFile === "Foto" ? (
								<img
									src={MidiaPhoto}
									alt="Tipo de arquivo"
								/>
							) : (
								<img
									src={MidiaVideo}
									alt="Tipo de arquivo"
								/>
							)}
					</ImageTypeFileContent>
				</FileContainer>
			</MidiaDiv>
		</MidiaContainer>
	);
};
