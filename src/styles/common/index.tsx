import styled, { css } from "styled-components";

export const Row = styled.section<{
  $isSmallClientMobile?: boolean;
  $gap?: string;
  width?: string;
  height?: string;
}>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "fit-content"};
  display: flex;
  flex-direction: row;
  gap: ${({ $gap }) => $gap};

  ${({ $isSmallClientMobile }) => $isSmallClientMobile
    && css`
      justify-content: center;
    `}
`;

export const Column = styled.section<{
  $full?: boolean;
  $gap?: string;
  width?: string;
  height?: string;
}>`
  width: ${({ width }) => width || "100%"};
  height: ${({ $full, height }) => ($full ? "100dvh" : height || "fit-content")};
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => $gap};
`;

export const PageContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  /* padding-bottom: 5rem; */
`;

export const TitleComponent = styled.h1<{ $isSmallClientMobile?: boolean }>`
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.5rem;
  display: flex;
  align-items: center;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.primary.default};

  ${({ $isSmallClientMobile }) =>
    $isSmallClientMobile &&
    css`
      font-size: 1.2rem;
      line-height: 1.5rem;
      margin-top: 4rem;
      text-align: center;
    `}
`;

export const SubTitleComponent = styled.h2<{ $isSmallClientMobile?: boolean }>`
  font-style: normal;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.25rem;
  letter-spacing: 0.0125rem;
  display: flex;

  ${({ $isSmallClientMobile }) => $isSmallClientMobile
    && css`
      font-size: 1.5rem;
      line-height: 1.6rem;
      text-align: center;
    `}
`;
