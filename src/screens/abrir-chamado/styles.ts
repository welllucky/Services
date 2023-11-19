import styled from "styled-components";
import { ContainerMenu } from "../../../Components/MenuNavegation/styles";
import { Container } from "../../../Components/BackButton/styles";

export const AbrirChamadoContainer = styled.div`
	background-color: #f8fcf6;
	padding: 1.6rem 3.2rem 3rem;
	height: 100lvh;
	margin-bottom: 1rem;
	& > ${ContainerMenu} {
		justify-content: flex-end;
		left: 0;
	}

	${Container} {
		margin-bottom: 2.18rem;
	}

	@media (max-height: 700px) {
		height: 100%;
		margin-bottom: 4.5rem;
	}
`;

export const HeaderComponent = styled.div`
	margin-bottom: 2rem;

	h1 {
		font-size: 2.4rem;
		color: #7ac143;
		font-weight: 500;
	}
`;

export const InfoChamadosContainer = styled.div`
	& > fieldset {
		margin-bottom: 10px;
	}
	margin-bottom: 9.2rem;
`;

export const LastPage = styled.div`
	display: flex;
	gap: 10px;
	align-items: center;
	margin-bottom: 35px;

	span {
		font-size: 2rem;
	}
`;

export const ImgBackIcon = styled.img`
	width: 12px;
	height: 15px;
	margin-top: 2px;
`;

export const SelectType = styled.select`
	border-radius: 4px;
	border: 2px solid green;
	width: 100%;
	height: 56px;
	align-self: stretch;
`;
