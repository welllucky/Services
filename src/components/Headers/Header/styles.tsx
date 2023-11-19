import { Row } from "@/styles";
import styled, { css } from "styled-components";

export const HeaderHome = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 0.5rem;
`;

export const UserName = styled.div<{ isSmallClientMobile?: boolean }>`
	display: flex;
	align-items: center;
	gap: 0.6rem;

	${({ isSmallClientMobile }) =>
		isSmallClientMobile &&
		css`
			padding: 0;
			justify-content: center;
		`}
`;

export const UserText = styled.text<{ isSmallClientMobile?: boolean }>`
	font-style: normal;
	font-weight: 600;
	font-size: 1.5rem;
	line-height: 1.9rem;
	display: flex;
	align-items: center;
	letter-spacing: 0.01em;
	margin-top: 1.5rem;
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

export const PageTitle = styled.div<{ isSmallClientMobile?: boolean }>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-bottom: 0.5rem;
	${({ isSmallClientMobile }) =>
		isSmallClientMobile &&
		css`
			padding: 0;
			justify-content: center;
		`}
`;

export const TittleText = styled.text<{ isSmallClientMobile?: boolean }>`
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

export const ButtonImage = styled.img`
	width: 20px;
	height: 20px;
`;

export const FirstSection = styled(Row)`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	gap: 0rem;
`;

export const SecondSection = styled(Row)``;
