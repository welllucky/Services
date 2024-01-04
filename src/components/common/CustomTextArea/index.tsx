import { ChangeEvent } from "react";
import { TextArea } from "./styles";
import { CustomFieldset } from "../../Fieldset";

interface TextAreaProps {
	labelText?: string;
	width?: string;
	height?: string;
	placeholder: string;
	value?: string;
	isRequired?: boolean;
	onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const CustomTextArea = ({
	labelText,
	placeholder,
	width = "100%",
	height = "240px",
	value,
	onChange,
	isRequired = false,
}: TextAreaProps) => {
	return (
		<CustomFieldset
			width={width as string}
			labelText={labelText as string}>
			<TextArea
				height={height as string}
				width={width as string}
				required={isRequired}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</CustomFieldset>
	);
};
