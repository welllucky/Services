import {
  SkeletonCircle,
  SkeletonContainer,
  SkeletonRectangle,
} from "./Skeleton.styles";
import { SkeletonProps } from "./Skeleton.types";
import {
  AvatarSkeleton,
  CardSkeleton,
  RectangleSkeleton,
  TextSkeleton,
} from "./types";

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
          backgroundColor={backgroundColor}
          highlightColor={highlightColor}
          speed={speed}>
          {children}
        </SkeletonCircle>
      );

    case "avatar":
      return (
        <AvatarSkeleton
          backgroundColor={backgroundColor}
          highlightColor={highlightColor}
          speed={speed}
          radius={radius}
        />
      );

    case "card":
      return (
        <CardSkeleton
          height={height}
          width={width}
          backgroundColor={backgroundColor}
          highlightColor={highlightColor}
          speed={speed}
        />
      );

    case "text":
      return (
        <TextSkeleton
          height={height}
          width={width}
          backgroundColor={backgroundColor}
          highlightColor={highlightColor}
          speed={speed}
          lines={lines}
        />
      );

    default:
      return (
        <RectangleSkeleton
          height={height}
          width={width}
          backgroundColor={backgroundColor}
          highlightColor={highlightColor}
          speed={speed}
        />
      );
  }
};

export { SkeletonContainer };

export type { SkeletonProps } from "./Skeleton.types";
