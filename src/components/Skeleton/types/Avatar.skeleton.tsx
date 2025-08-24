import { UserIcon } from "@/assets";
import { theme } from "@/styles";

import { SkeletonCircle } from "../Skeleton.styles";
import { SkeletonTypeProps } from "../Skeleton.types";

export const AvatarSkeleton = ({
  backgroundColor,
  highlightColor,
  speed,
  radius,
}: Pick<
  SkeletonTypeProps,
  "backgroundColor" | "highlightColor" | "speed" | "radius"
>) => {
  return (
    <SkeletonCircle
      radius={radius}
      backgroundColor={backgroundColor}
      highlightColor={highlightColor}
      speed={speed}>
      <UserIcon
        color={theme.colors.neutral[55]}
        type="duotone"
      />
    </SkeletonCircle>
  );
};
