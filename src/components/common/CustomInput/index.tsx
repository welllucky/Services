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
	WarningText,
} from "./styles";
import { Icon } from "../..";
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
	mode?: "filled" | "outlined";
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
	type?: "text" | "password" | "email" | "number" | "tel" | "search" | "url" | "date";
	style?: InputStylesProps;
	width?: string;
	height?: string;
	mode?: "filled" | "outlined";
}

const CustomInput = ({
	type = "text",
	placeholder = "Digite aqui",
	$status = "none",
	labelText,
	errorText = "Houve um erro, tente novamente!",
	onChange,
	style,
	value,
	warnText,
	mode = "filled",
	leadingButton,
	trailingButton,
	width,
	height,
}: InputProps) => {
	const [inputType, setInputType] = useState(type);
	return (
		<InputContainer width={width}>
			{labelText && <Label mode={mode}>{labelText}</Label>}
			<ContentContainer
				backgroundColor={style?.$backgroundColor}
				mode={mode}
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
			{$status === "warning" && <WarningText>{warnText}</WarningText>}
		</InputContainer>
	);
};

const OutlinedInput = (props: InputProps) => {
	return (
		<CustomInput
			{...props}
			mode="outlined"
			height={props.height || "56px"}
			labelText={props.labelText || "Label"}
			type={props.type || "text"}
			placeholder={props.placeholder || "Placeholder"}
		/>
	);
};

export { CustomInput, OutlinedInput };
