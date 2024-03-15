import { css, styled } from "styled-components";
import { Row } from "@/styles";
import { InputStylesProps } from ".";

interface ContentContainerProps {
  height?: string;
  mode?: "filled" | "outlined";
  $status?: "valid" | "invalid" | "warning" | "none";
  backgroundColor?: string;
}

export const InputContainer = styled.div<InputStylesProps>`
  width: ${({ width }) => width || "100%"};
  height: fit-content;
  margin-top: 0.3rem;
`;

export const ContentContainer = styled(Row)<ContentContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => height || "100%"};
  background-color: ${({ backgroundColor }) => backgroundColor};

  ${({ mode }) => mode === "filled"
    && css`
      border-radius: 4px 4px 0px 0px;
      margin: 0.5rem 0rem 0.1rem 0rem;
    `}

  ${({ mode, $status }) => (mode === "filled" && $status === "invalid"
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
        : css``)};

  ${({ mode }) => mode === "outlined"
    && css`
      background-color: transparent;
      margin: 0.5rem 0rem 0.1rem 0rem;
      border-radius: 4px;
      margin: -8px 0rem 0.1rem 0rem;
      color: #1c1b1f;
    `}

  ${({ mode, $status }) => (mode === "outlined" && $status === "invalid"
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
        : css``)};
`;

export const InputComponent = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #1c1b1f;
  font-weight: 400;
  outline: none;
  padding: 1rem;
  background-color: transparent;
  ${({ type }) => type === "date"
    && css`
      padding-top: 1.2rem;
    `};
`;

export const Label = styled.label<{ mode: "filled" | "outlined" }>`
  font-size: ${({ mode }) => (mode === "filled" ? "1.2rem" : "12px")};
  font-weight: 400;
  color: #49454f;

  ${({ mode }) => mode === "outlined"
    && css`
      margin-left: 0.4rem;
      background-color: #f5f5f5;
      padding: 0 0.4rem;
    `}
`;
