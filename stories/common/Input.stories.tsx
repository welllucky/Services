import { CustomInput } from "@/components";
import { StoryObj, Meta } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Common/Inputs/CustomInput",
  component: CustomInput,
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    placeholder: {
      description: "Texto do placeholder",
      control: "text",
      table: {
        category: "Conteúdo",
      },
    },

    backgroundColor: {
      description: "Cor do input",
      control: "color",
      table: {
        category: "Aparência",
        disable: true,
      },
    },

    style: {
      description: "Estilo do input",
      table: {
        category: "Aparência",
        disable: true,
      },
    },

    $status: {
      description: "Estado do input",
      control: {
        type: "inline-radio",
        options: ["none", "valid", "invalid", "warning"],
      },
      table: {
        category: "Estado",
      },
      name: "status",
    },

    errorText: {
      description: "Texto de erro",
      control: "text",
      table: {
        category: "Conteúdo",
      },
      if: {
        arg: "$status",
        eq: "invalid",
      },
    },

    warnText: {
      description: "Texto de alerta",
      control: "text",
      table: {
        category: "Conteúdo",
      },
      if: {
        arg: "$status",
        eq: "warning",
      },
    },

    labelText: {
      description: "Texto do label",
      control: "text",
      table: {
        category: "Conteúdo",
      },
    },

    height: {
      description: "Altura do input",
      control: "text",
      table: {
        category: "Aparência",
      },
    },

    width: {
      description: "Largura do input",
      control: "text",
      table: {
        category: "Aparência",
      },
    },

    type: {
      description: "Tipo do input",
      control: "select",
      table: {
        category: "Estado",
      },
    },

    leadingButton: {
      description: "Botão à esquerda do input",
      control: { type: "file", accept: ".svg" },
      table: {
        category: "Aparência",
      },
    },

    trailingButton: {
      description: "Botão à direita do input",
      control: { type: "file", accept: ".svg" },
      table: {
        category: "Aparência",
      },
    },

    mode: {
      description: "Modo do input",
      control: {
        type: "select",
        options: ["filled", "outlined"],
      },
      table: {
        category: "Aparência",
      },
    },

    onChange: {
      description: "Função de mudança",
      table: {
        category: "Eventos",
      },
    },

    value: {
      description: "Valor do input",
      table: {
        category: "Valor",
      },
    },
  },
  args: {
    placeholder: "Digite um texto",
    labelText: "Texto",
    $status: "none",
    type: "text",
    mode: "outlined",
    errorText: "Houve um erro, tente novamente!",
  },
} satisfies Meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Filled: StoryObj<typeof CustomInput> = {
  args: {
    placeholder: "Digite um texto",
    labelText: "Texto",
    $status: "none",
    type: "text",
    mode: "filled",
    errorText: "Houve um erro, tente novamente!",
  },
};

export const FilledWithError: StoryObj<typeof CustomInput> = {
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

export const FilledWithValidValue: StoryObj<typeof CustomInput> = {
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

export const OutLined: StoryObj<typeof CustomInput> = {
  args: {
    placeholder: "Digite um texto",
    labelText: "Texto",
    $status: "none",
    type: "text",
    mode: "outlined",
    errorText: "Houve um erro, tente novamente!",
  },
};

export const OutLinedWithError: StoryObj<typeof CustomInput> = {
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

export const OutLinedWithValidValue: StoryObj<typeof CustomInput> = {
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
