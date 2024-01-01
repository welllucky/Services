import { css, styled } from "styled-components";
import { InputStylesProps } from ".";
import { Row } from "@/styles";

interface ContentContainerProps {
	height?: string;
	mode?: "filled" | "outlined";
	$status?: "valid" | "invalid" | "warning" | "none";
	backgroundColor?: string;
}

export const InputContainer = styled.div<InputStylesProps>`
	width: ${({ width }) => width || "100%"};
	height: fit-content;
	margin-top: 0.3rem;
`;

export const ContentContainer = styled(Row)<ContentContainerProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	height: ${({ height }) => height || "100%"};
	background-color: ${({ backgroundColor }) => backgroundColor};

	${({ mode, $status }) =>
		mode === "filled" && $status === "invalid"
			? css`
					background-color: #fbdde1;
					border-bottom: 0.2rem red solid;
					border-radius: 4px 4px 0px 0px;
					margin: 0.5rem 0rem 0.1rem 0rem;
			  `
			: mode === "filled" && $status === "valid"
			  ? css`
						background-color: #ebf6e3;
						border-bottom: 0.2rem #7ac143 solid;
						border-radius: 4px 4px 0px 0px;
						margin: 0.5rem 0rem 0.1rem 0rem;
			    `
			  : mode === "filled"
			    ? css`
							background-color: #e5e6e6;
							border-radius: 4px 4px 0px 0px;
							margin: 0.5rem 0rem 0.1rem 0rem;
			      `
			    : css``};

	${({ mode, $status }) =>
		mode === "outlined" && $status === "invalid"
			? css`
					background-color: transparent;
					border: 2px solid red;
					border-radius: 4px;
					color: #1c1b1f;
					margin: -10px 0rem 0.1rem 0rem;
			  `
			: mode === "outlined" && $status === "valid"
			  ? css`
						background-color: transparent;
						border: 2px solid #7ac143;
						border-radius: 4px;
						color: #1c1b1f;
						margin: -10px 0rem 0.1rem 0rem;
			    `
			  : mode === "outlined"
			    ? css`
							background-color: transparent;
							border: 2px solid #79747e;
							border-radius: 4px;
							color: #1c1b1f;
							margin: -10px 0rem 0.1rem 0rem;
			      `
			    : css``};
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

export const Label = styled.label<{ mode: "filled" | "outlined" }>`
	font-size: ${({ mode }) => (mode === "filled" ? "1.2rem" : "1rem")};
	font-weight: 500;
	color: #49454f;

	${({ mode }) =>
		mode === "outlined" &&
		css`
			margin-left: 0.4rem;
			background-color: #fff;
			padding: 0 0.4rem;
		`}
`;