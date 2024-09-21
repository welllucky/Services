import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  height: 50%;
  width: 110%;
  font-weight: 500;
  font-size: 0.8rem;
  line-height: 1rem;
`;

export const InfoLabel = styled.label`
  color: ${({ theme }) => theme.colors.neutral.inverted};
`;

export const InfoText = styled.p`
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme.colors.neutral.inverted};
  width: 100%;
  word-break: break-all;
  line-break: anywhere;

  @media (max-width: 320px) {
    font-size: 0.8rem;
  }
`;