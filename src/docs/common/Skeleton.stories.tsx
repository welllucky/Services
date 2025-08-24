import { Meta, StoryObj } from "@storybook/react";

import { Skeleton, SkeletonProps } from "@/components";

export default {
  title: "Common/Skeleton",
  component: Skeleton,
  tags: ["skeleton", "common"],
  argTypes: {
    type: {
      description: "Type of skeleton",
    },
    speed: {
      description: "Speed of the animation",
      control: {
        type: "number",
      },
    },
    backgroundColor: {
      description: "Background color of the skeleton",
      control: {
        type: "color",
      },
    },
    highlightColor: {
      description: "Highlight color of the skeleton",
      control: {
        type: "color",
      },
    },
    width: {
      description: "Width of the skeleton",
      control: {
        type: "text",
      },
      if: {
        arg: "type",
        neq: "circle",
      },
    },
    height: {
      description: "Height of the skeleton",
      control: {
        type: "text",
      },
      if: {
        arg: "type",
        neq: "circle",
      },
    },
    radius: {
      description: "Radius of the skeleton",
      control: {
        type: "text",
      },
      if: {
        arg: "type",
        eq: "circle",
      },
    },
    lines: {
      description: "Number of lines for text skeleton",
      control: {
        type: "number",
      },
      if: {
        arg: "type",
        eq: "text",
      },
    },
  },
} satisfies Meta<SkeletonProps>;

export const Rectangle: StoryObj<SkeletonProps> = {
  args: {
    type: "rectangle",
  },
};

export const Circle: StoryObj<SkeletonProps> = {
  args: {
    type: "circle",
  },
};

export const Avatar: StoryObj<SkeletonProps> = {
  args: {
    type: "avatar",
  },
};

export const Card: StoryObj<SkeletonProps> = {
  args: {
    type: "card",
  },
};

export const Text: StoryObj<SkeletonProps> = {
  args: {
    type: "text",
    lines: 3,
    height: "2em",
  },
};
