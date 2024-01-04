import Image from "next/image";
import styled, { css } from "styled-components";

export const IconContainer = styled.div<{ $hasPadding?: boolean }>`
	padding: ${({ $hasPadding }) => ($hasPadding ? "1rem" : "0rem")};
`;

export const IconImage = styled(Image)``;
