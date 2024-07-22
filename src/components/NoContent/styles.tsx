import styled from "styled-components";
import { NoContentProps } from "@/assets";

export const NoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  padding-top: 2rem;
  gap: 0.6rem;

  & > img {
    opacity: 0.4;
  }
`;

export const NoContentTitle = styled.h1<NoContentProps>`
  font-size: ${({ fontSize }) => fontSize || "1.5rem"};
  font-weight: 600;
  letter-spacing: -0.005em;
  line-height: 108%;
  text-align: center;
  word-wrap: break-word;
  color: ${({ color }) => color ?? "#494949"};
`;
