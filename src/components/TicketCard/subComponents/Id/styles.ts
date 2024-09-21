import styled from "styled-components";

export const TicketNumber = styled.p`
  font-weight: 500;
  font-size: 1rem;
  width: 100%;
  display: flex;
  letter-spacing: 0.01em;
  color: ${({ theme }) => theme.colors.neutral.inverted};
  text-overflow: ellipsis;
  word-wrap: break-word;
  white-space: break-spaces;
  overflow: hidden;
`;
