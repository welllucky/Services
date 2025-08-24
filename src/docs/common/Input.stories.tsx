import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { ClearIcon, EmailIcon } from "@/assets";
import { CustomInput } from "@/components";

export default {
  title: "Common/Inputs/CustomInput",
  component: CustomInput,
  tags: ["input", "form"],
  argTypes: {
    labelText: {
      description: "Label text displayed above the input",
      control: "text",
      table: {
        category: "Content",
      },
    },
    placeholder: {
      description: "Placeholder text displayed inside the input",
      control: "text",
      table: {
        category: "Content",
      },
    },
    value: {
      description: "The value of the input",
      control: "text",
      table: {
        category: "Behavior",
      },
    },
    trailingButton: {
      description: "Element displayed on the right side of the input",
      control: "object",
      table: {
        category: "Appearance",
      },
    },
    leadingButton: {
      description: "Element displayed on the left side of the input",
      control: "object",
      table: {
        category: "Appearance",
      },
    },
    type: {
      description: "Type of the input",
      control: {
        type: "select",
        options: [
          "text",
          "password",
          "email",
          "number",
          "tel",
          "search",
          "url",
          "date",
        ],
      },
      table: {
        category: "Behavior",
      },
    },
    mode: {
      description: "Display mode of the input",
      control: {
        type: "inline-radio",
        options: ["filled", "outlined"],
      },
      table: {
        category: "Appearance",
      },
    },
    $status: {
      description: "Validation status of the input",
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
    width: "355px",
    height: "58px",
    placeholder: "Digite um texto",
    labelText: "Texto",
    $status: "none",
    type: "text",
    mode: "outlined",
    errorText: "Houve um erro, tente novamente!",
    register: fn(),
  },
} satisfies Meta;

export const Complete: StoryObj = {
  args: {
    placeholder: "Digite um texto",
    labelText: "Texto",
    $status: "none",
    type: "text",
    mode: "outlined",
    errorText: "Houve um erro, tente novamente!",
    trailingButton: (
      <ClearIcon
        color="#49454F"
        size={32}
      />
    ),
    leadingButton: (
      <EmailIcon
        color="#49454F"
        size={32}
      />
    ),
  },
};

export const Filled: StoryObj = {
  args: {
    placeholder: "Digite um texto",
    labelText: "Texto",
    $status: "none",
    type: "text",
    mode: "filled",
    errorText: "Houve um erro, tente novamente!",
  },
};

export const FilledWithError: StoryObj = {
  args: {
    placeholder: "Digite um texto",
    labelText: "Texto",
    $status: "invalid",
    value: "Texto inválido",
    type: "text",
    mode: "filled",
    errorText: "Houve um erro, tente novamente!",
  },
  name: "Input Filled com erro",
};

export const FilledWithValidValue: StoryObj = {
  args: {
    placeholder: "Digite um texto",
    labelText: "Texto",
    $status: "valid",
    value: "Texto válido",
    type: "text",
    mode: "filled",
    errorText: "Houve um erro, tente novamente!",
  },
  name: "Input Filled com valor válido",
};

export const OutLined: StoryObj = {
  args: {
    placeholder: "Digite um texto",
    labelText: "Texto",
    $status: "none",
    type: "text",
    mode: "outlined",
    errorText: "Houve um erro, tente novamente!",
  },
};

export const OutLinedWithError: StoryObj = {
  args: {
    placeholder: "Digite um texto",
    labelText: "Texto",
    value: "Texto inválido",
    $status: "invalid",
    type: "text",
    mode: "outlined",
    errorText: "Houve um erro, tente novamente!",
  },
  name: "Input Outlined com erro",
};

export const OutLinedWithValidValue: StoryObj = {
  args: {
    placeholder: "Digite um texto",
    labelText: "Texto",
    value: "Texto válido",
    $status: "valid",
    type: "text",
    mode: "outlined",
    errorText: "Houve um erro, tente novamente!",
  },
  name: "Input Outlined com valor válido",
};
