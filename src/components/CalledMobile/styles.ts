import { Row } from "@/styles";
import styled, { css } from "styled-components";

type ContainerStyleProps = {
	color?: string;
	borderColor?: string;
	hoverColor?: string;
	hasUpdate?: boolean;
};

export const IconeSelo = styled.section`
	position: relative;
	width: 1rem;
	z-index: 2;
  top: 15px;
  left: 5px;

	& > svg {
		position: absolute;
		top: -10%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`;

export const IssueWrapper = styled.div`
	width: 100%;
	height: fit-content;
	padding-left: 0.3rem;
	position: relative;
`;

export const IssueContainer = styled(Row)<ContainerStyleProps>`
	display: flex;
	/* width: 360px; */
	align-items: center;
	padding: 1rem;
	min-height: 6.5rem;
	background-color: ${({ color }) => color ?? "#D9F5C5"};
	border-radius: 0.5rem;
	justify-content: space-around;
	transition: 0.4s ease-in-out;

	&:hover {
		box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.28);
		border: 0.3rem solid ${({ borderColor }) => borderColor ?? "#38a914"};
	}

	&:active {
		box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.28);
		border: 0.3rem solid ${({ borderColor }) => borderColor ?? "#38a914"};
	}
`;

export const IssueContent = styled.div`
	display: flex;
	flex-direction: column;
	width: max-content;
	height: 100%;
	justify-content: space-between;
`;

export const IssueState = styled.div`
	display: flex;
	flex-direction: column;
	width: 30%;
	gap: 0.5rem;
	margin-left: 1rem;
`;

export const IssueNumber = styled.text`
	font-weight: 500;
	font-size: 0.9rem;
	display: flex;
	margin-bottom: 0.5rem;
	width: max-content;
	letter-spacing: 0.01em;
	color: ${({ theme }) => theme.colors.neutral.inverted};
`;

export const IssueDescription = styled.text`
	font-weight: 600;
	font-size: 1.2rem;
	max-width: 172px;
	max-height: 56px;
	line-height: 1.4rem;
	color: ${({ theme }) => theme.colors.neutral.inverted};
	text-overflow: ellipsis;
	word-wrap: break-word;
	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
`;

export const IssueStatus = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0;
	height: 50%;

	font-weight: 500;
	font-size: 0.8rem;
	line-height: 1rem;
`;

export const OpeningText = styled.text`
	font-weight: 400;
	font-size: 1rem;
	line-height: 1.25rem;
	color: ${({ theme }) => theme.colors.neutral.inverted};
`;

export const StatusText = styled.text`
	font-weight: 600;
	font-size: 1.1rem;
	line-height: 1.25rem;
	letter-spacing: 0.06em;
	color: ${({ theme }) => theme.colors.neutral.inverted};
`;
