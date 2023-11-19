import styled from "styled-components";
import { ContainerMenu } from "../../../Components/MenuNavegation/styles";

export const SreenContainer = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 3.2rem;
    align-items: center;
    justify-content: center;
    overflow: auto;
    margin-bottom: 4rem;

    & > ${ContainerMenu} {
        justify-content: flex-end;
        left: 0;
    }
`;

export const ButtonDiv = styled.div``;

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

export const ChamadoContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 16px;
`;

export const MidiaDiv = styled.div`
	display: flex;
	overflow-x: auto;
	width: 100%;

	&::-webkit-scrollbar {
		display: none;
	}
`;
