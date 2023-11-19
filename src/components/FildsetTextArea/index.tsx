import { ChangeEventHandler } from "react";
import { Fildset, TextArea, Legend, LegendText } from "./styles";

export interface ILegendProps {
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
	const [value, setValue] = useState<unknown>("");

	useEffect(() => {
		getValue(value);
	}, [getValue, value]);

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
