import styled from "styled-components";
export const MainCointainer = styled.div`
	width: 100%;
	height: 100vh;
	padding: 1.25rem 3rem;
	background-color: #f8fcf6;
`;
export const CodeWrraper = styled.div``;
export const CodeVerificationContainer = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 80vh;
	gap: 1rem;
	background-color: #f8fcf6;
	justify-content: space-evenly;
`;

export const CodeVerificationTitle = styled.h2`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	color: #2e2f32;
`;

export const CodeVerificationContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2.4rem;
	margin-top: 9.15rem;
`;

export const ErrorText = styled.h2<{ isErro: boolean }>`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	color: #b3261e;
	padding-top: 16px;
	display: ${({ isErro }) => (isErro ? "flex" : "none")};
`;
