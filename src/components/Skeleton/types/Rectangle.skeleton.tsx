import { SkeletonRectangle } from "../Skeleton.styles";
import { SkeletonTypeProps } from "../Skeleton.types";

export const RectangleSkeleton = ({
  height = "80px",
  width = "320px",
  backgroundColor,
  highlightColor,
  speed,
}: Pick<
  SkeletonTypeProps,
  "backgroundColor" | "highlightColor" | "speed" | "width" | "height"
>) => {
  return (
    <SkeletonRectangle
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      highlightColor={highlightColor}
      speed={speed}
    />
  );
};
