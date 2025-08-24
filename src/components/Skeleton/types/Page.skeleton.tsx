import { Skeleton } from "../Skeleton.component";
import { SkeletonContainer } from "../Skeleton.styles";
import { SkeletonPageProps } from "../Skeleton.types";

const PageSkeleton = ({
  quantity = 5,
  backgroundColor,
  height,
  highlightColor,
  speed,
  width,
}: SkeletonPageProps) => {
  return (
    <SkeletonContainer gap="40px">
      {Array.from({ length: quantity }).map((_, index) => (
        <Skeleton
          type="card"
          // eslint-disable-next-line react/no-array-index-key
          key={`skeleton-card-${index}`}
          backgroundColor={backgroundColor}
          height={height}
          highlightColor={highlightColor}
          speed={speed}
          width={width}
        />
      ))}
    </SkeletonContainer>
  );
};

export { PageSkeleton };
