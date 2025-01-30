import { CustomTextArea, TextAreaProps } from "@/components";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Common/Inputs/CustomTextArea",
  component: CustomTextArea,
  tags: ["textarea", "form", "storybook"],
  argTypes: {
    labelText: {
      description: "Label text displayed above the text area.",
      control: "text",
      table: {
        category: "Content",
      },
    },
    placeholder: {
      description: "Placeholder text displayed inside the text area.",
      control: "text",
      table: {
        category: "Content",
      },
    },
    value: {
      description: "The current value of the text area.",
      control: "text",
      table: {
        category: "State",
      },
    },
    isRequired: {
      description: "Marks the text area as required.",
      control: "boolean",
      table: {
        category: "Behavior",
      },
    },
    $status: {
      description: "Validation status of the text area.",
      control: {
        type: "inline-radio",
        options: ["none", "invalid", "warning"],
      },
      table: {
        category: "State",
      },
    },
    errorText: {
      description: "Error message displayed when status is invalid.",
      control: "text",
      table: {
        category: "Content",
      },
    },
    warnText: {
      description: "Warning message displayed when status is warning.",
      control: "text",
      table: {
        category: "Content",
      },
    },
    width: {
      description: "Width of the text area container.",
      control: "text",
      table: {
        category: "Appearance",
      },
    },
    height: {
      description: "Height of the text area.",
      control: "text",
      table: {
        category: "Appearance",
      },
    },
  },
} satisfies Meta<TextAreaProps>;

export const Default: StoryObj<TextAreaProps> = {
  args: {
    labelText: "Default Text Area",
    placeholder: "Type your text here...",
    $status: "none",
    width: "100%",
    height: "160px",
  },
};

export const WithError: StoryObj<TextAreaProps> = {
  args: {
    labelText: "Text Area with Error",
    placeholder: "Type your text here...",
    $status: "invalid",
    errorText: "This field is required.",
  },
};

export const WithWarning: StoryObj<TextAreaProps> = {
  args: {
    labelText: "Text Area with Warning",
    placeholder: "Type your text here...",
    $status: "warning",
    warnText: "Please check your input.",
  },
};

export const WithSuccess: StoryObj<TextAreaProps> = {
  args: {
    labelText: "Text Area with Success",
    placeholder: "Type your text here...",
    $status: "valid",
  },
};

export const Required: StoryObj<TextAreaProps> = {
  args: {
    labelText: "Required Text Area",
    placeholder: "Type your text here...",
    isRequired: true,
  },
};
