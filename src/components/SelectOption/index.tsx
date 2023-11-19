import { ChangeEventHandler, ReactNode } from "react";
import { Fildset, Legend, LegendText, TextArea } from "./styles";

export interface ILegendProps {
	legendText?: string;
	width?: string;
	placeholder?: string;
	height?: string;
	children?: ReactNode;
	onChange?: ChangeEventHandler<HTMLSelectElement>;
	value?: string;
}

export const SelectOption = ({
	legendText,
	placeholder,
	width,
	height,
	children,
	value,
	onChange,
}: ILegendProps) => {
	return (
		<Fildset
			height={height}
			width={width}>
			width={width}>
			<Legend>
				<LegendText>{legendText}</LegendText>
			</Legend>
			<TextArea
				onChange={onChange}
				required
				value={value}
				name={placeholder}>
				{children}
			</TextArea>
		</Fildset>
	);
};





