/* eslint-disable no-nested-ternary */
import styled from "styled-components";

export const SelectContainer = styled.div<{ $status: string }>`
  width: inherit;
  display: flex;
  & > div > div {
    border: ${({ $status }) =>
    ($status === "invalid"
      ? "1px solid red"
      : $status === "valid"
        ? "1px solid #7ac143"
        : "1px solid #79747e")};
  }
`;
export const SelectComponent = styled.select<{ isPlaceholder?: boolean }>`
  display: flex;
  width: 100%;
  height: 100%;
  outline: 0;
  border: none;
  font-weight: 400;
  font-size: 1rem;
  line-height: 24px;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.5px;
  resize: none;
  background: transparent;
  color: ${({ isPlaceholder }) => (isPlaceholder ? "#79747e" : "#000")};
`;
export const CustomOption = styled.option`
  display: flex;
  align-items: center;
  background-color: #ebf6e3;
  padding-bottom: 10px;
  width: 20px;
  border-radius: 0;
  border: none;
  font-size: 16px;
`;
