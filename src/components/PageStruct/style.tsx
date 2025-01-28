import { Column, theme } from "@/styles";
import styled from "styled-components";

export const FlexContainer = styled(Column)<{
  $backgroundColor?: string;
  $hasBottomPadding?: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 8vw;
  gap: ${({ $gap }) => $gap || "8px"};

  background-color: ${({ $backgroundColor }) =>
    $backgroundColor || theme.colors.neutral.default};

  ${({ $hasBottomPadding }) =>
    $hasBottomPadding &&
    `
     padding-bottom: 82px;
  `}
`;

export const PageStructContainer = styled(Column)`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
`;
