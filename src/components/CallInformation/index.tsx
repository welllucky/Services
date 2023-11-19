import { ReactNode } from "react";
import { Fildset, Content, Legend, LegendText } from "./styles";

export interface ILegendProps {
	legendText?: string;
	width?: string;
	inputType?: string;
	placeholder?: string;
	height?: string;
	maxLength?: number;
	children: ReactNode;
}

export const CallInformation = ({
	legendText,
	width,
	height,
	children,
}: ILegendProps) => {
	return (
		<Fildset
			height={height}
			width={width}>
			<Legend>
				<LegendText>{legendText}</LegendText>
			</Legend>

			<Content>{children}</Content>
		</Fildset>
	);
};
