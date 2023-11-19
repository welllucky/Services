import styled from "styled-components";
import theme from "../../../styles/theme/theme";

export const AttachMediaContainerGeneral = styled.section`
	position: absolute;
	align-items: center;
	padding: 32px;
	background-color: ${theme.colors.neutral.default};
	bottom: 0;
	top: 0;
	left: 0;
	right: 0;
`;

export const TitlePage = styled.h1`
	display: flex;
	align-items: center;
	color: ${theme.colors.neutral.black};
	font-size: 2rem;
	font-weight: 300;
	margin-left: -1rem;
`;

export const InformationToAttach = styled.h2`
	color: ${theme.colors.green[185]};
	font-weight: 600;
	display: flex;
	align-items: center;
	margin-top: 3rem;
	font-size: 2.4rem;
`;

export const CentralContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 10rem;
	/* padding-bottom: 12rem;  */
`;

export const TextContainerCentral = styled.h1`
	font-weight: 700;
	color: ${theme.colors.neutral["045"]};
	text-align: center;
	font-size: 2rem;
	width: 100%;
`;

export const ContainerButton = styled.section`
	display: flex;
	flex-direction: row-reverse;
	gap: 0 1rem;
	width: auto;
`;
