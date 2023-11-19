import { InputCode } from "./InputCode";
import { useState, useEffect } from "react";
import { InputCodeValidationContainer } from "./styles";

interface InputBoxValidationProps {
	height?: string;
	width?: string;
	// eslint-disable-next-line no-unused-vars
	getInputValue: (e: string) => void;
}

export const InputBoxValidation = ({
	height,
	width,
	getInputValue,
}: InputBoxValidationProps) => {
	const [cleancode, setCleancode] = useState("");
	useEffect(() => {
		getInputValue(cleancode);
	}, [cleancode, getInputValue]);
	return (
		<InputCodeValidationContainer>
			<InputCode
				height={height}
				width={width}
				length={4}
				getInputValue={(e: string) => setCleancode(e)}
			/>
		</InputCodeValidationContainer>
	);
};
