import styled from "styled-components";
import { ContainerMenu } from "@/components/MenuNavegation/styles";
import { Container } from "@/components/LoadingScreen/styles";

export const SreenContainer = styled.div`
	width: 100%;
	height: 100%;
	padding: 3.2rem;
	align-items: center;
	justify-content: center;
	overflow: auto;
	overflow-y: hidden;
	margin-bottom: 5rem;
	overflow-x: hidden;

	& > ${Container} {
		top: 0;
		position: fixed;
		left: 0;
		z-index: 10;
	}

	& > ${ContainerMenu} {
		left: 0;
	}

	& > ${Container} {
		display: flex;
		margin: auto;
		align-items: center;
		height: 70vh;
	}
`;

export const ChamadoText = styled.h1`
	font-style: normal;
	font-weight: 500;
	font-size: 24px;
	line-height: 24px;
	display: flex;
	align-items: center;
	letter-spacing: 0.5px;
	color: #7ac143;
	margin-bottom: 2rem;
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 16px;
`;

export const MidiaWrapper = styled.div`
	overflow-x: auto;
	width: 100%;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const DoubleInformation = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

export const ContainerChamado = styled.section``;

export const LastInputDiv = styled.div``;

export const HistoryText = styled.span`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	letter-spacing: 0.15px;
	color: #000000;
`;

export const HistoricoContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
	width: 100%;
`;

export const CircleDiv = styled.div`
	width: 32px;
	height: 32px;
	background: #d9d9d9;
	border-radius: 50%;
`;

export const HistoricoText = styled.span`
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 19px;
	text-align: center;
	letter-spacing: 0.15px;
	color: #000000;
`;

export const HistoryStatusText = styled.span`
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 16px;
	display: flex;
	align-items: center;
	letter-spacing: 0.15px;
	color: #000000;
`;
