/* eslint-disable no-nested-ternary */
import { InputStatus } from "@/types";
import styled, { css } from "styled-components";

export const SelectContainer = styled.div<{
  $status: InputStatus;
  width?: string;
  height?: string;
}>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width ?? "100%"};
  position: relative;

  ${({ $status }) =>
    $status === "disabled" &&
    css`
      pointer-events: none;
      cursor: not-allowed;

      select {
        color: #acacac;
      }
    `}
`;
export const SelectComponent = styled.select<{
  $isPlaceholder?: boolean;
  width?: string;
  height?: string;
}>`
  width: ${({ width }) => width ?? "100%"};
  height: ${({ height }) => height ?? "100%"};
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0.4px;
  color: ${({ $isPlaceholder, theme }) =>
    ($isPlaceholder ? theme.colors.neutral["25"] : theme.colors.neutral.inverted)};
  padding: 16px;
  appearance: none;
  background: url("/caret-down.svg") no-repeat right center;
  background-position-x: 96%;
  background-size: 20px;
`;
export const CustomOption = styled.option``;
