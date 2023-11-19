import { ChangeEventHandler } from "react";
import { Fildset, Image, Input, Legend, LegendText } from "./styles";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface ILegendProps {
	legendText?: string;
	width?: string;
	inputType?: string;
	placeholder?: string;
	height?: string;
	maxLength?: number;
	minLength?: number;
	value?: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	source?: any;
	imgDescription?: string;
	hasImage?: boolean;
	border?: string;
	pattern?: string;
	onClickImage?: () => void;
	id?: string;
  required?: boolean;
}

export const InputLegend = ({
	legendText,
	inputType,
	placeholder,
	width,
	height,
	value,
	maxLength,
	onChange,
	source,
	imgDescription,
	hasImage,
	border,
	minLength,
	pattern,
	id,
  required,
	onClickImage,
}: ILegendProps) => {
	const isMaxDate = inputType === "date" ? "2023-12-31" : "";
	return (
		<Fildset
			border={border}
			height={height}
			width={width}>
			<Legend>
				<LegendText>{legendText}</LegendText>
			</Legend>

			<Input
				placeholder={placeholder}
				type={inputType}
				maxLength={maxLength}
				minLength={minLength}
				max={isMaxDate}
				required={required}
				value={value}
				onChangeCapture={onChange}
				pattern={pattern}
				id={id}
			/>
			{hasImage && (
				<Image
					src={source}
					alt={imgDescription}
				/>
			)}
		</Fildset>
	);
};
