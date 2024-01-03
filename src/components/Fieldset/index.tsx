import { Fieldset, Legend, LegendText } from "./styles";

export type FieldsetProps = {
	children: React.ReactNode;
	labelText: string;
	width?: string;
	height?: string;
};

const CustomFieldset = ({
	children,
	labelText,
	height,
	width,
}: FieldsetProps) => {
	return (
		<Fieldset
			width={width}
			height={height}>
			<Legend>
				<LegendText>{labelText}</LegendText>
			</Legend>
			{children}
		</Fieldset>
	);
};

export { CustomFieldset };
