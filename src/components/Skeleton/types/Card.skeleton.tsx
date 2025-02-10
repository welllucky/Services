import {
  SkeletonCardSubContainer,
  SkeletonContainer,
  SkeletonInfoContainer,
} from "../Skeleton.styles";
import { SkeletonTypeProps } from "../Skeleton.types";
import { TextSkeleton } from "./Text.skeleton";

type Textprops = {
  backgroundColor?: string;
  highlightColor?: string;
  speed?: number;
};

const Resume = ({ backgroundColor, highlightColor, speed }: Textprops) => {
  return (
    <TextSkeleton
      height="0.8em"
      width="8em"
      backgroundColor={backgroundColor}
      highlightColor={highlightColor}
      speed={speed}
    />
  );
};

const Description = ({ backgroundColor, highlightColor, speed }: Textprops) => {
  return (
    <TextSkeleton
      height="1em"
      width="12em"
      lines={2}
      backgroundColor={backgroundColor}
      highlightColor={highlightColor}
      speed={speed}
    />
  );
};

const Info = ({ backgroundColor, highlightColor, speed }: Textprops) => {
  return (
    <SkeletonInfoContainer>
      <TextSkeleton
        height="0.4em"
        width="2em"
        margin="0.2em"
        backgroundColor={backgroundColor}
        highlightColor={highlightColor}
        speed={speed}
      />
      <TextSkeleton
        height="0.8em"
        width="4em"
        margin="0.2em"
        backgroundColor={backgroundColor}
        highlightColor={highlightColor}
        speed={speed}
      />
    </SkeletonInfoContainer>
  );
};

export const CardSkeleton = ({
  backgroundColor,
  highlightColor,
  speed,
  height = "85px",
  width = "314px",
}: Pick<
  SkeletonTypeProps,
  "backgroundColor" | "highlightColor" | "speed" | "width" | "height"
>) => {
  return (
    <SkeletonContainer
      width={width}
      height={height}
      direction="row"
      gap="60px">
      <SkeletonCardSubContainer>
        <Resume
          backgroundColor={backgroundColor}
          highlightColor={highlightColor}
          speed={speed}
        />
        <Description
          backgroundColor={backgroundColor}
          highlightColor={highlightColor}
          speed={speed}
        />
      </SkeletonCardSubContainer>
      <SkeletonCardSubContainer gap="16px">
        <Info
          backgroundColor={backgroundColor}
          highlightColor={highlightColor}
          speed={speed}
        />
        <Info
          backgroundColor={backgroundColor}
          highlightColor={highlightColor}
          speed={speed}
        />
      </SkeletonCardSubContainer>
    </SkeletonContainer>
  );
};
