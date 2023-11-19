import { Row, breakpoints } from "@/styles";
import Image from "next/image";
import styled, { css } from "styled-components";

export const NoMobileContainer = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	padding: 3rem;
	overflow: hidden;
`;

export const NoMobileContent = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`;

export const NoMobileLogo = styled(Image)`
	margin-top: 10rem;
	margin-bottom: 4rem;

	@media (min-width: 768px) and (max-width: 1025px) {
		width: 100px;
		height: 100px;
	}

	@media (min-width: 1025px) {
		width: 120px;
		height: 120px;
		margin-bottom: 4rem;
	}
`;

export const NoMobileTitle = styled.h1`
	font-size: 2rem;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.green.default};
	line-height: 130%;
	text-align: center;
  text-wrap: balance;

	@media (min-width: 769px) and (max-width: 1024px) {
		font-size: 260%;
	}

	@media (min-width: 1025px) {
		font-size: 300%;
	}
`;

export const NoMobileText = styled.p`
	color: ${({ theme }) => theme.colors.neutral.inverted};
	line-height: 140%;
	font-weight: 500;
	text-align: center;
	font-size: 1rem;
  text-wrap: balance;

	@media (min-width: 769px) and (max-width: 1024px) {
		font-size: 160%;
	}

	@media (min-width: 1025px) {
		font-size: 160%;
		/* width: 80rem; */
	}
`;

export const NoMobileQRCodeSection = styled(Row)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 4rem 0;
	gap: 1.2rem;

	@media (min-width: 769px) and (max-width: 1024px) {
		gap: 2rem;
	}

	@media (min-width: 1025px) {
		margin-top: 8rem;
		flex-direction: row-reverse;
		gap: 2rem;
	}
`;

export const QRCodeText = styled.h2`
	font-size: 1rem;
	font-weight: 400;
	line-height: 130%;
	text-align: center;
	width: 20rem;

	@media (min-width: 769px) and (max-width: 1024px) {
		font-size: 130%;
		width: 24rem;
	}

	@media (min-width: 1025px) {
		font-size: 170%;
		font-weight: 500;
		width: 28rem;
		text-align: left;
		line-height: 180%;
	}
`;

export const QRCodeImage = styled(Image)`
	@media (min-width: 769px) and (max-width: 1025px) {
		width: 200px;
		height: 200px;
	}

	@media (min-width: 1025px) {
		width: 160px;
		height: 160px;
	}
`;
