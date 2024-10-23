import { Row } from "@/styles";
import { IssueStatus } from "@/types";
import Link from "next/link";
import styled, { css } from "styled-components";

type ContainerStyleProps = {
  color?: string;
  $borderColor?: string;
  hoverColor?: string;
  $hasUpdate?: boolean;
  $status?: IssueStatus;
};

export const TicketWrapper =
  styled(Link)<
  ContainerStyleProps>`
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

  ${({ $status }) =>
    $status === "closed" &&
    css`
      opacity: 0.5;
    `}

  transition: 0.3s ease-in-out;
`;

export const TicketContainer = styled(Row)`
  display: flex;
  padding: 0.8rem;
  border-radius: 1rem;
  justify-content: space-between;
  transition: 0.3s ease-in-out;
`;

export const TicketContent =
  styled.div<
  ContainerStyleProps>`
  display: flex;
  flex-direction: column;
  max-height: 80px;
  gap: 0.8rem;
  flex: 5;
  justify-content: space-between;
  margin-right: 0.4rem;

  ${({ $hasUpdate }) =>
    $hasUpdate &&
    css`
      padding-top: 8px;
    `}

  @media (max-width: 320px) {
    width: 120px;
  }
`;

export const TicketState = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  max-height: 80px;
  flex: 2;
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
