/* eslint-disable no-nested-ternary */
import { css, styled } from "styled-components";

import { Row } from "@/styles";
import { InputStatus, InputStylesProps } from "@/types";

interface ContentContainerProps {
  height?: string;
  mode?: "filled" | "outlined";
  $status?: InputStatus;
  backgroundColor?: string;
}

export const InputContainer = styled.div<InputStylesProps>`
  width: ${({ width }) => width ?? "100%"};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  height: fit-content;
`;

export const ContentContainer = styled(Row)<ContentContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => height ?? "100%"};
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 0.5rem 1rem;
  gap: 0.8rem;
  transition: all 0.5s ease;

  ${({ mode }) =>
    mode === "filled" &&
    css`
      border-radius: 4px 4px 0px 0px;
    `}

  ${({ mode, $status }) =>
    (mode === "filled" && $status === "invalid"
      ? css`
          background-color: #fbdde1;
          border-bottom: 0.2rem red solid;
        `
      : mode === "filled" && $status === "valid"
        ? css`
            background-color: #ebf6e3;
            border-bottom: 0.2rem #7ac143 solid;
          `
        : mode === "filled"
          ? css`
              background-color: #e5e6e6;
            `
          : null)};

  ${({ mode }) =>
    mode === "outlined" &&
    css`
      background-color: transparent;
      border-radius: 4px;
      margin: -8px 0rem 0rem 0rem;
      color: #1c1b1f;

      /* &:focus-within {
        border: 1px solid #b3b2a8;
      } */
    `}

  ${({ mode, $status }) =>
    (mode === "outlined" && $status === "invalid"
      ? css`
          border: 1px solid red;
        `
      : mode === "outlined" && $status === "valid"
        ? css`
            border: 1px solid #7ac143;
          `
        : mode === "outlined"
          ? css`
              border: 1px solid #79747e;
            `
          : null)};
`;

export const InputComponent = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0.4px;
  color: ${({ theme }) => theme.colors.neutral.inverted};
  outline: none;
  background-color: transparent;
`;

export const Label = styled.label<{ mode: "filled" | "outlined" }>`
  font-size: ${({ mode }) => (mode === "filled" ? "1.2rem" : "12px")};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.neutral.inverted};

  ${({ mode }) =>
    mode === "outlined" &&
    css`
      margin-left: 0.4rem;
      background-color: #f5f5f5;
      padding: 0 0.4rem;
      margin-left: 13px;
    `}
`;
