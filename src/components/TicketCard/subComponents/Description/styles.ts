import styled from "styled-components";

export const TicketDescription = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  width: 95%;
  color: ${({ theme }) => theme.colors.neutral.inverted};
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (max-width: 320px) {
    font-size: 1rem;
  }
`;
