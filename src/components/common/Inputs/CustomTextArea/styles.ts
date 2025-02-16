/* eslint-disable no-nested-ternary */
import styled from "styled-components";

export const TextAreaContainer = styled.div<{
  $status: string;
  width?: string;
  height?: string;
}>`
  width: ${({ width }) => width ?? "100%"};

  display: flex;
  flex-direction: column;
`;
export const TextArea = styled.textarea<{ width?: string; height?: string }>`
  width: ${({ width }) => width ?? "100%"};
  height: ${({ height }) => height ?? "160px"};
  outline: 0;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0.4px;
  resize: none;
  background: transparent;
  color: #2b4417;
  padding: 1rem;
`;
