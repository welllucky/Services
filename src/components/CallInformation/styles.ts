import styled from "styled-components";
import { type ILegendProps } from ".";

export const Content = styled.div`
	width: auto;
	height: 100%;
	max-width: 30rem;
	outline: 0;
	border: none;
	font-family: "Roboto";
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	word-break: break-word;
	line-height: 24px;
	align-items: center;
	letter-spacing: 0.5px;
	background: transparent;
	display: flex;
	flex-wrap: wrap;
	color: #2b4417;
`;
export const Fildset = styled.fieldset<ILegendProps>`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	align-items: flex-start;
	padding: 8px;
	width: ${({ width }) => width ?? "100%"};
	height: ${({ height }) => height ?? "auto"};
	border-radius: 4px;
	border: 1px solid #5a8f19;
	flex: none;
	order: 0;
	align-self: stretch;
	flex-grow: 0;
	padding-left: 10px;
	background: transparent;
`;

export const Legend = styled.legend`
	padding: 0px 4px 0px 4px;
`;

export const LegendText = styled.span`
	font-family: "roboto";
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 16px;
	letter-spacing: 0.4px;
	color: #2b4417;
	flex: none;
	order: 0;
	flex-grow: 0;
`;
