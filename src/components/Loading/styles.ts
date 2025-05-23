import styled, { css } from "styled-components";

export const Container = styled.div<{ color?: string; size?: string }>`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  & div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
  }
  & div:after {
    content: " ";
    display: block;
    position: absolute;
    width: ${({ size }) => size || "7px"};
    height: ${({ size }) => size || "7px"};
    border-radius: 50%;
    background: ${({ color, theme }) => color || theme.colors.primary.default};
    margin: -4px 0 0 -4px;
  }
  & div:nth-child(1) {
    animation-delay: -0.036s;
  }
  & div:nth-child(1):after {
    top: 63px;
    left: 63px;
  }
  & div:nth-child(2) {
    animation-delay: -0.072s;
  }
  & div:nth-child(2):after {
    top: 68px;
    left: 56px;
  }
  & div:nth-child(3) {
    animation-delay: -0.108s;
  }
  & div:nth-child(3):after {
    top: 71px;
    left: 48px;
  }
  & div:nth-child(4) {
    animation-delay: -0.144s;
  }
  & div:nth-child(4):after {
    top: 72px;
    left: 40px;
  }
  & div:nth-child(5) {
    animation-delay: -0.18s;
  }
  & div:nth-child(5):after {
    top: 71px;
    left: 32px;
  }
  & div:nth-child(6) {
    animation-delay: -0.216s;
  }
  & div:nth-child(6):after {
    top: 68px;
    left: 24px;
  }
  & div:nth-child(7) {
    animation-delay: -0.252s;
  }
  & div:nth-child(7):after {
    top: 63px;
    left: 17px;
  }
  & div:nth-child(8) {
    animation-delay: -0.288s;
  }
  & div:nth-child(8):after {
    top: 56px;
    left: 12px;
  }
  @keyframes lds-roller {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingContainer = styled.div<{
  $overlayOn?: boolean;
  $fullyScreen?: boolean;
}>`
  ${({ $overlayOn }) =>
    $overlayOn &&
    css`
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      background-color: rgb(0, 0, 0, 50%);
    `}

  ${({ $fullyScreen, $overlayOn }) =>
    ($fullyScreen || $overlayOn) &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    `}
`;
