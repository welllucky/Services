import { Container, BackIcon, TextBack } from "./styles";
import { useRouter } from "next/navigation";
import arrowLeft from "@/assets/Icons/png/arrowLeft.png";
import arrowLeftRed from "@/assets/Icons/png/arrowLeftRed.png";
export interface BackButtonProps {
	actionText?: string;
	color?: string;
	fontWeight?: string;
}

export const BackButton = ({
	actionText,
	color,
	fontWeight,
}: BackButtonProps) => {
	const router = useRouter();
	return (
		<Container onClick={() => router.back()}>
			{actionText === "Login" ? (
				<BackIcon
					src={arrowLeft}
					alt="voltar"
				/>
			) : (
				<BackIcon
					src={arrowLeftRed}
					alt="voltar"
				/>
			)}
			<TextBack
				fontWeight={fontWeight}
				color={color}>
				{actionText}
			</TextBack>
		</Container>
	);
};
