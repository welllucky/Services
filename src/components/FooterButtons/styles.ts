import styled, { css } from "styled-components";

interface ButtonsContainerProps {
	buttonBottom?: boolean;
}
export const ButtonsContainer = styled.div<ButtonsContainerProps>`
	display: flex;
	bottom: 0;
	justify-content: flex-end;
	gap: 8px;
	width: 100%;
	height: 72px;
	align-items: center;
	border-top: 1px solid #cac4d0;
	margin-bottom: 2rem;

	${({ buttonBottom }) =>
		buttonBottom &&
		css`
			position: fixed;
			padding-right: 5rem;
		`}
`;

export const BackButton = styled.button`
	display: flex;
	width: 86px;
	height: 40px;
	justify-content: center;
	align-items: center;
	border-radius: 100px;
	border: 1px solid #635f60;
	font-size: 14px;
	color: #635f60 !important;
	background-color: #ffffff;
`;

export const NextButton = styled.button`
	display: flex;
	width: 101px;
	height: 40px;
	justify-content: center;
	align-items: center;
	font-size: 14px;
	border-radius: 100px;
	background-color: #7ac143;
	color: #ffffff;
`;
