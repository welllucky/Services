import styled, { css } from "styled-components";
import { CustomButtonProps } from "./types";

interface ButtonComponentProps {
  textSize?: string | number;
  color?: string;
}

export const ButtonContainer = styled.div<CustomButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  border-radius: 10rem;
  padding: 10px 24px;
  width: ${({ width }) => width || "fit-content"};
  height: ${({ height }) => height || "fit-content"};

  color: ${({ color, theme }) => color || theme.colors.neutral.inverted};

  border: ${({ $backgroundColor, mode }) =>
    ($backgroundColor && mode === "outlined"
      ? `1px solid ${$backgroundColor}`
      : "none")};

  ${({ disabled, mode }) =>
    disabled &&
    mode === "outlined" &&
    css`
      border: 1px solid #bfbfbf;
      pointer-events: none;
    `};

  background-color: ${({ $backgroundColor, mode, theme }) =>
    ($backgroundColor && mode === "filled"
      ? $backgroundColor
      : theme.colors.primary["85"])};

  ${({ disabled, mode }) =>
    disabled &&
    mode === "filled" &&
    css`
      background-color: #e5e6e6;
      pointer-events: none;
    `};
`;

export const ButtonComponent = styled.button<ButtonComponentProps>`
  background-color: transparent;
  color: ${({ color, theme }) => color ?? theme.colors.neutral.inverted};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  font-size: ${({ textSize }) => textSize ?? "1rem"};
  font-weight: 600;

  &:disabled {
    color: #1c1b1f;
    opacity: 0.5;
    pointer-events: none;
    cursor: default;
  }
`;
