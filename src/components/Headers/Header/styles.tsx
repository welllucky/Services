import { Column, Row } from "@/styles";
import styled, { css } from "styled-components";

export const HeaderHome = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;
`;

export const UserName = styled.div<{ $isSmallClientMobile?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  ${({ $isSmallClientMobile }) =>
    $isSmallClientMobile &&
    css`
      padding: 0;
      justify-content: center;
    `}
`;

export const PageTitle = styled.div<{ $isSmallClientMobile?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 0.5rem;
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

export const SecondSection = styled(Row)``;
