import { Column } from "@/styles";
import styled from "styled-components";

export const TicketPageContainer = styled(Column)`
  align-items: center;
  gap: 1rem;
  height: 100%;
`;

export const TicketPageContent = styled(Column)`
  height: 100%;
  gap: 0.4rem;
`;

export const TicketPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;
