/* eslint-disable no-nested-ternary */
import styled from "styled-components";

export const TextAreaContainer = styled.div<{ $status: string }>`
  width: inherit;
  display: flex;
  flex-direction: column;
  & > div > div {
    border: ${({ $status }) =>
    ($status === "invalid"
      ? "1px solid red"
      : $status === "valid"
        ? "1px solid #7ac143"
        : "1px solid #79747e")};
  }
`;
export const TextArea = styled.textarea<{ width?: string; height?: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  outline: 0;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.5px;
  resize: none;
  background: transparent;
  color: #2b4417;
`;
