import { Column, Row } from "@/styles";
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

export const ButtonImage = styled.img`
	width: 20px;
	height: 20px;
`;

export const FirstSection = styled(Column)`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	gap: 0rem;
`;

export const SecondSection = styled(Row)``;
