import styled, { keyframes } from "styled-components";
import { SkeletonTypeProps } from "./Skeleton.types";

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

export const SkeletonBase = styled.div<SkeletonTypeProps>`
  background: ${(props) =>
    `linear-gradient(90deg, ${props.backgroundColor} 25%, ${props.highlightColor} 50%, ${props.backgroundColor} 75%)`};
  background-size: 400px 100%;
  animation: ${shimmer} ${(props) => `${props.speed ?? 1.5}s infinite linear`};
  border-radius: 4px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const SkeletonText = styled(SkeletonBase)<{
  margin?: string;
}>`
  margin: ${(props) => `${props.margin ?? "0.5em"} 0`};
`;

export const SkeletonImage = styled(SkeletonBase)`
  border-radius: 50%;
`;

export const SkeletonCircle = styled(SkeletonBase)`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SkeletonRect = styled(SkeletonBase)``;

export const SkeletonCard = styled(SkeletonBase)``;

export const SkeletonRectangle = styled(SkeletonBase)`
  width: ${(props) => props.width ?? "320px"};
  height: ${(props) => props.height ?? "80px"};
`;

export const SkeletonContainer = styled.div<{
  width?: string;
  height?: string;
  direction?: "row" | "column";
  gap?: string;
  alignItems?: "center" | "start";
  justifyContent?: "center" | "start";
}>`
  display: flex;
  flex-direction: ${(props) => props.direction ?? "column"};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  gap: ${(props) => props.gap};
  align-items: ${(props) => props.alignItems ?? "center"};
  justify-content: ${(props) => props.justifyContent ?? "center"};
`;

export const SkeletonCardSubContainer = styled.div<{ gap?: string }>`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: ${(props) => props.gap};
`;

export const SkeletonInfoContainer = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
`;
