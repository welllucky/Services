// import { useState, useCallback } from "react";
// import { ToolsComponent } from "../../../components/ToolsComponent";
// import { CustomButton } from "@/components";
// import {
// 	AttachMediaContainerGeneral,
// 	CentralContainer,
// 	ContainerButton,
// 	InformationToAttach,
// 	TextContainerCentral,
// 	TitlePage,
// } from "./styles";
// import backIcon from "./svg/backIcon.svg";
// import notMedia from "./svg/notMedia.svg";
// import { ImageMapComponent } from "../../../components/ImageMapComponent";
// import Image from "next/image";
// import Link from "next/link";
// import { useTheme } from "styled-components";
// import { useRouter } from "next/navigation";

// export const AttachMidia = () => {
// 	const [image, setImage] = useState<Array<File>>([]);

// 	const getImage = useCallback(
// 		(imageUrl: Array<File>) => {
// 			setImage(imageUrl);
// 		},
// 		[setImage]
// 	);
// 	const theme = useTheme();
// 	const router = useRouter();

// 	return (
// 		<AttachMediaContainerGeneral>
// 			<Link href="/AbrirChamado">
// 				<TitlePage>
// 					<Image
// 						src={backIcon}
// 						alt="Botão de voltar"
// 					/>
// 					O que aconteceu?
// 				</TitlePage>
// 			</Link>
// 			<InformationToAttach>Anexar mídia</InformationToAttach>
// 			{!image.length ? (
// 				<CentralContainer>
// 					<Image
// 						src={notMedia}
// 						alt="sem Mídia"
// 					/>
// 					<TextContainerCentral>Não há mídias no momento</TextContainerCentral>
// 				</CentralContainer>
// 			) : (
// 				image.map((img) => (
// 					<ImageMapComponent
// 						img={img}
// 						key={`${img.name} # ${img.lastModified}`}
// 					/>
// 				))
// 			)}

// 			<ToolsComponent postImage={getImage} />

// 			<ContainerButton>
// 				<CustomButton
// 					text="Próximo"
// 					onClick={() => router.push("/ConfirmarChamado")}
// 				/>
// 				<CustomButton
// 					text="Cancelar"
// 					$backgroundColor="transparent"
// 					color="#635F60;"
// 					borderColor={theme.colors.neutral[205]}
// 					onClick={() => router.push("/Home")}
// 				/>
// 			</ContainerButton>
// 		</AttachMediaContainerGeneral>
// 	);
// };
