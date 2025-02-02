import styled, { css } from "styled-components";

export const FieldSetContent = styled.div`
  overflow: scroll;
  word-wrap: break-word;
  font-size: 1rem;
`;

export const Legend = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  background-color: ${({ theme }) => theme.colors.neutral.default};
  display: inline-flex;
  left: 16px;
  padding: 0px 4px;
  top: 8px;
  position: relative;
`;

export const Fieldset = styled.div<{
  color?: string;
  $hasOverflow?: boolean;
  $justifyContent?: "start" | "center" | "end";
}>`
  border-radius: 4px;
  border: 1px solid ${({ theme, color }) => color ?? theme.colors.neutral["15"]};
  line-height: 132%;
  color: ${({ theme, color }) => color ?? theme.colors.neutral["100"]};
  padding: 1rem;
  overflow: auto;

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

export const FieldsetContainer = styled.div<{
  width?: string;
  $minHeight?: string;
  $maxHeight?: string;
  $hasOverflow?: boolean;
  color?: string;
}>`
  width: ${({ width }) => width ?? "100%"};

  ${Fieldset} {
    min-height: ${({ $minHeight }) => $minHeight ?? "50px"};
    max-height: ${({ $maxHeight }) => $maxHeight ?? "50px"};
  }

  ${Legend} {
    color: ${({ theme, color }) => color ?? theme.colors.neutral["100"]};
  }
`;
