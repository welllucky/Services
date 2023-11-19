import styled from "styled-components";

export const FlexContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 100vw;
	height: 93vh;
	gap: 0.4rem;
	padding: 2rem;
`;

export const MainContainer = styled.main`
	display: flex;
	flex-direction: column;
	padding: .5rem 0 1rem 0;
	width: 100%;
	height: max-content;
	overflow-y: scroll;
	overflow-x: visible;
	gap: 1rem;
`;

export const SearchContainer = styled.div`
	width: 100%;
	height: fit-content;
`;

export const SearchPageContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	overflow: hidden;
`;
