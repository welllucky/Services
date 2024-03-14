import { Row } from "@/styles";
import Link from "next/link";
import styled, { css } from "styled-components";

type ContainerStyleProps = {
  color?: string;
  $borderColor?: string;
  hoverColor?: string;
  $hasUpdate?: boolean;
};

export const IconeSelo = styled.section`
  position: relative;
  width: 1rem;
  z-index: 2;
  top: 15px;
  left: 5px;

  & > svg {
    position: absolute;
    top: -10%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const IssueWrapper = styled(Link)`
  width: 100%;
  height: fit-content;
  padding-left: 0.3rem;
  position: relative;
`;

export const IssueContainer = styled(Row)<ContainerStyleProps>`
  display: flex;
  padding: 0.8rem;
  gap: 1.5rem;
  background-color: ${({ color }) => color ?? "#D9F5C5"};
  border-radius: 0.5rem;
  justify-content: space-around;
  transition: 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.28);
    border: 0.3rem solid ${({ $borderColor }) => $borderColor ?? "#38a914"};
  }

  &:active {
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.28);
    border: 0.3rem solid ${({ $borderColor }) => $borderColor ?? "#38a914"};
  }
`;

export const IssueContent = styled.div<{ $hasUpdate?: boolean }>`
  display: flex;
  flex-direction: column;
  width: max-content;
  gap: 0.8rem;
  justify-content: space-between;

  ${({ $hasUpdate }) =>
    $hasUpdate &&
    css`
      padding-top: 8px;
    `}
`;

export const IssueState = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  gap: 1rem;
`;

export const IssueNumber = styled.p`
  font-weight: 500;
  font-size: 0.9rem;
  width: 213px;
  display: flex;
  letter-spacing: 0.01em;
  color: ${({ theme }) => theme.colors.neutral.inverted};
  text-overflow: ellipsis;
  word-wrap: break-word;
  white-space: break-spaces;
  overflow: hidden;
`;

export const IssueDescription = styled.p`
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 120%;
  width: 213px;
  color: ${({ theme }) => theme.colors.neutral.inverted};
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const IssueStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  height: 50%;

  font-weight: 500;
  font-size: 0.8rem;
  line-height: 1rem;
  overflow: hidden;
`;

export const OpeningText = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme.colors.neutral.inverted};
  height: 20px;
  width: 70px;
  word-break: break-all;
  line-break: anywhere;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const StatusText = styled.p`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.25rem;
  height: 20px;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.colors.neutral.inverted};
`;

export const InfoLabel = styled.label`
  color: ${({ theme }) => theme.colors.neutral.inverted};
  overflow-x: hidden;
`;
