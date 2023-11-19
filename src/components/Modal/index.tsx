import { MessageSuccess, ModalContainer, ModalContet } from "./styles";
import imageContiner from "../../Images/MicrosoftTeams-image.png";
import { ReactNode } from "react";

interface ModalProps {
	isTrue: boolean;
	message?: string | ReactNode;
}

export const Modal = ({ isTrue, message }: ModalProps) => {
	if (!isTrue) return null;
	return (
		<ModalContainer isTrue={isTrue}>
			<ModalContet>
				<img
					src={imageContiner}
					alt="Fundo branco centralzado"
					width={96}
					height={96}
				/>
				<MessageSuccess>{message}</MessageSuccess>
			</ModalContet>
		</ModalContainer>
	);
};
