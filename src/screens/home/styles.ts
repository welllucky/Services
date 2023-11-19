
import styled from "styled-components";

export const ScreenContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	background-color: #ffffff;
`;

export const OverflowDiv = styled.div`
	height: 68vh;
	width: 100%;
	overflow-y: scroll;
	@media (max-height: 667px) and (min-height: 0px) {
		height: 56vh;
	}
	@media (max-height: 740px) and (min-height: 668px) {
		height: 60vh;
	}
`;

export const MainMobile = styled.div`
	display: flex;
	width: 100%;
	padding: 1.25rem 1rem;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	background-color: #ffffff;
`;

export const HeaderContent = styled.div`
	display: flex;
	flex-flow: column;
	flex-grow: 1;
	gap: 1rem;
	align-items: center;
	padding-top: 1rem;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	position: fixed;
	width: 100%;
	bottom: 7rem;
	align-items: center;
	justify-content: center;
`;
