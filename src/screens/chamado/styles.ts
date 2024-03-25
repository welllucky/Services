import { Column } from "@/styles";
import styled from "styled-components";

export const IssuePageContainer = styled(Column)`
  align-items: center;
  gap: 16px;
  height: 100%;
`;

export const IssuePageContent = styled(Column)`
  height: 100%;
  gap: 8px;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const UserActionContainer = styled.div`
position: absolute;
top: 60vh;
right: 8vw;
`;
