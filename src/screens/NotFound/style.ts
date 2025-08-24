import styled, { keyframes } from "styled-components";

import { theme } from "@/styles";

const glitch = keyframes`
  0% {
    clip-path: inset(40% 0 61% 0);
    transform: translate(-2px, 2px);
  }
  20% {
    clip-path: inset(92% 0 1% 0);
    transform: translate(1px, 3px);
  }
  40% {
    clip-path: inset(43% 0 1% 0);
    transform: translate(-1px, -3px);
  }
  60% {
    clip-path: inset(25% 0 58% 0);
    transform: translate(3px, 1px);
  }
  80% {
    clip-path: inset(54% 0 7% 0);
    transform: translate(-3px, -2px);
  }
  100% {
    clip-path: inset(58% 0 43% 0);
    transform: translate(2px, -1px);
  }
`;

// Componentes estilizados
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  min-height: 100vh;
  color: white;
  overflow: hidden;
  position: relative;
  padding: 8vmin;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  text-align: center;
  justify-content: center;
  height: 100%;
  flex: 1;
`;

const ErrorCode = styled.h1`
  font-size: 120px;
  font-weight: 900;
  margin: 0;
  color: ${theme.colors.primary.default};
  position: relative;
  letter-spacing: -5px;
  line-height: 1;
  text-align: end;
  
  @media ${theme.media.tabletS} {
   text-align: center;
  }

  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #6200ea;
  }

  &::before {
    animation: ${glitch} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
    color: #ff005b;
    z-index: -1;
  }

  &::after {
    animation: ${glitch} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both
      infinite;
    color: #00f0ff;
    z-index: -2;
  }
`;

const Subtitle = styled.h2`
  font-size: 20px;
  margin: 32px 0px 10px 0px;
  color: ${theme.colors.neutral.inverted};
  max-width: 600px;
  font-weight: 600;
   text-align: end;

  @media ${theme.media.tabletS} {
  font-size: 24px;
   text-align: center;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  margin: 12px 0px 36px 0px;
  color: ${theme.colors.neutral.inverted};
  max-width: 600px;
  line-height: 1.4;
  text-align: end;

  @media ${theme.media.tabletS} {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 40px;
  text-align: center;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  margin-top: 20px;
  justify-content: center;
  align-items: end;
  flex-direction: column;

   @media ${theme.media.tabletS} {
    align-items: center;
    flex-direction: row;
   }
`;

export {
  ButtonContainer,
  ContentContainer,
  Description,
  ErrorCode,
  PageContainer,
  Subtitle,
};
