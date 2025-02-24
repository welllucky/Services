import Image from "next/image";
import styled from "styled-components";

interface BackButtonProps {
  actionText?: string;
  color?: string;
  fontWeight?: string;
}

export const Container = styled.div`
	display: flex;
	width: fit-content;
	gap: 4px;
	align-items: center;
  cursor: pointer;
`;

export const BackIcon = styled(Image)`
  width: 11px;
  height: 15px;
  margin-top: 2px;
`;

export const TextBack = styled.span<BackButtonProps>`
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || 500};
  font-size: 1.1rem;
  display: flex;
  line-height: 36px;
  align-items: center;
  letter-spacing: 0.01em;
  color: ${({ color }) => color || "#000000"};
`;
