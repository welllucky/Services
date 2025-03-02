import styled, { css } from "styled-components";
import { AddNewIssueButtonProps } from "./types";

const ButtonNewCalled = styled.button<AddNewIssueButtonProps>`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: ${({ size }) => size || "3.5rem"};
  height: ${({ size }) => size || "3.5rem"};
  background-color: ${({ $styles }) => $styles?.$backgroundColor || "#ebf6e3"};
  ${({ $styles }) =>
    $styles?.hasShadow &&
    css`
      box-shadow:
        rgba(0, 0, 0, 0.19) 0px 2px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;
    `}

  border-radius: 16px;
  cursor: pointer;
  transition: 0.4s ease-in-out;

  &:active,
  &:hover {
    box-shadow:
      rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    background-color: ${({ theme }) => theme.colors.primary["25"]};

    & > svg {
      fill: ${({ theme }) => theme.colors.neutral.default};
    }
  }
`;

export { ButtonNewCalled };
