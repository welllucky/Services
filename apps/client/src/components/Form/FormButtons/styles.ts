import { Column, Row } from "@/styles";
import styled, { css } from "styled-components";

export const FormButtonsContainer = styled(Column)<{ $hasSeparator?: boolean }>`
  width: 100%;
  align-items: flex-end;
  ${({ $hasSeparator }) =>
    $hasSeparator &&
    css`
      padding-top: 2rem;
      border-top: 2px solid #cac4d0;
    `}
`;

export const ButtonsContainer = styled(Row)`
  width: fit-content;
`;

