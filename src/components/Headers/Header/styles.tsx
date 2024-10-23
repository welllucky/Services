import { Row } from "@/styles";
import styled, { css } from "styled-components";

export const HeaderHome = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;
`;

export const UserName = styled.div<{ $isSmallClientMobile?: boolean }>`
  display: flex;
  align-items: start;
  gap: 0.4rem;
  flex-direction: column;

  ${({ $isSmallClientMobile }) =>
    $isSmallClientMobile &&
    css`
      padding: 0;
      justify-content: center;
    `}
`;

export const ButtonImage = styled.img`
  width: 20px;
  height: 20px;
`;

export const FirstSection = styled(Row)`
  width: 100%;
  height: fit-content;
  align-items: center;
  padding: 0.6rem 0;
  padding-top: 0;
`;
