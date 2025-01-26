import { EmailIcon } from "@/assets";
import { RoundedButton, RoundedButtonProps } from "@/components";
import { theme } from "@/styles";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Common/Buttons/RoundedButton",
  component: RoundedButton,
  tags: ["button", "icon"],
  argTypes: {
    action: {
      description: "Function executed on button click.",
      action: "clicked",
      table: {
        category: "Behavior",
      },
    },
    icon: {
      description: "The icon displayed inside the button.",
      control: "object",
      table: {
        category: "Content",
      },
    },
    color: {
      description: "The background color of the button.",
      control: "color",
      table: {
        category: "Appearance",
      },
    },
    $isClicked: {
      description: "Indicates if the button is in a clicked state.",
      control: "boolean",
      table: {
        category: "State",
      },
    },
    $hasShadow: {
      description: "Determines if the button has a shadow effect.",
      control: "boolean",
      table: {
        category: "Appearance",
      },
    },
  },
  args: {
    icon: <EmailIcon size="24" />,
    color: theme.colors.neutral["75"],
  },
} satisfies Meta<RoundedButtonProps>;

export const Default: StoryObj<RoundedButtonProps> = {
  args: {
    $hasShadow: false,
    $isClicked: false,
  },
};

export const WithShadow: StoryObj<RoundedButtonProps> = {
  args: {
    $hasShadow: true,
  },
};

export const ClickedState: StoryObj<RoundedButtonProps> = {
  args: {
    $isClicked: true,
  },
};

export const LargeIcon: StoryObj<RoundedButtonProps> = {
  args: {
    $hasShadow: true,
    icon: <EmailIcon size="48" />,
  },
};
