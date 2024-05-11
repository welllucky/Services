import styled, { css } from "styled-components";

export const RoundedButtonContainer = styled.button<{
  color?: string;
  $isClicked?: boolean;
  $hasShadow?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 100%;
  transition: background-color 0.2s;
  background-color: ${({ color, theme }) =>
    color || theme.colors.primary["15"]};

  ${({ $hasShadow }) =>
    $hasShadow &&
    css`
      box-shadow: 0px 2px 8px 1px rgb(0 0 0 / 35%);
    `};

  ${({ $isClicked }) =>
    $isClicked &&
    css`
      background-color: ${({ theme }) => theme.colors.primary.default};
    `};

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.default};
  }
`;
