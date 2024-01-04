import { IconButtonProps } from "@/types";
import { CustomButton, CustomButtonAsLink, IconButtonWrapper } from "./styles";
import Image from "next/image";

const IconButton = ({
	icon,
	path,
	onClick,
	onHover,
	alt = "ícone",
	color = "#000000",
	width = "16",
	height = "16",
}: IconButtonProps) => {
	return (
		<IconButtonWrapper>
			{path && !onClick ? (
				<CustomButtonAsLink
					color={color}
					href={path}
					width={width}
					height={height}
					onHover={onHover}>
					<Image
						src={icon}
						alt={alt}
					/>
				</CustomButtonAsLink>
			) : (
				<CustomButton
					color={color}
					width={width}
					height={height}
					onHover={onHover}
					onClick={onClick}>
					<Image
						src={icon}
						alt={alt}
					/>
				</CustomButton>
			)}
		</IconButtonWrapper>
	);
};

export { IconButton };
