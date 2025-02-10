import { SkeletonContainer, SkeletonText } from "../Skeleton.styles";
import { SkeletonTypeProps } from "../Skeleton.types";

export const TextSkeleton = ({
  height = "1em",
  width = "320px",
  backgroundColor,
  highlightColor,
  speed,
  lines = 1,
  margin,
}: Pick<
  SkeletonTypeProps,
  "backgroundColor" | "highlightColor" | "speed" | "height" | "width" | "lines"
> & {
  margin?: string;
}) => {
  return (
    <SkeletonContainer>
      {Array.from({ length: lines }).map(() => (
        <SkeletonText
          key={`skeleton-text-${Math.random()}`}
          height={height}
          width={width}
          backgroundColor={backgroundColor}
          highlightColor={highlightColor}
          speed={speed}
          margin={margin}
        />
      ))}
    </SkeletonContainer>
  );
};
