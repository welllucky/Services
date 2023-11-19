"use client";

import { ClearDisabledIcon } from "@/assets";
import iconeTets from "@/assets/Images/Clear.png";
import {
	InputContainer,
	InputComponent,
	ContentContainer,
	SupportText,
	ErrorText,
	Label,
} from "./styles";
import { Icon } from "..";
import { StaticImageData } from "next/image";
import { useState } from "react";

export interface InputStylesProps {
	$backgroundColor?: string;
	textColor?: string;
	rightIcon?: string;
	leftIcon?: string;
	borderColor?: string;
	width?: string;
	height?: string;
	placeholderColor?: string;
}

export interface ActionButton {
	onClick?: () => void;
	icon?: StaticImageData;
	secondIcon?: StaticImageData;
	size?: number;
	color?: string;
	alt?: string;
}

interface InputProps {
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value?: string;
	placeholder?: string;
	$status?: "valid" | "invalid" | "warning" | "none";
	errorText?: string;
	warnText?: string;
	labelText?: string;
	trailingButton?: ActionButton;
	leadingButton?: ActionButton;
	type: "text" | "password" | "email" | "number" | "tel" | "search" | "url";
	style?: InputStylesProps;
	width?: string;
	height?: string;
}

const CustomInput = ({
	type = "text",
	placeholder,
	$status = "none",
	labelText,
	errorText,
	onChange,
	style,
	value,
	warnText,
	leadingButton,
	trailingButton,
	width,
	height,
}: InputProps) => {
	const [inputType, setInputType] = useState(type);
	return (
		<InputContainer width={width}>
			{labelText && <Label>{labelText}</Label>}
			<ContentContainer
				$status={$status}
				height={height}>
				{leadingButton && (
					<Icon
						src={leadingButton?.icon}
						alt={leadingButton?.alt}
						onClick={leadingButton?.onClick}
						size={leadingButton?.size}
						$hasPadding
						alternate={leadingButton?.secondIcon}
					/>
				)}

				<InputComponent
					placeholder={placeholder}
					onChange={onChange}
					type={type}
					value={value}
				/>
				{trailingButton && (
					<Icon
						src={trailingButton?.icon}
						alt={trailingButton?.alt}
						onClick={trailingButton?.onClick}
						$hasPadding
						// alternate={trailingButton?.secondIcon}
					/>
				)}
				{/* <InputBottomLine /> */}
			</ContentContainer>
			{$status === "invalid" && <ErrorText>{errorText}</ErrorText>}
		</InputContainer>
	);
};

export { CustomInput };
