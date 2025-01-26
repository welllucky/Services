import { HomeIcon } from "@/assets";
import { IconButton } from "@/components";
import { theme } from "@/styles";
import { IconButtonProps } from "@/types";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

export default {
  title: "Common/Buttons/IconButton",
  component: IconButton,
  tags: ["button", "icon"],
  args: {
    onClick: fn(),
    onHover: fn(),
    icon: (
      <HomeIcon
        height={24}
        width={24}
        color={theme.colors.primary.default}
      />
    ),
    width: "24",
    height: "24",
    color: theme.colors.primary.default,
  },
  argTypes: {
    icon: {
      description: "The icon displayed inside the button.",
      control: "object",
      table: {
        category: "Content",
      },
    },
    onClick: {
      description: "Function executed on button click.",
      action: "clicked",
      table: {
        category: "Behavior",
      },
    },
    color: {
      description: "The color of the icon.",
      control: "color",
      table: {
        category: "Appearance",
      },
    },
    width: {
      description: "The width of the icon.",
      control: "text",
      table: {
        category: "Appearance",
      },
    },
    height: {
      description: "The height of the icon.",
      control: "text",
      table: {
        category: "Appearance",
      },
    },
  },
} satisfies Meta<IconButtonProps>;

export const Default: StoryObj<IconButtonProps> = {};
