import { Column } from "@/styles";
import styled from "styled-components";

export const IssuePageContainer = styled(Column)`
  align-items: center;
  gap: 8px;
`;

export const IssuePageContent = styled(Column)`
  height: 100%;
  display: flex;
  overflow-x: hidden;
  overflow-y: scroll;
  align-items: center;
  gap: 4px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary.default};
  padding-bottom: 1rem;
`;
