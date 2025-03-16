import styled, { css } from "styled-components";

export const Row = styled.section<{
  $isSmallClientMobile?: boolean;
  $gap?: string;
  width?: string;
  height?: string;
  $justifyContent?:
    | "start"
    | "center"
    | "end"
    | "space-around"
    | "space-between"
    | "space-evelyn";
  $alignItems?: "start" | "center" | "end";
}>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "fit-content"};
  display: flex;
  flex-direction: row;
  gap: ${({ $gap }) => $gap};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};

  ${({ $isSmallClientMobile }) =>
    $isSmallClientMobile &&
    css`
      justify-content: center;
    `}
`;

export const Column = styled.section<{
  $full?: boolean;
  $gap?: string;
  width?: string;
  height?: string;
  overflow?: boolean;
  padding?: string;
}>`
  width: ${({ width }) => width ?? "100%"};
  height: ${({ $full, height }) =>
    ($full ? "100dvh" : (height ?? "fit-content"))};
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => $gap};

  padding: ${({ padding }) => padding};

  overflow: ${({ overflow }) => (overflow ? "auto" : "hidden")};
`;

export const PageContainer = styled.main<{ $start?: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  overflow-y: scroll;
  overflow-x: visible;
  ${({ $start }) =>
    !$start &&
    css`
      justify-content: center;
      align-items: center;
    `}
`;

export const TitleComponent = styled.h1<{ $isSmallClientMobile?: boolean }>`
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  letter-spacing: 1.2px;
  color: ${({ theme }) => theme.colors.primary.default};

  ${({ $isSmallClientMobile }) =>
    $isSmallClientMobile &&
    css`
      font-size: 0.8rem;
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

  ${({ $isSmallClientMobile }) =>
    $isSmallClientMobile &&
    css`
      font-size: 1.5rem;
      line-height: 1.6rem;
      text-align: center;
    `}
`;
