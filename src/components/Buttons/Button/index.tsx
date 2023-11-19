import Image, { StaticImageData } from "next/image";
import { ButtonComponent, ButtonContainer } from "./styles";

export interface CustomButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text?: string;
	color?: string;
	$backgroundColor?: string;
	borderColor?: string;
	onClick?: () => void;
	disabled?: boolean;
	icon?: StaticImageData;
	iconSize?: number;
	alt?: string;
	width?: string | number;
	height?: string | number;
}

export const CustomButton = ({
	text = "button",
	$backgroundColor = "grey",
	color = "black",
	borderColor,
	disabled = false,
	onClick,
	icon,
	iconSize = 20,
	alt,
	width,
	height,
	...props
}: CustomButtonProps) => {
	return (
		<ButtonContainer
			$backgroundColor={$backgroundColor}
			borderColor={borderColor}
			disabled={disabled}
			width={width}
			height={height}
			{...props}>
			<ButtonComponent
				onClick={onClick}
				disabled={disabled}
				color={color}
				{...props}>
				{icon && (
					<Image
						src={icon}
						alt={alt as string}
						width={iconSize}
						height={iconSize}
					/>
				)}
				{text}
			</ButtonComponent>
		</ButtonContainer>
	);
};
