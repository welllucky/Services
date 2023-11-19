import { ChangeEventHandler, useState } from "react";
import { Fildset, TextArea, Legend, LegendText } from "./styles";

interface ILegendProps {
	legendText?: string;
	width?: string;
	placeholder?: string;
	height?: string;
	value?: string;
	onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}

export const FildsetTextArea = ({
	legendText,
	placeholder,
	width,
	height,
	value,
	onChange,
}: ILegendProps) => {
	return (
		<Fildset
			height={height}
			width={width}>
			<Legend>
				<LegendText>{legendText}</LegendText>
			</Legend>
			<TextArea
				required
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</Fildset>
	);
};
