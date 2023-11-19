import styled, { css } from "styled-components";

export const Row = styled.section<{ isSmallClientMobile?: boolean }>`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: row;

	${({ isSmallClientMobile }) =>
		isSmallClientMobile &&
		css`
			justify-content: center;
		`}
`;

export const Column = styled.section`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
`;

export const PageContainer = styled.main`
	width: 100vw;
	height: 100dvh;
	height: 100vh;
`;
