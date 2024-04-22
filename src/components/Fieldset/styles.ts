import styled, { css } from "styled-components";

export const FieldSetContent = styled.div`
  overflow: scroll;
  width: 100%;
  height: fit-content;
  word-wrap: break-word;
`;

export const Fieldset = styled.div<{
  color?: string;
  $hasOverflow?: boolean;
  $justifyContent?: "start" | "center" | "end";
}>`
  border-radius: 4px;
  border: 1px solid ${({ theme, color }) => color ?? theme.colors.neutral["15"]};
  line-height: 132%;
  color: ${({ theme }) => theme.colors.neutral["100"]};
  padding: 1rem;
  width: 100%;
  overflow: scroll;

  ${({ $hasOverflow }) =>
    !$hasOverflow &&
    css`
      ${FieldSetContent} {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    `};
`;

export const Legend = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: ${({ theme }) => theme.colors.primary[195]};
  background-color: ${({ theme }) => theme.colors.neutral.default};
  display: inline-flex;
  left: 16px;
  padding: 0px 4px;
  top: 8px;
  position: relative;
`;

export const FieldsetTextContent = styled.p`
  width: 100%;
  height: fit-content;
`;

export const FieldsetContainer = styled.div<{
  width?: string;
  height?: string;
  $hasOverflow?: boolean;
}>`
  width: ${({ width }) => width ?? "100%"};
  height: fit-content;

  ${Fieldset} {
    min-height: 55px;
    max-height: ${({ height }) => height ?? "55px"};
  }
`;
