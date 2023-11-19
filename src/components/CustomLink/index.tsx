import Link from "next/link";
import styled from "styled-components";

interface CustomLinkProps {
	color?: string;
	flexDirection?: "row" | "column";
}

export const CustomLink = styled(Link)<CustomLinkProps>`
	display: flex;
	flex-direction: ${({ flexDirection }) => flexDirection || "row"};
	justify-content: center;
	align-items: center;
	text-decoration: none;
	color: ${({ color }) => (color ? color : "#252728")};
`;
