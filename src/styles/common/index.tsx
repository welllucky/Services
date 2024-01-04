import styled, { css } from "styled-components";

export const Row = styled.section<{
	isSmallClientMobile?: boolean;
	$gap?: string;
}>`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: row;
	gap: ${({ $gap }) => $gap};

	${({ isSmallClientMobile }) =>
		isSmallClientMobile &&
		css`
			justify-content: center;
		`}
`;

export const Column = styled.section<{ $full?: boolean; $gap?: string }>`
	width: 100%;
	height: ${({ $full }) => ($full ? "100dvh" : "fit-content")};
	display: flex;
	flex-direction: column;
	gap: ${({ $gap }) => $gap};
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

export const TitleComponent = styled.h1<{ isSmallClientMobile?: boolean }>`
	font-style: normal;
	font-weight: 600;
	font-size: 1.5rem;
	line-height: 1.9rem;
	display: flex;
	align-items: center;
	letter-spacing: 0.01em;
	margin: 0.6rem 0;
	color: ${({ theme }) => theme.colors.green.default};

	${({ isSmallClientMobile }) =>
		isSmallClientMobile &&
		css`
			font-size: 1.2rem;
			line-height: 1.5rem;
			margin-top: 4rem;
			text-align: center;
			margin-bottom: 0.6rem;
		`}
`;

export const SubTitleComponent = styled.h2<{ isSmallClientMobile?: boolean }>`
	font-style: normal;
	font-weight: 600;
	font-size: 1.25rem;
	line-height: 1.25rem;
	letter-spacing: 0.0125rem;
	display: flex;

	${({ isSmallClientMobile }) =>
		isSmallClientMobile &&
		css`
			font-size: 1.5rem;
			line-height: 1.6rem;
			text-align: center;
		`}
`;
