import { Row } from "@/styles";
import styled, { css } from "styled-components";

export const ConfirmModalWrapper = styled.div<{
  $shouldHavePaddingBottom?: boolean;
  $wasConfirmed?: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 1rem;
  padding: 1rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.green["25"]};
  animation-name: modalConfirmTransition;
  animation-duration: 2s;

  ${({ $wasConfirmed }) =>
    $wasConfirmed &&
    css`
      @keyframes modalConfirmTransition {
        from {
          background-color: ${({ theme }) => theme.colors.green["25"]};
        }
        to {
          background-color: ${({ theme }) => theme.colors.green.default};
        }
      }
    `}

  ${({ $shouldHavePaddingBottom }) =>
    $shouldHavePaddingBottom
      ? css`
          padding-bottom: 3rem;
        `
      : css`
          p {
            margin-bottom: 0.6rem;
          }
        `};
`;

export const ConfirmModalText = styled.p`
  font-size: 1.33rem;
  font-weight: 500;
  line-height: 1.4rem;
  color: ${({ theme }) => theme.colors.neutral.default};
  @media (max-width: 374px) {
    font-size: 1.2rem;
  }
`;

export const ConfirmModalButtons = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 374px) {
    flex-direction: column;
  }

  div {
    height: 2rem;
    width: 10rem;
  }
`;
