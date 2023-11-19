import styled, { css } from "styled-components";
import { CustomButtonProps } from ".";

export const ButtonContainer = styled.div<CustomButtonProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ $backgroundColor, theme }) =>
		$backgroundColor ? $backgroundColor : theme.colors.green[185]};
	color: ${({ color, theme }) => (color ? color : theme.colors.neutral.white)};
	border-radius: 10rem;
	border: ${({ borderColor }) =>
		borderColor ? `1px solid ${borderColor}` : "none"};
	width: ${({ width }) => (width ? width : "100%")};
	height: ${({ height }) => (height ? height : "100%")};
	font-size: 1.4rem;
	${({ disabled }) =>
		disabled &&
		css`
			background-color: #e5e6e6;
			pointer-events: none;
		`};
`;

export const ButtonComponent = styled.button<{ color?: string }>`
	background-color: transparent;
	color: ${({ color, theme }) => (color ? color : theme.colors.neutral.white)};
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.4rem;
	font-weight: 600;

	&:disabled {
		color: #1c1b1f;
		opacity: 0.5;
	}
`;
