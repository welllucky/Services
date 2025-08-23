import {
  SkeletonCircle,
  SkeletonContainer,
  SkeletonRectangle,
} from "./Skeleton.styles";
import { SkeletonProps } from "./Skeleton.types";

export const Skeleton = ({
  type,
  height,
  width,
  children,
  lines,
  backgroundColor = "#e0e0e0",
  highlightColor = "#f0f0f0",
  speed = 1.2,
  radius = "50%",
  quantity,
}: SkeletonProps) => {
  switch (type) {
    case "rectangle":
      return (
        <SkeletonRectangle
          height={height}
          width={width}
          backgroundColor={backgroundColor}
          highlightColor={highlightColor}
          speed={speed}
        />
      );

    case "circle":
      return (
        <SkeletonCircle
          radius={radius}
          height={height}
          width={width}
          backgroundColor={backgroundColor}
          highlightColor={highlightColor}
          speed={speed}>
          {children}
        </SkeletonCircle>
      );

    case "avatar":
      return (
        <SkeletonContainer gap="10px">
          <SkeletonCircle
            radius={radius}
            backgroundColor={backgroundColor}
            highlightColor={highlightColor}
            speed={speed}
          />
          <div>
            <SkeletonRectangle
              width="120px"
              height="10px"
              backgroundColor={backgroundColor}
              highlightColor={highlightColor}
              speed={speed}
            />
            <SkeletonRectangle
              width="80px"
              height="10px"
              backgroundColor={backgroundColor}
              highlightColor={highlightColor}
              speed={speed}
            />
          </div>
        </SkeletonContainer>
      );

    case "card":
      return (
        <SkeletonContainer gap="10px">
          <SkeletonRectangle
            width={width || "100%"}
            height={height || "200px"}
            backgroundColor={backgroundColor}
            highlightColor={highlightColor}
            speed={speed}
          />
          <SkeletonRectangle
            width="60%"
            height="20px"
            backgroundColor={backgroundColor}
            highlightColor={highlightColor}
            speed={speed}
          />
          <SkeletonRectangle
            width="80%"
            height="15px"
            backgroundColor={backgroundColor}
            highlightColor={highlightColor}
            speed={speed}
          />
        </SkeletonContainer>
      );

    case "text":
      return (
        <SkeletonContainer gap="5px">
          {Array.from({ length: lines || 1 }).map((_, index) => (
            <SkeletonRectangle
              // eslint-disable-next-line react/no-array-index-key
              key={`text-line-${index}`}
              width={width}
              height={height}
              backgroundColor={backgroundColor}
              highlightColor={highlightColor}
              speed={speed}
            />
          ))}
        </SkeletonContainer>
      );

    case "page":
      return (
        <SkeletonContainer gap="40px">
          {Array.from({ length: quantity || 5 }).map((_, index) => (
            <Skeleton
              type="card"
              // eslint-disable-next-line react/no-array-index-key
              key={`page-card-${index}`}
              backgroundColor={backgroundColor}
              height={height}
              highlightColor={highlightColor}
              speed={speed}
              width={width}
            />
          ))}
        </SkeletonContainer>
      );

    default:
      return (
        <SkeletonRectangle
          height={height}
          width={width}
          backgroundColor={backgroundColor}
          highlightColor={highlightColor}
          speed={speed}
        />
      );
  }
};
