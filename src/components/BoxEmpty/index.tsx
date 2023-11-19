import { BoxEmptyProps } from "@/types";
import EmptyBox from "@/assets/Images/EmptyBox.png";
import { RequestsEmpty, RequestsTitle } from "./styles";
import Image from "next/image";

export const BoxEmpty = ({
	title,
	icon,
	alt,
	color,
	fontSize,
}: BoxEmptyProps) => {
	return (
		<RequestsEmpty>
			<Image
				src={icon || EmptyBox}
				alt={alt || "caixa vazia"}
			/>
			<RequestsTitle
				color={color}
				fontSize={fontSize}>
				{title}
			</RequestsTitle>
		</RequestsEmpty>
	);
};
