import styled from "styled-components";
import theme from "../../styles/theme/theme";

interface ModalProps {
	isTrue: boolean;
}

export const ModalContainer = styled.section<ModalProps>`
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	background-color: ${theme.colors.neutral.opacity};
	z-index: 2;

	display: ${(isTrue) => (isTrue ? "flex" : "none")};
`;

export const ModalContet = styled.section`
	background-color: ${theme.colors.green["015"]};
	margin: auto;
	width: 30rem;
	height: 20rem;
	box-shadow: 0px 7px 14px rgba(0, 0, 0, 0.24);
	border-radius: 12px;

	& > img {
		margin: 1.5rem auto;
		display: flex;
	}
`;

export const MessageSuccess = styled.p`
	color: ${theme.colors.neutral.white};
	font-size: 20px;
	font-family: inter;
	font-weight: 600;
	display: flex;
	flex-direction: column;
	text-align: center;
	align-items: center;
	margin-top: 1.5rem;
`;
