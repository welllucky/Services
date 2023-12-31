import { Column } from "@/styles";
import styled from "styled-components";

export const IssuePageContainer = styled(Column)`
	align-items: center;
  gap: 16px;
`;

export const IssuePageContent = styled(Column)`
	height: 100%;
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding-bottom: 82px;
	gap: 16px;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.red.default};
`;
