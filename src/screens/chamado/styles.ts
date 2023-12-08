import { Column } from "@/styles";
import styled from "styled-components";

export const IssuePageContainer = styled(Column)`
	align-items: center;
`;

export const IssuePageContent = styled(Column)`
	height: 100%;
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-bottom: 82px;
	gap: 24px;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.red.default};
`;
