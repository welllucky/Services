import styled from "styled-components";
import { BoxEmptyProps } from "@/assets";

export const RequestsEmpty = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0.6rem;

	& > img {
		opacity: 0.4;
	}
`;

export const RequestsTitle = styled.text<BoxEmptyProps>`
	font-size: 24px;
	font-weight: 600;
	line-height: 29px;
	letter-spacing: -0.005em;
	text-align: center;
	word-wrap: break-word;
	color: ${({ color }) => color ?? "#494949"};
`;
