import styled from "styled-components";
import { NoContentProps } from "@/assets";

export const NoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;

  & > img {
    opacity: 0.4;
  }
`;

export const NoContentTitle = styled.h1<NoContentProps>`
  font-size: ${({ fontSize }) => fontSize || "24px"};
  font-weight: 600;
  line-height: 29px;
  letter-spacing: -0.005em;
  line-height: 132%;
  text-align: center;
  word-wrap: break-word;
  color: ${({ color }) => color ?? "#494949"};
`;
