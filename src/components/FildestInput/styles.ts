import styled from "styled-components";

export const Input = styled.input`
    width: 100%;
    height: 100%;
    outline: 0;
    border: none;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    align-items: center;
    letter-spacing: 0.5px;
    padding-right: 1.6rem;
    background: transparent;

    color: #2b4417;
`;
interface FildsetProps {
	width?: string;
	border?: string;
	height?: string;
}

export const Fildset = styled.fieldset<FildsetProps>`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 8px;
	width: ${({ width }) => width ?? "366px"};
	height: ${({ height }) => height ?? "55px"};
	border-radius: 4px;
	border: ${({ border }) => border ?? "1px solid #79747e"};
	flex: none;
	order: 0;
	align-self: stretch;
	flex-grow: 0;
	padding-left: 10px;
	background: transparent;

	img {
		margin-left: -4rem;
		margin-top: 0.5rem;
	}
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

export const Image = styled.img``;
