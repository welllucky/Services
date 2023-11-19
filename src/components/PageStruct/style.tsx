import { Column } from "@/styles";
import styled from "styled-components";

export const FlexContainer = styled(Column)<{ $backgroundColor?: string }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	height: 100vh;
	padding: 2rem;
	padding-bottom: 0;
	background-color: ${({ $backgroundColor }) => $backgroundColor || "#fff"};
`;

export const PageContainer = styled(Column)`
	width: 100%;
	height: 100%;
	display: flex;
	overflow: hidden;
	justify-content: center;
	align-items: center;
  padding-bottom: 5rem;
`;
