import styled, { css } from "styled-components";
import { AddNewIssueButtonProps } from ".";

export const ButtonNewCalled = styled.button<AddNewIssueButtonProps>`
	text-decoration: none;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	width: ${({ size }) => size || "3.5rem"};
	height: ${({ size }) => size || "3.5rem"};
	background-color: ${({ styles }) => styles?.backgroundColor || "#ebf6e3"};
	${({ styles }) =>
		styles?.hasShadow &&
		css`
			box-shadow:
				0px 4px 8px 3px rgba(0, 0, 0, 0.15),
				0px 1px 3px rgba(0, 0, 0, 0.3);
		`}

	border-radius: 16px;
	cursor: pointer;
`;
