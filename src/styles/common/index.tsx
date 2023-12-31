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

export const Column = styled.section<{ $full?: boolean }>`
	width: 100%;
	height: ${({ $full }) => ($full ? "100dvh" : "fit-content")};
	display: flex;
	flex-direction: column;
`;

export const PageContainer = styled.main`
	width: 100%;
	height: 100%;
	display: flex;
	overflow: hidden;
	justify-content: center;
	align-items: center;
	padding-bottom: 5rem;
`;
