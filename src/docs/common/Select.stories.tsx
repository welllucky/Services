import { Meta, StoryObj } from "@storybook/react";

import { CustomSelect, SelectProps } from "@/components";

export default {
  title: "Common/Inputs/CustomSelect",
  component: CustomSelect,
  tags: ["select", "form", "storybook"],
  argTypes: {
    labelText: {
      description: "Label text displayed above the select",
      control: "text",
      table: {
        category: "Content",
      },
    },
    placeholder: {
      description: "Placeholder text displayed as the first option",
      control: "text",
      table: {
        category: "Content",
      },
    },
    options: {
      description: "Array of options to populate the select dropdown",
      control: "object",
      table: {
        category: "Data",
      },
    },
    value: {
      description: "The currently selected value",
      control: "text",
      table: {
        category: "State",
      },
    },
    multiple: {
      description: "Allows multiple selections",
      control: "boolean",
      table: {
        category: "Behavior",
      },
    },
    isDisabled: {
      description: "Disables the select",
      control: "boolean",
      table: {
        category: "Behavior",
      },
    },
    $status: {
      description: "Validation status of the select",
      control: {
        type: "inline-radio",
        options: ["none", "invalid", "warning"],
      },
      table: {
        category: "State",
      },
    },
    errorText: {
      description: "Error message displayed when status is invalid",
      control: "text",
      table: {
        category: "Content",
      },
    },
    warnText: {
      description: "Warning message displayed when status is warning",
      control: "text",
      table: {
        category: "Content",
      },
    },
  },
  args: {
    width: "320px",
  },
} satisfies Meta<SelectProps>;

export const Default: StoryObj<SelectProps> = {
  args: {
    labelText: "Default Select",
    placeholder: "Select an option",
    options: [
      { key: "1", value: "option1", text: "Option 1" },
      { key: "2", value: "option2", text: "Option 2" },
    ],
    $status: "none",
  },
};

export const WithError: StoryObj<SelectProps> = {
  args: {
    labelText: "Select with Error",
    placeholder: "Select an option",
    options: [
      { key: "1", value: "option1", text: "Option 1" },
      { key: "2", value: "option2", text: "Option 2" },
    ],
    $status: "invalid",
    errorText: "This field is required.",
    isDisabled: false,
  },
};

export const WithWarning: StoryObj<SelectProps> = {
  args: {
    labelText: "Select with Warning",
    placeholder: "Select an option",
    options: [
      { key: "1", value: "option1", text: "Option 1" },
      { key: "2", value: "option2", text: "Option 2" },
    ],
    $status: "warning",
    warnText: "Please check this field.",
  },
};

export const WithSuccess: StoryObj<SelectProps> = {
  args: {
    labelText: "Select with Success",
    placeholder: "Select an option",
    options: [
      { key: "1", value: "option1", text: "Option 1" },
      { key: "2", value: "option2", text: "Option 2" },
    ],
    $status: "valid",
  },
};

export const Disabled: StoryObj<SelectProps> = {
  args: {
    labelText: "Disabled Select",
    placeholder: "Select an option",
    options: [
      { key: "1", value: "option1", text: "Option 1" },
      { key: "2", value: "option2", text: "Option 2" },
    ],
    isDisabled: true,
  },
};

// export const MultipleSelection: StoryObj<SelectProps> = {
//   args: {
//     labelText: "Multiple Select",
//     placeholder: "Select options",
//     options: [
//       { key: "1", value: "option1", text: "Option 1" },
//       { key: "2", value: "option2", text: "Option 2" },
//       { key: "3", value: "option3", text: "Option 3" },
//     ],
//     multiple: true,
//   },
// };
