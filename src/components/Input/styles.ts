import { css, styled } from "styled-components";
import { InputStylesProps } from ".";
import { Row } from "@/styles";

export const InputContainer = styled.div<InputStylesProps>`
	width: ${({ width }) => width || "100%"};
	height: "fit-content";
	margin-top: 0.3rem;
`;

interface ContentContainerProps {
	height?: string;
	$status?: "valid" | "invalid" | "warning" | "none";
}

export const ContentContainer = styled(Row)<ContentContainerProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #e5e6e6;
	border-radius: 4px 4px 0px 0px;
	margin: 0.5rem 0rem 0.1rem 0rem;
	height: ${({ height }) => height || "100%"};
	border-bottom: 0.2rem #49454f40 solid;

	${({ $status }) =>
		$status === "invalid"
			? css`
					background-color: #fbdde1;
					border-bottom: 0.2rem red solid;
			  `
			: $status === "valid"
			  ? css`
						background-color: #ebf6e3;
						border-bottom: 0.2rem #7ac143 solid;
			    `
			  : css`
						background-color: #e5e6e6;
						border-bottom: 0.2rem #49454f40 solid;
			    `}
`;

export const InputComponent = styled.input`
	width: 100%;
	height: 100%;
	border: none;
	display: flex;
	align-items: center;
	font-size: 1rem;
	color: #1c1b1f;
	font-weight: 400;
	outline: none;
	padding: 1rem;
	background-color: transparent;
`;

export const SupportText = styled.span<{ color?: string }>`
	font-size: 0.8rem;
	color: ${({ color }) => color || "#1c1b1f"};
	font-weight: 500;
`;

export const ErrorText = styled(SupportText)`
	color: #b3261e;
`;

export const WarningText = styled(SupportText)`
	color: #f2994a;
`;

export const Label = styled.label`
	font-size: 1.2rem;
	font-weight: 500;
	color: #454447;
`;
