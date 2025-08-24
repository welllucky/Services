import styled, { css } from "styled-components";

import { Row } from "@/styles";

export const PageTitle = styled.div<{ $isSmallClientMobile?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
  ${({ $isSmallClientMobile }) =>
    $isSmallClientMobile &&
    css`
      padding: 0;
      justify-content: center;
    `}
`;

export const SecondSection = styled(Row)`
padding-bottom: 1rem;
`;
