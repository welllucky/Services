import { Column } from "@/styles";
import styled from "styled-components";

export const TicketPageContainer = styled(Column)`
  align-items: center;
  gap: 16px;
  height: 100%;
`;

export const TicketPageContent = styled(Column)`
  height: 100%;
  gap: 16px;
  overflow-x: hidden;
  overflow-y: auto;
`;
