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
  top: 10px;
  left: 2px;

  & > svg {
    position: absolute;
    top: -10%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const IssueWrapper = styled(Link)<ContainerStyleProps>`
  width: 100%;
  height: fit-content;
  position: relative;
  background-color: ${({ color }) => color ?? "#D9F5C5"};
  border-radius: 1rem;
  padding: 0.2rem;

  &:hover {
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.28);
    border: 0.2rem solid ${({ $borderColor }) => $borderColor ?? "#38a914"};
  }

  &:active {
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.28);
    border: 0.2rem solid ${({ $borderColor }) => $borderColor ?? "#38a914"};
  }

  transition: 0.3s ease-in-out;
`;

export const IssueContainer = styled(Row)<ContainerStyleProps>`
  display: flex;
  padding: 0.8rem;
  border-radius: 1rem;
  justify-content: space-between;
  transition: 0.3s ease-in-out;
`;

export const IssueContent = styled.div<{ $hasUpdate?: boolean }>`
  display: flex;
  flex-direction: column;
  max-height: 80px;
  gap: 0.8rem;
  flex: 6;
  justify-content: space-between;
  margin-right: 1rem;

  ${({ $hasUpdate }) =>
    $hasUpdate &&
    css`
      padding-top: 8px;
    `}

  @media (max-width: 320px) {
    width: 120px;
  }
`;

export const IssueState = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  max-height: 80px;
  flex: 2;
`;

export const IssueNumber = styled.p`
  font-weight: 500;
  font-size: 1rem;
  width: 100%;
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
  width: 100%;
  color: ${({ theme }) => theme.colors.neutral.inverted};
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (max-width: 320px) {
    font-size: 1rem;
  }
`;

export const IssueStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  height: 50%;
  width: max-content;
  width: 100%;
  font-weight: 500;
  font-size: 0.8rem;
  line-height: 1rem;
`;

export const OpeningText = styled.p`
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme.colors.neutral.inverted};
  width: 100%;
  word-break: break-all;
  line-break: anywhere;

  @media (max-width: 320px) {
    font-size: 0.8rem;
  }
`;

export const StatusText = styled.p`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.25rem;
  height: 20px;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.colors.neutral.inverted};
  width: max-content;

  @media (max-width: 320px) {
    font-size: 0.8rem;
  }
`;

export const InfoLabel = styled.label`
  color: ${({ theme }) => theme.colors.neutral.inverted};
`;
