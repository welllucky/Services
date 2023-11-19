import styled from "styled-components";

interface ValidationInputProps {
	width?: string;
	height?: string;
	border?: string;
}

export const ValidationInput = styled.input<ValidationInputProps>`
	width: ${({ width }) => width || "66px"};
	height: ${({ height }) => height || "68px"};
	box-shadow: inset 3px 4px 5px rgba(0, 0, 0, 0.11);
	border-radius: 8px;
	background-color: #d9d9d9;
	text-align: center;
	font-size: 24px;
	color: #3e3e3e;
	:focus {
		border: 2px solid;
	}
`;

export const InputCodeContainer = styled.div`
	width: 100%;
`;

export const Inputs = styled.div<ValidationInputProps>`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;
