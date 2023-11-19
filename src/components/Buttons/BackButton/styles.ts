import Image from "next/image";
import styled from "styled-components";

interface BackButtonProps {
	actionText?: string;
	color?: string;
	fontWeight?: string;
}

export const Container = styled.div`
	display: flex;
	width: 100%;
	gap: 10px;
	align-items: center;
	margin-bottom: 3.5rem;
`;

export const BackIcon = styled(Image)`
	width: 11px;
	height: 15px;
	margin-top: 2px;
`;

export const TextBack = styled.span<BackButtonProps>`
	font-style: normal;
	font-weight: ${({ fontWeight }) => fontWeight || 500};
	font-size: 1.6rem;
	display: flex;
	line-height: 36px;
	align-items: center;
	letter-spacing: 0.01em;
	color: ${({ color }) => color || "#000000"};
`;
